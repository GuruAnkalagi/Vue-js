<template>
	<div>
		<div class="col-md-12">
  		<div class="col-sm-6" style="float: left;">
  		  
  		  <label>Address 1 : </label>
        <input type="text" class="form-control" v-model="contactinfo.addstreet1" placeholder="Enter Address 1"><br>
        <label>Address 2 : </label>
        <input type="text" class="form-control" v-model="contactinfo.addstreet2" placeholder="Enter Address 2"><br>
        <label>City : </label>
        <input type="text" class="form-control" v-model="contactinfo.addcity" placeholder="Enter City"><br>
        <label>State : </label>
        <input type="text" class="form-control" v-model="contactinfo.addstate" placeholder="Enter State"><br>
        <label>Zip code : </label>
        <input type="text" class="form-control" v-model="contactinfo.addzip" placeholder="Enter Zipcode"><br>
  		</div>
      
      <div class="col-sm-6" style="float: left;">
  		 
		    <label>Telephone 1 : </label>
        <input type="text" class="form-control" v-model="contactinfo.phone1" placeholder="Enter Telephone 1"><br>
        <label>Telephone 2 : </label>
        <input type="text" class="form-control" v-model="contactinfo.phone2" placeholder="Enter Telephone 2"><br>
        <label>Fax 1 : </label>
        <input type="text" class="form-control" v-model="contactinfo.fax1" placeholder="Enter Fax 1"><br>
        <label>Fax 2 : </label>
        <input type="text" class="form-control" v-model="contactinfo.fax2" placeholder="Enter Fax 2"><br>
        <label>Email : </label>
        <input type="text" class="form-control" v-model="contactinfo.email" placeholder="Enter Email"><br>
      </div>
  	</div>
    <button type="button" @click="save()" class="btn btn-primary button_save">Save</button>
	</div>
</template>

<script>
  export default {
    data(){
      return {
        contactinfo:{
          addstreet1:'',
          addstreet2:'',
          addcity:'',
          addstate:'',
          addzip:'',
          phone1:'',
          phone2:'',
          fax1:'',
          fax2:'',
          email:''
        }

      }
    },
    methods:
    {
      save()
      {
        if(this.$parent.agency_status.contact!==1)
        {
          this.$parent.agency_status.contact = 1;
          this.$parent.updatestatus();
        }
        console.log(this.contactinfo);
      }
      
    }
  }
</script>