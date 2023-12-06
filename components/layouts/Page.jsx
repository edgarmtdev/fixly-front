import Footer from "components/global/footer";
import Navbar from "components/global/navigation";
import { getCart, getProducts, validation } from "features";
import { useDispatchEffect } from "hooks";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const features = [validation, getProducts, getCart];

const Page = ({ children }) => {
  useDispatchEffect(features);
  return (
    <div className={montserrat.className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
