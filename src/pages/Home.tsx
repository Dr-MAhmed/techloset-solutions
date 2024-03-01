import { FunctionComponent } from "react";
import CartSection from "../components/CartSection";
import ShopSection from "../components/ShopSection";
import SpeakerContainer from "../components/SpeakerContainer";
import WirelessHeadphonesForm from "../components/WirelessHeadphonesForm";
import GamePlayContainer from "../components/GamePlayContainer";
import JBLBarContainer from "../components/JBLBarContainer";
import VuesaxboldboxTickIcon from "../components/VuesaxboldboxTickIcon";
import VuesaxboldcrownIcon from "../components/VuesaxboldcrownIcon";
import VuesaxboldshieldSecurityIcon from "../components/VuesaxboldshieldSecurityIcon";
import UserCardContainer from "../components/UserCardContainer";
import LatestNewsContainer from "../components/LatestNewsContainer";
import SectionNewsletterSubscription from "../components/SectionNewsletterSubscription";
import CategoryBrowser from "../components/CategoryBrowser";

const Home: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white h-[4843px] overflow-hidden text-left text-mini-1 text-steelblue-500 font-poppins">
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
      <ShopSection />
      <div className="absolute top-[1722px] left-[684px] flex flex-row items-center justify-center gap-[0px_9.5px]">
        <div className="w-[19px] relative rounded-[50%] bg-b h-[19px]" />
        <div className="w-[19px] relative rounded-[50%] box-border h-[19px] border-[1.2px] border-solid border-darkgray-200" />
        <div className="w-[19px] relative rounded-[50%] box-border h-[19px] border-[1.2px] border-solid border-darkgray-200" />
      </div>
      <div className="absolute top-[3403px] left-[680px] flex flex-row items-center justify-center gap-[0px_9.5px]">
        <div className="w-[19px] relative rounded-[50%] bg-b h-[19px]" />
        <div className="w-[19px] relative rounded-[50%] box-border h-[19px] border-[1.2px] border-solid border-darkgray-200" />
        <div className="w-[19px] relative rounded-[50%] box-border h-[19px] border-[1.2px] border-solid border-darkgray-200" />
      </div>
      <div className="absolute top-[4212px] left-[654px] flex flex-row items-center justify-center gap-[0px_9.5px]">
        <div className="w-[19px] relative rounded-[50%] bg-b h-[19px]" />
        <div className="w-[19px] relative rounded-[50%] box-border h-[19px] border-[1.2px] border-solid border-darkgray-200" />
        <div className="w-[19px] relative rounded-[50%] box-border h-[19px] border-[1.2px] border-solid border-darkgray-200" />
        <div className="w-[19px] relative rounded-[50%] box-border h-[19px] border-[1.2px] border-solid border-darkgray-200" />
        <div className="w-[19px] relative rounded-[50%] box-border h-[19px] border-[1.2px] border-solid border-darkgray-200" />
      </div>
      <b className="absolute top-[311px] left-[174px] text-[43px]">
        <p className="m-0">Canon</p>
        <p className="m-0">camera</p>
      </b>
      <SpeakerContainer />
      <div className="absolute top-[919px] left-[61px] text-8xl-4 font-semibold">
        Popular products
      </div>
      <div className="absolute top-[3713px] left-[61px] flex flex-row items-center justify-center gap-[0px_1086px] text-6xl-4">
        <div className="relative font-semibold">Latest news</div>
        <div className="relative text-xl-4 font-medium">View all</div>
      </div>
      <div className="absolute top-[915px] left-[784px] flex flex-row items-center justify-center gap-[0px_13px] text-base-4">
        <div className="w-[139px] rounded-xl box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-a">
          <div className="relative font-medium">Cameras</div>
        </div>
        <div className="w-[139px] rounded-xl box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-silver-700">
          <div className="relative font-medium">Laptops</div>
        </div>
        <div className="w-[139px] rounded-xl box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-silver-700">
          <div className="relative font-medium">Tablets</div>
        </div>
        <div className="w-[139px] rounded-xl box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-silver-700">
          <div className="relative font-medium">Mouse</div>
        </div>
      </div>
      <div className="absolute top-[749px] left-[91px] rounded-481xl bg-whitesmoke-400 w-[37px] h-[37px] flex flex-row items-center justify-center">
        <img
          className="w-6 relative h-6"
          alt=""
          src="/vuesaxlineararrowleft.svg"
        />
      </div>
      <WirelessHeadphonesForm />
      <GamePlayContainer frame29="/frame-29@2x.png" />
      <GamePlayContainer frame29="/frame-29@2x.png" propTop="2567px" />
      <JBLBarContainer />
      <img
        className="absolute top-[1792px] left-[64px] rounded-xl w-[1315px] h-[417px] object-cover"
        alt=""
        src="/pexelsnaotriponez129208-1@2x.png"
      />
      <div className="absolute top-[1883px] left-[977px] rounded-xl bg-b w-[134px] h-[45px] flex flex-row items-center justify-center text-white">
        <div className="relative font-medium">{`New laptop `}</div>
      </div>
      <div className="absolute top-[2101px] left-[977px] rounded-xl bg-b w-[134px] h-[45px] flex flex-row items-center justify-center text-white">
        <div className="relative font-medium">Shop now</div>
      </div>
      <div className="absolute top-[1964px] left-[861px] flex flex-col items-center justify-center gap-[12px_0px] text-22xl text-steelblue-100">
        <b className="relative">Sale up to 50% off</b>
        <div className="relative text-lg font-medium text-white">
          12 inch hd display
        </div>
      </div>
      <div className="absolute top-[2883px] left-[51px] rounded-xl bg-aliceblue-100 w-[1328px] h-[155px] flex flex-row items-center justify-center gap-[0px_104px] text-3xl-1 text-a">
        <div className="flex flex-row items-center justify-start gap-[0px_31px]">
          <VuesaxboldboxTickIcon />
          <div className="flex flex-col items-start justify-center gap-[6px_0px]">
            <div className="relative font-semibold">Free delivery</div>
            <div className="relative text-lg-1">on order above $50,00</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_31px]">
          <VuesaxboldcrownIcon />
          <div className="flex flex-col items-start justify-center gap-[6px_0px]">
            <div className="relative font-semibold">{`Best quality `}</div>
            <div className="relative text-lg-1">best quality in low price</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_31px]">
          <VuesaxboldshieldSecurityIcon />
          <div className="flex flex-col items-start justify-center gap-[6px_0px]">
            <div className="relative font-semibold">1 year warranty</div>
            <div className="relative text-lg-1">Avaliable warranty</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3113px] left-[61px] flex flex-row items-center justify-center gap-[0px_10px]">
        <UserCardContainer
          frame61="/frame-61.svg"
          savannahNguyen="Savannah Nguyen"
        />
        <UserCardContainer
          frame61="/frame-61.svg"
          savannahNguyen="Esther Howard"
        />
        <UserCardContainer
          frame61="/frame-61.svg"
          savannahNguyen="Esther Howard"
        />
      </div>
      <div className="absolute top-[3476px] left-[60px] bg-aliceblue-100 w-[1317px] h-[136px] flex flex-row items-center justify-center gap-[0px_55.3px]">
        <img
          className="w-[206.2px] relative h-[41.2px] object-cover"
          alt=""
          src="/brand8@2x.png"
        />
        <img
          className="w-[206.2px] relative h-[41.2px] object-cover"
          alt=""
          src="/brand4@2x.png"
        />
        <img
          className="w-[206.2px] relative h-[41.2px] object-cover"
          alt=""
          src="/brand5@2x.png"
        />
        <img
          className="w-[206.2px] relative h-[41.2px] object-cover"
          alt=""
          src="/brand6@2x.png"
        />
        <img
          className="w-[206.2px] relative h-[41.2px] object-cover"
          alt=""
          src="/brand7@2x.png"
        />
      </div>
      <LatestNewsContainer dimensionsCode="/blog1-540x490-crop-center-1@2x.png" />
      <LatestNewsContainer
        dimensionsCode="/blog2-540x490-crop-center-1@2x.png"
        propLeft="730px"
        propWidth="302px"
        propHeight="274px"
      />
      <SectionNewsletterSubscription uniqueIdentifier="/vuesaxlinearsend2.svg" />
      <CategoryBrowser />
    </div>
  );
};

export default Home;
