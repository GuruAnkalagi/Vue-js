<template>
<div></div>
</template>
<script>
	export default {
		data() {
	        return {
	            details : [{name: "Agent name", agentdesc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}]
	        }
    	},
    	mounted:function() {
    		this.getagentdetails()
    	},
       	methods:{
       		getagentdetails ()	{
       			this.$parent.$parent.agent_name = this.details[0].name;
       			this.$parent.$parent.agent_desc = this.details[0].agentdesc;
       		}
    	}
	}
</script>