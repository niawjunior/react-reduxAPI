import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
      this.props.fetchPosts();
  }
  renderPosts() {
      return this.props.posts.map((post, index) => {
          return (
              <article key={post.sys.id}>
                  <h2>{post.fields.title}</h2>
                  <img style={{width:'50%'}} src={post.fields.featuredImage}/>
                  <h3>{post.fields.description}</h3>
              </article>
          );
      });
  }
  render() {
      return (
          <div>
              <h1>ข่าวรายวัน</h1>
              {this.renderPosts()}
          </div>
      );
  }
}
function mapStateToProps(state) {
  return { posts: state.posts.all };
}
export default connect(mapStateToProps, { fetchPosts }) (PostsIndex); 