// Post model - represents a single post object
/**
 * Creates a new Post instance.
 * @param {Object} params
 * @param {number} [params.id] - The unique identifier for the post.
 * @param {string} params.imgSrc - The image source path of the post.
 * @param {string} params.description - The description of the post.
 * @param {number} params.likes - The number of likes on the post.
 * @param {Date} params.createdAt - The date the post was created.

 */
export class Post {
  constructor({ id, imgSrc, description, likes, author, createdAt }) {
    this.id = id;
    this.imgSrc = imgSrc;
    this.description = description;
    this.likes = likes;
    this.author = author;
    this.createdAt = createdAt;
  }
}
