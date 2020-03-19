import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = ({children}) => {
    return (
        <div className="page-wrapper">
            <Header />

            <div className="content-wrapper">
                <div className="container-wrapper">
                    <div>
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Layout;