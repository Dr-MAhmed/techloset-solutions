import { FunctionComponent } from "react";

const GroupComponent1: FunctionComponent = () => {
  return (
    <div className="absolute top-[16px] left-[36px] w-[303px] h-[53px] text-left text-sm text-darkslategray-800 font-poppins">
      <div className="absolute top-[29px] left-[0px] flex flex-row items-center justify-center gap-[0px_36px]">
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
      <div className="absolute top-[0px] left-[15px] flex flex-row items-center justify-center">
        <div className="relative">Need help? Call us: (+98) 0234 456 789</div>
      </div>
    </div>
  );
};

export default GroupComponent1;
