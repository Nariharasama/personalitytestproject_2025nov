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
          <div className={"w-full h-[40px] flex items-center justify-start"}>
              <text className={"font-['Noto_Sans_SC'] font-bold w-[120px] text-[20px]"}>Title_TBD</text>
          </div>
          <div className={"w-full grow"}>
              {children}
          </div>
          <div className={"w-full h-[40px] flex items-center justify-start"}>
              <text className={"font-['Noto_Sans_SC'] font-bold w-[400px] text-[20px]"}>Bottom Message TBD</text>
          </div>
      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
