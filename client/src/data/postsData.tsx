
import type { PostEntity } from "../components/post/PostEntity";

export const posts: PostEntity[] = [
  {
    id: 1,
    imgSrc: "/vite.svg",
    description: "descriptiondescription",
    likes: 8,
    author: "vite",
    createdAt: new Date(1757236538826),
  },
  {
    id: 2,
    imgSrc: "/linkodkod.jpg",
    description: "abc",
    likes: 100,
    author: "likodkod",
    createdAt: new Date(1757236538826),
  },
  {
    id: 3,
    imgSrc: "/invalid-src-image",
    description: "bla bla",
    likes: 10,
    author: "in",
    createdAt: new Date(1757236538826),
  },
];
