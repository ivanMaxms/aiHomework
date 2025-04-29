# SQL Sales Analysis

This project contains SQL queries for analyzing sales data from an orders table.

## Table Structure

```sql
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer TEXT,
    amount REAL,
    order_date DATE
);
```

## Sample Data

The table contains sample sales data with the following records:
- Customer names: Alice, Bob, Charlie
- Order dates: February and March 2024
- Various order amounts

## Analysis Queries

1. **March 2024 Total Sales**
   - Calculates the total sales amount for March 2024
   - Uses DATE filtering to select March orders

2. **Top Customer by Total Spending**
   - Identifies the customer with the highest total spending
   - Groups data by customer and sums order amounts

3. **Average Order Amount (Last 3 Months)**
   - Calculates the average order amount for the last three months before the latest date in the table
   - Uses a CTE to find the latest date and calculates the date range dynamically
   - Automatically adjusts to new data as it's added to the table

## How to Run

1. Use SQLite Online or any SQL database management tool
2. Create the table using the provided schema
3. Insert the sample data
4. Run each query independently to analyze different aspects of the sales data

## File Structure

- `queries.sql`: Contains all analysis queries
- `README.md`: Project documentation 