import React from 'react'


function Comunityfull() {
  return (
    <div>
    <h1 className="text-2xl font-bold justify-center flex mt-20">From Our Community</h1>
    <div className="grid grid-cols-2 gap-44 p-8">
      <div className="flex flex-col">
        {comments.slice(0, 2).map((comment, index) => (
          <CommentBox2
            key={index}
            commandtext={comment.commandtext}
            userName={comment.userName}
            userImage={comment.userImage}
            rating={comment.rating}
            likes={comment.likes}
          />
        ))}
      </div>
      <div className="flex  flex-col">
        {comments.slice(2).map((comment, index) => (
          <CommentBox2
            key={index + 2}
            commandtext={comment.commandtext}
            userName={comment.userName}
            userImage={comment.userImage}
            rating={comment.rating}
            likes={comment.likes}
          />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Comunityfull