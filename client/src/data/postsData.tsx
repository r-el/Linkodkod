// To load the date:
//
// save the timestamp:
// { type:'date', 'min':(new Date()).getTime() }
// then you read it back:
//
// var result = JSON.parse('{ "type":"date", "min":1234567 }');
// result.date = new Date(result.min);
// Note: the server you use to serialize it and the server you use to deserialize it has to run in the same timezone
// src: https://stackoverflow.com/questions/35225707/store-new-date-in-json-object#:~:text=3-,save%20the%20timestamp%3A,-%7B%20type%3A

import type { PostProps } from "../components/post/PostProps";

export const posts: PostProps[] = [
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
