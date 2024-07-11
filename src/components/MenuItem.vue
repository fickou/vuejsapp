<template>
	<div class="menu-item">
		<div class="image">
			<img class="menu-item__image" :src="image.source" :alt="image.alt" />
		</div>
		
		<div class="info">
			<h3>{{ name }}</h3>
			<p>
				Prix : {{ generatedPrice }}
				<span v-if="onSale">(10% de réduction !)</span>
			</p>
			<p v-if="inStock">En stock</p>
			<p v-else>En rupture de stock</p>
			<div>
				<label for="add-item-quantity">Quantité : {{ localQuantity }}</label><br>
				<input v-model.number="localQuantity" id="add-item-quantity" type="number" /><br>
				<BaseButton :disabled="!inStock" @click="updateShoppingCart(localQuantity)">
					Ajouter au panier
				</BaseButton>
			</div>
		</div>
	</div>
</template>

<script>
import BaseButton from './BaseButton.vue';



export default {
	name: "MenuItem",
	components: {
		BaseButton,
	},
	props: {
		image: {
			type: Object,
			required: true
		},
		inStock: {
			type: Boolean,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		quantity: {
			type: Number,
			default: 1
		}
	},
	data() {
		return {
			onSale: false,
			localQuantity: this.quantity // Copier la prop dans une variable locale
		};
	},
	computed: {
		generatedPrice() {
			if (this.onSale) {
				return (this.price * 0.9).toFixed(2);
			} else {
				return this.price;
			}
		}
	},
	watch: {
		quantity(newQuantity){
			this.localQuantity = newQuantity;
		}
	},
	methods:{
		updateShoppingCart(quantity) {
			this.$emit("add-items-to-cart", quantity)
		}
	},
	beforeMount() {
		const today = new Date().getDate();
		if (today % 2 === 0) {
			this.onSale = true;
		}
	}
}
</script>

<style lang="scss">
.menu-item {
	display: flex;
	width: 500px;
	margin: auto;
	justify-content: space-between;
	margin-bottom: 30px;

	&__image {
		max-width: 300px;
	}
}
.image{
	border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
	padding-top: 10px;
}
.info{
	border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
	width: 200px;
}
.info input{
	width: 100px;
	height: 25px;
	margin-bottom: 10px;
}
.info button{
	height: 20px;
}
.info button:hover{
	cursor: pointer;
	background-color: black;
	color: white;
}

</style>
