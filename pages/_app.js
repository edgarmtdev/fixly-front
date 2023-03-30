import { Provider } from "react-redux";
import store from "../app/store";
import MainLayout from "../components/layouts/main";
import GlobalStyles from "../theme/global";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../styles/index.css";
import DropdownContext from "context/dropdown/Provider";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || MainLayout;
  return (
    <Provider store={store}>
      <GlobalStyles />
      <DropdownContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DropdownContext>
    </Provider>
  );
}

export default MyApp;
