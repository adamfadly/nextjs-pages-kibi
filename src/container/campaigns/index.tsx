import React, { useEffect, useContext, useState } from "react";
import { CampaignsCTX } from "@/context";
import CardCampaign from "@/components/Campaigns";
import { T_Campaign } from "@/types/campaigns.model";
type T_PropsCampaign = {
  data: T_Campaign[];
};

const CampaignContainer: React.FC<T_PropsCampaign> = (props) => {
  const { state, dispatch } = useContext(CampaignsCTX);
  useEffect(() => {
    const fetchDataAndDispatch = async () => {
      await dispatch({ type: "GETALLCAMPAIGNS", payload: props });
    };
    fetchDataAndDispatch();
  }, [props]);
  return (
    <div>
      <CardCampaign data={state} />
    </div>
  );
};

export default CampaignContainer;
