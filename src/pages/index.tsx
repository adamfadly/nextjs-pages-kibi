import React, {Fragment} from 'react';
import { GetServerSideProps } from 'next'
import { CampaignsProvider } from "@/context/index";
import { GetAllCampaignsResponse } from "@/types/campaigns.model";

import { fetchData } from '@/services/getAllCampaigns';
import NavBar from '@/components/Navbar';
import Campaigns from '@/components/Campaigns'

export default function Home({data}:any) {
  return (
    <Fragment>
      <CampaignsProvider>
        <NavBar data={data}/>
        <main
          className={``}
        >
          <Campaigns data={data}/>
        </main>
      </CampaignsProvider>
    </Fragment>
  );
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const req = await fetchData()
  const res = await req?.data
  return {
    props: {
      data:res
    },
  }
}