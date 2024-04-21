import React, { useContext, useEffect, useState } from "react";
import { CampaignsCTX } from "@/context";
import { T_Campaign } from "@/types/campaigns.model";

interface T_NavbarProps {
  data: T_Campaign;
}

const NavBar = (props: T_NavbarProps) => {
  const { state, dispatch } = useContext(CampaignsCTX);
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // useEffect(() => {
  //   const fetchDataAndDispatch = async () => {
  //     await dispatch({ type: "SORTDONATIONTARGET", payload: props });
  //   };
  //   fetchDataAndDispatch();
  // }, [props]);

  // const onHandleSort = () => {
  //   dispatch({ type: "SORTDONATIONTARGET", payload: props });
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <div className="flex justify-between sticky top-0 bg-white z-40 p-4">
        <div className="flex gap-2 items-center">
          <div className="text-[#519BDC] text-4xl font-bold">Kitabisa</div>
        </div>
        <div>
          <button onClick={() => dispatch({ type: "SORTDONATIONTARGET", payload: props })}>klik me</button>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-[#519BDC] hover:[#519BDC] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  min-w-[150px]"
            type="button"
          >
            sort
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
          <div
            id="dropdown"
            className=" divide-y divide-gray-100 rounded-lg shadow w-[150px] bg-[#519BDC] absolute mt-1"
          >
            <ul className="py-2 text-sm text-white" aria-labelledby="dropdownDefaultButton"></ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
