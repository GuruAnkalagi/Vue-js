<style>
  .customer_quote
  {
  font-style: italic;
  font-size: 20px !important;

  }
  .customer_name
  {
  font-style: italic;
  font-size: 20px;
  }
   .image_radius
  {
    border-radius: 50%;
  }
</style>
<template>
    <!-- Navigation -->
  <div id="page-top">
    <parentComp></parentComp>
    <div class="page1">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <a href="/useraccount" class="nav-link js-scroll-trigger" style="color:#dee2e6;"><i class="fa fa-angle-left" style="font-size: 22px;" aria-hidden="true"></i> Back to Dashboard </a>
          <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top" style="color:#fff;">K2Reimagine</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i class="fa fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive" style="height: 77px;">
              <ul class="navbar-nav text-uppercase ml-auto" >
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#services" style="font-size: 15px;"><b>Services</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#whyus" style="font-size: 15px;"><b>Why Us</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#about" style="font-size: 15px;"><b>About</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#team" style="font-size: 15px;"><b>Team</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#agent" style="font-size: 15px;"><b>Agent</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#contactus" style="font-size: 15px;"><b>Contact</b></a>
                </li>
              </ul>

              <div id="navbar-menu" style="padding-left: 50px;">
                <ul class="nav navbar-nav navbar-right">
                  <li class="dropdown nav-item">
                    <a href="#" class="dropdown-toggle nav-link js-scroll-trigger" data-toggle="dropdown">
                    <img src="https://avatars1.githubusercontent.com/u/7221389?v=4&s=32" style="border-radius: 50%;">
                     <span style="font-size: 15px;"><b>{{username}}</b></span></a>
                    <ul class="dropdown-menu" style="padding: 6px 6px;left: 40px;">
                      <li><a href="/userprofile" style="color: black"><i class="fa fa-user-o"></i> <span>My Profile</span></a></li>
                      <li><a href="#" @click="logout()" style="color: black"><i class="fa fa-power-off"></i> <span>Logout</span></a></li>
                    </ul>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </nav>

    <!-- Header -->
    <header class="masthead" style="background-color: #7b9aaf;">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">{{slogan}}</div>
          <div class="intro-heading text-uppercase">{{title}}</div><br><br><br>
          <div class=" intro-lead-in customer_quote">
            {{agent_desc}}
            <br><br>
            <p class="customer_name">- {{agent_name}}</p>
          </div>
        </div>
      </div>
    </header>
    </div>

    <div class="page2">
    <!-- Team -->
    <section class="bg-light" id="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase" style="color:#11467b;">Our Team</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
              <div class="portfolio-hover">
                <!-- <div class="portfolio-hover-content">
                  <i class="fa fa-plus fa-3x"></i>
                </div> -->
              </div>
              <img class="img-fluid"  style="height: 183px;" src="../static/images/portfolio/01-thumbnail.jpg" alt="">
            </a>
            <div class="portfolio-caption" style="text-align: center;padding-top: 15px;">
              <h4>Threads</h4>
              <p class="text-muted">Illustration</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
              <div class="portfolio-hover">
                <!-- <div class="portfolio-hover-content">
                  <i class="fa fa-plus fa-3x"></i>
                </div> -->
              </div>
              <img class="img-fluid" style="height: 183px;" src="../static/images/portfolio/02-thumbnail.jpg" alt="">
            </a>
            <div class="portfolio-caption" style="text-align: center;padding-top: 15px;">
              <h4>Explore</h4>
              <p class="text-muted">Graphic Design</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
              <div class="portfolio-hover">
                <!-- <div class="portfolio-hover-content">
                  <i class="fa fa-plus fa-3x"></i>
                </div> -->
              </div>
              <img class="img-fluid"  style="height: 185px;" src="../static/images/portfolio/03-thumbnail.jpg" alt="">
            </a>
            <div class="portfolio-caption" style="text-align: center;padding-top: 15px;">
              <h4>Finish</h4>
              <p class="text-muted">Identity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>

    <div class="page3">
    <!-- About -->
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase" style="color:#11467b;">About Us</h2>
            <h3 class="section-subheading text-muted">{{aboutus}}</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <ul class="timeline">
              <li>
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="../static/images/about/1.jpg" alt="">
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 style="color:#11467b;">2009-2011</h4>
                    <h4 class="subheading" style="color:#11467b;">Our Humble Beginnings</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="../static/images/about/2.jpg" alt="">
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 style="color:#11467b;">March 2011</h4>
                    <h4 class="subheading" style="color:#11467b;">An Agency is Born</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted" >
                <div class="timeline-image" style="background-color:#11467b!important;">
                  <h4>Be Part
                    <br>Of Our
                    <br>Story!</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>

    <div class="page4">
    <!-- Contact -->
    <section id="contactus">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase" style="color:#11467b;">Contact</h2>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-12">
            <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="450" id="gmap_canvas" :src="`https://maps.google.com/maps?q=${lat}, ${lon} &t=&z=13&ie=UTF8&iwloc=&output=embed`" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen></iframe></div><a href="https://www.crocothemes.net"></a><style>.mapouter{overflow:hidden;height:450px;width:100%;}.gmap_canvas {background:none!important;height:450px;width:100%;}</style>
          </div>
        </div>
      </div>
      </div>
    </section>
    </div>

    <div class="page5">
    <!-- Why Us -->
    <section id="whyus">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase" style="color:#11467b;"> Why Us</h2>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-12">
            <p>{{whyus}}</p>
          </div>
        </div>
      </div>
    </section>
    </div>

    <div class="page6">
    <!-- agent -->
    <section class="bg-light" id="agent">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase" style="color:#11467b;">Personal Agent</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
          </div>
          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="../static/images/team/2.jpg" alt="">
              <h4>Larry Parker</h4>
              <p class="text-muted">Lead Marketer</p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-twitter" style="padding-top: 10px;"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-facebook" style="padding-top: 10px;"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-linkedin" style="padding-top: 10px;"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4">
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
          </div>
        </div>
      </div>
    </section>
    </div>

    <div class="page7">
    <!-- Services -->
    <section id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
       <h2 class="section-heading text-uppercase" style="color:#11467b;"> Our Services</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-3" v-for="(service, ind) in services" :key=ind v-if="ind<4">
            <span class="fa-stack fa-4x">
              <i  class="fa fa-circle fa-stack-2x text-primary" style="color:#11467b!important;"></i>
              <i v-if="ind==0" class="fa fa-car fa-stack-1x fa-inverse"></i>
              <i v-if="ind==1" class="fa fa-briefcase fa-stack-1x fa-inverse"></i>
              <i v-if="ind==2" class="fa fa-home fa-stack-1x fa-inverse"></i>
              <i v-if="ind==3" class="fa fa-clock-o fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading" style="min-height: 56px;">{{service.ServiceName}}</h4>
            <p class="text-muted">{{service.ServiceDescriptionText}}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer style="background-color: black;margin-top: 30px;">
      <div class="container" style="color: white;">
        <div style="padding-left: 80px;"> 
          <span v-for="(contact, ind) in contactus" :key=ind>
            <p><b>{{contact.ContactType}}:</b> {{contact.ContactValue}}</p>
          </span>
        </div>
        <div class="row">
          <div class="col-md-4">
            <span class="copyright" style="color: white;">Copyright &copy; Your Website 2018</span>
          </div>
          <div class="col-md-4">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-twitter" style="padding-top: 10px;"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-facebook" style="padding-top: 10px;"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-linkedin" style="padding-top: 10px;"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <ul class="list-inline quicklinks">
              <li class="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>

    <button @click="generatePDF()" style="margin-left: 44%;">Export</button>

    <!-- Modal 1 -->
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">Project Name</h2>
                  <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img class="img-fluid d-block mx-auto" src="../static/images/portfolio/01-full.jpg" alt="">
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul class="list-inline">
                    <li>Date: January 2017</li>
                    <li>Client: Threads</li>
                    <li>Category: Illustration</li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal 2 -->
    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">Project Name</h2>
                  <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img class="img-fluid d-block mx-auto" src="../static/images/portfolio/02-full.jpg" alt="">
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul class="list-inline">
                    <li>Date: January 2017</li>
                    <li>Client: Explore</li>
                    <li>Category: Graphic Design</li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal 3 -->
    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">Project Name</h2>
                  <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img class="img-fluid d-block mx-auto" src="../static/images/portfolio/03-full.jpg" alt="">
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul class="list-inline">
                    <li>Date: January 2017</li>
                    <li>Client: Finish</li>
                    <li>Category: Identity</li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <link rel="stylesheet" href="../css/agency.min.css">
    <link rel="stylesheet" href="../vendor/bootstrap/css/bootstrap.min.css">
    <script src="../js/agency.min.js"></script>

