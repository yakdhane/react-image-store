Sure, here's the README.md file:

```
# React Image Online Store Application

This is a React application that displays a list of products and allows users to add them to a cart. The application also includes a cart feature that displays the list of items in the cart and the total price.

## Installation

To install the dependencies, run the following command:

```sh
npm install
```

## Usage

To run the application, use the following command:

```sh
npm start
```

This will start the application on http://localhost:3000.

## Docker

To run the application using Docker, first build the Docker image:

```sh
docker build -t react-image-store .
```

Then, run the Docker container:

```sh
docker run -p 3000:3000 react-image-store
```

This will start the application on http://localhost:3000.

## Files

- `App.jsx`: The main component that renders the ProductList and Cart components.
- `ProductList.jsx`: The component that displays the list of products.
- `Product.jsx`: The component that displays a single product.
- `Cart.jsx`: The component that displays the list of items in the cart and the total price.
- `data.js`: The file that contains the list of products.
- `Dockerfile`: The file that contains the instructions to build the Docker image and run the Docker container.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```