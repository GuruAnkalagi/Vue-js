<template>
<div></div>
</template>
<script>
	export default {
		data() {
	        return {
	        }
    	},
    	mounted:function() {
    		this.getintroduction()
    	},
       	methods:{
       		getintroduction ()	{
       			this.$parent.$parent.introduction = "Life is full of uncertainties, and we at Sridama Business Solutions recognize that one moment can change everything. If you or a loved one were to pass on, how would your family handle funeral costs, debts and other financial obligations? These moments sometimes come unexpectedly, and that’s why we’ve prepared this {life insurance proposal template} for you. We may not know what's in store, but we can always be financially prepared.";
       		}
    	}
	}
</script>