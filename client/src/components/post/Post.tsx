import "./Post.css";
import React from "react";
import type { IPost } from "../../@types/Post";

export const Post: React.FC<IPost> = ({ id, imgSrc, description, likes, author, createdAt }) => {
  return (
    <div id={"" + id} className="post">
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
      <h4>
        by {(author && author) || "Unknown"}
        {createdAt && createdAt instanceof Date && ", " + createdAt.toLocaleString()}
      </h4>
      <h4>likes: {(likes && likes) || 0}</h4>
      {description && <p>{description}</p>}
    </div>
  );
};
