import starIcon from "../../../images/star-icon.svg";
import btc from '../../../images/btc-icon.svg'
import redArrow from '../../../images/red-arrow.svg'
import greenArrow from '../../../images/green-arrow.svg'
import btcCHart from '../../../images/btc-chart.svg'

import React, { useEffect } from 'react';

const ResponsiveTextComponent = () => {
  const updateTextForBTC = () => {
    const links = document.querySelectorAll('#dynamicText3');

    links.forEach((link) => {
      const textNode = Array.from(link.childNodes).find(
        (node) => node.nodeType === Node.TEXT_NODE
      );

      if (window.innerWidth < 1024) {
        textNode.nodeValue = 'BTC';
      } else {
        textNode.nodeValue = 'Bitcoin BTC';
      }
    });
  };

  useEffect(() => {
    updateTextForBTC();

    window.addEventListener('resize', updateTextForBTC);

    return () => {
      window.removeEventListener('resize', updateTextForBTC);
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
          1
        </a>
        <a
          id="dynamicText3"
          className="w-[238px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center px-2.5 font-white"
          href=""
        >
          <img className="mr-2" src={btc} alt="" />
          Bitcoin BTC
        </a>
        <a
          className="w-[119px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center justify-end px-2.5 font-white ml-0 md:ml-auto"
          href=""
        >
          $64,703.07
        </a>
        <a
          className="w-[77px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center justify-end px-2.5 font-red hidden lg:flex"
          href=""
        >
          <img className="mr-1" src={redArrow} alt="" />
          0.13%
        </a>
        <a
          className="w-[77px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center justify-end px-2.5 font-red hidden lg:flex"
          href=""
        >
          <img className="mr-1" src={redArrow} alt="" />
          6.50%
        </a>
        <a
          className="w-[77px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center justify-end px-2.5 font-green"
          href=""
        >
          <img className="mr-1" src={greenArrow} alt="" />
          7.08%
        </a>
        <a
          className="w-[156px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center justify-end px-2.5 font-white hidden lg:flex"
          href=""
        >
          $1,298,818,393,901
        </a>
        <a
          className="w-[182px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center justify-end px-2.5 font-white hidden lg:flex"
          href=""
        >
          $42,398,834,865
        </a>
        <a
          className="w-[210px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center justify-end px-2.5 font-white hidden lg:flex"
          href=""
        >
          19,698,925 BTC
        </a>
        <a
          className="w-[190px] h-[54px] md:h-[60px] lg:h-[79px] flex items-center justify-end px-2.5 top-bar-font hidden lg:flex"
          href=""
        >
          <img src={btcCHart} alt="" />
        </a>
      </div>

    </>
);
};

export default ResponsiveTextComponent;
