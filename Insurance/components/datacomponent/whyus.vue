<template>
<div></div>
</template>
<script>
    import dataService from '../dataservice.js';
    import { whyus_url } from '../constant';
    export default {
        data() {
            return {}
        },
        mounted: function() {
            this.getwhyus()
        },
        methods: {
            getwhyus() {
                var cid = localStorage.getItem('CustomerID');
                var url = whyus_url+cid;
                var self = this
                dataService.getdata(url)
                .then(function (response) {
                    self.$parent.$parent.whyus = response.WhyUs[0].AboutUsText;
                })
            }
        }
    }
</script>