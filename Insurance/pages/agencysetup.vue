<style >
 .upload_button {
  position: relative;
  overflow: hidden;
}
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
.slogan_save
{
	float: right;
	margin-top: 12px;
	margin-right: 15px;
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
    margin-top: 23px;
    padding-top: 20px;
    margin-bottom: 20px;
    padding-bottom: 20px;
}

.first_temp {
    height: 257px;
    width: 300px;
    overflow-y: scroll;
}

.font_cross
{
    float: right;
    font-size: 50px;
    padding-right: 15px;
}

.template_radio
{
  font-size: 18px;
}

/* The Close Button */
.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
</style>

<template >
  <div id="wrapper">
    <leftNav></leftNav>

    <div class="main" style="min-height: 895px;padding-top: 45px;">
      <!-- MAIN CONTENT -->
      <div class="main-content">
        <div class="container-fluid" style="padding-top: 28px;">
          <h3 class="page-title">Agency Setup</h3>
          <div class="progress">
            <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" v-bind:style="{ width: progress_width+'%' }">
                  {{progress_width}}%
            </div>
          </div>

	        <div class="row">
	            <div class="col-md-4">
	              <!-- PANEL DEFAULT -->
	              <div class="panel">
	                <div class="panel-heading" style="border-top: 0 solid #dbdbdb;">
	                  <h3 class="panel-title" style="font-family: inherit;">LOGO </h3>
	                  <div class="right">
	                    <button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
	                  </div>
	                </div>
	                <div class="panel-body logo_block">
	                 <div class="file btn btn-lg btn-primary" >
	                  <i class="fa fa-upload" aria-hidden="true"> &nbsp;Upload</i>
	                    <input  class="butt_upload"  v-on:change="handleFileUpload()" type="file" style="width: 33%;left: 23%;top: 34%;font-size: 38px;" id="file" ref="logo_file" name="file"/>
	                   </div>
	                    <button type="button" @click="save(1)" class="btn btn-primary alingment_save">Save</button>
	                </div>
	              </div>
	              <!-- END PANEL DEFAULT -->
	            </div>
	            <div class="col-md-8">
	              <div class="panel">
	                <div class="panel-heading" style="border-top: 0 solid #dbdbdb;">
	                  <h3 class="panel-title" style="font-family: inherit;">SLOGAN</h3>
	                  <div class="right">
	                    <button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
	                  </div>
	                </div>
	                <div class="panel-body upload_button">
	                  <textarea class="form-control" rows="5" v-model="slogan_text" placeholder="Type here"></textarea>
	                  <button type="button" @click="save(2)" class="btn btn-primary slogan_save">Save</button>
	                </div>
	              </div>  
	            </div>
	        </div>

          <div class="row">
		   <div class="col-md-12">
		     <div class="panel">
				<div class="panel-heading" style="border-top: 0 solid #dbdbdb;">
				  <h3 class="panel-title" style="font-family: inherit;">CONTACT INFORMATION </h3>
				  <div class="right">
					<button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
				   </div>
				  </div>

				  	<div class="panel-body upload_button">
				  		 <div class="col-md-12">
				  		 <div class="col-sm-6" style="float: left;">
				  		  <label class="fancy-checkbox">
							<input type="checkbox">
							<span> Use Registration Address</span>
						    </label>
				  		  <label>Address 1 : </label>
                           <input type="text" v-model="contact_info.address1" class="form-control" placeholder="Address">
						         <br>

                            <label>Address 2 : </label>
                             <input type="text" v-model="contact_info.address2" class="form-control" placeholder="Address"><br>

                             <label>Address 3 : </label>
                             <input type="text" v-model="contact_info.address3" class="form-control" placeholder="Address"><br>
				  		  </div>
                         <div class="col-sm-6" style="float: left;">
				  		   <label class="fancy-checkbox">
							<input type="checkbox">
							<span> Use Registration Address</span>
						    </label>

						     <label>Telephone 1 : </label>
                            <input type="text" v-model="contact_info.teleph1" class="form-control" placeholder="Telephone"><br>

                            <label>Telephone 2 : </label>
                            <input type="text" v-model="contact_info.teleph2" class="form-control" placeholder="Telephone"><br>

                             <label>Telephone 3 : </label>
                             <input type="text" v-model="contact_info.teleph3" class="form-control" placeholder="Telephone"><br>

                         </div>
				  		 </div>
						<button type="button" @click="save(3)" class="btn btn-primary slogan_save">Save</button>
					</div>
				  
				</div>
			</div>
	     </div>

	     <div class="row">
         	<div class="col-md-12">
			<!-- PANEL DEFAULT -->
			<div class="panel">
				<div class="panel-heading" style="border-top: 0 solid #dbdbdb;">
					<h3 class="panel-title" style="font-family: inherit;">ABOUT US</h3>
					<div class="right">
						<button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
					</div>
				</div>
				<div class="panel-body upload_button">
					<textarea class="form-control" rows="5" v-model="about_us"  placeholder="Type here"></textarea>
				    <button type="button" @click="save(4)" class="btn btn-primary slogan_save">Save</button>
				</div>
			</div>
			<!-- END PANEL DEFAULT -->
			</div>
		</div>

		<div class="row">
	        <div class="col-md-12">
				<!-- PANEL DEFAULT -->
				<div class="panel">
					<div class="panel-heading" style="border-top: 0 solid #dbdbdb;">
						<h3 class="panel-title" style="font-family: inherit;">MARKETING </h3>
						<div class="right">
							<button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
						</div>
					</div>
					<div class="panel-body upload_button">
						<textarea class="form-control" rows="5"  placeholder="Type here"></textarea>
					    <button type="button" @click="save(5)" class="btn btn-primary slogan_save">Save</button>
					</div>
				</div>
				<!-- END PANEL DEFAULT -->
			</div>
		</div>

		<div class="row">
	     	<div class="col-md-4">
				<!-- PANEL DEFAULT -->
				<div class="panel">
					<div class="panel-heading" style="border-top: 0 solid #dbdbdb;">
						<h3 class="panel-title" style="font-family: inherit;">Services </h3>
						<div class="right">
							<button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
							<!-- <button type="button" class="btn-remove"><i class="lnr lnr-cross"></i></button> -->
						</div>
					</div>
					<div class="panel-body upload_button">
					<textarea class="form-control" rows="5"  placeholder="Type here"></textarea>
					    <button type="button" @click="save(6)" class="btn btn-primary slogan_save">Save</button>
					</div>
				</div>
				<!-- END PANEL DEFAULT -->
			</div>

	         <div class="col-md-4">
				<!-- PANEL DEFAULT -->
				<div class="panel">
					<div class="panel-heading" style="border-top: 0 solid #dbdbdb;">
						<h3 class="panel-title" style="font-family: inherit;">TEAM </h3>
						<div class="right">
							<button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
						<!-- 	<button type="button" class="btn-remove"><i class="lnr lnr-cross"></i></button> -->
						</div>
					</div>
					<div class="panel-body upload_button">
					<textarea class="form-control" rows="5" placeholder="Type here" ></textarea>
					    <button type="button" @click="save(7)" class="btn btn-primary slogan_save">Save</button>
					</div>
				</div>
				<!-- END PANEL DEFAULT -->
			</div>



			   <div class="col-md-4">
				<!-- PANEL DEFAULT -->
				<div class="panel">
					<div class="panel-heading" style="border-top: 0 solid #dbdbdb;">
						<h3 class="panel-title" style="font-family: inherit;">DEFAULT TEMPLATE </h3>
						<div class="right">
							<button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
							<!-- <button type="button" class="btn-remove"><i class="lnr lnr-cross"></i></button> -->
						</div>
					</div>
					<div class="panel-body upload_button" style="padding-top: 38px;">
             <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                <button type="button" class="btn btn-primary" style="margin-left: 50px;">Choose Template</button>
              </a>

                  <button type="button" @click="save(8)" class="btn btn-primary slogan_save" style="margin-top: 98px;">Save</button>
              </div>
				</div>
				<!-- END PANEL DEFAULT -->
			</div>


				<div class="col-md-4">
				<!-- PANEL NO PADDING -->
				<div class="panel">
					<div class="panel-heading" style="border-top: 0 solid #dbdbdb;">
						<h3 class="panel-title" style="font-family: inherit;">BRAND COLORS</h3>
						<div class="right">
							<button type="button"  class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
							<!-- <button type="button" class="btn-remove"><i class="lnr lnr-cross"></i></button> -->
						</div>
					</div>
					<div class="panel-body upload_button">
						<!-- <textarea class="form-control" rows="5" placeholder="Type here" ></textarea> -->
						<div class="box_button">
	                       <h4 style="text-align: center;">Welcome to Sridama</h4>
	                       <p>Sridama was founded to achieve global IT services leadership in providing high quality IT solutions in selected horizontal and vertical segments. Sridama combines technology skills and domain expertise to meet market expectations through innovative solutions and adoption of industry best practices</p>
	                     </div>
						<div class="color_top">
							<button class="btn btn-danger button_dots" @click="updatecolor('red')" style="border-radius: 50%;padding: 15px;"></button> 
						 	<button class="btn btn-success button_dots" @click="updatecolor('green')" style="border-radius: 50%;padding: 15px;"></button>
						 	<button class="btn btn-primary button_dots" @click="updatecolor('#337ab7')" style="border-radius: 50%;padding: 15px;"></button>
						  	<button class="btn btn-dark button_dots" @click="updatecolor('black')" style="background: black;border-radius: 50%;padding: 15px;"></button>
	                       	<button class="btn btn-warning button_dots" @click="updatecolor('#f0ad4e')" style="border-radius: 50%;padding: 15px;"></button>
						</div>
					 <button type="button" @click="save(9)" class="btn btn-primary slogan_save">Save</button>
					</div>
				</div>
				<!-- END PANEL NO PADDING -->
			</div>
		   </div>
        </div>
      </div>
    </div>

    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true" style="opacity: 2;">
        <div class="modal-dialog" style="width: 100%;margin: 240px 5px;">
          <div class="modal-content" style="background-color: #f5f5fa;">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <span class="close font_cross" style="font-size: 50px;padding-right: 15px;">&times;</span>
              <div class="row" style="padding-top: 50px;">
                <div class="col-lg-3 mx-auto">
                  <div class="modal-body">  
                   <div class="form-check" style="text-align: center;">
                      <input class="form-check-input" name="group100" type="radio" id="radio100">
                      <label class="form-check-label template_radio" for="radio100" >Template 1</label>
                    </div>
                     <div class="first_temp" >
                      <img src="../static/images/temscreenshots/template1.jpg"   width="280px;">
                     </div>
                
                  </div>
                </div>
                <div class="col-lg-3 mx-auto">
                  <div class="modal-body">
                    <div class="form-check" style="text-align: center;">
                      <input class="form-check-input" name="group100" type="radio" id="radio100">
                      <label class="form-check-label template_radio" for="radio100" >Template 2</label>
                    </div>                    
                   <div class="first_temp" >
                      <img src="../static/images/temscreenshots/template2.jpg"   width="280px;">
                     </div>
                  </div>
                </div>
                <div class="col-lg-3 mx-auto">
                  <div class="modal-body">   
                    <div class="form-check" style="text-align: center;">
                      <input class="form-check-input" name="group100" type="radio" id="radio100">
                      <label class="form-check-label template_radio" for="radio100" >Template 3</label>
                    </div>                 
                   <div class="first_temp">
                      <img src="../static/images/temscreenshots/template3.jpg"   width="280px;">
                     </div>
                  </div>
                </div>
                <div class="col-lg-3 mx-auto">
                  <div class="modal-body">   
                    <div class="form-check" style="text-align: center;">
                      <input class="form-check-input" name="group100" type="radio" id="radio100">
                      <label class="form-check-label template_radio" for="radio100">Template 4</label>
                    </div>                 
                    <div class="first_temp">
                      <img src="../static/images/temscreenshots/template4.jpg"   width="280px;">
                     </div>
                  </div>
                </div>
                 <div class="col-lg-3 mx-auto">
                  <div class="modal-body">  
                    <div class="form-check" style="text-align: center;">
                      <input class="form-check-input" name="group100" type="radio" id="radio100">
                      <label class="form-check-label template_radio" for="radio100">Template 5</label>
                    </div>                  
                    <div class="first_temp" >
                      <img src="../static/images/temscreenshots/template5.jpg"   width="280px;">
                     </div>
                  </div>
                </div>
                 <div class="col-lg-3 mx-auto">
                  <div class="modal-body"> 
                   <div class="form-check" style="text-align: center;">
                      <input class="form-check-input" name="group100" type="radio" id="radio100">
                      <label class="form-check-label template_radio" for="radio100" >Template 6</label>
                    </div>
                     <div class="first_temp" >
                      <img src="../static/images/temscreenshots/template6.jpg"   width="280px;">
                     </div>
                  </div>
                </div>
                 <div class="col-lg-3 mx-auto">
                  <div class="modal-body"> 
                    <div class="form-check" style="text-align: center;">
                      <input class="form-check-input" name="group100" type="radio" id="radio100">
                      <label class="form-check-label template_radio" for="radio100">Template 7</label>
                    </div>                   
                   <div class="first_temp" >
                      <img src="../static/images/temscreenshots/template7.jpg"   width="280px;">
                     </div>
                  </div>
                </div>     
             </div>
              <button class="btn btn-primary" style="margin-left: 50%;" type="button">OK</button> 
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
	import axios from 'axios';
	import dataService from '@/components/dataservice.js';
	import leftNav from '@/components/leftnav.vue';
    import { slogan_url, aboutus_url, agency_setup_status, agency_status_put } from '@/components/constant';
  export default {
  	components: {
      leftNav
    },
    data() {
      return {
      	  cid:'',
      	  uid:'',
          username:'',
          progress_width:'',
          logo_file:'',
          slogan_text:'',
          about_us:'',
          contact_info:{
          	address1:'',
          	address2:'',
          	address3:'',
          	teleph1:'',
          	teleph2:'',
          	teleph3:''
          },
          agency_status:{
          	logo:'',
          	slogan:'',
          	contact:'',
          	about:'',
          	market:'',
          	service:'',
          	team:'',
          	default_temp:'',
          	brand_color:''
          },
          flag_count:0
      }
    },
    created:function() 
    {
      if(process.browser)
      {
      	this.cid = window.localStorage.getItem('CustomerID');
      	this.uid = window.localStorage.getItem('UserID');
        var status_url = agency_setup_status+this.cid;

        this.username = window.localStorage.getItem('FirstName');
        if(this.username=="" || this.username==undefined)
        {
          this.$router.push('/login');
        }

        var self = this
        //get agency setup data
        dataService.agencysetupstatus(status_url)
        .then(function (response) {
          if(response.AgencySetupStatus.length>0)
          {
            self.progress_width = response.AgencySetupStatus[0].PercentComplete;
          }
        })

        //get slogan data
        var slog_url = slogan_url+this.cid;
        dataService.getdata(slog_url)
        .then(function (response) {
        	if(response.Slogan.length>0)
          	{
        		self.slogan_text  = response.Slogan[0].SloganText;
        		self.agency_status.slogan = 1;
        		self.flag_count += 1; 
        	}
        })

        //get about us data
        var about_url = aboutus_url+this.cid;
        dataService.getdata(about_url)
        .then(function (response) {
        	if(response.AboutUs.length>0)
          	{
        		self.about_us  = response.AboutUs[0].AboutUsText;
        		self.agency_status.about = 1;
        		self.flag_count += 1;
        	}
        })
      }
    },
    methods:{
    	updatecolor(color)
      	{
        	$(".box_button").css("background-color",color);
        	$(".box_button").css("color","white");
      	},
      	handleFileUpload()
      	{
      		this.logo_file = this.$refs.logo_file.files[0];
      	},
      	updatestatus()
      	{
      		this.flag_count += 1;
      		this.progress_width = Math.round((this.flag_count*100)/9);
      		var url_status = agency_status_put+this.cid+"/"+this.progress_width+"/"+this.uid;

      		dataService.agencystatusupdate(url_status)
            .then(function (response) {
            	console.log(response); 
            })           
      	},
      	save(type)
      	{	
      		if(type==1)
      		{
      			if(this.agency_status.logo!==1)
      			{
      				this.updatestatus();
      				this.agency_status.logo = 1
      			}
      			console.log(this.logo_file);
      		}
      		else if(type==2)
      		{
      			if(this.agency_status.slogan!==1)
      			{
      				this.updatestatus();
      				this.agency_status.slogan = 1
      			}
      			console.log(this.slogan_text);
      		}
      		else if(type==3)
      		{
      			if(this.agency_status.contact!==1)
      			{
      				this.updatestatus();
      				this.agency_status.contact = 1
      			}
      			console.log(this.contact_info);
      		}
      		else if(type==4)
      		{
      			if(this.agency_status.about!==1)
      			{
      				this.updatestatus();
      				this.agency_status.about = 1
      			}
      		}
      		else if(type==5)
      		{
      			if(this.agency_status.market!==1)
      			{
      				this.updatestatus();
      				this.agency_status.market = 1
      			}
      		}
      		else if(type==6)
      		{
      			if(this.agency_status.service!==1)
      			{
      				this.updatestatus();
      				this.agency_status.service = 1
      			}
      		}
      		else if(type==7)
      		{
      			if(this.agency_status.team!==1)
      			{
      				this.updatestatus();
      				this.agency_status.team = 1
      			}
      		}
      		else if(type==8)
      		{
      			if(this.agency_status.default_temp!==1)
      			{
      				this.updatestatus();
      				this.agency_status.default_temp = 1
      			}
      		}
      		else if(type==9)
      		{
      			if(this.agency_status.brand_color!==1)
      			{
      				this.updatestatus();
      				this.agency_status.brand_color=1
      			}
      		}
      	}
    }
  }
</script>