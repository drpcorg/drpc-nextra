import { useEffect } from "react";
import { useRouter } from "next/router";
import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "../theme";
import { ApiReferenceSidebar } from "../components/ApiReferenceSidebar";
import "@mantine/notifications/styles.css";
import "@mantine/core/styles.css";
import "./global.css";
import "../styles/api-reference.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isApiReference = router.pathname.startsWith("/api-reference");

  useEffect(() => {
    document.body.classList.toggle("api-reference-mode", isApiReference);
  }, [isApiReference]);

  return (
    <MantineProvider theme={theme}>
      <Notifications />
      {isApiReference ? <ApiReferenceSidebar /> : null}
      <Component {...pageProps} />
    </MantineProvider>
  );
}
