import { FunctionComponent } from "react";

const FrameComponent5: FunctionComponent = () => {
  return (
    <div className="absolute top-[85px] left-[0px] bg-a w-[375px] h-[70px] flex flex-row items-center justify-center gap-[0px_24px] text-left text-3xs-5 text-white font-poppins">
      <div className="w-[145px] h-[38px] flex flex-row items-center justify-center">
        <img
          className="w-[100.5px] relative h-7 object-cover"
          alt=""
          src="/logo-1@2x.png"
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_29px]">
        <div className="flex flex-row items-center justify-center">
          <img
            className="w-6 relative h-6"
            alt=""
            src="/vuesaxlinearuser.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
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
        </div>
        <div className="flex flex-row items-center justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
