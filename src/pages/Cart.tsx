import { FunctionComponent } from "react";
import CartSection from "../components/CartSection";
import SectionNewsletterSubscription from "../components/SectionNewsletterSubscription";
import CategoryBrowser from "../components/CategoryBrowser";
import ProductCardContainer from "../components/ProductCardContainer";

const Cart: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white h-[1457px] overflow-hidden text-left text-xl-7 text-gray-500 font-poppins">
      <div className="absolute top-[351px] left-[61px] bg-aliceblue-100 w-[872px] h-14" />
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
        propTop="946px"
      />
      <img
        className="absolute top-[1357px] left-[185.5px] w-6 h-6"
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
      <ProductCardContainer
        dimensionsCode="/6456332-sd-1@2x.png"
        carColorLabel="Color: Green"
      />
      <ProductCardContainer
        dimensionsCode="/frame-142@2x.png"
        carColorLabel="Color: Black"
        propTop="606px"
        propWidth="132px"
        propHeight="88px"
        propOverflow="hidden"
      />
      <div className="absolute top-[361px] left-[95px] font-medium">
        Product
      </div>
      <div className="absolute top-[361px] left-[427px] font-medium">Price</div>
      <div className="absolute top-[361px] left-[585px] font-medium">
        Quantity
      </div>
      <div className="absolute top-[361px] left-[758px] font-medium">
        Subtotal
      </div>
      <div className="absolute top-[576.5px] left-[62.5px] box-border w-[871px] h-px border-t-[1px] border-solid border-silver-200" />
      <div className="absolute top-[745.5px] left-[62.5px] box-border w-[871px] h-px border-t-[1px] border-solid border-silver-200" />
      <div className="absolute top-[777px] left-[61px] rounded-[32.42px] bg-b w-[295px] h-[73px] flex flex-row items-center justify-center text-3xl-7 text-white">
        <div className="relative font-semibold">Continue shopping</div>
      </div>
      <div className="absolute top-[777px] left-[417px] rounded-[32.42px] box-border w-[223px] h-[73px] flex flex-row items-center justify-center text-3xl-7 text-gray-300 border-[1px] border-solid border-darkgray-400">
        <div className="relative font-semibold">Update cart</div>
      </div>
      <div className="absolute top-[777px] left-[710px] rounded-[32.42px] box-border w-[223px] h-[73px] flex flex-row items-center justify-center text-3xl-7 text-firebrick-200 border-[1px] border-solid border-firebrick-100">
        <div className="relative font-semibold">Clear cart</div>
      </div>
      <div className="absolute top-[351px] left-[953px] box-border w-[426px] h-[499px] flex flex-col items-center justify-center border-[1px] border-solid border-silver-200">
        <div className="w-[424px] bg-aliceblue-100 h-14 flex flex-row items-center justify-center">
          <div className="relative font-medium">Cart total</div>
        </div>
        <div className="w-[410px] h-[439px] flex flex-col items-center justify-center gap-[29px_0px] text-base-7">
          <div className="flex flex-col items-center justify-center gap-[27px_0px]">
            <div className="flex flex-col items-center justify-center gap-[33px_0px]">
              <div className="flex flex-col items-center justify-center gap-[20px_0px] text-lgi-7">
                <div className="flex flex-row items-center justify-center gap-[0px_34px]">
                  <div className="w-[174px] relative font-medium inline-block shrink-0">
                    Subtotal
                  </div>
                  <div className="w-[131px] relative text-3xl-7 font-medium text-right inline-block shrink-0">
                    $ 23,20
                  </div>
                </div>
                <div className="w-[334px] relative box-border h-px border-t-[1px] border-solid border-darkgray-100" />
              </div>
              <div className="flex flex-col items-center justify-center gap-[33px_0px]">
                <div className="w-[333px] rounded-xl box-border h-[54px] flex flex-row items-center justify-start py-0 pr-0 pl-[23px] relative gap-[0px_10px] border-[1px] border-solid border-gainsboro-100">
                  <div className="relative z-[0]">Enter coupon code</div>
                  <div className="w-[43px] absolute !m-[0] top-[21px] left-[270px] text-[14.7px] font-medium text-a inline-block z-[1]">
                    Apply
                  </div>
                </div>
                <div className="w-[334px] relative box-border h-px border-t-[1px] border-solid border-darkgray-100" />
              </div>
              <div className="w-[333px] rounded-xl box-border h-[54px] flex flex-row items-center justify-start py-0 pr-0 pl-[23px] relative gap-[0px_10px] border-[1px] border-solid border-gainsboro-100">
                <div className="relative z-[0]">County</div>
                <img
                  className="w-6 absolute !m-[0] top-[19px] left-[286px] h-6 z-[1]"
                  alt=""
                  src="/vuesaxlineararrowdown.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[0px_34px]">
              <div className="w-[174px] relative inline-block shrink-0">
                Total amount
              </div>
              <div className="w-[131px] relative text-[18.7px] text-right inline-block shrink-0">
                $ 23,20
              </div>
            </div>
          </div>
          <div className="w-[339px] rounded-[32.42px] bg-b h-[52px] flex flex-row items-center justify-center text-xl-7 text-white">
            <div className="relative font-semibold">Proceed to ckeckout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
