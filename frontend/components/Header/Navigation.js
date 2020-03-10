import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavLink from "react-bootstrap/NavLink";
import Col from 'react-bootstrap/Col'
import { APP_NAME } from "../../config";
import { signout, isAuth } from "../../actions/auth";
import Router from "next/router";
import NProgress from "nprogress";
import "../../node_modules/nprogress/nprogress.css";
import Search from "../Blog/Search";

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Navigation = () => {
// class Navigation extends React.Component {
//     render() {
    return (
        <>
             {/* <Navbar bg="none" expand="lg">
                 <Navbar.Brand><Link href="/"><a>{APP_NAME}</a></Link></Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="ml-auto align-items-center">
                         <Search />

                         <Link href="/"><a className="button transparent">Home</a></Link>
                        
                         <Link href="/blogs"><a className="button transparent">Blogs</a></Link>
                        
                         <Link href="/contact"><a className="button transparent">Contact</a></Link>

                         {!isAuth() && (
                         <>
                         <Link href="/signin"><a className="button transparent">Sign In</a></Link>
                         <Link href="/signup"><a className="button transparent">Sign Up</a></Link>
                         </>
                         )}

                         {isAuth() && (
                         <NavLink onClick={() => signout(() => Router.replace(`/signin`))} className="button transparent">
                             Sign Out
                         </NavLink>
                         )}

                         {isAuth() && isAuth().role === 0 && (
                             <Link href="/user">
                                 <a className="button transparent">
                                     {`${isAuth().name}'s Dashboard`}
                                 </a>
                             </Link>
                         )}

                         {isAuth() && isAuth().role === 1 && (
                             <Link href="/admin">
                                 <a className="button transparent">
                                     {`${isAuth().name}'s Dashboard`}
                                 </a>
                             </Link>
                         )}

                         <Link href="/user/crud/blog"><a className="button transparent">New Blog</a></Link>
                     </Nav>
                 </Navbar.Collapse>
             </Navbar> */}
            <Navbar bg="none" expand="lg">
                <Navbar.Brand><Link href="/"><img src="/images/seoblog.png" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <div>
                        <Link href="/"><a className="button transparent">Virtual Reality</a></Link>
                        </div>
                    
                        <div>
                        <Link href="/"><a className="button transparent">Augmented Reality</a></Link>
                        </div>
                    
                        <div>
                        <Link href="/"><a className="button transparent">Spatial Computing</a></Link>
                        </div>

                        <div>
                        <Link href="/"><a className="button transparent">Game Development</a></Link>
                        </div>

                        <div>
                        <Link href="/"><a className="button transparent">More</a></Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
                <div className="social-links">
                    <div className="social-icon facebook">
                        <Link href="/"><a className="button transparent">F</a></Link>
                    </div>

                    <div className="social-icon twitter">
                        <Link href="/"><a className="button transparent">T</a></Link>
                    </div>
                </div>
            </Navbar>
        </>
    );
    // }
};

export default Navigation;