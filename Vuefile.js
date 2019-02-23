var app = new Vue ({
    el: '#app',
    data: {
        product: {
            name: 'Socks',
            description: 'A pair of warm, fuzzy ' + this,
            image: {
                path: './assets/vmSocks-green-onWhite.jpg',
                description: 'Green socks',
            },
            inStock: true,
            details: ['80% katoen', '20% polyester', 'Gender neutral'],
            variants: [
                {
                    variantId: 1,
                    variantColor: "green",
                    image: {
                        path: './assets/vmSocks-green-onWhite.jpg',
                        description: 'Green socks',
                    },
                },
                {
                    variantId: 2,
                    variantColor: "blue",
                    image: {
                        path: './assets/vmSocks-blue-onWhite.jpg',
                        description: 'Blue socks',
                    },
                }
            ]
        },
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        changeProductImage(newImage) {
            this.product.image = newImage;
        }
    }
})