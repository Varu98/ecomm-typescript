# Mumzworld Product Listing

This is a product listing application built with React using TypeScript. It allows users to browse and view product listings with pagination support. The application fetches product data from a mock API and displays them in a grid layout. It also includes features such as product ratings and a simple pagination component.

# Demo Link : https://ecomm-typescript-weld.vercel.app/

![demo](https://github.com/Varu98/ecomm-typescript/blob/development/public/mumzworld_assignment.gif)



## Folder Structure

The project follows the following folder structure:

```
├── src/
│   ├── components/
│   │   ├── Card.tsx
│   │   ├── Paginate.tsx
│   │   ├── ProductListing.tsx
│   │   ├── Rating.tsx
│   ├── contexts/
│   │   └── ProductListingContext.tsx
│   ├── services/
│   │   └── fetchProducts.ts
│   ├── styles/
│   │   └── styles.css
│   ├── types/
│   │   └── interfaces.ts
│   ├── App.tsx
│   ├── App.test.js
│   ├── index.tsx
│   ├── index.css
├── package.json
└── README.md
```

## Tech Stack

The application uses the following technologies and libraries:

- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Chakra UI: A flexible and accessible component library for building React applications.
- React Icons: A collection of popular icons as React components.
- MSW (Mock Service Worker): A library for mocking HTTP requests in development and testing.

## Tests

The project includes unit tests for some of the components and functionality. The tests are written using the Jest testing framework and React Testing Library. The main test file, `App.test.js`, includes two test cases:

1. **Renders product cards**: This test case ensures that the product cards are rendered correctly. It checks if the correct number of product cards are displayed on the page.

2. **Fetches products and updates pagination**: This test case verifies the pagination functionality. It simulates fetching products from the mock API and checks if the pagination is correctly updated when navigating to the next page.

To run the tests, use the following command:

```
npm test
```

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open the application in your browser:

   ```
   http://localhost:3000
   ```

The application should now be running locally on your machine.

## API Integration

The application fetches product data from a mock API. The API endpoint used is `https://ecom-mock.mumzworld.tech/products`. It supports pagination using query parameters `page` and `limit`. The total number of pages is returned in the response as `pageCount`.

The `fetchProducts` function in the `services/fetchProducts.ts` file handles the API integration and data fetching.

## Contributing

Contributions to the Mumzworld Product Listing application are welcome! If you find any issues or have ideas for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
