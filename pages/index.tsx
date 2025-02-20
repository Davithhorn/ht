import React, {ReactElement} from "react";
import Head from "next/head";

// Import Component
import Layout from "@common/Layout";
import DavidPortfolio from "../Components/partials/DavidPortfolio";


const Index = () => {
    return (
        <React.Fragment>
            <Head>
                <title>david-portfolio</title>
            </Head>
            <DavidPortfolio/>
        </React.Fragment>
    );
}

Index.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};


export default Index;