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
    		this.getmyths()
    	},
       	methods:{
       		getmyths ()	{
       			this.$parent.$parent.myths_arr = [{header: "Myth #1 “Life Insurance Is Expensive”", desc:"Some policies are expensive, but 80 percent of people overestimate the cost of life insurance. A term policy is an inexpensive option and covers the insured for a certain period of time. A permanent life policy is a bit more expensive, but it can also gain value along the way."},{header: "Myth #2 “My Job’s Policy Will Follow Me”", desc:"Reading an employer’s life insurance proposal template may not make it obvious, but employer policies typically don’t follow a worker when they change jobs or get laid off"},{header: "Myth #3 “I Can’t Get a Permanent Policy If I Purchase Term Coverage”", desc:"With your term conversion rider, you can change to a permanent policy at any point. No additional medical exam required."},{header: "Myth #4 “Life Insurance Is Expensive”", desc:"Some policies are expensive, but 80 percent of people overestimate the cost of life insurance. A term policy is an inexpensive option and covers the insured for a certain period of time. A permanent life policy is a bit more expensive, but it can also gain value along the way"},{header: "Myth #5 “My Job’s Policy Will Follow Me”", desc:"Reading an employer’s life insurance proposal template may not make it obvious, but employer policies typically don’t follow a worker when they change jobs or get laid off."},{header: "Myth #6 “I Can’t Get a Permanent Policy If I Purchase Term Coverage”", desc:"With your term conversion rider, you can change to a permanent policy at any point. No additional medical exam required."}];
       		}
    	}
	}
</script>