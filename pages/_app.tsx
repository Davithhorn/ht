import React, {ReactElement, ReactNode, useEffect} from 'react';
import Head from 'next/head';
import {Provider} from "react-redux";
import {wrapper} from '../Components/slices';

import {AppContext, AppInitialProps, AppLayoutProps, AppProps} from 'next/app';
import type {NextComponentType, NextPage} from 'next';
// SCSS styles
import "../Components/assets/sass/style.scss"
import "../Components/assets/sass/plugins.scss"
import "../Components/assets/sass/style.react.scss"
import "../Components/assets/sass/core/layout/base/slider.scss"
import {MasterInit} from "../Components/layout/MasterInit";
import {LayoutProvider} from "../Components/layout/core";

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import NextTopLoader from "nextjs-toploader";
import {ThemeProvider} from "react-bootstrap";
import {ThemeModeProvider} from "../Components/partials";




type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}
const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
                                                                                   Component,
                                                                                   pageProps,
                                                                                   ...rest
                                                                               }: AppPropsWithLayout) => {
    const {store} = wrapper.useWrappedStore(rest);
    const getLayout = Component.getLayout || ((page) => page);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            AOS.init();
        }
    }, []);
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <title></title>

            </Head>
            <Provider store={store}>
               {/*<ThemeModeProvider >*/}
                   <LayoutProvider>
                       <NextTopLoader color="#2CB5E5" showSpinner={false}/>
                       {getLayout(<Component {...pageProps} />)}
                   </LayoutProvider>
               {/*</ThemeModeProvider>*/}
            </Provider>
            <MasterInit/>
        </>
    );
};

export default MyApp;