import React from 'react';

function HeaderPost({author, date}){
  return (
    <div className="headerPost">
      <img src={author.avatar} />
      <div className="userInfos">
        <p>{author.name} <br/> <small>{date}</small></p>
        
      </div>
    </div>
  )
}

function CommentComponent({comments}){
  return (
    <div className="commentDiv">
      <hr/>
      {
        comments.map(comment => (
          <div key={comment.id} className="comment">
            <img src={comment.author.avatar} />
            <p>
              <span>{comment.author.name}</span> &nbsp;
              {comment.content}
            </p>
          </div>
        ))
      }
    </div>
  );
}

function PostItem({author, date, content, comments}){
  return (
    <div className="post">
      <HeaderPost author={author} date={date}/>
      <p className="post-content">{content}</p>
      <CommentComponent comments={comments}/>
    </div>
  )
};

export default PostItem;