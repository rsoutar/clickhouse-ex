Certainly! Here's an updated version of your `README.md` that includes information about the two HTTP methods and the `curl` command for the POST request:

````markdown
# Clickhouse-Ex

A sample NestJS application integrated with ClickHouse.

## Description

This repository contains a sample application built using [NestJS](https://nestjs.com/) and [ClickHouse](https://clickhouse.com/). It demonstrates how to set up a basic API with NestJS and interact with a ClickHouse database.

## Features

- NestJS framework for building efficient and scalable server-side applications.
- Integration with ClickHouse for high-performance analytical database operations.
- Sample endpoints to demonstrate CRUD operations.

## Endpoints

### GET /logs

- Retrieves logs from the ClickHouse database.
- Example request: `GET http://localhost:3000/logs`

### POST /logs

- Inserts a new log entry into the ClickHouse database.
- Example request: `POST http://localhost:3000/logs`
- Request body:

  ```json
  {
    "timestamp": "2024-03-14 12:02:00",
    "level": "INFO",
    "message": "Test message"
  }
  ```
````

- Example `curl` command:

  ```bash
  curl -X POST http://localhost:3000/logs \
  -H "Content-Type: application/json" \
  -d '{ "timestamp": "2024-03-14 12:02:00", "level": "INFO", "message": "Test message" }'
  ```

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- Docker (optional, for running ClickHouse locally)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rsoutar/clickhouse-ex.git
   cd clickhouse-ex
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Set up ClickHouse:

   You can run ClickHouse locally using Docker:

   ```bash
   docker run -d --name some-clickhouse-server --ulimit nofile=262144:262144 -p 8123:8123 yandex/clickhouse-server
   ```

4. Configure the application:

   Create a `.env` file in the root directory and add your ClickHouse connection details. You can use the `.env.example` as a template.

### Running the Application

1. Start the NestJS application:

   ```bash
   npm run start
   ```

   or

   ```bash
   yarn start
   ```

2. The application will be running on `http://localhost:3000`.

### Testing

To run tests, use:

```bash
npm run test
```

or

```bash
yarn test
```

## Usage

- Access the API endpoints using a tool like Postman or curl.
- Check the `src` directory for available endpoints and services.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, find me on X (Twitter) at [@neomatic](https://x.com/neomatic)
