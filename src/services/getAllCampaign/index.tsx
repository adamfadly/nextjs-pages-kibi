import { GetAllCampaignsResponse } from "@/types/campaigns.model";

export const fetchData = async (): Promise<GetAllCampaignsResponse | undefined> => {
  try {
    const response = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json"
    );
    const toJson = await response.json();
    console.log(toJson);
    return toJson;
  } catch (error) {
    console.error("Error fetching data:", Error);
  }
};
