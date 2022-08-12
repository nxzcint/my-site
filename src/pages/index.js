import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import ClientsSection from "./../components/ClientsSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import NewsletterSection from "./../components/NewsletterSection";
import TeamBiosSection from "./../components/TeamBiosSection";
import CtaSection2 from "./../components/CtaSection2";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        bgColor="primary"
        size="large"
        bgImage="https://source.unsplash.com/ugnrXk1129g/1600x800"
        bgImageOpacity={0.3}
        title="Coffee Mentors"
        subtitle="1:1 coffee mentorship with the best coffee specialists."
        buttonText="Get Started"
        buttonColor="default"
        buttonPath="/pricing"
      />
      <FeaturesSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
      />
      <ClientsSection
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="You're in good company"
        subtitle=""
      />
      <TestimonialsSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />
      <NewsletterSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Do you like email? Do you like a lot of email!? Well, you're in luck! Sign up to get blasted with a dozen emails a day of varying quality."
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
        image="https://uploads.divjoy.com/undraw-newsletter_vovu.svg"
        imageSuccess="https://uploads.divjoy.com/undraw-high_five_u364.svg"
      />
      <TeamBiosSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Some of our Mentors"
        subtitle=""
      />
      <CtaSection2
        bgColor="primary"
        size="medium"
        bgImage="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        bgImageOpacity={0.8}
        title=""
        subtitle=""
        buttonText="Get Started"
        buttonColor="default"
        buttonPath="/pricing"
      />
    </>
  );
}

export default IndexPage;
