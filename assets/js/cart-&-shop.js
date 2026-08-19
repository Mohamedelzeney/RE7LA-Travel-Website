const products = [

    {
        id: 1,
        name: "Premium Travel Luggage",
        price: 1000,
        rating: 4.9,
        reviews: 76,
        image: "assets/images/cart-&-shop/product1.jpg"
    },

    {
        id: 2,
        name: "Travel Backpack",
        price: 1500,
        rating: 4.5,
        reviews: 47,
        image: "assets/images/cart-&-shop/product2.jpg"
    },

    {
        id: 3,
        name: "Travel Organizer Bag",
        price: 2000,
        rating: 4.8,
        reviews: 112,
        image: "assets/images/cart-&-shop/product3.jpg"
    },

    {
        id: 4,
        name: "Travel Neck Pillow",
        price: 2500,
        rating: 4.6,
        reviews: 146,
        image: "assets/images/cart-&-shop/product4.jpg"
    },

    {
        id: 5,
        name: "Passport Holder",
        price: 3000,
        rating: 4.7,
        reviews: 84,
        image: "assets/images/cart-&-shop/product5.jpg"
    },

    {
        id: 6,
        name: "Travel Water Bottle",
        price: 3500,
        rating: 4.4,
        reviews: 58,
        image: "assets/images/cart-&-shop/product6.jpg"
    },

    {
        id: 7,
        name: "Luggage Travel Strap",
        price: 4000,
        rating: 4.9,
        reviews: 129,
        image: "assets/images/cart-&-shop/product7.jpg"
    },

    {
        id: 8,
        name: "Travel Shoe Bag",
        price: 4500,
        rating: 4.3,
        reviews: 63,
        image: "assets/images/cart-&-shop/product8.jpg"
    },

    {
        id: 9,
        name: "Travel Toiletry Bag",
        price: 5000,
        rating: 4.8,
        reviews: 91,
        image: "assets/images/cart-&-shop/product9.jpg"
    },

    {
        id: 10,
        name: "Travel Eye Mask",
        price: 5500,
        rating: 4.5,
        reviews: 74,
        image: "assets/images/cart-&-shop/product10.jpg"
    },

    {
        id: 11,
        name: "Travel Packing Cubes",
        price: 6000,
        rating: 4.7,
        reviews: 105,
        image: "assets/images/cart-&-shop/product11.jpg"
    }

];



/* ================================
   CART
================================ */

function getCart() {

    return JSON.parse(
        localStorage.getItem("travellingCart")
    ) || [];

}



function saveCart(cart) {

    localStorage.setItem(
        "travellingCart",
        JSON.stringify(cart)
    );

}



/* ================================
   PRICE
================================ */

function formatPrice(price) {

    return price.toLocaleString("en-EG") + " EGP";

}



/* ================================
   STARS
================================ */

function createStars(rating) {

    let stars = "";

    for (let i = 1; i <= 5; i++) {

        if (rating >= i) {

            stars +=
                '<i class="fa-solid fa-star"></i>';

        } else if (rating >= i - 0.5) {

            stars +=
                '<i class="fa-solid fa-star-half-stroke"></i>';

        } else {

            stars +=
                '<i class="fa-regular fa-star"></i>';

        }

    }

    return stars;

}



/* ================================
   ADD TO CART
================================ */

function addToCart(productId) {

    let cart = getCart();

    const product = products.find(
        item => item.id === productId
    );

    if (!product) return;


    const existingProduct = cart.find(
        item => item.id === productId
    );


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            rating: product.rating,

            reviews: product.reviews,

            image: product.image,

            quantity: 1

        });

    }


    saveCart(cart);

    updateCartCount();


    alert(
        product.name + " added to cart!"
    );

}



/* ================================
   CART COUNT
================================ */

function updateCartCount() {

    const countElement =
        document.getElementById("cart-count");

    if (!countElement) return;


    const cart = getCart();


    const total = cart.reduce(
        (sum, item) =>
            sum + item.quantity,
        0
    );


    countElement.textContent = total;

}



/* ================================
   PRODUCTS
================================ */

function renderProducts() {

    const container =
        document.getElementById(
            "products-container"
        );


    if (!container) return;


    container.innerHTML = "";


    products.forEach(product => {

        container.innerHTML += `

            <div class="product-card">

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                </div>


                <div class="product-content">

                    <h3>
                        ${product.name}
                    </h3>


                    <div class="price">
                        ${formatPrice(product.price)}
                    </div>


                    <div class="product-bottom">

                        <div class="rating">

                            ${createStars(product.rating)}

                            <span>
                                ${product.rating}
                                (${product.reviews})
                            </span>

                        </div>


                        <button
                            class="add-cart"
                            onclick="addToCart(${product.id})"
                        >

                            Add to Cart

                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}



/* ================================
   CART PAGE
================================ */

function renderCart() {

    const container =
        document.getElementById(
            "cart-container"
        );


    if (!container) return;


    const cart = getCart();


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-cart-shopping"></i>

                <h2>
                    Your cart is empty
                </h2>

                <p>
                    Add some travel products
                    from the E-commerce page.
                </p>

                <a href="shop.html">
                    Continue Shopping
                </a>

            </div>

        `;

        return;

    }


    let subtotal = 0;


    let html = `

        <div class="cart-wrapper">

            <div class="cart-title">

                <h2>
                    Your Shopping Cart
                </h2>

            </div>


            <div class="cart-items">

    `;


    cart.forEach(item => {

        const total =
            item.price * item.quantity;


        subtotal += total;


        html += `

            <div class="cart-item">


                <div class="cart-item-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>


                <div class="cart-item-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ${formatPrice(item.price)}
                    </p>

                </div>


                <div class="quantity">

                    <button
                        onclick="changeQuantity(
                            ${item.id},
                            -1
                        )"
                    >
                        -
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        onclick="changeQuantity(
                            ${item.id},
                            1
                        )"
                    >
                        +
                    </button>

                </div>


                <div class="cart-item-total">

                    ${formatPrice(total)}

                </div>


                <button
                    class="remove"
                    onclick="removeFromCart(${item.id})"
                >

                    <i class="fa-solid fa-trash"></i>

                </button>


            </div>

        `;

    });


    html += `

            </div>


            <div class="cart-bottom">


                <a
                    href="shop.html"
                    class="continue-shopping"
                >

                    <i class="fa-solid fa-arrow-left"></i>

                    Continue Shopping

                </a>


                <div class="cart-total">

                    <p>
                        Subtotal
                    </p>

                    <h2>
                        ${formatPrice(subtotal)}
                    </h2>


                    <button>
                        Proceed To Checkout
                    </button>

                </div>


            </div>

        </div>

    `;


    container.innerHTML = html;

}



/* ================================
   QUANTITY
================================ */

function changeQuantity(id, amount) {

    let cart = getCart();


    const item = cart.find(
        product => product.id === id
    );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart = cart.filter(
            product => product.id !== id
        );

    }


    saveCart(cart);

    renderCart();

    updateCartCount();

}



/* ================================
   REMOVE
================================ */

function removeFromCart(id) {

    let cart = getCart();


    cart = cart.filter(
        product => product.id !== id
    );


    saveCart(cart);

    renderCart();

    updateCartCount();

}



/* ================================
   START
================================ */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderProducts();

        renderCart();

        updateCartCount();

    }
);