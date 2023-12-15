import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitThree, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Frankel</title>
        <meta name="description" content="Frankel Food Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        id="about"
        pretitle="Frankel Benefits"
        title=" Why you should use choose us"
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
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <SectionTitle
        id="contact"
        pretitle="Contact Us"
        title="Contact Information"
      >
        Please contact us via
      </SectionTitle>

      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
