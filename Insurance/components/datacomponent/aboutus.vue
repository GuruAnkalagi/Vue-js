<template>
<div></div>
</template>
<script>
    import dataService from '../dataservice.js';
    import { aboutus_url } from '../constant';
    export default {
        data() {
            return {}
        },
        mounted: function() {
            this.getaboutus()
        },
        methods: {
            getaboutus() {
                var cid = localStorage.getItem('CustomerID');
                var url = aboutus_url+cid;
                var self = this
                dataService.getdata(url)
                .then(function (response) {
                    self.$parent.$parent.aboutus = response.AboutUs[0].AboutUsText;
                })
            }
        }
    }
</script>