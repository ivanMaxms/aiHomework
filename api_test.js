// Function to validate a single product
function validateProduct(product) {
    const defects = [];
    
    // Check title
    if (!product.title || product.title.trim() === '') {
        defects.push('Missing or empty title');
    }
    
    // Check price
    if (product.price < 0) {
        defects.push('Negative price');
    }
    
    // Check rating
    if (!product.rating || typeof product.rating.rate === 'undefined') {
        defects.push('Missing rating');
    } else if (product.rating.rate > 5) {
        defects.push('Rating exceeds 5');
    }
    
    return defects;
}

// Function to test the API
async function testFakeStoreAPI() {
    try {
        // Make the GET request
        const response = await fetch('https://fakestoreapi.com/products');
        
        // Check response status
        if (response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse the JSON response
        const products = await response.json();
        
        // Array to store defective products
        const defectiveProducts = [];
        
        // Validate each product
        products.forEach(product => {
            const defects = validateProduct(product);
            if (defects.length > 0) {
                defectiveProducts.push({
                    id: product.id,
                    title: product.title,
                    defects: defects
                });
            }
        });
        
        // Log results
        console.log(`Total products: ${products.length}`);
        console.log(`Defective products: ${defectiveProducts.length}`);
        console.log('Defective products details:', defectiveProducts);
        
        return {
            totalProducts: products.length,
            defectiveProducts: defectiveProducts
        };
        
    } catch (error) {
        console.error('Error testing API:', error);
        throw error;
    }
}

// Execute the test
testFakeStoreAPI()
    .then(results => {
        console.log('Test completed successfully');
    })
    .catch(error => {
        console.error('Test failed:', error);
    }); 