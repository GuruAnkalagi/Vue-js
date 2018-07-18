  <template>
  <span>
  <nav class="navbar navbar-default navbar-fixed-top" style="position: fixed;right: 0;left: 0;z-index: 1030;">
      
      <div class="container-fluid">
        <div class="brand" style="background:none;">
        <a style="color: #566374;" href="#" ><img src="../static/images/GlobeOnly.png"  width="40" height="40" align="middle"> <span style="padding-left:2px;">K2Reimagine</span></a>
      </div>
        <div class="navbar-btn">
          <button type="button" class="btn-toggle-fullwidth"><i class="lnr lnr-arrow-left-circle"></i></button>
        </div>
        <div class="navbar-btn navbar-btn-right">
          
        </div>
        <div id="navbar-menu">
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="../static/images/newimg/user.png" alt="Avatar" style="border-radius: 50%;"> <span>{{username}}</span><i class="icon-submenu lnr lnr-chevron-down"></i></a>
              <ul class="dropdown-menu" style="position: absolute;">
                <li><a href="/userprofile"><i class="fa fa-user-o"></i> <span>My Profile</span></a></li>
                <li><a href="#"><i class="fa fa-gear"></i> <span>Billings</span></a></li>
                <li><a href="#" @click="logout()"><i class="fa fa-power-off"></i> <span>Logout</span></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  <div id="sidebar-nav" class="sidebar">
      <div class="sidebar-scroll">
        <nav>
          <ul class="nav">
            <li>
              <a href="/useraccount" class="active">
                <i class="fa fa-tachometer"></i> <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" class="">
                <i class="fa fa-th"></i> <span>Quotes</span>
              </a>
            </li>

            <li>
              <a href="#subPages" data-toggle="collapse" class="collapsed"><i class="fa fa-file"></i> <span>Templates</span>          
              <i class="icon-submenu fa fa-angle-right"></i></a>
              <div id="subPages" class="collapse">
                <ul class="nav">
                  <li><a href="/proposal/newtemplate1" class="">Template 1</a></li>
                  <li><a href="/proposal/newtemplate2" class="">Template 2</a></li>
                  <li><a href="/proposal/newtemplate3" class="">Template 3</a></li>
                  <li><a href="/proposal/newtemplate4" class="">Template 4</a></li>
                  <li><a href="/proposal/newtemplate5" class="">Template 5</a></li>
                  <li><a href="/proposal/newtemplate6" class="">Template 6</a></li>
                  <li><a href="/proposal/newtemplate7" class="">Template 7</a></li>
                </ul>
              </div>
            </li>

            <li><a href="#" class=""><i class="fa fa-table"></i> <span>Proposal</span></a></li>
            <li><a href="/setuptab" class=""><i class="fa fa-gear"></i><span>Agency Setup</span></a></li>
            <li><a href="#" class=""><i class="fa fa-users"></i> <span>User Administration</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
    </span>
</template>


<script type="text/javascript">
  export default {
    data() {
      return {
        username : ''
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
    },
    methods:{
      logout()
      {
        window.localStorage.setItem('UserID',"");
        window.localStorage.setItem('EmailAddress',"");
        window.localStorage.setItem('FirstName',"");
        window.localStorage.setItem('LastName',"");
        window.localStorage.setItem('CustomerID',"");
        this.$router.push('/login');
      }
    }
  }
</script>

