import React from "react";

type Props = {
  donationTarget: number;
  donationReceived: number;
  donationPercentage?: number;
};

const lengthProgress = (currentDonation: number, donationTarget: number): number => {
  const result = (currentDonation / donationTarget) * 100;
  return result;
};
const ProgressBar: React.FC<Props> = ({ donationTarget, donationReceived, donationPercentage }) => {
  return (
    <svg width="100%" height="5" aria-label="progressBar">
      <rect x="0" rx="3" width="100%" height="100%" fill="#E8E8E8"></rect>
      <rect
        x="0"
        rx="3"
        width={lengthProgress(donationReceived, donationTarget)}
        height="100%"
        fill="#10A8E5"
        aria-describedby={`progress ${donationPercentage}%`}
      ></rect>
    </svg>
  );
};

export default ProgressBar;
