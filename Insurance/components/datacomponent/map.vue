<template>
<div></div>
</template>
<script>
  import dataService from '../dataservice.js';
  import { map_url } from '../constant';
	export default {
		data() {
	        return {
	        }
    	},
    	mounted:function() {
    		this.getmapdata()
    	},
     	methods:{
     		getmapdata ()	{
          var cid = localStorage.getItem('CustomerID');
          var url = map_url+cid;
          var self = this
          dataService.getdata(url)
          .then(function (response) {           
            var address = response.Customers[0].AddStreet1+","+response.Customers[0].AddStreet2+","+response.Customers[0].AddCity+","+response.Customers[0].AddState+","+response.Customers[0].AddZip;
            dataService.getlatlon(address)
            .then(function (res) {
              self.$parent.$parent.lat = res[0].geometry.location.lat;
              self.$parent.$parent.lon = res[0].geometry.location.lng;
            })
          })       			
     		}
  	  }
	}
</script>