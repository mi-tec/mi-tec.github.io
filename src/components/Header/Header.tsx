import profilePicture from '@/assets/migara.jpeg'
import SubHeading from '../ui/SubHeading'
import { Separator } from '@/components/ui/separator'

function Header() {
	return (
		<header className='flex justify-center items-center flex-col space-y-5'>
			<div className='flex justify-center items-center flex-col space-y-5'>
				<img src={profilePicture} className='w-1/2 rounded-full' />
			</div>
			<div className='flex justify-center items-center flex-col space-y-5'>
				<h1 className='text-4xl text-center'>MIGARA KARUNARATHNE</h1>
				<h2 className='text-3xl text-center'>Senior Software Engineer</h2>
				<Separator />
				<div className='flex flex-col space-y-2'>
					<SubHeading heading='ABOUT' />
					<p>With 8 years of dedicated experience in the Software Industry, I have honed my skills across various technologies and domains. My journey started as a Wordpress developer, where I spent 5 years crafting dynamic and user-friendly web solutions.</p>

					<p>Then I transitioned to ReactJS and NodeJS, embracing the world of modern web development. This shift allowed me to architect robust, scalable applications with enhanced performance and seamless user experiences.</p>

					<p>Currently serving as a Senior Software Engineer (SSE), I combine technical expertise with strategic thinking to deliver innovative solutions that meet and exceed client expectations. My portfolio showcases a diverse range of projects, each demonstrating my commitment to quality, efficiency, and continuous learning.</p>
				</div>
				<Separator />
			</div>
		</header>
	)
}

export default Header
