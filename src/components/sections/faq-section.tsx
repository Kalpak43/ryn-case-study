import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Section from "../ui/section";

const faqData = [
  {
    question: "What is your design process?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    question: "What tools and software do you use for UX design?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    question: "How do you measure the success of your UX designs?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
];

function FAQ() {
  return (
    <Section>
      <h2 className="h2-bold">
        <img
          src="/assets/star.svg"
          alt="star"
          className="w-8 h-8 inline align-middle mb-1"
        />
        <span> Frequently asked questions</span>
      </h2>

      <div>
        <Accordion type="single" collapsible>
          {faqData.map((item, idx) => (
            <AccordionItem value={`item-${idx + 1}`} key={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

export default FAQ;
