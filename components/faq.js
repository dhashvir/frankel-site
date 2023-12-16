import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-blue-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "Where is your electrician service based?",
    answer:
      "Our electrician service is based in Australia, Victoria. We proudly serve Melbourne and the surrounding areas.",
  },

  {
    question: "Do you provide electrical services outside of Melbourne?",
    answer:
      "While our primary location is in Melbourne, we extend our services to neighboring areas and are open to discussing projects outside our immediate vicinity. Contact us for more details.",
  },

  {
    question:
      "What measures do you take to ensure compliance with safety regulations in commercial kitchens?",
    answer:
      "We prioritize safety and strictly adhere to industry regulations. Our electricians are well-versed in the safety standards for commercial kitchens, ensuring that all electrical work meets or exceeds the necessary codes and guidelines.",
  },
  {
    question:
      "How can I request a service or get a quote for electrical work in my food service establishment?",
    answer:
      "You can easily request our services or get a quote by contacting us through our website's contact form or by giving us a call. Our team will promptly respond to your inquiry and guide you through the process.",
  },
];

export default Faq;
