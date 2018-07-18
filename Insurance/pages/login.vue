<template >
 <section style="padding-top: 0px;">
  	<div class="form-w3ls" style="margin:6% auto">
		<div class="form-head-w3l">
		<center>
			<img src="../static/images/GlobeOnly.png"  width="70" height="70" align="middle" >
		</center>
		</div>
	    <ul class="tab-group cl-effect-4">
	        <li @click="tabchange('#signin-agile')" style="list-style: none !important;"><a href="#signin-agile">Sign In</a></li>
			<li @click="tabchange('#signup-agile')" style="list-style: none !important;"><a href="#signup-agile">Sign Up</a></li>    
	    </ul>
	    <div class="tab-content" >
	        <div class="signtab" id="signin-agile">   
				<form @submit.prevent="login(logindata)"  method="post">
					
					<p class="header">User Name</p>
					<input type="text" name="user" placeholder="User Name" required="required" v-model="logindata.username">
					
					<p class="header">Password</p>
					<input type="password" name="password" placeholder="Password" required="required" v-model="logindata.password">
					
					<input type="checkbox" id="brand" value="">
					<label for="brand"><span></span> Remember me?</label>
					
					<input type="submit" class="sign-in" value="Sign In">
				</form>
			</div>
			<div class="signtab" id="signup-agile">   
				<form @submit.prevent="save(signupdata)" method="post">

					<p>You want to signup as </p><p><input type="radio" v-model="signupdata.ctype" name="selectcustomer" id="agency" @click="selectctype($event)" value="A"> Agency &nbsp;&nbsp; or &nbsp;&nbsp; <input type="radio" v-model="signupdata.ctype" name="selectcustomer" id="individual" @click="selectctype($event)" value="I"> Individual</p>

					<p class="header">User Name</p>
					<input type="text" v-model="signupdata.username" placeholder="Your Full Name" required="required">

					<p v-if="agencytype==1" class="header">Agency Name</p>
					<input v-if="agencytype==1" type="text" v-model="signupdata.agencyname" placeholder="Name of Your Agency" required="required">
					
					<p class="header">Email Address</p>
					<input type="email" v-model="signupdata.email" placeholder="Email" required="required">
					
					<p class="header">Password</p>
					<input type="password" v-model="signupdata.password" placeholder="Password" required="required">
					
					<p class="header">Confirm Password</p>
					<input type="password" v-model="signupdata.confirmpwd" placeholder="Confirm Password" required="required">
					<p v-if="errmsg!==''" style="text-align: center;color: red;">{{errmsg}}</p>
					<input type="submit" class="register" value="Sign up">
				</form>
			</div> 
	    </div><!-- tab-content -->
	</div> 
  </section>
</template>

