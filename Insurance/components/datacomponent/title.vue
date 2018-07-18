<template>
<div></div>
</template>
<script>
    import dataService from '../dataservice.js';
    import { slogan_url } from '../constant';
    export default {
        data() {
            return {}
        },
        mounted: function() {
            this.gettitle()
        },
        methods: {
            gettitle() {
                var cid = localStorage.getItem('CustomerID');
                var url = slogan_url+cid;
                var self = this
                dataService.getdata(url)
                .then(function (response) {
                    self.$parent.$parent.slogan = response.Slogan[0].SloganText;
                    self.$parent.$parent.title = 'Life Insurance Title';
                })
            }
        }
    }
</script>