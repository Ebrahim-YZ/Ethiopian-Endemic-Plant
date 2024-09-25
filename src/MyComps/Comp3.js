import React, { useState } from "react";
import "./Comp3.css";
import Header from "./Header";
import FAQ from "./FAQ";

const Endemic = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "Hagenia Abyssinica",
            answer:
                "Hagenia is a monotypic genus of flowering plant with the sole species Hagenia abyssinica, native to the high-elevation Afromontane regions of central and eastern Africa.",
            open: false
        },
        {
            question: "Lobelia Rhynchopetalum",
            answer: "Lobelia rhynchopetalum, the giant lobelia, is a plant endemic to Ethiopia. Its habitat is the Afroalpine climate of the Semien Mountains and Bale Mountains National Park. Recent study show that it is under a threat of climate change.",
            open: false
        },
        {
            question:
                "Rosa Abyssinica ",
            answer: "Rosa abyssinica is the only rose native to Africa. Europeans first learned of the rose in the writings of 19th-century Scottish botanist Robert Brown. Rosa abyssinica is included in the genus Rosa, and the family Rosaceae. No subspecies are listed in the Catalogue of Life. ",
            open: false
        },
        {
            question: "Ensete Ventricosum",
            answer:
                "Ensete ventricosum, commonly known as enset or ensete, Ethiopian banana, Abyssinian banana, pseudo-banana, false banana and wild banana, is an herbaceous species of flowering plant in the banana family Musaceae.",
            open: false
        },
        {
            question: "Lobelias",
            answer: "Lobelia is a genus of flowering plants comprising 415 species, with a subcosmopolitan distribution primarily in tropical to warm temperate regions of the world, a few species extending into cooler temperate regions. They are known generally as lobelias.",
            open: false
        },
        {
            question:
                "Teff",
            answer: "Teff, also known as Eragrostis tef, Williams lovegrass, or annual bunch grass, is an annual grass, a species of lovegrass native to the Horn of Africa, notably to both Eritrea and Ethiopia. It is cultivated for its edible seeds, also known as teff. Teff was one of the earliest plants domesticated. ",
            open: false
        },
        {
            question:
                "Coffea Arabica",
            answer: "Coffea arabica, also known as the Arabic coffee, is a species of flowering plant in the coffee and madder family Rubiaceae. It is believed to be the first species of coffee to have been cultivated and is currently the dominant cultivar, representing about 60% of global production. ",
            open: false
        },
        {
            question: "Brucea Antidysenterica",
            answer:
                "Brucea antidysenterica, Komenyo, Qomanyoo, Simaroubaceae, Native, West Shewa and East Wollega, Firewood, Timber for construction, Medicine",
            open: false
        },
        {
            question: "Acacia ",
            answer: "Acacia-Commiphora woodland is a complex vegetation type and the most diverse forest type. It forms a complete set of stratum and has unique species.",
            open: false
        },
        {
            question:
                "Lippia ",
            answer: "Lippia adoensis and Rhus glutinosa are found on the IUCN Red List. Endemic species in the study area were few in numbers",
            open: false
        }
        ,
        {
            question:
                "African Boxwood ",
            answer: "Myrsine africana, also called Cape myrtle, African boxwood or thakisa, is a species of shrub in the family Primulaceae. It is indigenous to Southern and Eastern Africa, the Azores, the Arabian Peninsula, South Asia and East Asia. ",
            open: false
        },
        {
            question: "Kalanchoe Petitiana",
            answer:
                "The native range of this species is Eritrea to Ethiopia. It is a succulent subshrub and grows primarily in the subtropical biome.",
            open: false
        },
        {
            question:
                "Jasminum Abyssinicum ",
            answer: "Jasminium abyssinicum is a species of jasmine, in the family Oleaceae. Jasminum abyssinicum is a strong to slender woody climber in high-altitude montane forests, climbing into the forest canopy which stems that can be robust up to 13 cm in diameter.",
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