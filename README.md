# Express CRUD API with Redis using Docker Compose

This project demonstrates a simple CRUD (Create, Read, Update, Delete) API built with Express.js, connected to a Redis database. Both the Express server and Redis are containerized using Docker Compose, making it easy to spin up the entire environment with a single command.

## Features

- **CRUD Operations**: The API supports basic CRUD operations for managing data.
- **Express Server**: An Express.js server provides the RESTful API endpoints.
- **Redis Database**: Data is stored and retrieved from a Redis database.
- **Docker Compose**: Easily spin up the entire environment with `docker-compose up`.
- **Network Configuration**: Both the Express server and Redis container are on the same Docker network.
- **Port Configuration**: The Express server is configured to run on port 3000.

## API Endpoints

### Create a new item

- **POST** `/items`
  - Description: Creates a new item in Redis with the provided key-value pair.
  - Request body:
    ```json
    {
      "key": "value",
      "key2": "value2"
    }
    ```
  - Response:
    - `200 OK` on success with message: "Data added successfully"
    - `400 Bad Request` if request body is invalid
    - `500 Internal Server Error` for server errors

### Get all items

- **GET** `/items`
  - Description: Retrieves all items stored in Redis.
  - Response:
    - `200 OK` with an array of all items in JSON format
    - `500 Internal Server Error` for server errors

### Get an item by key

- **GET** `/items/:key`
  - Description: Retrieves the value of a specific item in Redis by key.
  - Parameters:
    - `:key` - The key of the item to retrieve
  - Response:
    - `200 OK` with the value of the item in JSON format
    - `404 Not Found` if item does not exist
    - `500 Internal Server Error` for server errors

### Delete an item

- **DELETE** `/items/:key`
  - Description: Deletes an item from Redis by key.
  - Parameters:
    - `:key` - The key of the item to delete
  - Response:
    - `200 OK` on success with message: "Item deleted successfully"
    - `404 Not Found` if item does not exist
    - `500 Internal Server Error` for server errors

## Prerequisites

- Docker installed on your machine ([Docker Installation Guide](https://docs.docker.com/get-docker/))
- Docker Compose installed on your machine ([Docker Compose Installation Guide](https://docs.docker.com/compose/install/))

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/abdulkarim018/docker-redis-rest-api.git
   cd docker-redis-rest-api
   ```

2. Build and start the Docker containers:

   ```bash
   docker-compose up -d
   ```

   This command will start the Express server and Redis containers in detached mode.

3. Verify the setup:

   - Express server: Visit `http://localhost:3000` in your browser or use an API testing tool (e.g., Postman) to interact with the API endpoints.

## Technologies Used

- **Express.js**: Node.js web application framework for the API
- **Redis**: In-memory data structure store used as the database
- **Docker**: Containerization for easy deployment and management
- **Docker Compose**: Multi-container orchestration and configuration

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
