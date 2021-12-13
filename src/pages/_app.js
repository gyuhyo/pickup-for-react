import { SnackbarProvider } from "notistack";
import { RecoilRoot } from "recoil";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <SnackbarProvider
        maxSnack={5}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Component {...pageProps} />
      </SnackbarProvider>
    </RecoilRoot>
  );
}

export default MyApp;
