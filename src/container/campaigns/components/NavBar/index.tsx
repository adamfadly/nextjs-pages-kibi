import React, { useState } from "react";
import { sortList } from "./constant";
import Image from "next/image";
import { T_CampaignCTX, useProps } from "../../context";

type Props = {
  //   onDropdownMenu: () => void;
};

const NavBar: React.FC<Props> = (props: Props) => {
  const { dataCampaigns, dataShortCampaign, setDataCampaigns, setDataShortCampaign } = useProps() as T_CampaignCTX;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [titleSort, setTitleSort] = useState<string>("Sort");
  const [campaigns, setCampaign] = useState<any>(null);

  const onDropdownMenu = (value: string): void => {
    setTitleSort(value);
    setIsOpen(!isOpen);
  };

  if (titleSort === "Mendesak") {
    setCampaign(dataShortCampaign);
  }

  const listMenu = sortList.map((list, index) => (
    <li key={index} onClick={() => onDropdownMenu(list.title)}>
      <a href="#" className="block px-4 py-2">
        {list.title}
      </a>
    </li>
  ));
  return (
    <>
      <div className="flex justify-between sticky top-0 bg-white z-40 py-4">
        <div className="flex gap-2 items-center">
          <Image src="/kibi-logo.png" width={50} height={50} alt="logo" className="rounded-full" />
          <div className="text-[#519BDC] text-4xl font-bold">Kitabisa</div>
        </div>

        <div onClick={() => setIsOpen(!isOpen)}>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-[#519BDC] hover:[#519BDC] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  min-w-[150px]"
            type="button"
          >
            {titleSort}{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {isOpen && (
            <div
              id="dropdown"
              className=" divide-y divide-gray-100 rounded-lg shadow w-[150px] bg-[#519BDC] absolute mt-1"
            >
              <ul className="py-2 text-sm text-white" aria-labelledby="dropdownDefaultButton">
                {listMenu}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
