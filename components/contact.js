import React from "react";
import Container from "./container";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const EMAIL = "info@frankel.com.au";
const PHONE = "+61432227547";
const PHONE_DISPLAY = "0432 227 547";

const Contact = () => {
  return (
    <Container
      id="contact"
      className={`flex w-full flex-col mt-4 "items-center justify-center text-center"`}
    >
      <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white text-center">
        Contact Information
      </h2>

      <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-2">
        <div className="">
          <div className="flex items-start mt-1 space-x-3">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-500 rounded-md w-11 h-11 ">
              <EnvelopeIcon className="w-7 h-7 text-blue-50"></EnvelopeIcon>
            </div>
            <div>
              <h4 className="text-left text-xl font-medium text-gray-800 dark:text-gray-200">
                <a href={`mailto:${EMAIL}}`}>Send us an email</a>
              </h4>
              <p className="mt-0 text-gray-500 dark:text-gray-400">{EMAIL}</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex items-start mt-1 space-x-3">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-500 rounded-md w-11 h-11">
              <PhoneIcon className="w-7 h-7 text-blue-50"></PhoneIcon>
            </div>
            <div>
              <h4 className="text-left text-xl font-medium text-gray-800 dark:text-gray-200">
                <a href={`tel:+${PHONE}`}>Call us</a>
              </h4>
              <p className="mt-0 text-gray-500 dark:text-gray-400">
                {PHONE_DISPLAY}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
