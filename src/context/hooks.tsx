import { useEffect, useState } from "react";
import { fetchData } from "@/services/getAllCampaigns";

import { T_Campaign, GetAllCampaignsResponse } from "@/types/campaigns.model";

export const useLogic = () => {
  const [dataCampaigns, setDataCampaigns] = useState<any>();
  const [dataShortCampaign, setDataShortCampaign] = useState<T_Campaign[]>();

  useEffect(() => {
    getCampaigns();
  }, []);

  const getCampaigns = async () => {
    try {
      const data = await fetchData();
      // console.log(data?.data, "DATA");
      setDataCampaigns(data?.data);

      // setDataShortCampaign();
    } catch (error) {
      console.log("Error", error);
    }
  };

  return {
    dataCampaigns,
    setDataCampaigns,
    dataShortCampaign,
    setDataShortCampaign,
  };
};
