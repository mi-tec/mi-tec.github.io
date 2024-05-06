import { contactDetails } from "@/content/contact"
import SubHeading from "../ui/SubHeading"
import { Separator } from "../ui/separator"

function Contact() {
	return (
		<div className="space-y-5">
			<SubHeading heading="CONTACT" />
			<div className="flex flex-col md:flex-row gap-10">
				{
					contactDetails.map((item, key) => {
						return (<div key={key} className="flex flex-row gap-5"><item.icon className="size-6" /><a href={item.link}>{item.label}</a></div>)
					})
				}
			</div>
			<Separator />
		</div>
	)
}

export default Contact
