<template>
<div></div>
</template>
<script>
    import dataService from '../dataservice.js';
    import { logo_url } from '../constant';
    export default {
        data() {
            return {}
        },
        mounted: function() {
            this.getlogo()
        },
        methods: {
            getlogo() {
                var cid = localStorage.getItem('CustomerID');
                var url = logo_url+cid;
                var self = this
                dataService.getdata(url)
                .then(function (response) {
                    self.$parent.$parent.logo = response.logo[0].LogoFileLocation;
                    //self.$parent.$parent.logo = "/images/insurance logo.png";
                })
            }
        }
    }
</script>