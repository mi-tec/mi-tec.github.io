import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import {
	Card,
	CardContent,
} from "@/components/ui/card"

const expData = [
	{
		"heading": "XGEN Group (PVT) Ltd",
		"desctiprion": "Senior Software Engineer (2023 JAN - 2023 AUG) / Senior Software Engineer (2023 AUG - Present)",
		"children": [
			"<strong>Contributed to backend development</strong> for an ongoing <strong>Loan Origination System (LOS)</strong> project using <strong>Node.js</strong>, integrating with an established team to enhance APIs and optimize business logic for improved system scalability and performance.",
			"<strong>Developed and enhanced dynamic user interfaces</strong> for web applications using <strong>React.js</strong>, collaborating with the existing team to build responsive, component-based frontends that aligned with project requirements.",
			"<strong>Managed and optimized database operations</strong> with Oracle SQL, refining complex queries and stored procedures to support efficient data processing within the LOS.",
			"<strong>Implemented and maintained caching mechanisms</strong> using <strongRedis</strong>, improving application performance and reducing database load by integrating with the existing caching infrastructure",
			"<strong>Drove advanced technical development initiatives</strong>, collaborating with the team to adopt modern development practices, enhance system performance, and maintain high-quality, scalable codebases."
		]
	},
	{
		"heading": "DxDy (SmallAxe (Pvt) Ltd ",
		"desctiprion": "Software Engineer | (2022 JAN - 2023 JAN) | (WordPress Development)",
		"children": [
			"<strong>Developed and delivered two full-stack WordPress projects</strong>, utilizing the <strong>Twig template system</strong> to create modular, maintainable templates for dynamic content rendering.",
			"<strong>Designed and implemented responsive front-end interfaces</strong>, ensuring cross-browser compatibility and a seamless user experience across devices.",
			"<strong>Built and customized back-end functionalities</strong> in <strong>WordPress</strong>, including custom post types, plugins, and theme development, to meet project-specific requirements.",
			"<strong>Collaborated with cross-functional teams</strong> to gather requirements, translate them into technical solutions, and ensure timely delivery of high-quality web applications."
		]
	},
	{
		"heading": "EmarketingEYE",
		"desctiprion": "Senior Web Developer | (2016 MAY - 2022 JAN) | (WordPress Development)",
		"children": [
			"<strong>Progressed from Trainee Web Developer to Web Developer, and subsequently to Senior Web Developer over five years</strong>, earning promotions through demonstrated technical expertise, strong work ethic, and consistent delivery of high-quality solutions.",
			"<strong>Developed approximately 20 WordPress websites</strong>, creating custom-built themes from scratch to meet client-specific requirements, ensuring unique, high-performance, and SEO-optimized web solutions.",
			"<strong>Engineered back-end functionalities</strong> for nearly <strong>20 projects</strong>, implementing custom post types, taxonomies, and APIs to support dynamic content and complex business logic.",
			"<strong>Designed and developed custom WordPress plugins</strong>, enhancing website functionality and enabling tailored features to meet diverse client needs.",
			"<strong>Led and mentored a team of developers</strong> during <strong>senior years</strong>, overseeing project execution, conducting code reviews, and fostering best practices to ensure timely delivery and maintainable codebases."
		]
	}
]

function Experience() {
	return (
		<div className='mt-5'>
			<h2 className='text-2xl underline'>Experience</h2>
			<div className="my-6">
				<Card>
					<CardContent>
						<Accordion type="single" collapsible>
							{
								expData.map((item, index) => {
									let i = index + 1;
									return <>
										<AccordionItem value={`item-${i}`}>
											<AccordionTrigger className="p-2">{item?.heading}</AccordionTrigger>
											<AccordionContent className="p-3">
												<div>{item?.desctiprion}</div>
												<div className="p-3">
													<ul className="my-6 ml-6 list-disc [&>li]:mt-2">
														{
															item?.children.map((item, index) => {
																return <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
															})
														}
													</ul>
												</div>
											</AccordionContent>
										</AccordionItem>
									</>
								})
							}
						</Accordion>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default Experience
