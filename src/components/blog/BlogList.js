import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import client from '../../imports/sanityclient';

export default class BlogList extends Component {
    constructor(props){
        super(props)

        this.state = {
            blogPosts: []
        }
    }

    componentDidMount(){
        this.getBlogTitles();
    }

    getBlogTitles = () => {
        client
        .fetch('*[_type == "blog"]')
        .then((res) => {
            const posts = res.map((post) => <Link to={`/blog/${post.slug.current}`} key={post.slug.current}><li className="blog_card" ><h5>{post.title}</h5><p>{post.description}</p></li></Link>);
            this.setState({blogPosts: posts})
        })
    }

    // setPost = (slug) => {
    //     this.props.setPost(slug)
    // }

    render(){
        return(
            <div className="container" style={{marginTop: 175, textAlign: 'left'}}>
                <div className="row">
                    <ul>{this.state.blogPosts}</ul>
                </div>
            </div>
        )
    }
}