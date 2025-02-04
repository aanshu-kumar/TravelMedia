import React from 'react'
import PostCard from "./PostCard";


const Posts = ({filteredData,loading}) => {
  return (
    <div className='w-full'>
      {loading ? (
        <div className="w-full flex justify-center items-center mt-50">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="w-full flex flex-wrap justify-evenly gap-5 mt-4 mx-auto">
          {filteredData.length > 0 ? (
            filteredData.map((item, key) => <PostCard post={item} key={key} />)
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Posts
