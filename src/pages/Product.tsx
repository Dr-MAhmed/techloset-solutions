import { FunctionComponent } from "react";
import CartSection from "../components/CartSection";
import SectionNewsletterSubscription from "../components/SectionNewsletterSubscription";
import CategoryBrowser from "../components/CategoryBrowser";
import CategoryFilterContainer from "../components/CategoryFilterContainer";
import AvailabilityForm from "../components/AvailabilityForm";
import FrameComponent from "../components/FrameComponent";
import ProductTypeFilterContainer from "../components/ProductTypeFilterContainer";

const Product: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white h-[2830px] overflow-hidden text-left text-[16.1px] text-a font-poppins">
      <div className="absolute top-[244px] left-[0px] bg-gray-100 w-[1440px] h-[76px]" />
      <div className="absolute top-[21px] left-[61px] flex flex-row items-center justify-center gap-[0px_754px] text-sm text-darkslategray-800">
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
        propTop="2319px"
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
      <div className="absolute top-[423px] left-[396px] flex flex-col items-center justify-center gap-[24px_0px] text-mid-1">
        <div className="flex flex-row items-center justify-center gap-[0px_26.56px]">
          <div className="w-[308.8px] rounded-[19.67px] box-border h-[313.7px] flex flex-col items-center justify-center border-[1px] border-solid border-silver-600">
            <div className="flex flex-col items-start justify-center gap-[1.97px_0px]">
              <div className="w-[282.3px] relative h-[168.2px] overflow-hidden shrink-0 bg-[url('/public/frame-297@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute top-[13.8px] left-[242px] rounded-103xl-4 bg-lightblue w-[27.5px] h-[27.5px] flex flex-row items-center justify-center">
                  <img
                    className="w-[14.4px] relative h-[14.4px]"
                    alt=""
                    src="/vuesaxlinearheart.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
                <div className="relative font-medium">Wireless headphones</div>
                <div className="relative font-semibold text-darkslategray-100">
                  $11,70
                </div>
                <div className="flex flex-row items-center justify-center gap-[0px_10.82px]">
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[308.8px] rounded-[19.67px] box-border h-[313.7px] flex flex-col items-center justify-center border-[1px] border-solid border-silver-600">
            <div className="flex flex-col items-start justify-center gap-[1.97px_0px]">
              <div className="w-[282.3px] relative h-[168.2px] overflow-hidden shrink-0 bg-[url('/public/frame-298@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute top-[13.8px] left-[242px] rounded-103xl-4 bg-lightblue w-[27.5px] h-[27.5px] flex flex-row items-center justify-center">
                  <img
                    className="w-[14.4px] relative h-[14.4px]"
                    alt=""
                    src="/vuesaxlinearheart.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
                <div className="relative font-medium">Play game</div>
                <div className="relative font-semibold text-darkslategray-100">
                  $11,70
                </div>
                <div className="flex flex-row items-center justify-center gap-[0px_10.82px]">
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[308.8px] rounded-[19.67px] box-border h-[313.7px] flex flex-col items-center justify-center border-[1px] border-solid border-silver-600">
            <div className="flex flex-col items-start justify-center gap-[1.97px_0px]">
              <div className="w-[282.3px] relative h-[168.2px] overflow-hidden shrink-0 bg-[url('/public/frame-299@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute top-[13.8px] left-[242px] rounded-103xl-4 bg-lightblue w-[27.5px] h-[27.5px] flex flex-row items-center justify-center">
                  <img
                    className="w-[14.7px] relative h-[14.7px]"
                    alt=""
                    src="/vuesaxlinearheart.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
                <div className="relative font-medium">Tablet as a laptop</div>
                <div className="relative font-semibold text-darkslategray-100">
                  $11,70
                </div>
                <div className="flex flex-row items-center justify-center gap-[0px_10.82px]">
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_26.56px]">
          <div className="w-[308.8px] rounded-[19.67px] box-border h-[313.7px] flex flex-col items-center justify-center border-[1px] border-solid border-silver-600">
            <div className="flex flex-col items-start justify-center gap-[1.97px_0px]">
              <div className="w-[282.3px] relative h-[168.2px] overflow-hidden shrink-0 bg-[url('/public/frame-2910@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute top-[13.8px] left-[242px] rounded-103xl-4 bg-lightblue w-[27.5px] h-[27.5px] flex flex-row items-center justify-center">
                  <img
                    className="w-[14.4px] relative h-[14.4px]"
                    alt=""
                    src="/vuesaxlinearheart.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
                <div className="relative font-medium">Wireless headphones</div>
                <div className="relative font-semibold text-darkslategray-100">
                  $11,70
                </div>
                <div className="flex flex-row items-center justify-center gap-[0px_10.82px]">
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[308.8px] rounded-[19.67px] box-border h-[313.7px] flex flex-col items-center justify-center border-[1px] border-solid border-silver-600">
            <div className="flex flex-col items-start justify-center gap-[1.97px_0px]">
              <div className="w-[282.3px] relative h-[168.2px] overflow-hidden shrink-0 bg-[url('/public/frame-2911@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute top-[13.8px] left-[242px] rounded-103xl-4 bg-lightblue w-[27.5px] h-[27.5px] flex flex-row items-center justify-center">
                  <img
                    className="w-[14.4px] relative h-[14.4px]"
                    alt=""
                    src="/vuesaxlinearheart.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
                <div className="relative font-medium">Play game</div>
                <div className="relative font-semibold text-darkslategray-100">
                  $11,70
                </div>
                <div className="flex flex-row items-center justify-center gap-[0px_10.82px]">
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[308.8px] rounded-[19.67px] box-border h-[313.7px] flex flex-col items-center justify-center border-[1px] border-solid border-silver-600">
            <div className="flex flex-col items-start justify-center gap-[1.97px_0px]">
              <div className="w-[282.3px] relative h-[168.2px] overflow-hidden shrink-0 bg-[url('/public/frame-2912@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute top-[13.8px] left-[242px] rounded-103xl-4 bg-lightblue w-[27.5px] h-[27.5px] flex flex-row items-center justify-center">
                  <img
                    className="w-[14.7px] relative h-[14.7px]"
                    alt=""
                    src="/vuesaxlinearheart.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
                <div className="relative font-medium">Tablet as a laptop</div>
                <div className="relative font-semibold text-darkslategray-100">
                  $11,70
                </div>
                <div className="flex flex-row items-center justify-center gap-[0px_10.82px]">
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_26.56px]">
          <div className="w-[308.8px] rounded-[19.67px] box-border h-[313.7px] flex flex-col items-center justify-center border-[1px] border-solid border-silver-600">
            <div className="flex flex-col items-start justify-center gap-[1.97px_0px]">
              <div className="w-[282.3px] relative h-[168.2px] overflow-hidden shrink-0 bg-[url('/public/frame-2913@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute top-[13.8px] left-[242px] rounded-103xl-4 bg-lightblue w-[27.5px] h-[27.5px] flex flex-row items-center justify-center">
                  <img
                    className="w-[14.4px] relative h-[14.4px]"
                    alt=""
                    src="/vuesaxlinearheart.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
                <div className="relative font-medium">Wireless headphones</div>
                <div className="relative font-semibold text-darkslategray-100">
                  $11,70
                </div>
                <div className="flex flex-row items-center justify-center gap-[0px_10.82px]">
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[308.8px] rounded-[19.67px] box-border h-[313.7px] flex flex-col items-center justify-center border-[1px] border-solid border-silver-600">
            <div className="flex flex-col items-start justify-center gap-[1.97px_0px]">
              <div className="w-[282.3px] relative h-[168.2px] overflow-hidden shrink-0 bg-[url('/public/frame-2914@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute top-[13.8px] left-[242px] rounded-103xl-4 bg-lightblue w-[27.5px] h-[27.5px] flex flex-row items-center justify-center">
                  <img
                    className="w-[14.4px] relative h-[14.4px]"
                    alt=""
                    src="/vuesaxlinearheart.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
                <div className="relative font-medium">Play game</div>
                <div className="relative font-semibold text-darkslategray-100">
                  $11,70
                </div>
                <div className="flex flex-row items-center justify-center gap-[0px_10.82px]">
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[308.8px] rounded-[19.67px] box-border h-[313.7px] flex flex-col items-center justify-center border-[1px] border-solid border-silver-600">
            <div className="flex flex-col items-start justify-center gap-[1.97px_0px]">
              <div className="w-[282.3px] relative h-[168.2px] overflow-hidden shrink-0 bg-[url('/public/frame-2915@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute top-[13.8px] left-[242px] rounded-103xl-4 bg-lightblue w-[27.5px] h-[27.5px] flex flex-row items-center justify-center">
                  <img
                    className="w-[14.7px] relative h-[14.7px]"
                    alt=""
                    src="/vuesaxlinearheart.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
                <div className="relative font-medium">Tablet as a laptop</div>
                <div className="relative font-semibold text-darkslategray-100">
                  $11,70
                </div>
                <div className="flex flex-row items-center justify-center gap-[0px_10.82px]">
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_26.56px]">
          <div className="w-[308.8px] rounded-[19.67px] box-border h-[313.7px] flex flex-col items-center justify-center border-[1px] border-solid border-silver-600">
            <div className="flex flex-col items-start justify-center gap-[1.97px_0px]">
              <div className="w-[282.3px] relative h-[168.2px] overflow-hidden shrink-0 bg-[url('/public/frame-2916@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute top-[13.8px] left-[242px] rounded-103xl-4 bg-lightblue w-[27.5px] h-[27.5px] flex flex-row items-center justify-center">
                  <img
                    className="w-[14.4px] relative h-[14.4px]"
                    alt=""
                    src="/vuesaxlinearheart.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
                <div className="relative font-medium">Wireless headphones</div>
                <div className="relative font-semibold text-darkslategray-100">
                  $11,70
                </div>
                <div className="flex flex-row items-center justify-center gap-[0px_10.82px]">
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[308.8px] rounded-[19.67px] box-border h-[313.7px] flex flex-col items-center justify-center border-[1px] border-solid border-silver-600">
            <div className="flex flex-col items-start justify-center gap-[1.97px_0px]">
              <div className="w-[282.3px] relative h-[168.2px] overflow-hidden shrink-0 bg-[url('/public/frame-2917@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute top-[13.8px] left-[242px] rounded-103xl-4 bg-lightblue w-[27.5px] h-[27.5px] flex flex-row items-center justify-center">
                  <img
                    className="w-[14.4px] relative h-[14.4px]"
                    alt=""
                    src="/vuesaxlinearheart.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
                <div className="relative font-medium">Play game</div>
                <div className="relative font-semibold text-darkslategray-100">
                  $11,70
                </div>
                <div className="flex flex-row items-center justify-center gap-[0px_10.82px]">
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[308.8px] rounded-[19.67px] box-border h-[313.7px] flex flex-col items-center justify-center border-[1px] border-solid border-silver-600">
            <div className="flex flex-col items-start justify-center gap-[1.97px_0px]">
              <div className="w-[282.3px] relative h-[168.2px] overflow-hidden shrink-0 bg-[url('/public/frame-2918@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute top-[13.8px] left-[242px] rounded-103xl-4 bg-lightblue w-[27.5px] h-[27.5px] flex flex-row items-center justify-center">
                  <img
                    className="w-[14.7px] relative h-[14.7px]"
                    alt=""
                    src="/vuesaxlinearheart.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
                <div className="relative font-medium">Tablet as a laptop</div>
                <div className="relative font-semibold text-darkslategray-100">
                  $11,70
                </div>
                <div className="flex flex-row items-center justify-center gap-[0px_10.82px]">
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[14.7px] relative h-[14.6px]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CategoryFilterContainer />
      <AvailabilityForm />
      <FrameComponent />
      <ProductTypeFilterContainer />
      <ProductTypeFilterContainer propTop="1116px" />
      <div className="absolute top-[1257px] left-[63px] flex flex-col items-start justify-center gap-[12px_0px] text-darkslategray-600">
        <div className="flex flex-row items-center justify-center gap-[0px_189px]">
          <div className="relative">0 selected</div>
          <div className="relative text-base-1 text-dimgray-300">Reset</div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-[0px_22px]">
              <div className="w-[15px] relative rounded-[50%] bg-b h-4" />
              <div className="w-[15px] relative rounded-[50%] bg-crimson h-4" />
              <div className="w-[15px] relative rounded-[50%] bg-steelblue-500 h-4" />
              <div className="w-[15px] relative rounded-[50%] bg-darkgray-300 h-4" />
              <div className="w-[15px] relative rounded-[50%] bg-darkgreen h-4" />
              <div className="w-[15px] relative rounded-[50%] bg-darkslateblue h-4" />
              <div className="w-[15px] relative rounded-[50%] bg-darkmagenta h-4" />
              <div className="w-[15px] relative rounded-[50%] bg-brown h-4" />
              <div className="w-[15px] relative rounded-[50%] bg-yellowgreen-200 h-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[423px] left-[63px] flex flex-row items-center justify-center gap-[0px_180px]">
        <div className="relative font-medium">Categories</div>
        <div className="relative text-base-1 text-dimgray-300">Reset</div>
      </div>
      <div className="absolute top-[736px] left-[63px] flex flex-row items-center justify-center">
        <div className="relative font-medium">Avaliability</div>
      </div>
      <div className="absolute top-[928px] left-[63px] flex flex-row items-center justify-center">
        <div className="relative font-medium">Product type</div>
      </div>
      <div className="absolute top-[1079px] left-[63px] flex flex-row items-center justify-center">
        <div className="relative font-medium">Brand</div>
      </div>
      <div className="absolute top-[1356px] left-[59px] font-medium">Size</div>
      <div className="absolute top-[1220px] left-[65px] flex flex-row items-center justify-center">
        <div className="relative font-medium">Color</div>
      </div>
      <div className="absolute top-[722.5px] left-[60.5px] box-border w-[315px] h-px border-t-[1px] border-solid border-silver-300" />
      <div className="absolute top-[904.5px] left-[60.5px] box-border w-[315px] h-px border-t-[1px] border-solid border-silver-300" />
      <div className="absolute top-[1607.5px] left-[58.5px] box-border w-[315px] h-px border-t-[1px] border-solid border-silver-300" />
      <div className="absolute top-[1055.5px] left-[60.5px] box-border w-[315px] h-px border-t-[1px] border-solid border-silver-300" />
      <div className="absolute top-[1206.5px] left-[60.5px] box-border w-[315px] h-px border-t-[1px] border-solid border-silver-300" />
      <div className="absolute top-[1328.5px] left-[62.5px] box-border w-[315px] h-px border-t-[1px] border-solid border-silver-300" />
      <img
        className="absolute top-[1808px] left-[62px] rounded-xl w-[1315px] h-[417px] object-cover"
        alt=""
        src="/pexelsnaotriponez129208-1@2x.png"
      />
      <div className="absolute top-[1899px] left-[975px] rounded-xl bg-b w-[134px] h-[45px] flex flex-row items-center justify-center text-mini-1 text-white">
        <div className="relative font-medium">{`New laptop `}</div>
      </div>
      <div className="absolute top-[2117px] left-[975px] rounded-xl bg-b w-[134px] h-[45px] flex flex-row items-center justify-center text-mini-1 text-white">
        <div className="relative font-medium">Shop now</div>
      </div>
      <div className="absolute top-[1980px] left-[859px] flex flex-col items-center justify-center gap-[12px_0px] text-22xl text-steelblue-100">
        <b className="relative">Sale up to 50% off</b>
        <div className="relative text-lg font-medium text-white">
          12 inch hd display
        </div>
      </div>
    </div>
  );
};

export default Product;
