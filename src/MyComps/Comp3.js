import React, { useState } from "react";
import "./Comp3.css";
import Header from "./Header";
import FAQ from "./FAQ";

const Endemic = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "Ethiopian Rose (Rosa Abyssinica)",
            answer:
                "A species of wild rose found in the Ethiopian highlands.",
            open: false
        },
        {
            question: "Abyssinian Banana (Ensete ventricosum) ",
            answer: "Also known as 'False banana'  it is a staple food crop in some parts of Ethiopia.",
            open: false
        },
        {
            question:
                "Ethiopian Heather (Erica arborea) ",
            answer: "A flowering plant that is native to the Ethiopian highlands.",
            open: false
        },
        {
            question: "Ethiopian Red Banana (Ensete ventricosum 'Maurelii')",
            answer:
                "A variety of the Abyssinian Banana with red or maroon-colored leaves.",
            open: false
        },
        {
            question: "Simien Foxglove (Digitalis pachyphylla)",
            answer: "A rare and endangered plant species found in the Simien Mountains.",
            open: false
        },
        {
            question:
                "Ethiopian Apple (Hagenia abyssinica)",
            answer: "A tree species native to the highlands of Ethiopia, also known as African redwood.",
            open: false
        },
        {
            question:
                "Ethiopian Lily (Lilium carniolicum) ",
            answer: "A striking lily species found in the Ethiopian highlands.",
            open: false
        },
        {
            question: "Ethiopian Euphorbia (Euphorbia abyssinica)",
            answer:
                "A succulent plant that is native to Ethiopia.",
            open: false
        },
        {
            question: "Ethiopian Wild Coffee (Coffea arabica)",
            answer: "The coffee plant originated in Ethiopia and is known for its economic and cultural significance.",
            open: false
        },
        {
            question:
                "Simien Mountains Wild Cabbage (Brassica carinata)",
            answer: "A wild cabbage species endemic to the Simien Mountains.",
            open: false
        }
    ]);
    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    return (
        <>
         <div className="App1">
      <Header />
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
        </>
    );
};
export default Endemic;