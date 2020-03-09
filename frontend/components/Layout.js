import Container from "react-bootstrap/Container";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

const Layout = ({children}) => {
    return (
        <div className="page-wrapper">
            <Header />

            <div className="content-wrapper">
                <Sidebar />
                <div className="container-wrapper">
                    <Container>
                        {children}
                    </Container>
                    <Footer />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;