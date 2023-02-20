import { Provider } from "react-redux";
import store from "../app/store";
import MainLayout from "../components/layouts/main";
import GlobalStyles from "../theme/global";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
