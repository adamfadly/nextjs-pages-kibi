import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { T_Campaign } from "@/types/campaigns.model";

interface CampaignsCTXProps {
  children: ReactNode;
}

interface CampaignsState {
  dataCampaigns: T_Campaign[];
  loading: boolean;
}

const initialState: CampaignsState = {
  dataCampaigns: [],
  loading: true,
};

export const CampaignsCTX = createContext<any>(null);

const reducer = (state: CampaignsState, action: any) => {
  switch (action.type) {
    case "GETALLCAMPAIGNS":
      return {
        ...state,
        loading: false,
        dataCampaigns: action?.payload?.data,
      };
    case "SORTDONATIONTARGET":
      const sortCampaignDonation = action?.payload?.data.sort((a: T_Campaign, b: T_Campaign) => {
        return a.donation_target - b.donation_target;
      });
      console.log(sortCampaignDonation, "UUUUUU");
      return {
        ...state,
        dataCampaigns: sortCampaignDonation,
      };
    case "SORTDAYLEFT":
      const sortCampaignDayLeft = action?.payload?.data.sort((a: T_Campaign, b: T_Campaign) => {
        return a.donation_target - b.donation_target;
      });
      return {
        ...state,
        dataCampaigns: sortCampaignDayLeft,
      };
    case "RESET_FILTER":
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