<script>
	//import axios from 'axios'
	import dataService from '../components/dataservice.js';
	import { login_url,customer_url,user_url} from '../components/constant'

	const encode = require('nodejs-base64-encode')

	export default 
	{
    	data () {
	      	return {
	      		signupdata:{
	      			ctype:'A',
	      			username:'',
		      		agencyname:'',
		      		email:'',
		      		password:'',
		      		confirmpwd:''
	      		},
	      		logindata:{
	      			username:'',
	      			password:''
	      		},
	      		agencytype:1,
	      		errmsg:''
	      	}
      	},
      	methods: {
      		tabchange(id)
      		{
      			$('.signtab').hide();
                $(id).show();
      		},
      		selectctype(event)
      		{
      			if(event.target.id == 'agency')
      			{
      				this.agencytype=1;
      			}
      			else
      			{
      				this.agencytype=0;
      			}
      		},
      		save()
      		{
      			if(this.signupdata.password==this.signupdata.confirmpwd)
      			{
      				var str = this.signupdata.email;
	      			var res = str.split("@");
	      			var domain = res[1];
	      			var c_nam = '';
	      			if(this.signupdata.ctype=='A')
	      			{
	      				c_nam = this.signupdata.agencyname;
	      			}
	      			else
	      			{
	      				c_nam = this.signupdata.username;
	      			}

	      			var customerformData = {
			          	CustomerName: c_nam,
						CustomerType: this.signupdata.ctype, 						
						EmailDomain: domain
			        }

			        dataService.signuppost(customerformData,customer_url)
			        // axios.post(customer_url, customerformData, {
			        //             headers: {
			        //         'Content-type': 'application/x-www-form-urlencoded',
			        //         'Accept': 'application/json, text/plain, */*'
			        //       }
			        //  })
			        .then(function (response) {
			            if(response && response.data.CustomerID)
			            {			       
			            	var user_fullname = this.signupdata.username;
			            	var res = user_fullname.split(" ");
			            	var f_name = res[0];
			            	var l_name = res[1];

			            	var userformData = {
					          	UserTypeCode: 2, 
								EmailAddress: this.signupdata.email, 
								FirstName: f_name,
								LastName: l_name,
								IsActive: 1,
								CustomerID: response.data.CustomerID
					        }
					        dataService.signuppost(userformData,user_url)

					        // 	axios.post(user_url, userformData, {
					        //     headers: {
					        //         'Content-type': 'application/x-www-form-urlencoded',
					        //         'Accept': 'application/json, text/plain, */*'
					        //     }
					        // })
					        .then(function (response) {
					        })
			            }
			        })
      			}
      			else
      			{
      				this.errmsg = 'Your password and confirmation password do not match';
      			}
      		},
      		login()
      		{
			    var loginformData = 
			    {
					EmailAddress: this.logindata.username, 
					Password: encode.encode(this.logindata.password, 'base64') 
				}
      			dataService.signuppost(loginformData,login_url)

      			// axios.post(login_url, loginformData, {
			    //     headers: 
			    //     {
			    //         'Content-type': 'application/x-www-form-urlencoded',
			    //         'Accept': 'application/json, text/plain, */*'
			    //     }
			    // })
			    .then(function (response) 
			   	{
			        if(response.data.StatusCode==0)
			        {	
			        	var UserID=response.data.User[0].UserID;
			        	var EmailAddress=response.data.User[0].EmailAddress;
			        	var FirstName=response.data.User[0].FirstName;
			        	var LastName=response.data.User[0].LastName;
			        	var CustomerID=response.data.User[0].CustomerID;

			            window.localStorage.setItem('UserID',UserID);
			            window.localStorage.setItem('EmailAddress',EmailAddress);
			            window.localStorage.setItem('FirstName',FirstName);
			            window.localStorage.setItem('LastName',LastName);
			            window.localStorage.setItem('CustomerID',CustomerID);
			            window.location.href = "/useraccount";
			            //self.$router.push('/useraccount');
			        }
			    });
      		},
      		loginAuth()
      		{
      			if(process.browser)
      			{
      				if(typeof window.localStorage.getItem('FirstName')!=='undefined' || window.localStorage.getItem('FirstName')!=="" || window.localStorage.getItem('FirstName')!==null)
      				{
      					//this.$router.push('/useraccount');
      					//window.location.href = "/useraccount";
      				}      				
      			}
      		}
      	},
      	created:function() 
      	{
      		this.loginAuth();
    	}   
    }

</script>

<style>
	body {
	background:url(../static/images/bg.jpg);
	background-repeat:no-repeat;
	background-position:center;
	background-attachment:fixed;
	background-size:100% 100%;
	-webkit-background-size:100% 100%;
	-moz-background-size:100% 100%;
	-o-background-size:100% 100%;
	-ms-background-size:100% 100%;
	font-family: 'Sansita', sans-serif;
}

article, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {
	display: block;
}
ol,ul {
	list-style:none;
	margin:0px;
	padding:0px;
}
blockquote,q {
	quotes:none;
}
blockquote:before,blockquote:after,q:before,q:after {
	content:'';
	content:none;
}
table {
	border-collapse:collapse;
	border-spacing:0;
}

