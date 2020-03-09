import "./sidebar.scss";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { APP_NAME } from "../../config";
import { signout, isAuth } from "../../actions/auth";
import Router from "next/router";
import NProgress from "nprogress";
import "../../node_modules/nprogress/nprogress.css";



const Sidebar = () => {
    
    function tooltipHome(props) {
        return <Tooltip {...props}>Home</Tooltip>;
    }
    function tooltipBlogs(props) {
        return <Tooltip {...props}>Blogs</Tooltip>;
    }
    function tooltipDashboard(props) {
        return <Tooltip {...props}>Dashboard</Tooltip>;
    }
    function tooltipContact(props) {
        return <Tooltip {...props}>Contact</Tooltip>;
    }
    function tooltipCreateBlog(props) {
        return <Tooltip {...props}>New Blog</Tooltip>;
    }
    function tooltipSignOut(props) {
        return <Tooltip {...props}>Sign Out</Tooltip>;
    }
    return (
        <>
        {isAuth() && (
            <Navbar className="sidebar">

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link href="/">
                            <OverlayTrigger
                                placement="right"
                                // delay={{ show: 100, hide: 400 }}
                                title="hello"
                                overlay={tooltipHome}
                            >
                                <a className="button transparent">
                                    <i className="fas fa-home"></i>
                                </a>
                            </OverlayTrigger>
                        </Link>
                        
                        <Link href="/blogs">
                            <OverlayTrigger
                                placement="right"
                                // delay={{ show: 100, hide: 400 }}
                                title="hello"
                                overlay={tooltipBlogs}
                            >
                                <a className="button transparent">
                                    <i className="fas fa-newspaper"></i>
                                </a>
                            </OverlayTrigger>
                        </Link>
                        
                        <Link href="/contact">
                            <OverlayTrigger
                                placement="right"
                                // delay={{ show: 100, hide: 400 }}
                                title="hello"
                                overlay={tooltipContact}
                            >
                                <a className="button transparent">
                                    <i className="fas fa-envelope"></i>
                                </a>
                            </OverlayTrigger>
                        </Link>

                        {!isAuth() && (
                        <>
                        <Link href="/signin"><a className="button transparent">Sign In</a></Link>
                        <Link href="/signup"><a className="button transparent">Sign Up</a></Link>
                        </>
                        )}

                        {isAuth() && (
                            <OverlayTrigger
                                placement="right"
                                // delay={{ show: 100, hide: 400 }}
                                title="hello"
                                overlay={tooltipSignOut}
                            >
                                <NavLink onClick={() => signout(() => Router.replace(`/signin`))} className="button transparent">
                                    <a className="button transparent">
                                        <i className="fas fa-sign-out-alt"></i>
                                    </a>
                                </NavLink>
                            </OverlayTrigger>
                        )}

                        {/* {isAuth() && isAuth().role === 0 && (
                            <Link href="/user">
                                <a className="button transparent">
                                    {`${isAuth().name}'s Dashboard`}
                                </a>
                            </Link>
                        )} */}

                        {isAuth() && isAuth().role === 0 && (
                            <OverlayTrigger
                                placement="right"
                                // delay={{ show: 100, hide: 400 }}
                                title="hello"
                                overlay={tooltipDashboard}
                            >
                                <NavLink href="/user" className="button transparent">
                                    <a className="button transparent">
                                        <i className="fas fa-tachometer-alt"></i>
                                    </a>
                                </NavLink>
                            </OverlayTrigger>
                        )}

                        {isAuth() && isAuth().role === 1 && (
                            <Link href="/admin">
                                <a className="button transparent">
                                    {`${isAuth().name}'s Dashboard`}
                                </a>
                            </Link>
                        )}

                        <Link href="/user/crud/blog">
                            <OverlayTrigger
                                placement="right"
                                // delay={{ show: 100, hide: 400 }}
                                title="hello"
                                overlay={tooltipCreateBlog}
                            >
                                <a className="button transparent">
                                    <i className="fas fa-edit"></i>
                                </a>
                            </OverlayTrigger>
                        </Link>

                        

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )}

        
        </>
    )
};

export default Sidebar;