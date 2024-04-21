import React, { useContext, useState } from "react";
import { CampaignsCTX } from "@/context";
import { T_Campaign } from "@/types/campaigns.model";
import { menus } from "./constant";

interface T_NavbarProps {
  data: T_Campaign;
}

const NavBar = (props: T_NavbarProps) => {
  const { dispatch } = useContext(CampaignsCTX);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [titleSort, settitleSort] = useState<string>("Sort");

  const onHandleSort = (title: string, value: string) => {
    dispatch({ type: value, payload: props });
    settitleSort(title);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between sticky top-0 bg-white z-40 p-4">
        <div className="flex gap-2 items-center">
          <div className="text-[#519BDC] text-3xl  font-bold">Kitabisa</div>
        </div>
        <div>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-[#519BDC] hover:[#519BDC] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  min-w-[190px]"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {titleSort}
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
              className=" divide-y divide-gray-100 rounded-lg shadow w-[190px] bg-[#519BDC] absolute mt-1"
            >
              <ul className="py-2 text-sm text-white min-w-[200px]" aria-labelledby="dropdownDefaultButton">
                {menus.map((item: any, index: number) => (
                  <li
                    key={index}
                    onClick={() => onHandleSort(item.title, item.value)}
                    className="text-white bg-[#519BDC] hover:[#519BDC] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  "
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
