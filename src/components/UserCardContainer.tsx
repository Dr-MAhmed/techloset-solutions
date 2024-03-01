import { FunctionComponent } from "react";

export type UserCardContainerType = {
  frame61?: string;
  savannahNguyen?: string;
};

const UserCardContainer: FunctionComponent<UserCardContainerType> = ({
  frame61,
  savannahNguyen,
}) => {
  return (
    <div className="w-[432.8px] rounded-xl box-border h-[242.1px] flex flex-col items-start justify-center py-0 pr-0 pl-[16.825531005859375px] gap-[26.17px_0px] text-left text-base text-a font-poppins border-[1px] border-solid border-silver-400">
      <div className="flex flex-row items-center justify-center gap-[0px_37.39px]">
        <img className="w-[100px] relative h-[100px]" alt="" src={frame61} />
        <div className="w-[180.4px] relative font-medium inline-block shrink-0">
          {savannahNguyen}
        </div>
      </div>
      <div className="w-[395.4px] rounded-lg-7 bg-aliceblue-100 h-[82.3px] flex flex-row items-center justify-center text-sm-2">
        <div className="w-[342.1px] relative inline-block shrink-0">
          Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
          bibendum ullamcorper. Phasellus tristique aenean at lorem sed
          scelerisque.
        </div>
      </div>
    </div>
  );
};

export default UserCardContainer;
