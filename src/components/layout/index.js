import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>RadarSoft</title>
                <meta name="description" content="RadarSoft Technology" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
