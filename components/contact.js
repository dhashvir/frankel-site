import React from "react";
import Container from "./container";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const EMAIL = "franktodaio1@gmail.com";
const PHONE = "0432 227 547";
const Contact = () => {
  return (
    <Container id="contact" className="!p-0">
      <div className="flex w-full flex-col mt-0 items-center justify-center text-center">
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Contact Information
        </h2>
        <div className="flex items-start max-w-2xl py-4 ">
          <div className="flex items-start mt-1 space-x-3 mr-2">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
              <EnvelopeIcon className="w-7 h-7 text-indigo-50"></EnvelopeIcon>
            </div>
            <div>
              <h4 className="text-left text-xl font-medium text-gray-800 dark:text-gray-200">
                <a href="mailto:franktodaio1@gmail.com">Send us an email</a>
              </h4>
              <p className="mt-0 text-gray-500 dark:text-gray-400">
                franktodaio1@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start mt-1 space-x-3">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ml-2">
              <PhoneIcon className="w-7 h-7 text-indigo-50"></PhoneIcon>
            </div>
            <div>
              <h4 className="text-left text-xl font-medium text-gray-800 dark:text-gray-200">
                <a href="tel:+61432227547">Call us</a>
              </h4>
              <p className="mt-0 text-gray-500 dark:text-gray-400">
                0432 227 547
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
