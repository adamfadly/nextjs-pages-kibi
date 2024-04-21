import React from "react";
import { T_Campaign } from "@/types/campaigns.model";
import { useProps, T_CampaignCTX } from "../../context";
import ProgressBar from "./components/ProgressBar";
import TitleSection from "./components/TitleSection";

const CardCampaign: React.FC = () => {
  const { dataCampaigns } = useProps() as T_CampaignCTX;

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 justify-center">
        {dataCampaigns &&
          dataCampaigns.map((campaign: T_Campaign, index: number) => (
            <div key={index} className="p-4 flex">
              <div className=" max-w-sm shadow-lg rounded-lg overflow-hidden relative">
                <div className="absolute top-0 left-0 rounded-tl-lg rounded-br-lg bg-gray-400 px-2 py-1">
                  <span className="block text-xs font-semibold leading-3 text-cerulean-80">12 hari lagi</span>
                </div>
                <img src={campaign.image} alt="" className="object-cover " />
                <div className="p-3">
                  <TitleSection
                    campaigner={campaign.campaigner}
                    campaignerBadge={campaign.campaigner_badge}
                    donationReceived={campaign.donation_received}
                    title={campaign.title}
                  />
                  <ProgressBar
                    donationReceived={campaign.donation_received}
                    donationTarget={campaign.donation_target}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CardCampaign;
