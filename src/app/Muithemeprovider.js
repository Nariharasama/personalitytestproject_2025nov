"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Noto_Sans_SC } from "next/font/google";

const notoSans = Noto_Sans_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

const theme = createTheme({
  typography: {
    fontFamily: `"${notoSans.style.fontFamily}", sans-serif`,
  },
});

export default function Muithemeprovider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
