# Book Store App - Backend

This is the backend repository for the Book Store App, a web application built using the MERN stack (MongoDB, Express, React, Node.js). The backend provides APIs to manage a collection of books, enabling users to perform CRUD operations. The frontend of the application can be found [here](https://book-store-app-frontend-amber.vercel.app/).

## Features

- **CRUD Operations**: Create, Read, Update, and Delete books in the database.
- **Toggle View**: Supports both table and card views on the frontend.
- **Modal View**: Display book details in a small modal view.
- **API Endpoints**: RESTful API to manage book data.

## Live Demo

- **Frontend Live**: [https://book-store-app-frontend-amber.vercel.app/](https://book-store-app-frontend-amber.vercel.app/)

## Repository Links

- **Frontend Repository**: [GitHub - Frontend](https://github.com/mayurk224/Book_Store_App-Frontend)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (you can use MongoDB Atlas for cloud-based MongoDB)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/mayurk224/Book_Store_App-Backend.git
   cd Book_Store_App-Backend
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Environment Variables**:

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   PORT=5555
   MONGODB_URI=your_mongodb_connection_string
   COLLECTION_NAME=your_collection_name
   ```

   - Replace `your_mongodb_connection_string` with your actual MongoDB connection string.
   - Replace `your_collection_name` with the name of the collection (e.g., `books`).

4. **Start the Server**:

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:5555`.

## API Endpoints

| Method | Endpoint           | Description               |
|--------|---------------------|---------------------------|
| GET    | `/books`           | Get all books             |
| GET    | `/books/:id`       | Get a single book by ID   |
| POST   | `/books`           | Create a new book         |
| PUT    | `/books/:id`       | Update a book by ID       |
| DELETE | `/books/:id`       | Delete a book by ID       |

## Folder Structure

```
Book_Store_App-Backend/
├── models/            # Mongoose schemas
│   └── bookModel.js
├── routes/            # API routes
│   └── booksRoute.js
├── .env               # Environment variables
├── .gitignore
├── index.js           # Entry point for the server
├── package.json
└── README.md
```

## Tech Stack

- **Node.js** and **Express.js** for the server and API handling.
- **MongoDB** with **Mongoose** for the database.
- **dotenv** for environment variable management.
- **CORS** middleware for Cross-Origin Resource Sharing.

## Deployment

The backend can be deployed to cloud platforms like [Render](https://render.com/). Make sure to set up the environment variables on your cloud platform as specified in the `.env` file.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or need support, feel free to reach out to:

**Mayur Dilip Kamble**  
📧 Email: [mayurkamble0250@gmail.com](mailto:mayurkamble0250@gmail.com)
