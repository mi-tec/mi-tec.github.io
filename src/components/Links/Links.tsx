import { linkDetails } from "@/content/links"
import SubHeading from "../ui/SubHeading"
import { Separator } from "../ui/separator"

function Links() {
	return (
		<div className="space-y-5">
			<SubHeading heading="LINKS" />
			<div className="flex flex-col md:flex-row gap-10">
				{
					linkDetails.map((item, key) => {
						return (<div key={key} className="flex flex-row gap-5"><item.icon className="size-6" /><a href={item.link} target="_blank">{item.label}</a></div>)
					})
				}
			</div>
			<Separator />
		</div>
	)
}

export default Links