</div>
</template>



<script>
    import parentComp from '@/components/parentcomponent.vue'
    export default {
        components: {
            parentComp
        },
        data() {
            return {
                logo: '',
                title: '',
                slogan: '',
                agent_name: '',
                agent_desc: '',
                lat: '',
                lon: '',
                introduction: '',
                aboutus: '',
                whyus: '',
                teams: [],
                personalagent: '',
                services: [],
                contactus: [],
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
        },
        methods: {
            logout()
            {
              window.localStorage.setItem('UserID',"");
              window.localStorage.setItem('EmailAddress',"");
              window.localStorage.setItem('FirstName',"");
              window.localStorage.setItem('LastName',"");
              window.localStorage.setItem('CustomerID',"");
              this.$router.push('/login');
            },
            generatePDF() {
                var pdf = new jsPDF('p', 'pt', 'letter');
                html2canvas($(".page1")[0], {
                    onrendered: function(canvas) {
                        var imgData = canvas.toDataURL("image/jpeg", 1.0);
                        pdf.addImage(imgData, 'JPEG', 0, 20, 620, 770);

                    }
                });
                setTimeout(function() {
                html2canvas($(".page2")[0], {
                    onrendered: function(canvas) {
                        var imgData = canvas.toDataURL("image/jpeg", 1.0);
                        pdf.addPage();
                        pdf.addImage(imgData, 'JPEG', 20, 20, 580, 520);
                    }
                });
                }, 1000);

                setTimeout(function() {
                html2canvas($(".page3")[0], {
                    onrendered: function(canvas) {
                        var imgData = canvas.toDataURL("image/jpeg", 1.0);
                        pdf.addPage();
                        pdf.addImage(imgData, 'JPEG', 20, 20, 580, 800);
                    }
                });
              }, 1200);
                setTimeout(function() {
                    html2canvas($(".page4")[0], {
                        onrendered: function(canvas) {
                            var imgData = canvas.toDataURL("image/jpeg", 1.0);
                            pdf.addPage();
                            pdf.addImage(imgData, 'JPEG', 0, 0, 640, 650);
                        }
                    });
                }, 1500);
                setTimeout(function() {
                    html2canvas($(".page5")[0], {
                        onrendered: function(canvas) {
                            var imgData = canvas.toDataURL("image/jpeg", 1.0);
                            pdf.addPage();
                            pdf.addImage(imgData, 'JPEG', 0, 0, 610, 350);
                        }
                    });
                }, 1800);
                setTimeout(function() {
                    html2canvas($(".page6")[0], {
                        onrendered: function(canvas) {
                            var imgData = canvas.toDataURL("image/jpeg", 1.0);
                            pdf.addPage();
                            pdf.addImage(imgData, 'JPEG', 20, 20, 610, 650);
                        }
                    });
                }, 2000);
                setTimeout(function() {
                    html2canvas($(".page7")[0], {
                        onrendered: function(canvas) {
                            var imgData = canvas.toDataURL("image/jpeg", 1.0);
                            pdf.addPage();
                            pdf.addImage(imgData, 'JPEG', -10, 0, 650, 800);
                        }
                    });
                }, 2200);
                setTimeout(function() {
                    pdf.save('sample.pdf');
                }, 3000);
            }
        }
    }
</script>