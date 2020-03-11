import Layout from "../components/Layout";
import { API, DOMAIN, APP_NAME } from '../config';

const Index = () => {
    return (
        <Layout>
            <div id="index">
                <div className="site-brand">
                    <h1>{APP_NAME}</h1>
                </div>                
                <div className="hero">
                    hero
                </div>
            </div>
        </Layout>
    )
}

export default Index;