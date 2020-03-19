import Layout from "../components/Layout";
import { API, DOMAIN, APP_NAME } from '../config';
import { listBlogsWithCategoriesAndTags } from '../actions/blog';
import { withRouter } from "next/router";
import { useState } from 'react'; // need
import Link from 'next/link'; // need
import HighlightCardSm from "../components/Blog/HighlightCardSm";

const Index = ({ blogs, categories, router, blogsLimit, totalBlogs, tags }) => {

    // This section is for the home page hero preview
        const myblogs = (blogs);
        // console.log(myblogs);
        const mostRecent = myblogs.slice(-1)[0];
        // console.log(mostRecent);

    // This section is for the highlights section
        // const highlights = blogs[0];
        // console.log('Highlights' + blogs[0].title);
        const highlights = myblogs.slice(-1);
        // console.log(highlights);

    const [limit, setLimit] = useState(blogsLimit);

    const showMostRecent = (props) => {
        return (
            <>
            <div className="hero" style={{backgroundImage: `url(${API}/blog/photo/${mostRecent.slug})`}}>                
                <Link href={`/blogs/${mostRecent.slug}`}>
                    <a style={{color: `white`}}>
                        <p className="category">{mostRecent.categories[0].name}</p>
                    </a>
                </Link>

                <Link href={`/blogs/${mostRecent.slug}`}>
                    <a style={{color: `white`}}>
                        <h1>{mostRecent.title}</h1>
                    </a>
                </Link>
            </div>

            <div className="highlights">
                <h4>Highlights</h4>
                
                <div className="card-wrapper">
                    <HighlightCardSm blogs={blogs.slice(-2)[0]} textColor={'#A8D685'} marginRight={'10px'}/>
                    <HighlightCardSm blogs={blogs.slice(-3)[0]} textColor={'#CA85D6'} marginRight={'10px'}/>
                    <HighlightCardSm blogs={blogs.slice(-4)[0]} textColor={'#BDA462'} marginRight={'10px'}/>
                    <HighlightCardSm blogs={blogs.slice(-5)[0]} textColor={'#428bca'}/>
                </div>
            </div>
            </>
        );
    };


    return (
        <Layout>
            <div id="index">
                <div className="site-brand">
                    <h1>{APP_NAME}</h1>
                </div>                
                <div>
                    {showMostRecent()}
                </div>
            </div>
        </Layout>
    )
};

Index.getInitialProps = () => {
    let skip = 0;
    let limit = 2;

    return listBlogsWithCategoriesAndTags(skip).then(data => {
        
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                blogs: data.blogs,
                categories: data.categories,
                tags: data.tags,
                totalBlogs: data.size,
                blogsLimit: limit,
                blogSkip: skip
            };
        }
    });
};

export default Index;