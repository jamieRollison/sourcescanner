import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Roboto_Mono } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const roboto_mono = Roboto_Mono({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["100", "400", "600"],
  variable: "--font-roboto-mono",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={`${roboto_mono.variable} font-mono`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
