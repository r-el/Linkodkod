import "./Post.css";
import React from "react";
import type { IPost } from "../../@types/Post";
import { Link } from "react-router-dom";

export const Post: React.FC<IPost> = ({ id, imgSrc, description, likes, author, createdAt }) => {
  const timestamps: number = Date.parse(createdAt);
  const date = new Date(timestamps);
  return (
    <div id={"" + id} className="post">
      <h4 className="authod-date-likes">
        <span>
          by {(author && author) || "Unknown"}
          {date && ", " + date.toLocaleString()}
        </span>
        <span>{likes && <span>{likes} likes</span>}</span>
      </h4>
      {/* {TODO: fix image} */}
      {imgSrc && (
        <img
          className="post-image"
          src={imgSrc}
          alt=""
          // src: https://stackoverflow.com/questions/34097560/react-js-replace-img-src-onerror#:~:text=This%20works%20best%20for%20me
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "https://dummyimage.com/320x200/000000/ffffff.png&text=No+Image";
          }}
        />
      )}
      {description && <p className="description">{description}</p>}
      <Link to={`/post/${id}`}>To Post Details</Link>
    </div>
  );
};
