// import PartnerNavbar from "@/channel-partners/components/Navbar/PartnerNavbar";
import PartnerNavbar from "@/channel-partners/components/Navbar/PartnerNavbar";
// import Navbar from "@/components/Navbar/Navbar";
import BecomeActivPaisaLoan from "@/channel-partners/components/HeroSection/BecomeActivPaisaLoan";
import WhoLoanAdvisor from "@/channel-partners/components/WhoLoanAdvisor/WhoLoanAdvisor";
import ExploreRangeCreditProducts from "@/channel-partners/components/ExploreRangeCreditProducts/ExploreRangeCreditProducts";
export default function ChannelPartners() {
  return (
    <div>
      <PartnerNavbar />
      <BecomeActivPaisaLoan />
      <WhoLoanAdvisor />
      <ExploreRangeCreditProducts />
      {/* <h1>Welcome to Channel Partners Page</h1> */}
    </div>
  );
}
