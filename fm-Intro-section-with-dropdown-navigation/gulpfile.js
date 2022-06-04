// Initialize Module
const { src, dest, watch, series, parallel } = require("gulp");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const gulppostcss = require("gulp-postcss");
const gulpreplace = require("gulp-replace");
const gulpsass = require("gulp-sass")(require("sass"));
const gulpsourcemaps = require("gulp-sourcemaps");
const gulpuglify = require("gulp-uglify");
const gulpconocat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const babel = require("gulp-babel");
const plumber = require("gulp-plumber");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config.js");

// File path variables
const files = {
	scssPath: "src/scss/**/*.scss",
	jsPath: "src/js/**/*.js",
	jsFiles: "src/js/App.js",
};

// Sass Tasks
function scssTask() {
	return src(files.scssPath)
		.pipe(gulpsourcemaps.init())
		.pipe(gulpsass())
		.pipe(gulppostcss([autoprefixer(), cssnano()]))
		.pipe(gulpsourcemaps.write("."))
		.pipe(dest("."));
}

// JS Tasks
function jsTask() {
	return src(files.jsFiles)
		.pipe(webpackStream(webpackConfig), webpack)
		.pipe(dest("js"));
}

let version = new Date().getTime();

// cachebusting task
function cacheBustTask() {
	return src(["index.html"])
		.pipe(gulpreplace(/vid=\d+/g, "vid=" + version))
		.pipe(dest("."));
}

function browserSyncserve(cb) {
	browserSync.init({
		server: {
			baseDir: ".",
		},
	});
	cb();
}

function browserSyncreload(cb) {
	browserSync.reload();
	cb();
}

// Watch task
function watchTask() {
	watch("*.html", browserSyncreload);
	watch(
		[files.scssPath, files.jsPath],
		series(scssTask, jsTask, browserSyncreload)
	);
}

// Default task
exports.default = series(
	parallel(scssTask, jsTask),
	cacheBustTask,
	browserSyncserve,
	watchTask
);
