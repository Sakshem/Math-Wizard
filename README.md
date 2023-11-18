# Math-Wizard
Math quiz game where kids can solve basic math problems of addition, subtraction, multiplication, and division in a quiz format.
Check out Math-Wizard in action: [Math-Wizard Website](https://math-wizard-eta.vercel.app/)

## Technologies Used

- **React 18**: Game Hub is built using React, a popular JavaScript library for building user interfaces. React 18 provides a powerful foundation for creating dynamic and interactive components.

- **Chakra UI**: The front end of the website is styled using Chakra UI, a customizable and accessible component library for React. Chakra UI offers a wide range of pre-designed components that enhance the visual appeal and user experience of the website.

- **Vercel**: The website is deployed on Vercel, a cloud platform for static sites and serverless functions. Vercel provides a seamless deployment experience, ensuring that the website is accessible to users at all times.

## Deployment

The Math Wizard website is deployed on Vercel and can be accessed at https://math-wizard-eta.vercel.app/. Feel free to visit the website and explore.

# Project Setup with Docker Compose

## Prerequisites

Before you start, make sure you have the following prerequisites installed on your system:

- **Docker**: You can download and install Docker from [Docker's official website](https://www.docker.com/get-started).

- **Docker Compose**: Ensure you have Docker Compose installed. It's typically included with Docker on most platforms.

## Getting Started

1. **Clone the Repository**: Clone this project's repository to your local machine.

    ```bash
    git clone https://github.com/Sakshem/Math-Wizard.git
    cd game-hub
    ```

2. **Build and Start Containers**:
    - To build and start the project containers, run:

    ```bash
    docker-compose up -d
    ```

    The `-d` flag runs containers in the background.

3. **Accessing the Application**:
    - Once the containers are up and running, you can access your application in a web browser 
    ```bash
    http://localhost:5173/
    ```

4. **Stopping the Containers**:
    - To stop and remove the containers, run:

    ```bash
    docker-compose down
    ```

    This will stop and remove the containers, but it will not delete the images and volumes. Use `docker-compose down -v` to remove volumes as well.

This README section provides a basic setup guide for building the game-hub project using Docker Compose.
