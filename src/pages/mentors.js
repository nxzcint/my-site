import React from "react";
import Meta from "./../components/Meta";
import HeroSection2 from "./../components/HeroSection2";
import TeamBiosSection2 from "./../components/TeamBiosSection2";
import { requireAuth } from "./../util/auth";

function MentorsPage(props) {
  return (
    <>
      <Meta title="Mentors" />
      <HeroSection2
        bgColor="default"
        size="large"
        bgImage=""
        bgImageOpacity={1}
        title="Learn anything about coffee"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />
      <TeamBiosSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Some of our mentors"
        subtitle=""
      />
    </>
  );
}

export default requireAuth(MentorsPage);