/* start editing from here */
a {
	text-decoration:none;
}
.txt-rt {
	text-align:right;
}
.txt-lt {
	text-align:left;
}
.txt-center {
	text-align:center;
/*-- W3Layouts --*/	
}
.float-rt {
	float:right;
}
.float-lt {
	float:left;
}
.clear {
	clear:both;
}/* clear float */
.pos-relative {
	position:relative;
}
.pos-absolute {
	position:absolute;
}
.vertical-base {	
	vertical-align:baseline;
}
.vertical-top {	
	vertical-align:top;
}
nav.vertical ul li {	
	display:block;
}/* vertical menu */
nav.horizontal ul li {	
	display: inline-block;
}/* horizontal menu */
img {
	max-width:100%;
}

/*--- end reset code ---*/

*, *:before, *:after {
  box-sizing: border-box;
}
html {
  overflow-y: scroll;
}

.form-head-w3l h2{
	text-align: center;
    font-size: 40px;
    width: 60px;
    height: 60px;
    line-height: 40px;
    border-radius: 50%;
    border: 2px solid #3e3939;
    margin: 0 auto;
    background: #2881d9;
    text-shadow: 2px 2px 3px;
    font-weight: 600;
	color:#3e3939;
}
.form-w3ls {
    background:#ffffff;
	padding: 40px 50px;
	width:35%;
	margin:0 auto;
}
.tab-group {
	list-style: none;
    padding: 0;
    margin: 0 0 30px 155px;
}
.tab-group:after {
  content: "";
  display: table;
  clear: both;
}
.tab-group li a {
  display: block;
  text-decoration: none;
  padding: 15px;
  color: #212121;
  font-size: 20px;
  margin-right:25px;
  float: left;
  text-align: center;
  cursor: pointer;
  -webkit-transition: .5s ease;
  transition: .5s ease;
}
.tab-group li a:hover {
  color: #212121;
}
.tab-group .active a {
  color: #212121;
}
.tab-content > div:last-child {
  display: none;
}
.cl-effect-4 li a {
	position:relative;
}
.cl-effect-4 li a::after {
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	height: 1px;
	background:#2881d9;
	content: '';
	opacity: 0;
	-webkit-transition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;
	-moz-transition: height 0.3s, opacity 0.3s, -moz-transform 0.3s;
	transition: height 0.3s, opacity 0.3s, transform 0.3s;
	-webkit-transform: translateY(-10px);
	-moz-transform: translateY(-10px);
	transform: translateY(-10px);
}
.cl-effect-4 li.active a::after, .cl-effect-4 li a:hover::after, .cl-effect-4 li a:focus::after {
    height: 2px;
    opacity: 1;
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    transform: translateY(0px);
}
/*-- Sign In Form --*/
p.header {
    font-size: 16px;
    font-weight: 500;
    color: #212121;
    letter-spacing: 1px;
    text-transform: uppercase;
}
div#signin-agile input[type="text"],div#signin-agile input[type="password"],div#signup-agile input[type="text"],div#signup-agile input[type="email"],div#signup-agile input[type="password"] {
	padding: 10px;
    width: 100%;
    border-bottom: 2px solid #2881d9;
    border-top: none;
    border-left: none;
    border-right: none;
    color: #212121;
    text-align: left;
    outline: none;
    letter-spacing: 1px;
    font-size: 16px;
    margin-top: 1em;
    margin-bottom: 2em;
    font-weight: 600;
    font-family: 'Poiret One', cursive;
    background: none;
}
div#signin-agile input[type="text"]:focus,div#signin-agile input[type="password"]:focus,div#signup-agile input[type="text"]:focus,div#signup-agile input[type="email"]:focus,div#signup-agile input[type="password"]:focus   {
	background-color:#2881d9;
	border-color:#2881d9;
}
/*--checkbox--*/
div#signin-agile input[type="checkbox"] {
    display: none;
}
div#signin-agile input[type="checkbox"]+label {
    position: relative;
    padding-left: 2em;
    border: none;
    outline: none;
    font-size: 1em;
    color: #212121;
    font-weight: 400;
    cursor: pointer;
}
div#signin-agile input[type="checkbox"]+label span:first-child {
    width: 14px;
    height: 14px;
    border: 2px solid #2881d9;
    position: absolute;
    left: 0;
	background:#2881d9;
	top:3px;
}
div#signin-agile input[type="checkbox"]:checked+label span:first-child:before {
    content: "";
    background: url(../static/images/tick.png)no-repeat;
    position: absolute;
    left:0px;
    top:0px;
    font-size: 10px;
    width: 10px;
    height: 10px;
}
/*--//checkbox--*/
div#signin-agile .sign-in {
	font-size: 20px;
	font-weight: 600;
	text-transform: uppercase;
	width: 100%;
	cursor: pointer;
	letter-spacing: 1px;
	padding: 10px;
	margin-top: 30px;
	border: none;
	outline: none;
	color: #212121;
	background-color: #2881d9;
	font-family: 'Sansita', sans-serif;
	transition: all 0.5s ease-in-out;
	-webkit-transition: all 0.5s ease-in-out;
	-moz-transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
}
div#signin-agile .sign-in:hover {
	background-color: #2881d9;
	font-family: 'Sansita', sans-serif;
	
	color: #000000;
}
/*-- /Sign In Form --*/
/*-- Sign Up Form --*/
div#signup-agile .register {
	padding: 10px;
	background-color: #2881d9;
	width: 100%;
	border: none;
	cursor: pointer;
	color: #000000;
	outline: none;
	letter-spacing: 1px;
	font-weight: 600;
	font-family: 'Sansita', sans-serif;
	font-size: 20px;
	margin-top: 5%;
	text-transform: uppercase;
	-webkit-transition: all 0.5s ease-in-out;
	-moz-transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
}
div#signup-agile .register:hover {
	background-color: #2881d9;
	color: #000000;
}
/*-- /Sign Up Form --*/
p.copyright {
	font-size: 16px;
	font-weight: normal;
	letter-spacing: 1px;
	text-align: center;
	padding: 50px 0;
	color: #fff;
}
p.copyright a {
	color: #7bf904;;
}
p.copyright a:hover {
	color: #b0b5a9;
}
/*-- Responsive start here --*/
@media (max-width:1600px) {
	.form-w3ls {
	width: 38%;	
	}
}

