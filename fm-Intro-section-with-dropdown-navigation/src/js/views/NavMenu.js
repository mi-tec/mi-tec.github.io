import { CLASS_NAMES, EVENTS, SELECTORS } from "../variables";
function NavMenu() {
	const body = document.querySelector(SELECTORS.BODY);
	const hamburgermenudiv = document.querySelector(
		`.${CLASS_NAMES.HEADER_WRAPPER_HAMBURGER}`
	);
	const menuwrapper = document.querySelector(
		`.${CLASS_NAMES.HEADER_WRAPPER_MENU}`
	);

	const submenuslink = document.querySelectorAll(
		`.${CLASS_NAMES.HAS_CHILD_LINK}`
	);

	hamburgerMenuOpen();
	mobileSubMenuOpen();

	function hamburgerMenuOpen() {
		hamburgermenudiv.addEventListener(EVENTS.CLICK, (event) => {
			hamburgermenudiv.classList.toggle(CLASS_NAMES.OPEN);
			menuwrapper.classList.toggle(CLASS_NAMES.MENU_ACTIVE);
			body.classList.toggle(CLASS_NAMES.BODY_MENU);
		});
	}

	function mobileSubMenuOpen() {
		submenuslink.forEach((ChildItems) => {
			ChildItems.addEventListener(EVENTS.CLICK, (event) => {
				event.preventDefault();
				ChildItems.parentNode.classList.toggle(
					CLASS_NAMES.HAS_CHILD_ACTIVE
				);
			});
		});
	}
}

export default NavMenu;
