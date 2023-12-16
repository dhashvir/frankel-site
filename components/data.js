import {
  FaceSmileIcon,
  ClockIcon,
  SparklesIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  UserCircleIcon,
  CheckBadgeIcon,
  ViewfinderCircleIcon,
  CalendarIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

// import benefitOneImg from "../public/img/repairs.png";
// import benefitTwoImg from "../public/img/calendar.png";
// import benefitThreeImg from "../public/img/installer.png";

const benefitOne = {
  title: "Repairs and Services",
  desc: "At Frankel, our commitment is reflected in our unparalleled service standards.",
  // image: benefitOneImg,
  icon: <WrenchScrewdriverIcon />,
  bullets: [
    {
      title: "Swiftest response time",
      desc: "We boast the industry's swiftest response time.",
      icon: <ClockIcon />,
    },
    {
      title: "Experienced technicians",
      desc: "Team of exceptionally trained and experienced technicians.",
      icon: <SparklesIcon />,
    },
    {
      title: "Distinguished first-time fix rate",
      desc: "Setting a benchmark for excellence in the field.",

      icon: <FaceSmileIcon />,
    },
  ],
};

/*
    Cost Optimization: Frankel's customized maintenance programs are tailored to minimize costs, ensuring efficient use of resources and preventing unnecessary expenses associated with unexpected equipment failures.

    Risk Mitigation: Our programs are strategically designed to significantly reduce the risk of kitchen interruptions, providing proactive solutions that address potential issues before they escalate, thereby maintaining uninterrupted kitchen operations.

    Enhanced Reliability: By implementing our tailored maintenance programs, you can count on increased reliability of your kitchen equipment. This not only minimizes the chances of unexpected breakdowns but also extends the lifespan of your appliances, contributing to long-term operational efficiency.
*/

const benefitTwo = {
  title: "Planned Maintenance",
  desc: "Frankel's customized maintenance programs are designed to minimize costs and significantly mitigate the risk of kitchen Interruptions.",
  //image: benefitTwoImg,
  icon: <CalendarIcon />,
  bullets: [
    {
      title: "Cost Optimization",
      desc: "Tailored to minimize costs, ensuring efficient use of resources.",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "Risk Mitigation",
      desc: "Designed to significantly reduce the risk of kitchen interruptions.",
      icon: <ExclamationTriangleIcon />,
    },
    {
      title: "Enhanced Reliability",
      desc: "Tailored maintenance programs.",
      icon: <ShieldCheckIcon />,
    },
  ],
};

const benefitThree = {
  title: "Installation",
  desc: "Frankel handles electrical installations, ranging from single-piece projects to complete kitchen setups.",
  //image: benefitThreeImg,
  icon: <UserGroupIcon />,
  bullets: [
    {
      title: "Skilled Electrical System Manager",
      desc: "Our installers are trained to proficiently manage electrical systems.",
      icon: <UserCircleIcon />,
    },
    {
      title: "Ensuring Professionalism",
      desc: "Guaranteeing Professional Excellence.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Integrated Precision",
      desc: "Comprehensive execution.",

      icon: <ViewfinderCircleIcon />,
    },
  ],
};

export { benefitOne, benefitTwo, benefitThree };
