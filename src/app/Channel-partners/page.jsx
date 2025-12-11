import BecomeAdvisor from "@/channel-partners/components/become-advisor/BecomeAdvisor";
import JoinUs from "@/channel-partners/components/join-us/JoinUs";
import LenderScroll from "@/channel-partners/components/lenders-scroll/LenderScroll";
import PartnersReviews from "@/channel-partners/components/partners-reviews/PartnersReviews";
import StillHaveQuestion from "@/channel-partners/components/still-have-question/StillHaveQuestion";
import ToolsAndSupport from "@/channel-partners/components/tools-and-support-provided/ToolsAndSupport";
import WhyActivpaisa from "@/channel-partners/components/why-activpaisa/WhyActivpaisa";
import Navbar from "@/components/Navbar/Navbar";

export default function ChannelPartners() {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <Navbar />
      <LenderScroll />
      <WhyActivpaisa />
      <BecomeAdvisor />
      <ToolsAndSupport />
      <JoinUs />
      <PartnersReviews />
      <StillHaveQuestion />
    </div>
  );
}
