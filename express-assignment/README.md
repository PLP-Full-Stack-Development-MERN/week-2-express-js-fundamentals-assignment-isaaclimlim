# Express.js & MongoDB API

This project is an Express.js-based API that connects to a MongoDB database with two collections: `users` and `products`. The API allows basic CRUD operations for both collections.

## Prerequisites
Ensure you have the following installed:
- Node.js (>= 14.x)
- MongoDB (local or cloud instance)

## Installation
1. Clone this repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Environment Variables
Create a `.env` file in the project root and add the following:
   ```env
   PORT=3000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
   ```
Replace `<username>`, `<password>`, and `myDatabase` with your MongoDB credentials and database name.

## Running the Server
Start the development server:
   ```sh
   npm run dev
   ```
The API will be accessible at `http://localhost:3000`.

## API Endpoints

### Users
| Method | Endpoint       | Description            |
|--------|---------------|------------------------|
| GET    | `/users`      | Get all users          |
| GET    | `/users/:id`  | Get a user by ID       |
| POST   | `/users`      | Create a new user      |
| PUT    | `/users/:id`  | Update a user by ID    |
| DELETE | `/users/:id`  | Delete a user by ID    |

### Products
| Method | Endpoint        | Description             |
|--------|----------------|-------------------------|
| GET    | `/products`     | Get all products        |
| GET    | `/products/:id` | Get a product by ID     |
| POST   | `/products`     | Create a new product    |
| PUT    | `/products/:id` | Update a product by ID  |
| DELETE | `/products/:id` | Delete a product by ID  |

## Example Requests

### Create a User
**Request:**
```sh
POST /users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "_id": "60f7c6f4e1d2c30017a85e3b",
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Create a Product
**Request:**
```sh
POST /products
Content-Type: application/json

{
  "name": "Laptop",
  "price": 1200.99
}
```

**Response:**
```json
{
  "_id": "60f7c705e1d2c30017a85e3c",
  "name": "Laptop",
  "price": 1200.99
}
```

## License
This project is open-source and available under the MIT License.

