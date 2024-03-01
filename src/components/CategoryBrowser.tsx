import { FunctionComponent } from "react";

const CategoryBrowser: FunctionComponent = () => {
  return (
    <div className="absolute top-[174px] left-[0px] bg-whitesmoke-100 w-[1440px] h-[71px] flex flex-row items-center justify-center gap-[0px_98px] text-left text-base text-white font-poppins">
      <div className="w-[218px] bg-b h-[70px] flex flex-row items-center justify-center gap-[0px_16px]">
        <div className="relative font-medium">Browse categories</div>
        <img
          className="w-6 relative h-6"
          alt=""
          src="/vuesaxlineararrowdown.svg"
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_327px] text-darkslategray-400">
        <div className="flex flex-row items-center justify-center gap-[0px_29px]">
          <div className="flex flex-row items-center justify-center gap-[0px_16px]">
            <div className="relative font-medium">Home</div>
            <img
              className="w-6 relative h-6"
              alt=""
              src="/vuesaxlineararrowdown.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-[0px_16px]">
            <div className="relative font-medium">Catalog</div>
            <img
              className="w-6 relative h-6"
              alt=""
              src="/vuesaxlineararrowdown.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">Blog</div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[0px_16px]">
            <div className="relative font-medium">Pages</div>
            <img
              className="w-6 relative h-6"
              alt=""
              src="/vuesaxlineararrowdown.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">About us</div>
          </div>
        </div>
        <b className="relative text-a">30 Days Free Return</b>
      </div>
    </div>
  );
};

export default CategoryBrowser;
