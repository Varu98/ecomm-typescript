import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { ProductsProvider } from "./contexts/ProductListingContext";
import ProductListing from "./components/ProductListing";

// Mock API response
const server = setupServer(
  rest.get("https://ecom-mock.mumzworld.tech/products", (req, res, ctx) => {
    const page = Number(req.url.searchParams.get("page"));
    const limit = Number(req.url.searchParams.get("limit"));

    // Calculate start index and end index based on page and limit
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    // Generate mock product data
    const products = Array.from({ length: limit }).map((_, index) => ({
      id: startIndex + index + 1,
      name: `Product ${startIndex + index + 1}`,
    }));

    return res(
      ctx.json({
        data: products,
        pageCount: 10, // Total number of pages
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders product cards", async () => {
  render(
    <ProductsProvider>
      <ProductListing />
    </ProductsProvider>
  );

  // Wait for the product cards to be rendered
  await screen.findAllByTestId("product-card");

  const productCards = screen.getAllByTestId("product-card");
  expect(productCards.length).toBe(10); // Assuming limit is set to 10
});

test("fetches products and updates pagination", async () => {
  render(
    <ProductsProvider>
      <ProductListing />
    </ProductsProvider>
  );

  // Wait for the product cards to be rendered
  await screen.findAllByTestId("product-card");

  // Mock API response for the next page
  server.use(
    rest.get("https://ecom-mock.mumzworld.tech/products", (req, res, ctx) => {
      const page = Number(req.url.searchParams.get("page"));
      const limit = Number(req.url.searchParams.get("limit"));

      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;

      const products = Array.from({ length: limit }).map((_, index) => ({
        id: startIndex + index + 1,
        name: `Product ${startIndex + index + 1}`,
      }));

      return res(
        ctx.json({
          data: products,
          pageCount: 10,
        })
      );
    })
  );

  // Click the next page button
  const nextPageButton = screen.getByTestId("Next");
  nextPageButton.click();

  // Wait for the updated product cards to be rendered
  await screen.findAllByTestId("product-card");

  const productCards = screen.getAllByTestId("product-card");
  expect(productCards.length).toBe(10); // Assuming limit is set to 10
  expect(screen.getByTestId("page-1")).toBeInTheDocument();
});
