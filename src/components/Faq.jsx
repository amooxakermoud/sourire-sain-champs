import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  const faqData = [
    {
      question: "Quelle est l'adresse de Dr Hauda MARZAK ?",
      answer: "L'adresse de Dr Hauda MARZAK est 2 Cours du Luzard, 77420 Champs-sur-Marne"
    },
    {
      question: "Quels sont les horaires d'ouverture de Dr Hauda MARZAK ?",
      answer: (
        <div className="space-y-2">
          <p className="font-medium text-gray-900 text-sm sm:text-base">Dr Hauda MARZAK est ouvert :</p>
          <ul className="space-y-1 ml-2 sm:ml-4 text-sm sm:text-base">
            <li>• <strong>Lundi :</strong> 09h00 - 13h00, 14h00 - 19h00</li>
            <li>• <strong>Mardi :</strong> 09h00 - 13h00, 14h00 - 19h00</li>
            <li>• <strong>Mercredi :</strong> Fermé</li>
            <li>• <strong>Jeudi :</strong> 09h00 - 13h00, 14h00 - 19h00</li>
            <li>• <strong>Vendredi :</strong> 09h00 - 13h00, 14h00 - 19h00</li>
            <li>• <strong>Weekend :</strong> Fermé</li>
          </ul>
        </div>
      )
    },
    {
      question: "Quels sont les moyens de paiement acceptés par Dr Hauda MARZAK ?",
      answer: "Dr Hauda MARZAK accepte les moyens de paiements suivants : chèques, espèces et carte bancaire. Pour les traitements importants, des solutions de paiement échelonné peuvent être étudiées."
    },
    {
      question: "Est-ce que Dr Hauda MARZAK accepte la carte Vitale ?",
      answer: "Oui, Dr Hauda MARZAK accepte la carte Vitale. Les soins sont remboursés par la Sécurité Sociale selon les tarifs conventionnés, et nous acceptons la plupart des mutuelles en tiers payant."
    },
    {
      question: "Quelles sont les langues parlées par Dr Hauda MARZAK ?",
      answer: "Dr Hauda MARZAK parle français. Le cabinet peut également accueillir des patients parlant d'autres langues selon les besoins."
    },
    {
      question: "Est-ce que Dr Hauda MARZAK accepte des nouveaux patients ?",
      answer: "Oui, Dr Hauda MARZAK accepte des nouveaux patients. N'hésitez pas à prendre rendez-vous en appelant le 01-64-68-59-59 ou en envoyant un email à cabinet.drmk@gmail.com."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
            <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mb-2 sm:mb-0 sm:mr-3" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
              Questions Fréquentes
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4 ">
            Retrouvez les réponses aux questions les plus courantes concernant 
            notre cabinet dentaire à Champs-sur-Marne
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-left hover:bg-gray-50 transition-colors">
                  <span className="text-base sm:text-lg font-semibold text-gray-900 pr-2 sm:pr-4 leading-tight">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-3 sm:pb-4">
                  <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {typeof faq.answer === 'string' ? faq.answer : faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

   
      </div>
    </section>
  );
};