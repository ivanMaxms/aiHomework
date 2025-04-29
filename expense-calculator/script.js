document.addEventListener('DOMContentLoaded', () => {
    const addRowBtn = document.getElementById('addRowBtn');
    const calculateBtn = document.getElementById('calculateBtn');
    const expenseTable = document.getElementById('expenseTable').getElementsByTagName('tbody')[0];

    // Add new row to the table
    addRowBtn.addEventListener('click', () => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><input type="text" class="category-input" placeholder="Enter category"></td>
            <td><input type="number" class="amount-input" placeholder="Enter amount" min="0" step="0.01"></td>
            <td><button class="delete-btn">Delete</button></td>
        `;
        expenseTable.appendChild(newRow);
    });

    // Delete row when delete button is clicked
    expenseTable.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const row = e.target.parentNode.parentNode;
            row.remove();
        }
    });

    // Calculate and display results
    calculateBtn.addEventListener('click', () => {
        const expenses = [];
        const rows = expenseTable.getElementsByTagName('tr');

        // Collect all expenses
        for (const row of rows) {
            const categoryInput = row.querySelector('.category-input');
            const amountInput = row.querySelector('.amount-input');
            
            if (categoryInput && amountInput) {
                const category = categoryInput.value.trim();
                const amount = parseFloat(amountInput.value);
                
                if (category && !isNaN(amount) && amount > 0) {
                    expenses.push({ category, amount });
                }
            }
        }

        // Calculate total expenses
        const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        
        // Calculate average daily expense
        const averageDaily = totalExpenses / 30;

        // Group expenses by category and get top 3
        const categoryTotals = expenses.reduce((acc, expense) => {
            if (!acc[expense.category]) {
                acc[expense.category] = 0;
            }
            acc[expense.category] += expense.amount;
            return acc;
        }, {});

        // Convert to array and sort by amount
        const topCategories = Object.entries(categoryTotals)
            .map(([category, amount]) => ({ category, amount }))
            .sort((a, b) => b.amount - a.amount)
            .slice(0, 3);

        // Display results
        document.getElementById('totalExpenses').textContent = `$${totalExpenses.toFixed(2)}`;
        document.getElementById('averageDaily').textContent = `$${averageDaily.toFixed(2)}`;
        
        // Display top categories
        const topExpensesList = document.getElementById('topExpenses');
        topExpensesList.innerHTML = '';
        
        topCategories.forEach(({ category, amount }) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="category">${category}</span>
                <span class="amount">$${amount.toFixed(2)}</span>
            `;
            topExpensesList.appendChild(li);
        });
    });
}); 