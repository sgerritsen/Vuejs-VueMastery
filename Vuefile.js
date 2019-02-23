var app = new Vue ({
    el: '#app',
    data: {
        product: {
            name: 'Socks',
            description: 'A pair of warm, fuzzy socks',
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
                },
                {
                    variantId: 2,
                    variantColor: "blue",
                }
            ]
        }
    }
})