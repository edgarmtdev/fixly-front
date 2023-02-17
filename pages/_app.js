import { Provider } from "react-redux";
import store from "../app/store";
import MainLayout from "../layouts/main";
import GlobalStyles from "../theme/global";
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
