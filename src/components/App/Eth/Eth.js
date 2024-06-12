import starIcon from "../../../images/star-icon.svg";
import eth from "../../../images/eth icon.svg";
import redArrow from "../../../images/red-arrow.svg";
import greenArrow from "../../../images/green-arrow.svg";
import ethCHart from "../../../images/chart-eth.svg";

import React, { useEffect } from 'react';

const ResponsiveTextComponent = () => {
  const updateTextForETH = () => {
    const links = document.querySelectorAll('#dynamicText4');

    links.forEach((link) => {
      const textNode = Array.from(link.childNodes).find(
        (node) => node.nodeType === Node.TEXT_NODE
      );

      if (window.innerWidth < 1024) {
        textNode.nodeValue = 'ETH';
      } else {
        textNode.nodeValue = 'Ethereum ETH';
      }
    });
  };

  useEffect(() => {
    updateTextForETH(); 

    window.addEventListener('resize', updateTextForETH);

    return () => {
      window.removeEventListener('resize', updateTextForETH);
    };
  }, []); 

  return (
    <>
      <div className="flex border-custom hover:bg-[#222531] w-[95%] md:w-[98%] lg:w-full mx-auto">
        <a
          className="h-[54px] md:h-[60px] lg:h-[79px] flex-options px-2.5"
          href=""
        >
          <img src={starIcon} alt="" />
        </a>
        <a
          className="h-[54px] md:h-[60px] lg:h-[79px] flex-options px-2.5 top-bar-font ml-0 md:ml-[100px] lg:ml-[0px]"
          href=""
        >
          2
        </a>
        <a
          id="dynamicText4"
          className="w-[238px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center px-2.5 font-white"
          href=""
        >
          <img className="mr-2" src={eth} alt="" />
          Ethereum ETH
        </a>
        <a
          className="w-[119px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center justify-end px-2.5 font-white ml-0 md:ml-auto"
          href=""
        >
          $3,025.87
        </a>
        <a
          className="w-[77px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center justify-end px-2.5 font-green hidden lg:flex"
          href=""
        >
          <img className="mr-1" src={greenArrow} alt="" />
          2.51%
        </a>
        <a
          className="w-[77px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center justify-end px-2.5 font-red hidden lg:flex"
          href=""
        >
          <img className="mr-1" src={redArrow} alt="" />
          0.30%
        </a>
        <a
          className="w-[77px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center justify-end px-2.5 font-red"
          href=""
        >
          <img className="mr-1" src={redArrow} alt="" />
          0.51%
        </a>
        <a
          className="w-[156px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center justify-end px-2.5 font-white hidden lg:flex"
          href=""
        >
          $363,861,529,862
        </a>
        <a
          className="w-[182px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center justify-end px-2.5 font-white hidden lg:flex"
          href=""
        >
          $13,447,852,952
        </a>
        <a
          className="w-[210px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center justify-end px-2.5 font-white hidden lg:flex"
          href=""
        >
          120,120,311 ETH
        </a>
        <a
          className="w-[190px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center justify-end px-2.5 top-bar-font hidden lg:flex"
          href=""
        >
          <img src={ethCHart} alt="" />
        </a>
      </div>
    </>

);
};

export default ResponsiveTextComponent;
