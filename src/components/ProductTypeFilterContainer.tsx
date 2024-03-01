import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ProductTypeFilterContainerType = {
  /** Style props */
  propTop?: CSSProperties["top"];
};

const ProductTypeFilterContainer: FunctionComponent<
  ProductTypeFilterContainerType
> = ({ propTop }) => {
  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[965px] left-[61px] flex flex-col items-start justify-center gap-[12px_0px] text-left text-[16.1px] text-darkslategray-600 font-poppins"
      style={frameDiv4Style}
    >
      <div className="flex flex-row items-center justify-center gap-[0px_189px]">
        <div className="relative">0 selected</div>
        <div className="relative text-base-1 text-dimgray-300">Reset</div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_10px] text-gray-600">
        <div className="w-[30px] relative h-[30px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightblue w-[30px] h-[30px]" />
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_55px]">
          <div className="w-52 relative inline-block shrink-0">Smart-watch</div>
          <div className="relative">5</div>
        </div>
      </div>
    </div>
  );
};

export default ProductTypeFilterContainer;
