import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitThree, benefitTwo } from "../components/data";
//import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
//import Testimonials from "../components/testimonials";
//import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Contact from "../components/contact";

const Home = () => {
  return (
    <>
      <Head>
        <title>Frankel - Specializes in Food Services electrical repairs</title>
        <meta
          name="description"
          content="Frankel specializes in delivering bespoke repair and maintenance services tailored exclusively for commercial kitchen equipment."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle
        id="about"
        pretitle="Frankel Benefits"
        title=" Why You Should Choose Us"
      >
        Choose us for food service repairs and experience prompt, efficient
        solutions. Our skilled technicians specialize in diagnosing and fixing a
        range of kitchen equipment issues, ensuring minimal downtime. With
        transparent communication, fair pricing, and a customer-centric
        approach, we provide value and reliability for your kitchen's
        operational needs. Trust us to keep your kitchen running smoothly,
        allowing you to focus on delivering exceptional food and service to your
        customers.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />
      {/*     
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> 
    
      <Video />
      */}
      <SectionTitle
        id="mission"
        pretitle="Unveiling Our Purpose"
        title="Our Mission Statement"
      >
        As a distinguished family-owned enterprise, Frankel specializes in
        delivering bespoke repair and maintenance services tailored exclusively
        for commercial kitchen equipment. Committed to upholding the highest
        standards of excellence and possessing a profound understanding of the
        intricacies within the food service industry, we have emerged as the
        preferred choice for discerning businesses seeking unwaveringly reliable
        solutions.
        <br></br>
        <br></br>
        We comprehend the multifaceted challenges inherent in managing a
        commercial kitchen and recognize the impracticality of engaging with
        multiple service providers for diverse equipment repairs. This
        underscores the essence of our One Call To Fix It All service, ensuring
        comprehensive resolutions for repairs and maintenance across the
        spectrum of makes and models found in your commercial kitchen.
        <br></br>
        <br></br>
        <b>Our mission is unequivocal</b>: to sustain the seamless and efficient
        operation of your commercial kitchen.
        <br></br>
        <br></br>
        Acknowledging the pivotal role that well-functioning equipment plays in
        your day-to-day operations, we are dedicated to preserving your kitchen
        as a central nexus of productivity and success. Whether necessitating
        prompt attention to emergency breakdowns, systematic preventative
        maintenance, acquisition of new equipment, or meticulous kitchen
        cleaning services, our family business brings forth a wealth of
        expertise and dedicated resources to fulfill your exacting requirements.
      </SectionTitle>
      <SectionTitle
        pretitle="FAQ"
        title="Frequently Asked Questions"
      ></SectionTitle>
      <Faq />
      <Contact></Contact>
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
