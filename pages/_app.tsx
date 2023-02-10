import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UiContextProvider } from "../Store/UI-context";
import { AuthContext, AuthContextProvider} from "../Store/Auth-context";
import { DataContextProvider } from "../Store/Data-context";
import {GalleryContextProvider} from '../Store/Gallery-context'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <DataContextProvider>
      <UiContextProvider>
        <GalleryContextProvider>
        <Component {...pageProps} />
        </GalleryContextProvider>
      </UiContextProvider>
      </DataContextProvider>
    </AuthContextProvider>

  );
}
