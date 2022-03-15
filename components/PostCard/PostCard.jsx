import React from 'react'

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard
