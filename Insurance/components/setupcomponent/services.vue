<template>
	<div>
		<div class="col-md-11" v-for="(service, index) in services" style="border: solid 1px lightgray;float: left;margin-bottom: 30px;">
            <div style="padding-bottom: 20px;padding-top: 15px;">
            	<label>Insurance Name</label>
                <input type="text" placeholder="Enter Insurance Name" v-model="service.ServiceName" class="form-control">
            </div>
            <div style="padding-bottom: 12px;">
            	<label>Insurance Description</label>
               <textarea rows="5" v-model="service.ServiceDescriptionText" class="form-control" placeholder="Enter Service Description"  wrap="hard"> 
              </textarea>
          	</div>         
        </div>
        <a class="btn btn-primary" @click="addservice" style="font-size: 22px; min-width:45px;float: left;">+</a><div class="col-md-11">
			<button type="button" @click="save()" class="btn btn-primary">Save</button>
        </div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import dataService from '@/components/dataservice.js';
	import { service_url } from '@/components/constant';
	export default {
		data() {
			return {
				services:[],
				service:{
					ServiceName:'',
					ServiceDescriptionText:''
				}
			}
		},
		created:function()
		{
			if(process.browser)
      		{
	      		var cid = window.localStorage.getItem('CustomerID');
				//this.services.push(Vue.util.extend({}, this.service))
				var url = service_url+cid;
				var self = this
		        dataService.getdata(url)
		        .then(function (response) {
		          if(response.services.length>0)
		          {
		          	self.$parent.agency_status.service = 1
		            self.services = response.services;
		          }
		        })

	    	}
		},
		methods:{
			addservice()
			{
				this.services.push(Vue.util.extend({}, this.service))
			},
			save()
			{
				if(this.$parent.agency_status.service!==1)
		        {
		          this.$parent.agency_status.service = 1;
		          this.$parent.updatestatus();
		        }
		        console.log(this.services);
			}
		}
	}
</script>