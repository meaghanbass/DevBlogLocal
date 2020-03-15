import Layout from "../components/Layout";
import { API, DOMAIN, APP_NAME } from '../config';
import { listBlogsWithCategoriesAndTags } from '../actions/blog';

const Index = ({ blogs, categories, router }) => {
    return (
        <Layout>
            <div id="index">
                <div className="site-brand">
                    <h1>{APP_NAME}</h1>
                </div>                
                <div className="hero" style={{color: `white`, display: `flex`, alignItems: `center`, justifyContent: `center`}}>
                    <h1>Blog Title</h1>
                </div>
            </div>
        </Layout>
    )
}

export default Index;