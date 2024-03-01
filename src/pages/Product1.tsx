import { FunctionComponent } from "react";
import CartSection from "../components/CartSection";
import SectionNewsletterSubscription from "../components/SectionNewsletterSubscription";
import CategoryBrowser from "../components/CategoryBrowser";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";

const Product1: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white h-[2562px] overflow-hidden text-left text-sm text-darkslategray-800 font-poppins">
      <div className="absolute top-[244px] left-[0px] bg-gray-100 w-[1440px] h-[76px]" />
      <div className="absolute top-[21px] left-[61px] flex flex-row items-center justify-center gap-[0px_754px]">
        <div className="relative">Need help? Call us: (+98) 0234 456 789</div>
        <div className="flex flex-row items-center justify-center gap-[0px_36px]">
          <div className="flex flex-row items-center justify-center gap-[0px_20px]">
            <img
              className="w-6 relative h-6"
              alt=""
              src="/vuesaxlinearlocation.svg"
            />
            <div className="relative">Our store</div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[0px_20px]">
            <img
              className="w-6 relative h-6"
              alt=""
              src="/vuesaxlineargroup.svg"
            />
            <div className="relative">Track your order</div>
          </div>
        </div>
      </div>
      <CartSection />
      <SectionNewsletterSubscription
        uniqueIdentifier="/vuesaxlinearsend2.svg"
        propTop="2051px"
      />
      <img
        className="absolute top-[2462px] left-[185.5px] w-6 h-6"
        alt=""
        src="/vuesaxlinearfacebook.svg"
      />
      <CategoryBrowser />
      <div className="absolute top-[270px] left-[63px] flex flex-row items-center justify-center gap-[0px_14px] text-base text-darkslategray-400">
        <div className="flex flex-row items-center justify-center gap-[0px_16px]">
          <div className="relative font-medium">{`Home `}</div>
          <img
            className="w-6 relative h-6 object-contain"
            alt=""
            src="/vuesaxlineararrowdown@2x.png"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_16px]">
          <div className="relative font-medium">All category</div>
          <img
            className="w-6 relative h-6 object-contain"
            alt=""
            src="/vuesaxlineararrowdown@2x.png"
          />
        </div>
      </div>
      <img
        className="absolute top-[342px] left-[63px] rounded-xl w-[647px] h-[561px] object-cover"
        alt=""
        src="/6456332-sd-1@2x.png"
      />
      <FrameComponent4 />
      <div className="absolute top-[1161px] left-[523px] flex flex-row items-center justify-center gap-[0px_20px] text-xl-7 text-darkslategray-500">
        <div className="w-[187px] rounded-xl box-border h-[60px] flex flex-row items-center justify-center border-[1px] border-solid border-gray-200">
          <div className="relative font-medium">Description</div>
        </div>
        <div className="w-[187px] rounded-xl bg-a h-[60px] flex flex-row items-center justify-center text-white">
          <div className="relative font-medium">Reviews</div>
        </div>
      </div>
      <div className="absolute top-[1256px] left-[63px] rounded-xl box-border w-[1314px] h-[223px] flex flex-col items-start justify-center py-0 pr-0 pl-[49px] gap-[17px_0px] text-lgi-7 text-a border-[1px] border-solid border-silver-500">
        <div className="relative text-3xl-7 font-semibold">
          Customer reviews
        </div>
        <div className="relative text-dimgray-500">No reviews yet</div>
        <div className="w-[196px] bg-a h-10 flex flex-row items-center justify-center text-white">
          <div className="relative [text-decoration:underline]">
            Write a review
          </div>
        </div>
      </div>
      <FrameComponent3 />
      <div className="absolute top-[645px] left-[759px] flex flex-col items-start justify-center gap-[42px_0px] text-3xl-7 text-white">
        <FrameComponent2 />
        <div className="flex flex-row items-center justify-center gap-[0px_29px]">
          <div className="w-[241px] rounded-[32.42px] bg-b h-[73px] flex flex-row items-center justify-center">
            <div className="relative font-semibold">Add to cart</div>
          </div>
          <div className="w-[241px] rounded-[32.42px] bg-b h-[73px] flex flex-row items-center justify-center">
            <div className="relative font-semibold">Buy it now</div>
          </div>
          <div className="w-[74px] rounded-481xl bg-whitesmoke-300 h-[73px] flex flex-row items-center justify-center">
            <img
              className="w-9 relative h-9"
              alt=""
              src="/vuesaxlinearheart.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[604.5px] left-[758.5px] box-border w-[619px] h-px border-t-[1px] border-solid border-silver-300" />
      <div className="absolute top-[927.5px] left-[758.5px] box-border w-[619px] h-px border-t-[1px] border-solid border-silver-300" />
      <img
        className="absolute top-[928px] left-[63px] rounded-xl w-[310px] h-[157px] overflow-hidden object-cover"
        alt=""
        src="/frame-29@2x.png"
      />
      <img
        className="absolute top-[928px] left-[392px] rounded-xl w-[310px] h-[155px] overflow-hidden object-cover"
        alt=""
        src="/frame-142@2x.png"
      />
      <div className="absolute top-[1543px] left-[60px] text-8xl-4 font-semibold text-steelblue-500">
        Related product
      </div>
      <FrameComponent1 />
    </div>
  );
};

export default Product1;
