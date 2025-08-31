import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { Card, CardContent } from "@/components/ui/card";

const portfolios = [
  {
    heading: "Wordpress",
    children: [
      '<a href="https://www.epicsrilankaholidays.com/" target="_blank">Epic Sri Lanka Holidays</a>',
      '<a href="https://www.boutiquecollectionbyamaya.com/" target="_blank">Boutique Collection by Amaya</a>',
      '<a href="https://energyalliance.org/" target="_blank">Global Energy Alliances</a>',
      '<a href="https://whatweowethefuture.com/" target="_blank">What We Owe The Future</a>',
      '<a href="https://giving.thechicagoschool.edu/" target="_blank">TCSPP Giving</a>',
    ],
  },
];

function Portlofios() {
  return (
    <div className="mt-5">
      <h2 className="text-2xl underline">Portlofios</h2>
      <div className="my-6">
        <Card>
          <CardContent>
            <Accordion type="single" collapsible>
              {portfolios.map((item, index) => {
                const i = index + 1;
                return (
                  <>
                    <AccordionItem value={`item-${i}`}>
                      <AccordionTrigger className="p-2">{item?.heading}</AccordionTrigger>
                      <AccordionContent className="p-3">
                        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                          {item?.children.map((item, index) => {
                            return <li key={index} dangerouslySetInnerHTML={{ __html: item }} className="underline" />;
                          })}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </>
                );
              })}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Portlofios;
