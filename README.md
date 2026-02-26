# second_try1

A Node.js application with Docker setup, tested via GitHub Actions, and ready for deployment on Render.

## Features

- Built with Node.js (v18)
- Dockerized for consistent environments
- CI workflow with GitHub Actions for tests and Docker build
- Ready for deployment on Render

## Prerequisites

- [Node.js v18](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (if running locally with Docker)
- Optional: Render account for deployment

## Installation

1. Clone the repo:

```bash
git clone https://github.com/your-username/second_try1.git
cd second_try1

2. Install dependencies:
npm install

3. Create a .env file in the root directory with your environment variables:

Running the App
1. Run with Node.js (without Docker)
npm start

Open your browser at http://localhost:5000

2. Run with Docker
# Build the Docker image
docker build -t second_try1 .

# Run the Docker container
docker run --rm -p 5000:5000 second_try1

Running Tests
npm test

