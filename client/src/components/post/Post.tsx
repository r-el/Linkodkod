import "./Post.css";
import React from "react";
import type { IPost } from "../../@types/Post";
import { Link } from "react-router-dom";

export const Post: React.FC<IPost> = ({ id, imgSrc, description, likes, author, createdAt }) => {
  const timestamps: number = Date.parse(createdAt);
  const date = new Date(timestamps);
  return (
    <div id={"" + id} className="post">
      <h4>
        by {(author && author) || "Unknown"}
        {date && ", " + date.toLocaleString()}
      </h4>
      {likes && <h6>{likes} likes</h6>}
      {/* {TODO: fix image} */}
      {imgSrc && (
        <img
          src={imgSrc}
          alt=""
          // src: https://stackoverflow.com/questions/34097560/react-js-replace-img-src-onerror#:~:text=This%20works%20best%20for%20me
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "https://dummyimage.com/320x200/000000/ffffff.png&text=No+Image";
          }}
        />
      )}
      {description && <p>{description}</p>}
      <Link to={`/post/${id}`}>To Post Details</Link>
    </div>
  );
};
