import { useEffect, useState } from "react";
import type { IPost } from "../@types/Post";
import "./PostDetailPage.css";
import { useParams } from "react-router-dom";
import { getPostById } from "../services/postService";

export const PostDetailPage = () => {
  const [post, setPost] = useState<IPost | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getPostById(id);
        if (response.success && response.data) {
          const postData = response.data;
          setPost(postData);
        } else {
          setError(response.err || `Failed to fetch post${id && ` (id: ${id})`}.`);
        }
      } catch (error) {
        console.error("Error fetching post: ", error);
        setError(`Error during fetch post${id && ` (id: ${id})`}. please try again`);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <p className="error">{error}</p>;
  if (!post) return <p>Post not found</p>;

  const { imgSrc, description, likes, author, createdAt } = post;

  return (
    <div id="post-detail">
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
