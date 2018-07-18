
<style >

.butt_upload {
  position: absolute;
  font-size: 50px;
  opacity: 0;
  right: 0;
  top: 0;
}
.alingment_save
{

  float: right;
    margin-top: 87px;
    margin-right: 15px;
}
.button_save
{
float: right;
margin-top: 12px;
margin-right: 15px;
margin-bottom: 13px;

}

.color_top
{
top: 11px;
text-align: center;

}

.button_dots {
   border: none;
    color: white;
    padding: 13px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 50%;
}
.logo_block
{

    text-align: center;
    margin-top: 20px;
    padding-top: 20px;
    margin-bottom: 20px;
    padding-bottom: 20px;
}

.box_button{
    
    padding: 50px;
    border: 1px dotted black;

}
.nav>li>a {
    position: relative;
    display: block;
    padding: 10px 15px;
}
</style>

<template >
  <div id="wrapper">
    <leftNav></leftNav>

    <div class="main" style="min-height: 895px;padding-top: 45px;">
      <!-- MAIN CONTENT -->
      <div class="main-content">
        <div class="container-fluid" style="padding-top: 28px;">
         <div class="panel panel-headline">
            <div class="panel-heading">
              <h3 class="page-title">Agency Setup</h3>
              <div class="progress">
                <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" v-bind:style="{ width: progress_width+'%' }">
                      {{progress_width}}%
                </div>
              </div>
            </div>

            <div class="panel panel-profile" style="margin-bottom: 0px;">
            <div class="clearfix">
          
              <!-- TABBED CONTENT -->
                <div class="custom-tabs-line tabs-line-bottom left-aligned" style="font-family: 'Source Sans Pro', sans-serif; font-size: 15px;">
                  <ul class="nav" role="tablist">
                    <li class="active"><a href="#tab-bottom-left1" role="tab" data-toggle="tab">LOGO</a></li>
                    <li><a href="#tab-bottom-left2" role="tab" data-toggle="tab">SLOGAN </a></li>
                    <li><a href="#tab-bottom-left3" role="tab" data-toggle="tab">CONTACT INFORMATION </a></li>
                    <li><a href="#tab-bottom-left4" role="tab" data-toggle="tab">ABOUT US </a></li>
                    <li><a href="#tab-bottom-left5" role="tab" data-toggle="tab">MARKETING </a></li>
                    <li><a href="#tab-bottom-left6" role="tab" data-toggle="tab">SERVICES </a></li>
                    <li><a href="#tab-bottom-left7" role="tab" data-toggle="tab">TEAM </a></li>
                    <li><a href="#tab-bottom-left8" role="tab" data-toggle="tab">DEFAULT TEMPLATE </a></li>
                    <li><a href="#tab-bottom-left9" role="tab" data-toggle="tab">BRAND COLORS </a></li>
                  </ul>
                </div>

                <div class="tab-content">
                  <div class="tab-pane fade in active" id="tab-bottom-left1">
                    <div class="panel-body logo_block">
                      <div class="file btn btn-lg btn-primary">
                       <i class="fa fa-upload" aria-hidden="true"> &nbsp;Upload</i>
                        <input  class="butt_upload" type="file" style="font-size: 43px;width: 10%;top: 90px;left: 42%;" />
                      </div>
                      <button type="button" class="btn btn-primary alingment_save">Save</button>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="tab-bottom-left2">
                  <textarea class="form-control" rows="5"  placeholder="Type here"></textarea>
                     <button type="button" class="btn btn-primary button_save">Save</button>
                  </div>
                  
                  
                  <div class="tab-pane fade" id="tab-bottom-left3">
                    <div class="col-md-12">
                     <div class="col-md-6" style="float: left;">
                      <label class="fancy-checkbox">
                        <input type="checkbox">
                        <span> Use Registration Address</span>
                      </label>
                      <label >Address 1 : </label>
                            <input type="text" class="form-control" placeholder="Address">
                            <br>
                            <label >Address 2 : </label>
                             <input type="text" class="form-control" placeholder="Address"><br>

                             <label >Address 3 : </label>
                             <input type="text" class="form-control" placeholder="Address"><br>
                        </div>
                          <div class="col-md-6" style="float: left;">
                          <label class="fancy-checkbox">
                            <input type="checkbox">
                            <span> Use Registration Address</span>
                          </label>

                          <label >Telephone 1 : </label>
                            <input type="text" class="form-control" placeholder="Telephone"><br>

                            <label >Telephone 2 : </label>
                            <input type="text" class="form-control" placeholder="Telephone"><br>

                             <label >Telephone 3 : </label>
                             <input type="text" class="form-control" placeholder="Telephone"><br>

                         </div>
                     </div>
                     <button type="button" class="btn btn-primary button_save">Save</button>
                  </div>
                     
                <div class="tab-pane fade" id="tab-bottom-left4">
                  <textarea class="form-control" rows="5"  placeholder="Type here"></textarea>
                    <button type="button" class="btn btn-primary button_save">Save</button>
                </div>
                  
                 <div class="tab-pane fade" id="tab-bottom-left5">
                  <textarea class="form-control" rows="5"  placeholder="Type here"></textarea>
                   <button type="button" class="btn btn-primary button_save">Save</button>
                  </div>
                  
                   <div class="tab-pane fade" id="tab-bottom-left6">
                  <textarea class="form-control" rows="5"  placeholder="Type here"></textarea>
                   <button type="button" class="btn btn-primary button_save">Save</button>
                  </div>
                  
                   <div class="tab-pane fade" id="tab-bottom-left7">
                  <textarea class="form-control" rows="5"  placeholder="Type here"></textarea>
                   <button type="button" class="btn btn-primary button_save">Save</button>
                  </div>
                  
                   <div class="tab-pane fade" id="tab-bottom-left8">
                  <textarea class="form-control" rows="5"  placeholder="Type here"></textarea>
                   <button type="button" class="btn btn-primary button_save">Save</button>
                  </div>
                  
                  <div class="tab-pane fade" id="tab-bottom-left9">
                    <div class="row">
                    <div class="col-md-4">
                      <div class="box_button">
                        <h4 style="text-align: center;">Welcome to Sridama</h4>
                        <p>Sridama was founded to achieve global IT services leadership in providing high quality IT solutions in selected horizontal and vertical segments. Sridama combines technology skills and domain expertise to meet market expectations through innovative solutions and adoption of industry best practices</p>
                       </div>
                      <div class="color_top">
                        <button class="btn btn-danger button_dots" @click="updatecolor('red')" style="border-radius: 50%;padding: 15px;"></button> 
                        <button class="btn btn-success button_dots" @click="updatecolor('green')" style="border-radius: 50%;padding: 15px;"></button>
                        <button class="btn btn-primary button_dots" @click="updatecolor('#00aaff')" style="border-radius: 50%;padding: 15px;"></button>
                        <button class="btn btn-dark button_dots" @click="updatecolor('black')" style="border-radius: 50%;padding: 15px;"></button>
                        <button class="btn btn-warning button_dots" @click="updatecolor('#e4cb10')" style="border-radius: 50%;padding: 15px;"></button> 
                      </div>
                    </div>
                   </div>
                   <button type="button" class="btn btn-primary button_save">Save</button>
                  </div>
                </div>
                <!-- END TABBED CONTENT -->
              </div>
              <!-- END RIGHT COLUMN -->
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
  import dataService from '@/components/dataservice.js';
  import { agency_setup_status } from '@/components/constant';
  import leftNav from '@/components/leftnav.vue'
  export default {
    components: {
      leftNav
    },
    data() {
      return {
          username:'',
          progress_width:''
      }
    },
    created:function() 
    {
      if(process.browser)
      {
        var cid = window.localStorage.getItem('CustomerID');
        var status_url = agency_setup_status+cid;

        this.username = window.localStorage.getItem('FirstName');
        if(this.username=="" || this.username==undefined)
        {
          this.$router.push('/login');
        }
        var self = this
        dataService.agencysetupstatus(status_url)
        .then(function (response) {
          if(response.AgencySetupStatus.length>0)
          {
            self.progress_width = response.AgencySetupStatus[0].PercentComplete;
          }
        })

      }
    },
    methods:{
      updatecolor(color)
      {
        $(".box_button").css("background-color",color);
        $(".box_button").css("color","white");
      }
    }
  }
</script>



