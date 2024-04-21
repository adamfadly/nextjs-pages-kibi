import React from "react";
import { T_Campaign } from "@/types/campaigns.model";
import { useProps, T_CampaignCTX } from "../../context";
import ProgressBar from "./components/ProgressBar";
// import TitleSection from "./components/TitleSection";
import { currencyFormatter } from "@/utils/currencyFormater";

const lengthProgress = (currentDonation: number, donationTarget: number): number => {
  const result = (currentDonation / donationTarget) * 100;
  return result;
};

const CardCampaign: React.FC = () => {
  const { dataCampaigns } = useProps() as T_CampaignCTX;

  return (
    <>
      <div className=" max-w-sm shadow-lg rounded-lg overflow-hidden relative">
        <div className="absolute top-0 left-0 rounded-tl-lg rounded-br-lg bg-gray-400 px-2 py-1">
          <span className="block text-xs font-semibold leading-3 text-cerulean-80">12 hari lagi</span>
        </div>
        <img
          src="https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/45695/31__1511333547_84686577928_f.jpg"
          alt=""
          className="object-cover "
        />
        <div className="p-3">
          <div className="mb-2 flex">
            <span className="inlin-block overflow-hidden text-ellipsis whitespace-nowrap text-xs text-onyx">
              campainer name
            </span>
            <div className="relative flex items-center">
              <div className="h-[12px]">
                {/* <img src="https://assets.kitabisa.com/images/icon__verified-user.svg" alt="" /> */}
                {/* <img src={campaign.campaignerBadge} alt="" /> */}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  data-testid="verified-campaigner-badge"
                  className="ml-2 -mt-[12px] inline-block"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.407 1.689c-.293-1.585-2.471-1.585-2.764 0-.207 1.124-1.517 1.577-2.328.804l-.126-.12c-1.121-1.068-2.83.273-2.157 1.693.485 1.021-.316 2.195-1.402 2.052l-.103-.014C.031 5.906-.607 8.022.73 8.751c.967.528.967 1.97 0 2.498-1.336.729-.698 2.845.798 2.647l.103-.014c1.086-.143 1.887 1.03 1.402 2.052-.674 1.42 1.036 2.761 2.157 1.693l.126-.12c.81-.773 2.12-.32 2.328.804.293 1.585 2.471 1.585 2.764 0 .207-1.124 1.517-1.577 2.328-.804l.126.12c1.121 1.068 2.83-.273 2.157-1.693-.485-1.021.316-2.195 1.402-2.052l.103.014c1.496.198 2.134-1.918.798-2.647-.968-.528-.968-1.97 0-2.498 1.336-.729.698-2.845-.798-2.647l-.103.014c-1.086.143-1.887-1.03-1.402-2.052.673-1.42-1.036-2.761-2.157-1.692l-.126.12c-.81.772-2.12.32-2.328-.805Zm1.534 5.665c.452.337.544.975.204 1.424L9.21 12.443a1.026 1.026 0 0 1-1.543.109L6 10.814c-.4-.397-.4-1.042 0-1.44a1.029 1.029 0 0 1 1.449 0l.83.909 2.228-2.726c.339-.45.98-.54 1.434-.203Z"
                    fill="#10A8E5"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <span className="mb-2 block h-9 overflow-hidden break-words text-sm font-semibold text-mineshaft line-clamp-2">
            title
          </span>
          <div className="mb-2">
            <span className="mr-2 inline-block text-xs text-mineshaft">Terkumpul</span>
            <span className="text-sm font-semibold">{currencyFormatter(100000000)}</span>
          </div>

          <svg width="100%" height="5" aria-label="progressBar">
            <rect x="0" rx="3" width="100%" height="100%" fill="#E8E8E8"></rect>
            <rect
              x="0"
              rx="3"
              width={lengthProgress(1600000, 2000000)}
              height="100%"
              fill="#10A8E5"
              aria-describedby="progress 0.00742792%"
            ></rect>
          </svg>
        </div>
      </div>
    </>
  );
};

export default CardCampaign;
