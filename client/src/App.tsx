import "./App.css";
import { Post } from "./components/post/Post";

export default () => (
  <>
    <Post
      id={0}
      imgSrc={"/linkodkod.jpg"}
      description={
        "descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription"
      }
      likes={0}
      author={"Ariel"}
      createdAt={new Date()}
    ></Post>
  </>
);
