app.component('product-detail', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
    },
    template:
        /*html*/
        `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img 
                        :src="image"
                        alt="profile-image"
                        :class="[inStock ? '' : 'out-of-stock-img']"
                    >
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>
                            
                    <p>Shipping: {{ shipping }}</p>
                    <div 
                        v-for="(item, index) in variants" 
                        :key="item.id" 
                        @mouseover="updateVariant(index)"
                        class="color-circle"
                        :style="{ backgroundColor: item.color}"
                    ></div>

                    <button 
                        class="button"
                        :class="{ disabledButton: !inStock }"
                        :disabled="!inStock"
                        @click="addToCart">Add to Cart
                    </button>
                    <button class="button" @click="removeToCart">Remove to Cart</button>
                    <a :href="url">Click here to see information!</a>
                </div>
            </div>
        </div>`,
    data() {
        return {
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
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        },
    },
})
