import React from "react";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import Navbar from "../components/navbar/Navbar";
import MainLayout from "../components/layout/MainLayout";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
            <GlobalStyle />
        </ThemeProvider>
    );
};

export default MyApp;
