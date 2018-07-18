<template >
<div id="wrapper">
  <leftNav></leftNav>
    <div class="main" style="min-height: 895px;padding-top: 45px;">
      <!-- MAIN CONTENT -->
      <div class="main-content" style="margin-top: 30px;">
        <div class="container-fluid">
          <div class="panel panel-profile" style="border: 0px solid">
            <div class="clearfix">
              <div class="profile-left">
                <div class="profile-header">
                  <div class="overlay"></div>
                  <div class="profile-main">
                    <img src="../static/images/newimg/user.png" style="height:60px;border-radius: 50%;width: 60px;" alt="Avatar">
                    <h3 class="name">{{username}}</h3>
                    <span class="online-status status-available">Available</span>
                  </div>
                  <div class="profile-stat">
                    <div class="row">
                      <div class="col-md-4 stat-item">
                        45 <span>Projects</span>
                      </div>
                      <div class="col-md-4 stat-item">
                        15 <span>Awards</span>
                      </div>
                      <div class="col-md-4 stat-item">
                        2174 <span>Points</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="profile-detail">
                  <div class="profile-info">
                    <h4 class="heading">Basic Info</h4>
                    <ul class="list-unstyled list-justify">
                      <li>Birthdate <span>24 Aug, 2016</span></li>
                      <li>Mobile <span>(124) 823409234</span></li>
                      <li>Email <span>samuel@mydomain.com</span></li>
                      <li>Website <span><a href="https://www.themeineed.com">www.themeineed.com</a></span></li>
                    </ul>
                  </div>
                  <div class="profile-info">
                    <h4 class="heading">Social</h4>
                    <ul class="list-inline social-icons">
                      <li><a href="#" class="facebook-bg"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="#" class="twitter-bg"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="#" class="google-plus-bg"><i class="fa fa-google-plus"></i></a></li>
                      <li><a href="#" class="github-bg"><i class="fa fa-github"></i></a></li>
                    </ul>
                  </div>
                  <div class="profile-info">
                    <h4 class="heading">About</h4>
                    <p>Interactively fashion excellent information after distinctive outsourcing.</p>
                  </div>
                  <div class="text-center"><a href="#" class="btn btn-primary">Edit Profile</a></div>
                </div>
            </div>
          </div>
        </div>
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



