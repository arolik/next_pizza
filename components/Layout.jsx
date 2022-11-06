import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Sider from "./Sider";


const Layout = ({ children }) => {

    return (
        <div>
            <Head>
                <title>next pizza</title>
            </Head>
            <Header />
            <main className="main">
                <div className="inner">
                    <section className="main__content">
                        <Sider />
                        <div className="main__inner">
                            {children}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout;




