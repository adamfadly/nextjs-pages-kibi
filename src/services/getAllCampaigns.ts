import { GetAllCampaignsResponse } from "@/types/campaigns.model";

export const fetchData = async (): Promise<GetAllCampaignsResponse | undefined> => {
  try {
    const request = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json"
    );
    const response = await request.json();
    return response;
  } catch (error) {
    console.error("Error fetching data:", Error);
  }
};
