
new Vue({
    el: '#app',
    data: {
      premium: false,
      brand: 'Travel Vue',
      text: 'Hello Vue.js',
      image: 'images/venice.jpg',
      inStockinventory: 10,
      details: ["2 people", "3 days", "$300"],
      variants: [
      {
        variantId: 2234,
        variantTex: "venice",
        variantColor: "green",
        variantImage: 'images/venice.jpg'
      },
      {
        variantId: 2235,
        variantTex: "museum",
        variantColor: "orange",
        variantImage: "images/museum.jpg"
      }],
      cart: 0
    },
    methods: {
      addToCart() {
        this.cart += 1
    //  this.$emit('add-to-cart')
      },
      updateProduct(variantImage){
        this.image = variantImage
      },
      inStock(){
        return this.variants[this.selectedVariant].variantQuantity
      }
    },
    computed: {
      title() {
        return this.brand + ' ' + this.text
      }
    }
    });