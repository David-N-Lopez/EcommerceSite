Vue.component('add-to-cart',{
 
    props: ['name', 'price','image'],
    template:    `<button type="submit" class="btn add-to-cart-btn m-2 inline" @click = "callItem">Add to Cart</button>`,
    methods:{
        callItem(){
            let product = {name: this.name, price:this.price, image: this.image}
            this.$emit('add', product);
        }
    }
});
Vue.component('mini-cart-item',{
    props: ['name', 'price','image'],
    template: `<div class="row"> 
    <div class="col-4">
       <img src="../../assets/images/CardImage3.jpg" class="mini-cart-img inline">
    </div>
    <div class="col-5">
        <p class="bold white-color mini-cart-product">{{name}}</p>
        <p class="white-color">{{price}}.50</p>
    </div>
    <div class="col-3"><a class="inline white-color mini-cart-exit">X</a></div>
     </div>`
})
var app = new Vue({
    el: '#cart',
    data:{ 
        miniCartVisible: false,
        miniCartArray: []
    },
    methods:{
        newItem(value){
            this.miniCartArray.push(value)
            this.miniCartVisible = true
           setTimeout(()=> {this.miniCartVisible = false}, 5000);
        }
    }
})