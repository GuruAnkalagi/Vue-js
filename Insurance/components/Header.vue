<template>
  <div>
    
    <link rel="stylesheet" href="../css/newmain.css">
    <link rel="stylesheet" href="../css/demo.css">
    <link rel="stylesheet" href="../css/style.css">
    <script src="../js/klorofil-common.js"></script>
    <script src="../js/jquery.slimscroll.min.js"></script>

  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        
      }
    },
    created:function() 
    {
      /*if(process.browser)
      {
        this.username = window.localStorage.getItem('FirstName');
        if(this.username=="" || this.username==undefined)
        {
          this.$router.push('/login');
        }
      }*/
    },
    methods:{
      /*logout()
      {
        window.localStorage.setItem('UserID',"");
        window.localStorage.setItem('EmailAddress',"");
        window.localStorage.setItem('FirstName',"");
        window.localStorage.setItem('LastName',"");
        window.localStorage.setItem('CustomerID',"");
        this.$router.push('/login');
      }*/
    }
  }
</script>
