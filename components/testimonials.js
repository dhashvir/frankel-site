import Image from "next/image";
import React from "react";
import Container from "./container";

// import userOneImg from "../public/img/user1.jpg";
// import userTwoImg from "../public/img/user2.jpg";
// import userThreeImg from "../public/img/user3.jpg";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        {texts.map((item, index) => (
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal ">
                <Mark>{item.user}</Mark> <i>"{item.review}"</i>
              </p>
              {/* 
            <Avatar
              image={userOneImg}
              name="Sarah Steiner"
              title="VP Sales at Google"
            /> */}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-blue-800 bg-yellow-100 rounded-md ring-yellow-100 ring-4 dark:ring-yellow-900 dark:bg-yellow-900 dark:text-yellow-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

const texts = [
  {
    user: "Avi A.",
    review:
      "What an incredible soul! Full of life and always willing to go above and beyond. Such a shame I didn't find Frankel sooner. Rest assured, there will be no one else I'll be using for my electrical works than Frankel! Thanks a lot legend!",
  },
  {
    user: "Ash R.",
    review:
      "On-time. Professional.Friendly and efficient. Highly recommend! Thanks Frankel!",
  },
  {
    user: "Kate C.",
    review:
      "Great experience-friendly, onsite the next day, on time and even cleaned up! What's more, he saved me money. Would definitely recommend Frankel!",
  },
  {
    user: "Joe B.",
    review: "Amazing quick response and perfect job, highly recommend!",
  },
];

export default Testimonials;
