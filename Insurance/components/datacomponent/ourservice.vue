<template>
<div></div>
</template>
<script>
    import dataService from '../dataservice.js';
    import { service_url } from '../constant';
    export default {
        data() {
            return {}
        },
        mounted: function() {
            this.getservice()
        },
        methods: {
            getservice() {
                var cid = localStorage.getItem('CustomerID');
                var url = service_url+cid;
                var self = this
                dataService.getdata(url)
                .then(function (response) {
                    self.$parent.$parent.services = response.services;
                })
            }
        }
    }
</script>