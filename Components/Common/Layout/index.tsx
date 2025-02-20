import React from 'react';

// Import Component
import {HeaderWrapper} from "../../layout/components/header";
import {FooterWrapper} from "../../layout/components/footer";
import {Roboto} from "next/font/google";

const roboto = Roboto({subsets: ['latin'], weight: "400"})

const Layout = ({children}: any) => {

    return (
        <React.Fragment>
            <div className={roboto.className}>
                <HeaderWrapper/>

                    {children}

                <FooterWrapper/>
            </div>
        </React.Fragment>
    );
}

export default Layout;