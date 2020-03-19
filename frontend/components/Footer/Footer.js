import Link from "next/link";
import "./footer.scss";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <Link href="/signin"><a className="button transparent">Sign In</a></Link>
                <Link href="/"><a className="button transparent">Link</a></Link>
                <Link href="/"><a className="button transparent">Link</a></Link>
            </div>
        </footer>
    )
};

export default Footer;