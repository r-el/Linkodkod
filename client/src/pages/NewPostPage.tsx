import { useNavigate } from "react-router-dom";
import "./NewPostPage.css";
import { useState } from "react";
import { creaetNewPost } from "../services/postService";

export default () => {
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [imgPath, setImgPath] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!author || !description || !imgPath) {
      return setError("Please fill in all fields");
    }

    try {
      const result = await creaetNewPost(author, description, imgPath);

      if (result.success) {
        console.log("Post created successfuly: ", result.data);
        navigate("/");
      } else {
        console.log("Failed to create post: ", result);
        setError(result.error || "Failed to create post");
      }
    } catch (error) {
      setError(error?.response?.data?.error || "Error during creating post, please try again");
      console.error("Post creation error:", error);
    }
  }
  return (
    <div id="new-post">
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
          placeholder="Enter author: "
          minLength={2}
          required
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          placeholder="Enter description: "
          minLength={10}
          required
        />
        <label htmlFor="imgPath">Image Path</label>
        <input
          type="text"
          id="imgPath"
          value={imgPath}
          onChange={({ target }) => setImgPath(target.value)}
          placeholder="Enter imgPath: "
          required
        />
        <button type="submit">Publish Post</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};
