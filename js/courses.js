

Vue.component("grocery-item", {
    template: '<li v-on:click="bought = !bought" v-bind:class="{ bought: bought }">{{ title }}</li>',
    props: ["title"],
    data: function() {
        return {
            bought: false
        }
    }
  });
  
  new Vue({
    el: ".courses",
    data: {
      message: "Hello",
      groceries: [
          { name: "Modern", product: 'bed sale', price: "$120", img:"images/bed.jpg"},
          { name: "Modern", product: 'chair', price: "$120", img:"images/bed2.jpg"},
          { name: "Modern", product: 'desk', price: "$100", img:"images/chair.jpg"},
          { name: "Modern", product: 'new', price: "$100", img:"images/chair2.jpg"},
          { name: "Modern", product: 'bed', price: "$100", img:"images/couch.jpg"},
          { name: "Modern", product: 'bed', price: "$100", img:"images/new.jpg"},
          { name: "Modern", product: 'bed', price: "$100", img:"images/new2.jpg"},
          { name: "Modern", product: 'bed', price: "$100", img:"images/sale.jpg"},
          { name: "Modern", product: 'bed', price: "$100", img:"images/sale2.jpg"},
          { name: "Modern", product: 'bed', price: "$100", img:"images/table.jpg"},
          { name: "Modern", product: 'bed', price: "$100", img:"images/table2.jpg"},
          { name: "Modern", product: 'bed', price: "$100", img:"images/table3.jpg"},
          { name: "Modern", product: 'bed', price: "$100", img:"images/table4.jpg"},
          { name: "Modern", product: 'bed', price: "$100", img:"images/table5.jpg"}
        ]
    }
    })