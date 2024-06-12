import starIcon from "../../../images/star-icon.svg";
import tajobIcon from "../../../images/tajobIcon.svg";

const CoinsMenu = () => {
  return (
    <>
      <div className="flex border-custom w-[95%] md:w-[98%] lg:w-full mx-auto sticky top-0 bg-[#0D1421] border-bottom-custom">
        <a className="h-[47px] flex-options px-2.5 invisible" href="">
          <img src={starIcon} alt="" />
        </a>
        <a
          className="h-[47px] flex-options px-2.5 top-bar-font ml-0 md:ml-[100px] lg:ml-[0px]"
          href=""
        >
          #
        </a>
        <a
          id="dynamicText2"
          className="w-[238px] h-[47px] flex items-center px-2.5 top-bar-font"
          href=""
        >
          Name
        </a>
        <a
          className="w-[119px] h-[47px] flex items-center justify-end px-2.5 top-bar-font ml-0 md:ml-auto"
          href=""
        >
          Price
        </a>
        <a
          className="w-[77px] h-[47px] items-center justify-end px-2.5 top-bar-font hidden lg:flex"
          href=""
        >
          1h %
        </a>
        <a
          className="w-[77px] h-[47px] flex items-center justify-end px-2.5 top-bar-font"
          href=""
        >
          24h %
        </a>
        <a
          className="w-[77px] h-[47px] flex items-center justify-end px-2.5 top-bar-font hidden lg:flex"
          href=""
        >
          7d %
        </a>
        <a
          className="w-[156px] h-[47px] flex items-center justify-end px-2.5 top-bar-font hidden lg:flex"
          href=""
        >
          Market Cap <img className="ml-1" src={tajobIcon} alt="" />
        </a>
        <a
          className="w-[182px] h-[47px] flex items-center justify-end px-2.5 top-bar-font hidden lg:flex"
          href=""
        >
          Volume(24h)
          <img className="ml-1" src={tajobIcon} alt="" />
        </a>
        <a
          className="w-[210px] h-[47px] flex items-center justify-end px-2.5 top-bar-font hidden lg:flex"
          href=""
        >
          Circulating Supply
          <img className="ml-1" src={tajobIcon} alt="" />
        </a>
        <a
          className="w-[190px] h-[47px] flex items-center justify-end px-2.5 top-bar-font hidden lg:flex"
          href=""
        >
          Last 7 Days
        </a>
      </div>
    </>
  );
};

export default CoinsMenu;
