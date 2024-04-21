import React, { useEffect, useContext, useState } from "react";
import { CampaignsCTX } from "@/context";
import { T_Campaign } from "@/types/campaigns.model";
import CardCampaign from "@/components/Campaigns";
type Props = {};

const CampaignContainer = (props: Props) => {
  const { state, dispatch } = useContext(CampaignsCTX);
  const [campaign, setCampaign] = useState<any>([]);
  useEffect(() => {
    const fetchDataAndDispatch = async () => {
      await dispatch({ type: "GETALLCAMPAIGNS", payload: props });
      await setCampaign(state);
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
