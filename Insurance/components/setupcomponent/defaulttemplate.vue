<template>
	<div>
		<div class="modal-body" v-if="selected_template!==''">
           	<div class="temp_style" >
           	<input type="hidden" v-model="templateselected" name="">
              <img v-bind:src="selected_template" width="350px;">
            </div>
      	</div>

		<a class="portfolio-link" data-toggle="modal" href="#portfolioModal3" style="margin-left: 30%;">
			<button type="button" class="btn btn-primary">Choose Template</button>
		</a><br><br>
	    <button type="button" @click="save()" class="btn btn-primary slogan_save">Save</button>


	    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true" style="opacity: 2;">
        <div class="modal-dialog" style="width: 100%;margin: 240px 10px;">
          <div class="modal-content" style="background-color: #f5f5fa;">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <span class="close" data-dismiss="modal" style="font-size: 50px;padding-right: 15px;">&times;</span>
              <div class="row" style="padding-top: 50px;">

                <div class="col-lg-3 mx-auto" v-for="(image, index) in template_images">
                  <div class="modal-body">  
                   <div class="form-check" style="text-align: center;">
                      <input class="form-check-input" name="group100" :value="image" v-on:change="choosetemp($event)" type="radio">
                      <label class="form-check-label template_radio" for="radio100" style="padding-left: 10px;">{{image}}</label>
                    </div>
                     <div class="first_temp" >
                      <img :src="`../../images/temscreenshots/${image}.jpg`"  width="280px;">
                     </div>
                  </div>
                </div>
             </div>
              <button class="btn btn-primary" data-dismiss="modal" style="margin-left: 50%;margin-top: 30px;" type="button">OK</button><br><br><br>
          </div>
        </div>
      </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				template_images:['template1','template2','template3','template4','template5','template6','template7'],
				selected_template:'',
				templateselected:''
			}
		},
		methods:
		{
			choosetemp(event)
	      	{	
	      		this.templateselected = event.target.value;
	      		this.selected_template = "../../images/temscreenshots/"+event.target.value+".jpg";
	      		this.$parent.imageLink = "../../images/temscreenshots/"+event.target.value+".jpg";
	      	},
	      	save()
	      	{
	      		if(this.$parent.agency_status.default_temp!==1)
		        {
		          this.$parent.agency_status.default_temp = 1;
		          this.$parent.updatestatus();
		        }
	      		console.log(this.templateselected);
	      	}
		}
	}
</script>