<template >
<div id="wrapper">
    <leftNav></leftNav>

    <div class="main" style="min-height: 895px;padding-top: 45px;">
      <!-- MAIN CONTENT -->
      <div class="main-content">
        <div class="container-fluid">
          <h1 style="padding-left: 22%;padding-top: 15%;">Welcome dear {{username}}!</h1>
        </div>
      </div>
    </div>
    <link rel="stylesheet" href="../css/newmain.css">
    <link rel="stylesheet" href="../css/demo.css">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../vendor/linearicons/style.css">
    <script src="../js/klorofil-common.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/jquery.slimscroll.min.js"></script>

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
      if(process.browser)
      {
        this.username = window.localStorage.getItem('FirstName');
        if(this.username=="" || this.username==undefined)
        {
          this.$router.push('/login');
        }
      }
    }
  }
</script>



