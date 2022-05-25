const girl = 'Ikaros'

const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            girl: 'Ikaros',
            brand: 'Darkness Mastery',
            selectedVariant: 0,
            description:
                'Ikaros is the sole heir of the renowned Mage family of Penglai Island.',
            url: 'https://www.youtube.com/watch?v=RsaOpPR0YN0',
            inventory: 0,
            onSale: true,
            variants: [
                {
                    id: 2234,
                    color: 'green',
                    image: './assets/images/ikaros_1.jpg',
                    quantity: 50,
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/ikaros_2.jpg',
                    quantity: 0,
                },
                {
                    id: 2235,
                    color: 'purple',
                    image: './assets/images/ikaros_3.jpg',
                    quantity: 1,
                },
            ],
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeToCart() {
            this.cart -= 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
    },
    computed: {
        title() {
            if (this.onSale) {
                return this.girl + ' ' + this.brand + ' is on sale'
            } else {
                return this.girl + ' ' + this.brand
            }
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
    },
})
