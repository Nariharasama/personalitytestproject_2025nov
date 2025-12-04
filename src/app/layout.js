import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import Muithemeprovider from "@/app/Muithemeprovider";

const notoSans = Noto_Sans_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" className={"${notoSans.variable}"}>
      <body
        className={"min-h-screen w-full flex flex-col"}
        suppressHydrationWarning
      >
        <AppRouterCacheProvider>
          <Muithemeprovider>{children}</Muithemeprovider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
