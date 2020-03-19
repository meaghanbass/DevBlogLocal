import renderHTML from 'react-render-html';
import moment from 'moment';
import Link from 'next/link';
import { API } from '../../config';

class HighlightCardSm extends React.Component {
    render() {
        let title = this.props;
        console.log(this.props.blogs.categories[0].name);
        
        return (
            <div className="highlight-card" style={{'marginRight': this.props.marginRight}}>
                <div className="image" style={{backgroundImage: `url(${API}/blog/photo/${this.props.blogs.slug})`}}></div>

                <div className="info">
                    <p className="category" style={{'color': this.props.textColor}}>{this.props.blogs.categories[0].name}</p>
                    <p className="title">{this.props.blogs.title}</p>
                    <p className="published">{moment(this.props.blogs.updatedAt).fromNow()}</p>
                </div>
            </div>
        );
    }
}

export default HighlightCardSm;