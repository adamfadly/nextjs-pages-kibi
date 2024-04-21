"use client";

import React, { useEffect } from "react";
import dayjs from "dayjs";
import { currencyFormatter } from "@/utils/currencyFormater";
// import { fetchData } from "@/services/getAllCampaign";
import Campaigns from "@/container/campaigns";
dayjs.locale("id");
const page = () => {
  // console.log(currencyFormatter(100023218));

  const dayFormater = () => {
    console.log(dayjs(2147483647 * 1000).format("DD-MMMM-YYYY"));
    // return dayjs(dayjs(2147483647 * 1000).format("YYYY-MM-DD"));
  };
  useEffect(() => {
    // fetchData();
    dayFormater();
  }, []);

  return (
    <div className="p-4">
      <Campaigns />
    </div>
  );
};

export default page;