@media (max-width:1440px) {
	.tab-group {
		margin: 0 0 30px 124px;
	}
}
@media (max-width:1366px) {
	.tab-group {
		margin: 0 0 30px 112px;
	}
}	
@media (max-width: 1280px) {
	.tab-group {
		margin: 0 0 30px 125px;
	}
	.form-w3ls {
		width: 43%;
	}
}

@media (max-width: 1080px) {
	h1 {
		font-size: 35px;
		padding: 40px 0;	
	}
	.tab-group li a {
		font-size: 17px;
	}
	.tab-group {
		margin: 0 0 40px 96px;
	}
	p.header {
		font-size: 14px;
	}
	div#signin-agile input[type="checkbox"]+label {
		font-size: 14px;
		padding-right: 25px;
	}
	div#signin-agile input[type="checkbox"]+label span:first-child {
		top: 0;
	}
	div#signin-agile .sign-in {
		font-size:17px;
	}
	p.copyright {
		font-size:14px;
		line-height:30px;
	}
}

@media (max-width: 1024px) {
	.tab-group {
			margin:0 0 40px 114px;
		}
	.form-w3ls {
		width: 50%;
	}
}

@media (max-width: 991px) {
	.tab-group {
		margin: 0px 0 40px 93px;
	}
	.form-w3ls {
		width: 45%;
		padding:25px 40px;
	}
	div#signup-agile .register {
		margin-bottom:30px;
	}
}

