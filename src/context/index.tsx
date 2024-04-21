import React, { createContext, useContext, ReactNode } from "react";

import { useLogic } from "./hooks";

import { T_Campaign, GetAllCampaignsResponse } from "@/types/campaigns.model";

interface CampaignsCTXProps {
  children: ReactNode;
}

export type T_CampaignCTX = {
  dataCampaigns: T_Campaign[];
  setDataCampaigns: React.Dispatch<React.SetStateAction<GetAllCampaignsResponse>>;
  dataShortCampaign: T_Campaign[];
  setDataShortCampaign: React.Dispatch<React.SetStateAction<GetAllCampaignsResponse>>;
};

export const CampaignsCTX = createContext<any>(null);

export const useProps = (): T_CampaignCTX | null | undefined => {
  const data = useContext(CampaignsCTX);
  return data;
};

export const CampaignsProvider: React.FC<CampaignsCTXProps> = ({ children }) => {
  const logic = useLogic();

  return <CampaignsCTX.Provider value={logic}>{children}</CampaignsCTX.Provider>;
};
