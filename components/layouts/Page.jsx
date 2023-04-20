import Footer from "components/global/footer";
import Navbar from "components/global/navigation";
import { getCart, getProducts, validation } from "features";
import useDispatchEffect from "hooks/useDispatchEffect";

const features = [validation, getProducts, getCart];

const Page = ({ children }) => {
  useDispatchEffect(features);
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Page;
