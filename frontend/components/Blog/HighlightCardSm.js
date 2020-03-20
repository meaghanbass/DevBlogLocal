import renderHTML from 'react-render-html';
import moment from 'moment';
import Link from 'next/link';
import { API } from '../../config';

// class HighlightCardSm extends React.Component {

    // render() {
    //     let title = this.props;
        
    //     return (
    //         <div className="highlight-card" style={{'marginRight': this.props.marginRight}}>
    //             <div className="image">
    //                 <Link href={`/blogs/${this.props.blogs.slug}`}>
    //                     <a>
    //                         <div className="image" style={{backgroundImage: `url(${API}/blog/photo/${this.props.blogs.slug})`}}></div>
    //                     </a>
    //                 </Link>
    //             </div>

    //             <div className="info">
    //                 <Link href={`/categories/${this.props.blogs.categories[0].slug}`}>
    //                     <a className="category">
    //                         <p style={{'color': this.props.textColor}}>{this.props.blogs.categories[0].name}</p>
    //                     </a>
    //                 </Link>

    //                 <Link href={`/blogs/${this.props.blogs.slug}`}>
    //                     <a className="title">
    //                         <p>{this.props.blogs.title}</p>
    //                     </a>
    //                 </Link>

    //                 <p className="published">{moment(this.props.blogs.updatedAt).fromNow()}</p>
    //             </div>
    //         </div>
    //     );
    // }
// }

// export default HighlightCardSm;

const HighlightCardSm = ({ blogs, categories, router, blogsLimit, totalBlogs, tags }) => {
    const categoryColor = () => {
        if (blogs.categories[0].name === "virtual reality") {
            return ('#A8D685')
        } else if (blogs.categories[0].name === "augmented reality") {
            return ('#CA85D6')
        } else if (blogs.categories[0].name === "spatial computing") {
            return ('#BDA462')
        } else if (blogs.categories[0].name === "game development") {
            return ('#428bca')
        }
    };

    return (
        <div className="highlight-card">
            <div className="image">
                <Link href={`/blogs/${blogs.slug}`}>
                    <a>
                        <div className="image" style={{backgroundImage: `url(${API}/blog/photo/${blogs.slug})`}}></div>
                    </a>
                </Link>
            </div>

            <div className="info">
                <Link href={`/categories/${blogs.categories[0].slug}`}>
                    <a className="category">
                        <p style={{'color': categoryColor()}}>{blogs.categories[0].name}</p>
                    </a>
                </Link>

                <Link href={`/blogs/${blogs.slug}`}>
                    <a className="title">
                        <p>{blogs.title}</p>
                    </a>
                </Link>

                <p className="published">{moment(blogs.updatedAt).fromNow()}</p>
            </div>
        </div>
    );
};

HighlightCardSm.getInitialProps = () => {
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

export default HighlightCardSm;