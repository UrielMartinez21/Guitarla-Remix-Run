import React from 'react'
import Post from './post'

const ListadoPosts = ({ posts }) => {
  return (
    <div>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map(post => (
          <Post
            key={post.id}
            post={post.attributes}
          />
        ))}
      </div>
    </div>
  )
}

export default ListadoPosts
