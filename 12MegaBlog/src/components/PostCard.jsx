import React from 'react'
import service from '../appwrite/appwrite_config'

function PostCard({
  $id,
  title,
  featuredImage
}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          {/* getFilePreview returns image preview */}
          <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
        </div>
      </div>
    </Link>
  )
}

export default PostCard