<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">DOCKER-REDIS-REST-API</h1>
</p>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/AbdulKarim018/docker-redis-rest-api?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/AbdulKarim018/docker-redis-rest-api?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/AbdulKarim018/docker-redis-rest-api?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/AbdulKarim018/docker-redis-rest-api?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat&logo=YAML&logoColor=white" alt="YAML">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat&logo=Docker&logoColor=white" alt="Docker">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

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
