import { FunctionComponent } from "react";

const CartSection: FunctionComponent = () => {
  return (
    <div className="absolute top-[74px] left-[0px] bg-a w-[1440px] h-[100px] flex flex-row items-center justify-center gap-[0px_316px] text-left text-sm text-darkslategray-800 font-poppins">
      <div className="flex flex-row items-center justify-center gap-[0px_85px]">
        <img
          className="w-[140px] relative h-[39px] object-cover"
          alt=""
          src="/logo-1@2x.png"
        />
        <div className="w-[438px] rounded-xl bg-white h-14 flex flex-row items-center justify-start py-0 pr-0 pl-[25px] box-border relative gap-[0px_10px]">
          <div className="relative z-[0]">Serach any things</div>
          <div className="w-[132px] !m-[0] absolute top-[0px] left-[306px] rounded-xl bg-b h-14 flex flex-row items-center justify-center z-[1] text-white">
            <div className="relative font-semibold">Search</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_29px] text-3xs-5 text-white">
        <div className="flex flex-row items-center justify-center gap-[0px_12px] text-sm">
          <img
            className="w-6 relative h-6"
            alt=""
            src="/vuesaxlinearuser.svg"
          />
          <div className="relative">Sign in</div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_12px]">
          <div className="flex flex-row items-center justify-center gap-[0px_3px]">
            <img
              className="w-6 relative h-6"
              alt=""
              src="/vuesaxlinearheart.svg"
            />
            <div className="w-[14.2px] rounded-[394.74px] bg-b h-[15px] flex flex-col items-center justify-center">
              <div className="relative">0</div>
            </div>
          </div>
          <div className="relative text-sm">Sign in</div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_12px]">
          <div className="flex flex-row items-center justify-center gap-[0px_3px]">
            <img
              className="w-6 relative h-6"
              alt=""
              src="/vuesaxlinearshoppingcart.svg"
            />
            <div className="w-[14.2px] rounded-[394.74px] bg-b h-[15px] flex flex-col items-center justify-center">
              <div className="relative">0</div>
            </div>
          </div>
          <div className="relative text-sm">Cart</div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