@media (max-width: 900px) {
	.tab-group {
		margin: 0px 0 40px 91px;
	}
	.form-w3ls {
		width: 50%;
	}
}

@media (max-width: 800px) {
	.form-w3ls {
		width: 55%;
		padding: 25px 35px;
	}
}

@media (max-width: 768px) {
	h1 {
		font-size: 32px;
		padding: 35px 0;
	}
	.form-w3ls {
		width: 60%;
	}
	div#signin-agile input[type="text"], div#signin-agile input[type="password"], div#signup-agile input[type="text"], div#signup-agile input[type="email"], div#signup-agile input[type="password"] {
		margin:13px 0 25px;
	}
	.tab-group {
		margin: 0 0 35px 102px;
	}
	div#signin-agile input[type="checkbox"]+label {
		display:block;
		margin-top:-3px;
	}
	div#signin-agile .sign-in {
		margin-top:22px;
	}
	p.copyright {
		padding:35px 0 20px;
	}
}
@media (max-width: 736px){
	.tab-group {
		margin: 0 0 35px 92px;
	}
}	
@media (max-width: 667px) {
	.tab-group {
		margin: 0 0 35px 89px;
	}
	.form-w3ls {
		width: 65%;
	}
}

@media (max-width: 640px) {
	.tab-group {
		margin: 0 0 35px 87px;
	}
	.form-w3ls {
		width: 70%;
	}
	.tab-group li a {
		font-size: 15px;
	}
	p.header {
		font-size: 13px;
	}
	div#signin-agile input[type="text"], div#signin-agile input[type="password"], div#signup-agile input[type="text"], div#signup-agile input[type="email"], div#signup-agile input[type="password"] {
		font-size:15px;
	}
}

@media (max-width: 568px) {
	h1 {
		font-size: 25px;
		padding: 30px 0;
	}
	.tab-group {
		margin: 0 0 35px 75px;
	}
}

@media (max-width: 480px) {
	.form-w3ls {
		width: 80%;
	}
	p.copyright {
		padding:30px 10px;
	}
	.tab-group {
		margin: 0 0 30px 66px;
	}
}

@media (max-width: 414px) {
	.tab-group {
		margin: 0 0 30px 52px;
	}
	.form-w3ls {
		width: 85%;
	}
	p.header {
		font-size: 13px;
	}
	div#signin-agile input[type="text"], div#signin-agile input[type="password"], div#signup-agile input[type="text"],div#signup-agile input[type="email"], div#signup-agile input[type="password"] {
		margin: 10px 0 12px;
	}	
}

@media (max-width: 384px) {
	.tab-group {
		margin: 0 0 30px 45px;
	}
	.form-w3ls {
		padding: 15px 30px;
	}
	div#signup-agile .register {
		font-size:17px;
	}
}

@media (max-width: 375px) {
	h1 {
		font-size: 23px;
		padding: 20px 0;
	}
	.tab-group {
		margin: 0 0 30px 41px;
	}
}

@media (max-width: 320px) {
	h1 {
		font-size: 23px;
	}
	.tab-group {
		margin: 0 0 30px 39px;
	}
	.tab-group li a {
		margin-right:12px;
	}
	.form-w3ls {
		width: 90%;
		padding:10px 20px;
	}
	div#signin-agile input[type="text"], div#signin-agile input[type="password"], div#signup-agile input[type="text"], div#signup-agile input[type="email"], div#signup-agile input[type="password"] {
		font-size:15px;
		margin: 10px 0 20px;
	}
	div#signin-agile .sign-in, div#signup-agile .register {
		font-size: 16px;
	}
	p.copyright {
		padding: 10px 10px;
	} 
}

</style>
