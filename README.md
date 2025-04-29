# Fake Store API Testing

This project contains a JavaScript implementation for testing the Fake Store API (https://fakestoreapi.com/products).

## Project Structure

```
api-testing/
├── README.md
├── .gitignore
└── api_test.js
```

## Features

- Performs GET request to Fake Store API
- Validates response status code
- Checks product data integrity:
  - Title existence and non-empty
  - Price non-negative
  - Rating within valid range (0-5)
- Collects and reports defective products

## Usage

The script can be run in multiple ways:

1. Browser Console:
   - Open browser developer tools
   - Copy and paste the contents of `api_test.js`
   - Press Enter to execute

2. Node.js:
   ```bash
   node src/api_test.js
   ```

3. ReqBin or similar API testing tools

## Output

The script will output:
- Total number of products
- Number of defective products
- Detailed list of defective products with their IDs and specific defects

## Requirements

- Modern web browser or Node.js environment
- No external dependencies required 