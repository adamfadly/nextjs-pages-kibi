import React, { Fragment } from "react";
import { GetServerSideProps } from "next";
import { CampaignsProvider } from "@/context/index";

import { fetchData } from "@/services/getAllCampaigns";
import NavBar from "@/components/Navbar";
import CampaignContainer from "@/container/campaigns";

export default function Home({ data }: any) {
  return (
    <Fragment>
      <CampaignsProvider>
        <NavBar data={data} />
        <main className={``}>
          <CampaignContainer data={data} />
        </main>
      </CampaignsProvider>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const req = await fetchData();
  const res = await req?.data;
  return {
    props: {
      data: res,
    },
  };
};
