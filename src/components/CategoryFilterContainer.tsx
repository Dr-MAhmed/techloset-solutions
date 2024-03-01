import { FunctionComponent } from "react";

const CategoryFilterContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[460px] left-[61px] flex flex-col items-start justify-center gap-[12px_0px] text-left text-[16.1px] text-gray-600 font-poppins">
      <div className="flex flex-row items-center justify-center gap-[0px_10px]">
        <div className="w-[30px] relative h-[30px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkslategray-300 box-border w-[30px] h-[30px] border-[1px] border-solid border-darkgray-500" />
          <img
            className="absolute h-[19%] w-[28.33%] top-[40%] right-[35%] bottom-[41%] left-[36.67%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_51px]">
          <div className="w-52 relative inline-block shrink-0">
            All categories
          </div>
          <div className="relative">10</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_10px]">
        <div className="w-[30px] relative h-[30px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightblue w-[30px] h-[30px]" />
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_55px]">
          <div className="w-52 relative inline-block shrink-0">Tablet</div>
          <div className="relative">5</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_10px]">
        <div className="w-[30px] relative h-[30px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightblue w-[30px] h-[30px]" />
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_55px]">
          <div className="w-52 relative inline-block shrink-0">Laptop</div>
          <div className="relative">5</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_10px]">
        <div className="w-[30px] relative h-[30px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightblue w-[30px] h-[30px]" />
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_55px]">
          <div className="w-52 relative inline-block shrink-0">Headphones</div>
          <div className="relative">5</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_10px]">
        <div className="w-[30px] relative h-[30px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightblue w-[30px] h-[30px]" />
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_55px]">
          <div className="w-52 relative inline-block shrink-0">Console</div>
          <div className="relative">5</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_10px]">
        <div className="w-[30px] relative h-[30px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightblue w-[30px] h-[30px]" />
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_55px]">
          <div className="w-52 relative inline-block shrink-0">other</div>
          <div className="relative">5</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilterContainer;
