# Fake Store API Testing

This project contains a JavaScript implementation for testing the Fake Store API (https://fakestoreapi.com/products).

## Project Structure

```
api-testing/
├── README.md
├── .gitignore
├── api_test.js
├── index.html
└── mock_data.js
```

## Features

- Performs GET request to Fake Store API
- Validates response status code
- Checks product data integrity:
  - Title existence and non-empty
  - Price non-negative
  - Rating within valid range (0-5)
- Collects and reports defective products
- Includes mock data with intentional errors for testing

## Usage

The script can be run in multiple ways:

1. Using the HTML Interface (Recommended):
   - Open `index.html` in your web browser
   - Choose data source:
     - Unchecked: Uses real API data
     - Checked: Uses mock data with intentional errors
   - Click the "Run API Test" button
   - View the results in both the browser and console

2. Node.js:
   ```bash
   node api_test.js
   ```

3. ReqBin or similar API testing tools

## Mock Data

The project includes mock data (`mock_data.js`) with intentional errors for testing:
- Empty product title
- Negative product price
- Rating exceeding 5
- Missing rating field

This allows testing the validation logic without relying on the API.

## Output

The script will output:
- Total number of products
- Number of defective products
- Detailed list of defective products with their IDs and specific defects
- Error summary showing the count of each type of error

## Requirements

- Modern web browser or Node.js environment
- No external dependencies required 