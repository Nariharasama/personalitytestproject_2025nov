import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import {Noto_Sans_SC} from "next/font/google";
import './globals.css'

const notoSans = Noto_Sans_SC({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space',
})



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={"${notoSans.variable}"}>
      <body className={"min-h-screen w-full flex flex-col"}>
      <AppRouterCacheProvider>
              {children}
      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
