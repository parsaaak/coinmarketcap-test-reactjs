import Cryptocurrencies from "../../../images/Cryptocurrencies icon.svg";
import NFTs from "../../../images/NFTs icon.svg";
import Categories from "../../../images/Categories icon.svg";
import whiteArrow from "../../../images/white arrow.svg";
import Filters from "../../../images/Filters icon.svg";
import Customize from "../../../images/Customize icon.svg";
import list from "../../../images/list icon.svg";
import map from "../../../images/map icon.svg";
import React, { useEffect } from 'react';

const ResponsiveTextComponent = () => {
  const changeTextBasedOnScreenWidth = () => {
    const spanElement = document.getElementById('dynamicText');
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (screenWidth < 1024) {
      spanElement.textContent = 'All';
    } else {
      spanElement.textContent = 'Cryptocurrencies';
    }
  };

  useEffect(() => {
    changeTextBasedOnScreenWidth(); 

    window.addEventListener('resize', changeTextBasedOnScreenWidth);

    return () => {
      window.removeEventListener('resize', changeTextBasedOnScreenWidth);
    };
  }, []); 

  return (
<>
<div className="max-w-[1250px] mx-auto flex items-center justify-between flex-wrap gap-y-2 md:gap-y-4 lg:gap-y-0">
        <div className="h-[32px] flex items-center w-fit gap-x-1 px-1 lg:px-0 overflow-x-scroll md:overflow-auto">
          <a
            className="bg-[#121C38] text-[#6188FF] text-xs font-semibold flex-options h-full px-3 rounded-lg"
            href="#"
          >
            <img className="mr-1" src={Cryptocurrencies} alt="" />
            <span id="dynamicText">Cryptocurrencies</span>
          </a>
          <a
            className="top-bar-font px-3 flex-options h-full hover:bg-[#323546] hover:rounded-lg"
            href=""
          >
            <img className="mr-1" src={NFTs} alt="" />
            <span>NFTs</span>
          </a>
          <a
            className="top-bar-font px-3 flex-options h-full hover:bg-[#323546] hover:rounded-lg"
            href=""
          >
            <img className="mr-1" src={Categories} alt="" />
            <span>Categories</span>
          </a>
          <div className="h-[20px] w-[2px] bg-[#323546] items-center"></div>
          <a
            className="top-bar-font px-3 flex-options h-full hover:bg-[#323546] hover:rounded-lg"
            href=""
          >
            <span>🔥</span>
            <span>Memes</span>
          </a>
          <a
            className="top-bar-font px-3 flex-options h-full hover:bg-[#323546] hover:rounded-lg"
            href=""
          >
            <span>🔥</span>
            <span>Solana Ecosystem</span>
          </a>
          <a
            className="top-bar-font px-3 flex-options h-full hover:bg-[#323546] hover:rounded-lg"
            href=""
          >
            <span>🔥</span>
            <span>Gaming</span>
          </a>
          <a
            className="top-bar-font px-3 flex-options h-full hover:bg-[#323546] hover:rounded-lg"
            href=""
          >
            <span>🔥</span>
            <span>AI</span>
          </a>
        </div>

        <div className="h-[32px] flex items-center w-full lg:w-fit gap-x-1 justify-center px-1 lg:px-0">
          <div className="lg:flex items-center justify-between h-full gap-x-1 hidden">
            <span className="top-bar-font">Show rows</span>
            <a
              className="top-bar-font px-2 flex-options h-full bg-[#323546] rounded-lg"
              href=""
            >
              <span>100</span>
              <img src={whiteArrow} alt="" />
            </a>
          </div>
          <a
            className="top-bar-font px-2 flex-options h-full bg-[#323546] rounded-lg w-3/5 lg:w-fit"
            href=""
          >
            <img className="mr-1" src={Filters} alt="" />
            <span>Filters</span>
          </a>
          <a
            className="top-bar-font px-2 flex-options h-full bg-[#323546] rounded-lg w-3/5 lg:w-fit"
            href=""
          >
            <img className="mr-1" src={Customize} alt="" />
            <span>Customize</span>
          </a>
          <a
            className="top-bar-font px-2 flex-options h-full bg-[#323546] rounded-lg"
            href=""
          >
            <img className="mr-1" src={list} alt="" />
            <span>
              <img className="flex-options" src={map} alt="" />
            </span>
          </a>
        </div>
      </div>

</>
);
};

export default ResponsiveTextComponent;









