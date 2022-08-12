import React from "react";
import Meta from "./../components/Meta";
import DashboardSection from "./../components/DashboardSection";
import ContentCardsSection from "./../components/ContentCardsSection";
import { requireAuth } from "./../util/auth";

function DashboardPage(props) {
  return (
    <>
      <Meta title="Dashboard" />
      <DashboardSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Dashboard"
        subtitle=""
      />
      <ContentCardsSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Featured Content"
        subtitle=""
      />
    </>
  );
}

export default requireAuth(DashboardPage);
