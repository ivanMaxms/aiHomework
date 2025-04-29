const mockProducts = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fQdJx5LxL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120
        }
    },
    {
        id: 2,
        title: "", // Error: Empty title
        price: -22.3, // Error: Negative price
        description: "Slim-fitting style, contrast raglan long sleeve. Made to order item dyed and finished by our expert tailors. Pre-shrunk fabrics guarantee a better fit.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
            rate: 6.5, // Error: Rating exceeds 5
            count: 55
        }
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: {
            // Error: Missing rating
            count: 259
        }
    },
    {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description: "The color could be slightly different between on the screen and actual product.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: {
            rate: 2.1,
            count: 430
        }
    }
]; 