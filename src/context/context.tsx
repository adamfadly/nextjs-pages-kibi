import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { T_Campaign } from "@/types/campaigns.model";

interface CampaignsCTXProps {
  children: ReactNode;
}

interface CampaignsState {
  dataCampaigns: T_Campaign[];
  sortedDataCampaigns: T_Campaign[];
}

const initialState: CampaignsState = {
  dataCampaigns: [],
  sortedDataCampaigns: []
};
export const CampaignsCTX = createContext<any>(null);

const reducer = (state:CampaignsState, action:any) => {
  switch (action.type) {
    case 'GETALLCAMPAIGNS':
      return {
        ...state,
        dataCampaigns: action.payload,
      };
    case 'SORTDONATIONTARGET':
      const sortCampaign = initialState.dataCampaigns.sort((a: T_Campaign, b: T_Campaign) => {
        return a.donation_target - b.donation_target;
    });
      return {
        ...state,
        sortedDataCampaigns: sortCampaign,
      };
    case 'RESET_FILTER':
      return {
        ...state,
        dataCampaigns: state,
      };
    default:
      return state;
  }
};

export const CampaignsProvider: React.FC<CampaignsCTXProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CampaignsCTX.Provider value={{ state, dispatch }}>{children}</CampaignsCTX.Provider>;
};
