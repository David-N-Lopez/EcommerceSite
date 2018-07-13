Vue.component('add-to-cart', {
 
    props: ['name', 'price','image'],
    template:`<button type="submit" class="btn add-to-cart-btn m-2 inline" @click = "callItem">Add to Cart</button>`,
    methods:{
        callItem() {
            let product = {names: this.name, prices:this.price, images: this.image, qtys: 1}
            this.$emit('add', product);
        }
    }
});
Vue.component('add-to-cart-small', {
    props: ['name', 'price','image'],
    template:`<button class="btn card-btn-pdp" @click = "callItemSmall">Add to Cart</button>`,
    methods:{
        callItemSmall() {
            let product = {names: this.name, prices:this.price, images: this.image, qtys: 1}
            this.$emit('add', product);
        }
    } 
});
Vue.component('mini-cart-item',{
    props: ['_name', '_price','_image', '_qty'],
    template: `
    <div class="row mb-2"> 
    <div class="col-3">
       <img :src="_image" class="mini-cart-img inline">
    </div>
    <div class="col-4 ">
        <p class="bold white-color mini-cart-product mb-1">{{_name}}</p>
        <p class="white-color mb-1">$ {{_price}}.00</p>
        <div class="mt-2">
        <p class="bold white-color inline">QTY</p>
        <p class="inline white-color">{{_qty}}</p>
        </div>
    </div>
    <div class="col-3 ta-right ml-0"><a class="inline white-color mini-cart-exit bold">X</a></div>
     </div>`
})
var app = new Vue({
    el: '#cart',
    data:{ 
        miniCartVisible: false,
        miniCartArray: [],
        miniCartSubtotal:0,
        totalAmount:0
    },
    methods:{
        newItem(value) {
            let allow = true;
            let index = 0;
            array = this.miniCartArray
            for (;index<array.length; index++) {
                let itemName = array[index].names
                if (itemName == value.names){
                    allow = false;
                    array[index].qtys++
                    this.miniCartSubtotal += parseInt(array[index].prices)
                    this.totalAmount +=1;
                }
            } 
            if (allow == true) {
            this.miniCartArray.unshift(value)
            this.miniCartSubtotal += parseInt(value.prices)
            this.totalAmount += 1;
            } 
            this.miniCartVisible = true
           setTimeout(()=> {this.miniCartVisible = false}, 100000);
        }
    }
})