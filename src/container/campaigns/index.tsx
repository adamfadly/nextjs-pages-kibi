import React from "react";
import { CampaignsProvider, T_CampaignCTX, useProps } from "./context";
import NavBar from "./components/NavBar";
import CardCampaign from "./components/CardCampaign";

const campaign: React.FC = () => {
  // const {} = useProps() as T_CampaignCTX;
  return (
    <CampaignsProvider>
      <NavBar />
      <CardCampaign />
    </CampaignsProvider>
  );
};

export default campaign;
