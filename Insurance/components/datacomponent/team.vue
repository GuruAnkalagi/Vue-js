<template>
<div></div>
</template>
<script>
    import dataService from '../dataservice.js';
    import { team_url } from '../constant';
    export default {
        data() {
            return {}
        },
        mounted: function() {
            this.getteams()
        },
        methods: {
            getteams() {
                var cid = localStorage.getItem('CustomerID');
                var url = team_url+cid;
                var self = this
                dataService.getdata(url)
                .then(function (response) {
                    self.$parent.$parent.teams = response.team;
                })               
            }
        }
    }
</script>