import React, { useState } from 'react'
import './App.css'
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegHeart, FaHeart, FaRegCommentAlt, FaRegShareSquare } from "react-icons/fa";


const App = () => {
  const imgUrl = 'https://images.unsplash.com/photo-1702744470576-8fad17cc52fd?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  //handle likes
  const handleLikes = () => {
    if(!like){
      setLike(true);
      setCount(count + 1)
    } else{
      setLike(false);
      setCount(count - 1);
    }
  }

  
  return (
    <>
      <div className="main-container">
        <h1 className="text-info">POST LIKE APP</h1>
        <h4>Likes Count : {count}</h4>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-header">
            <FaRegCircleUser /> UserName
          </div>

          <img src={imgUrl} alt="post-img" height={"300px"} width={"100%"} onDoubleClick={handleLikes} />

          <div className="card-footer">
            {like ? (
              <FaHeart
                size={30}
                className="text-danger"
                onClick={handleLikes}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <FaRegHeart 
              size={36} 
              onClick={handleLikes}
              style={{cursor: "pointer"}} />

            )}
            &nbsp;
            <FaRegCommentAlt size={30} />
            &nbsp;
            <FaRegShareSquare size={30} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App