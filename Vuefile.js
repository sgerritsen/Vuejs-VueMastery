Vue.component('sockproduct', {
    props: {
        premium: {
            type: String,
            required: true,
        }
    },
    template: `<div class="product">
        <div class="product-image">
            <img v-bind:src="imagePath" v-bind:title="imageDescription" alt="sokken_plaatje">
        </div>
        <div class="product-info">
            <h1>{{ product.name }}</h1>
            <p>{{ description }}</p>
            <p>Shipping costs are {{ premiumShipping }}</p>
            <ul>
                <li v-for="detail in product.details">{{ detail }}</li>
            </ul>
            <div 
                class="color-box"
                v-for="(variant, index) in product.variants" 
                v-bind:key="variant.variantId"
                v-bind:style="{'background-color': variant.variantColor}"
                v-on:mouseover="changeProduct(index)"
                >
            </div>
            <button 
                v-on:click="addToCart()"
                :class="{ disabledButton: !product.inStock }"
                v-bind:disabled="!product.inStock">
                Add to cart
            </button>
        </div>
    </div>`,
    data() {
        return {
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
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.product.variants[this.product.variantIndex].variantId);
        },
        changeProduct(index) {
            this.product.variantIndex = index;
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
        },
        premiumShipping() {
            if (this.premium === true) {
                return 'Free';
            } else {
                return 2.99;
            }
        },
    }
})

var app = new Vue ({
    el: '#app',
    data: {
        cart: [],
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        }
    },
})