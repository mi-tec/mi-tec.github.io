import { SubHeadingInterFace } from "@/lib/interfaces"

function SubHeading({ heading }: SubHeadingInterFace) {
	return (
		<div className='text-2xl underline decoration-2 decoration-sky-500'>{heading}</div>
	)
}

export default SubHeading
