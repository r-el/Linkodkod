# Linkodkod Server

## API Documentation

### Post Endpoints

| Method | Endpoint          | Description                   |
| ------ | ----------------- | ----------------------------- |
| POST   | `/posts/`         | Create a new post             |
| GET    | `/posts/`         | Get all posts                 |
| GET    | `/posts/:id`      | Get post by id                |
| PUT    | `/posts/:id`      | Update an existing post by id |
| DELETE | `/posts/:id`      | Delete post by id             |

All POST endpoints return an object.
</br>
An object will definitely have the `success` and `data` keys.
</br>
In operation that changes values ​​such as POST, PUT and DELETE, If the operation was successful, the `message` key will also be added

## Tests

To run test for the server, run the following command:

```bash
npm test
```
