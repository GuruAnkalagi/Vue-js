<template>
<div></div>
</template>
<script>
    import dataService from '../dataservice.js';
    import { contact_url } from '../constant';
    export default {
        data() {
            return {}
        },
        mounted: function() {
            this.getcontactus()
        },
        methods: {
            getcontactus() {
                var cid = localStorage.getItem('CustomerID');
                var url = contact_url+cid;
                var self = this
                dataService.getdata(url)
                .then(function (response) {
                    self.$parent.$parent.contactus = response.contactus;
                })
            }
        }
    }
</script>