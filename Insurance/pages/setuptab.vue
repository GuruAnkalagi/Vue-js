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

.button_save
{
	float: right;
	margin-top: 12px;
	margin-right: 15px;
	margin-bottom: 13px;
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

.save_btn
{
   	margin-top: 10px;
    float: right;
}

.first_temp {
    height: 257px;
    width: 300px;
    overflow-y: scroll;
}

.template_radio
{
  font-size: 18px;
}

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
.temp_style
{
	height: 210px;
    width: 367px;
    overflow-y: scroll;
}

</style>
<template >
  	<div id="wrapper">
    	<leftNav></leftNav>
    	<div class="main" style="min-height: 895px;padding-top: 45px;">
      		<div class="main-content container-fluid" style="margin-top: 30px;">
      			<h3 class="page-title container-fluid" style="float:left;padding-right: 15px;">Agency Setup</h3>
     		 	<button type="button" @click="tabchange(1)" class="btn btn-primary" v-if="tab1==1" style="height: 32px;"><i class="fa fa-th" aria-hidden="true" style="font-size: 25px;width: 30px;margin-top: -2px;"></i></button>
     		 	<button type="button" @click="tabchange(2)" class="btn btn-primary" v-if="tab2==1" style="height: 32px;"><i class="fa fa-th-list" aria-hidden="true" style="font-size: 25px;width: 30px;margin-top: -2px;"></i></button>

     		 	<div class="container-fluid" style="padding-top: 28px;">
     		 	<div class="progress">
		            <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" v-bind:style="{ width: progress_width+'%' }">
		                  {{progress_width}}%
		            </div>
		        </div>
		        </div>
        		 	
     		 	<div class="container-fluid" id="tab1" style="padding-top: 28px;">          
			        <div class="row">
			            <div class="col-md-4">
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
			                  <textarea class="form-control" rows="5" v-model="slogan_text"  placeholder="Type here"></textarea>
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
						  		<contactForm></contactForm>
							</div>
						</div>
					   </div>
				     </div>

				     <div class="row">
			         	<div class="col-md-12">
						<div class="panel">
							<div class="panel-heading" style="border-top: 0 solid #dbdbdb;">
								<h3 class="panel-title" style="font-family: inherit;">ABOUT US</h3>
								<div class="right">
									<button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
								</div>
							</div>
							<div class="panel-body upload_button">
								<textarea class="form-control" rows="5" v-model="about_us" placeholder="Type here"></textarea>
							    <button type="button" @click="save(4)" class="btn btn-primary slogan_save">Save</button>
							</div>
						</div>
						</div>
					</div>

					<div class="row">
				        <div class="col-md-12">
							<div class="panel">
								<div class="panel-heading" style="border-top: 0 solid #dbdbdb;">
									<h3 class="panel-title" style="font-family: inherit;">MARKETING </h3>
									<div class="right">
										<button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
									</div>
								</div>
								<div class="panel-body upload_button">
									<textarea class="form-control" rows="5" v-model="marketing" placeholder="Type here"></textarea>
								    <button type="button" @click="save(5)" class="btn btn-primary slogan_save">Save</button>
								</div>
							</div>
						</div>
					</div>

					<div class="row">
				        <div class="col-md-12">
							<div class="panel">
								<div class="panel-heading" style="border-top: 0 solid #dbdbdb;">
									<h3 class="panel-title" style="font-family: inherit;">Services </h3>
									<div class="right">
										<button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
									</div>
								</div>
								<div class="panel-body upload_button">
									<services></services>
								</div>
							</div>
						</div>
					</div>

					<div class="row">
				        <div class="col-md-12">
							<div class="panel">
								<div class="panel-heading" style="border-top: 0 solid #dbdbdb;">
									<h3 class="panel-title" style="font-family: inherit;">TEAM </h3>
									<div class="right">
										<button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
									</div>
								</div>
								<div class="panel-body upload_button">
								<textarea class="form-control" rows="5" placeholder="Type here" ></textarea>
								    <button type="button" @click="save(7)" class="btn btn-primary slogan_save">Save</button>
								</div>
							</div>
						</div>
					</div>

					<div class="row">
					   <div class="col-md-6">
							<div class="panel">
								<div class="panel-heading" style="border-top: 0 solid #dbdbdb;">
									<h3 class="panel-title" style="font-family: inherit;">DEFAULT TEMPLATE </h3>
									<div class="right">
										<button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
									</div>
								</div>
								<div class="panel-body upload_button">
									<defaulttemp></defaulttemp>
								</div>
							</div>
						</div>

						<div class="col-md-6">
							<div class="panel">
								<div class="panel-heading" style="border-top: 0 solid #dbdbdb;">
									<h3 class="panel-title" style="font-family: inherit;">BRAND COLORS</h3>
									<div class="right">
										<button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
									</div>
								</div>
								<div class="panel-body upload_button">
									<div class="modal-body" style="padding-bottom: 30px;" v-if="imageLink!==''">
							           	<div class="temp_style" >
							              <img v-bind:src="imageLink" width="350px;">
							            </div>
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
						</div>
				   	</div>
		        </div>

		        <div class="container-fluid" id="tab2" style="padding-top: 28px;">
		         <div class="panel panel-headline">

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
			                      <div class="file btn btn-lg btn-primary" >
			                       <i class="fa fa-upload" aria-hidden="true"> &nbsp;Upload</i>
			                        <input  class="butt_upload" type="file" v-on:change="handleFileUpload()" style="font-size: 43px;width: 10%;top: 90px;left: 42%;" id="file" ref="logo_file" />
			                      </div>
			                      <button type="button" @click="save(1)" class="btn btn-primary alingment_save">Save</button>
			                    </div>
		                  	</div>

			                <div class="tab-pane fade" id="tab-bottom-left2">
			                  	<textarea class="form-control" rows="5" v-model="slogan_text"  placeholder="Type here"></textarea>
			                    <button type="button" @click="save(2)" class="btn btn-primary button_save">Save</button>
			                </div>
			                  
			                <div class="tab-pane fade" id="tab-bottom-left3">
		                  		<contactForm></contactForm>
			                </div>
			                     
			                <div class="tab-pane fade" id="tab-bottom-left4">
			                  <textarea class="form-control" rows="5" v-model="about_us"  placeholder="Type here"></textarea>
			                    <button type="button" @click="save(4)" class="btn btn-primary button_save">Save</button>
			                </div>
		                  
		                 	<div class="tab-pane fade" id="tab-bottom-left5">
		                  		<textarea class="form-control" rows="5" v-model="marketing"  placeholder="Type here"></textarea>
		                   		<button type="button" @click="save(5)" class="btn btn-primary button_save">Save</button>
		                  	</div>
		                  
		                   	<div class="tab-pane fade" id="tab-bottom-left6">
		                  		<services></services>
		                  	</div>
		                  
		                   	<div class="tab-pane fade" id="tab-bottom-left7">
		                  		<textarea class="form-control" rows="5"  placeholder="Type here"></textarea>
		                   		<button type="button" @click="save(7)" class="btn btn-primary button_save">Save</button>
		                  	</div>
		                  
		                   	<div class="tab-pane fade" id="tab-bottom-left8">
		                  		<defaulttemp></defaulttemp>
		                  	</div>
		                  
		                  <div class="tab-pane fade" id="tab-bottom-left9">
		                    <div class="row">
		                    <div class="col-md-4">
		                     	<div class="modal-body" style="padding-bottom: 30px;" v-if="imageLink!==''">
						           	<div class="temp_style" >
						              <img v-bind:src="imageLink" width="350px;">
						            </div>
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
		                   <button type="button" @click="save(9)" class="btn btn-primary button_save">Save</button>
		                  </div>
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
	import dataService from '@/components/dataservice.js';
	import leftNav from '@/components/leftnav.vue'
	import contactForm from '@/components/setupcomponent/contactinfo.vue' 
	import services from '@/components/setupcomponent/services.vue'
	import defaulttemp from '@/components/setupcomponent/defaulttemplate.vue'
	import { slogan_url, aboutus_url, agency_setup_status, agency_status_put } from '@/components/constant';
  export default {
  	components: {
      leftNav,
      contactForm,
      services,
      defaulttemp
    },
    data() {
      return {
      	  cid:'',
      	  uid:'',
          username:'',
          progress_width:'',
          tab1:1,
          tab2:0,
          logo_file:'',
          slogan_text:'',
          about_us:'',
          marketing:'',
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
          flag_count:0,
          imageLink:''
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

        $('#tab1').css('display','block')
      	$('#tab2').css('display','none')
      }
    },
    methods:{
    	updatecolor(color)
      	{
        	$(".box_button").css("background-color",color);
        	$(".box_button").css("color","white");
      	},
      	tabchange(tab)
      	{	
      		if(tab==1)
      		{
      			$('#tab1').css('display','none')
      			$('#tab2').css('display','block')
      			this.tab1 = 0
      			this.tab2 = 1
      		}
      		else
      		{
      			$('#tab1').css('display','block')
      			$('#tab2').css('display','none')
      			this.tab1 = 1
      			this.tab2 = 0
      		}
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
      		else if(type==7)
      		{
      			if(this.agency_status.team!==1)
      			{
      				this.updatestatus();
      				this.agency_status.team = 1
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