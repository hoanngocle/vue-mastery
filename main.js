const girl = 'Ikaros'

const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            girl: 'Ikaros',
            image: './assets/images/ikaros_1.jpg',
            description:
                'Ikaros is the sole heir of the renowned Mage family of Penglai Island.',
            url: 'https://www.youtube.com/watch?v=RsaOpPR0YN0',
            isFemale: true,
            inventory: 0,
            isRelease: true,
            variants: [
                {
                    id: 2234,
                    color: 'green',
                    image: './assets/images/ikaros_1.jpg',
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/ikaros_2.jpg',
                },
                {
                    id: 2235,
                    color: 'purple',
                    image: './assets/images/ikaros_3.jpg',
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
        updateImage(variantImage) {
            this.image = variantImage
        },
    },
})
