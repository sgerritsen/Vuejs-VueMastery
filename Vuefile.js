var app = new Vue ({
    el: '#app',
    data: {
        product: {
            name: 'Socks',
            description: 'A pair of warm, fuzzy ',
            inStock: true,
            image: {
                description: 'Green socks',
            },
            variantIndex: 0,
            details: ['80% katoen', '20% polyester', 'Gender neutral'],
            variants: [
                {
                    variantId: 1,
                    variantColor: "green",
                    inStock: false,
                    image: {
                        path: './assets/vmSocks-green-onWhite.jpg',
                        description: 'Green socks',
                    },
                },
                {
                    variantId: 2,
                    variantColor: "blue",
                    inStock: true,
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
        changeProduct(index) {
            this.product.variantIndex = index;
            console.log(index);
        }
    },
    computed: {
        description() {
            return this.product.description + this.product.name;
        },
        imagePath() {
            return this.product.variants[this.product.variantIndex].image.path;
        },
        imageDescription() {
            return this.product.variants[this.product.variantIndex].image.description;
        }
    }
})