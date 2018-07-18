<template >
  <div>
    <div class="wrapper">
      <div class="columns" style="margin-bottom: 0rem;">
        <leftNav></leftNav>
        <main class="column main">
            <center><h3 style="padding-top: 120px;">Welcome Dear {{username}}!</h3></center>
        </main> 
      </div>
    </div>
  </div>
</template>

<script>
   import leftNav from '@/components/leftnav.vue'
  export default {
    components: {
      leftNav
    },
    data() {
      return {
          username:''
      }
    },
    created:function() 
    {
      /*if(process.browser)
      {
        this.username = window.localStorage.getItem('FirstName');
        if(this.username=="" || this.username==undefined)
        {
         //this.$router.push('/login');
        }
      }*/
    }
  }
</script>