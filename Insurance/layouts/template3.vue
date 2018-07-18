<template>
  <div>
    <Header></Header>
    <parentComp></parentComp>
    <div class="wrapper">
      <div class="columns">
        <leftNav></leftNav>
        <main class="column main">
            <nav class="breadcrumb is-small" aria-label="breadcrumbs">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li class="is-active">
                  <a href="#" aria-current="page">Dashboard</a>
                </li>
              </ul>
            </nav>
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                    <div class="title has-text-primary">
                        <i class="fa fa-tachometer"></i> Template 3
                    </div>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <p>Set as Default</p>
                  <label class="switch"> </label>
                  <label class="switch">
                    <input type="checkbox" checked>
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="container">
              <section class="articles">
                <div class="column is-8 is-offset-2">
                    <div class="card article">
                        <div class="card-content">
                            <div class="media">
                                <div class="media-center">
                                    <div class="level-item">
                                        <!-- <img src="../static/images/insurance logo.png" width="120" height="100" class="author-image" alt="Placeholder image"> <br> -->
                                         <img :src="logo" width="120" height="100" class="author-image" alt="image"> <br>
                                    </div>
                                    <img src="../static/images/Life-insurance.jpg" class="author-image" alt="Placeholder image"> <br><br>
                                </div>
                                <div class="media-content has-text-centered">
                                  <p class="title article-title">
                                  <p class="subtitle is-6 article-subtitle">
                                  </p>
                                </div>
                            </div>

                            <div class="content article-body">
                              <div class="columns">
                                <div class="column">
                                  <blockquote style="text-align:  justify;font-style:  italic;font-size: 19px;">
                                    <p>
                                     {{agent_desc}}
                                    </p>
                                     <br><br>
                                    <p>- {{agent_name}}</p>
                                  </blockquote>
                                </div>
                              </div>
                            </div>
                            <div class="card article">
                                <div class="card-content">
                                <p class="title article-title" style="text-align: center">Introduction:</p>
                                <div class="media-content has-text-centered">
                                    <p class="subtitle is-6 article-subtitle" style="text-align: justify;">
                                        {{introduction}}
                                    </p><br>
                                </div>
                                </div>
                            </div>
                            <br>
                            <p class="title article-title" style="text-align: center;margin-bottom: 0px;">{{title}}</p><p style="text-align: center;">{{slogan}}</p>
                        </div>
                    </div>
                    <br>

                    <section class="hero is-info is-bold is-small promo-block">
                        <div class="hero-body" style="background-color: #00d1b2;">
                          <div class="container">
                            <h1 class="title">Our Team</h1>
                          </div>
                        </div>
                    </section>
                    <div class="card article">
                        <div class="card-content">
                          <div class="media">
                            <div class="media-center">
                            </div>
                          </div>
                          <div class="content article-body">
                            <div class="columns ">
                                <div class="column" v-for="(team,i) in teams" :key=i>
                                    <h5 style="margin-bottom: -1px;">{{team.Name}}</h5>
                                    <span style="font-size: 14px">{{team.Role}}</span><br><br>
                                    <span>{{team.Email}}</span><br>
                                    <span>{{team.OfficePhone}}</span><br>
                                    <span>{{team.MobilePhone}}</span>
                                </div>
                            </div>
                            <br>
                          </div>
                        </div>
                    </div>
                    <br>
                    
                    <section class="hero is-info is-bold is-small promo-block">
                      <div class="hero-body" style="background-color: #00d1b2;">
                        <div class="container">
                          <h1 class="title">Contact Us</h1>
                        </div>
                      </div>
                    </section>
                    <div class="card article">
                        <div class="card-content">
                            <div class="media">
                            <div class="content article-body">
                              <div class="mapouter"><div class="gmap_canvas"><iframe width="700" height="400" id="gmap_canvas" :src="`https://maps.google.com/maps?q=${lat}, ${lon} &t=&z=13&ie=UTF8&iwloc=&output=embed`" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><a href="https://www.crocothemes.net"></a></div>
                              <span v-for="(contact, ind) in contactus" :key=ind>
                                  <p><b>{{contact.ContactType}}:</b> {{contact.ContactValue}}</p>
                                </span>
                            </div>
                          </div>
                        </div>
                    </div>
                    <br>

                    <section class="hero is-info is-bold is-small promo-block">
                        <div class="hero-body" style="background-color: #00d1b2;">
                          <div class="container">
                            <h1 class="title">About Us</h1>
                          </div>
                        </div>
                    </section>
                    <div class="card article">
                        <div class="card-content">
                            <div class="media">
                              <div class="content article-body">
                                <p>
                                 {{aboutus}}
                                </p>
                              </div>
                            </div>
                        </div>
                    </div>
                    <br>

                    <section class="hero is-info is-bold is-small promo-block">
                        <div class="hero-body" style="background-color: #00d1b2;">
                          <div class="container">
                            <h1 class="title">Why Us</h1>
                          </div>
                        </div>
                    </section>
                    <div class="card article">
                        <div class="card-content">
                          <div class="content article-body">
                            <div class="columns" style="padding-top: 26px;">
                                <div class="column our_service">
                                    <p>{{whyus}}</p>
                                </div>
                           </div>
                          </div>
                        </div>
                    </div>
                    <br>

                    <section class="hero is-info is-bold is-small promo-block">
                        <div class="hero-body" style="background-color: #00d1b2;">
                          <div class="container">
                            <h1 class="title">Our Services</h1>
                          </div>
                        </div>
                      </section>

                      <div class="card article">
                        <div class="card-content">
                          <div class="content article-body">
                            <div class="columns" style="padding-top: 26px;">
                              <div class="column our_service">
                                <span v-for="(service, ind) in services" :key=ind>
                                  <h4 style="margin-bottom: 5px;"><b>{{service.ServiceName}}</b></h4>
                                  <p>{{service.ServiceDescriptionText}}</p> <br>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                   <br>

                    <section class="hero is-info is-bold is-small promo-block">
                        <div class="hero-body" style="background-color: #00d1b2;">
                          <div class="container">
                            <h1 class="title">Your personal Agent </h1>
                          </div>
                        </div>
                    </section>
                    <div class="card article">
                        <div class="card-content">
                          <div class="content article-body">
                            <div class="columns" style="padding-top: 26px;">
                              <img src="../static/images/personalagent.jpg" class="author-image" alt="Placeholder image">
                              <div class="column our_service">
                                <p>
                                {{personalagent}}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <br>

                    <section class="hero is-info is-bold is-small promo-block">
                      <div class="hero-body" style="background-color: #00d1b2;">
                        <div class="container">
                          <h1 class="title">
                        PRICING STRUCTURE
                         </h1>
                        </div>
                      </div>
                    </section>
                    <div class="card article">
                      <div class="card-content">
                        <div class="media">
                        <div class="content article-body">
                          <p>
                           The following is our basic pricing structure at {‌Company Name‌}. Keep in mind that we realize everyone has different needs.

                            By choosing all of our recommended riders, you will receive a discount on each. This {‌life insurance proposal sample‌} is specific to you. Contact us for questions on other available options.
                          </p>
                          <h3>MAIN POLICY OPTIONS</h3>

                          <table class="items large ng-scope" ng-class="{ 'text-items-only': ui.isTextItemsOnly(section) }" ng-if="!ui.isMobile">
                            <tbody>
                              <tr class="item with-units-and-price" ng-repeat="item in section.items">
                                <td class="left-interactive-input optional-toggle" ng-class="{
                            empty: ui.hideLeftInteractiveInput(item),
                            'optional-toggle': ui.showOption(item),
                            'quantity-input': ui.showQuantity(item)
                            }">
                              <input ng-if="ui.showOption(item)" type="checkbox" ng-model="item.interactive.settings.enabled" class="ng-pristine ng-untouched ng-valid ng-scope ng-empty">
                                </td>
                              <td class="name ng-binding" colspan="1">30-Year Term Life Coverage ($250,000 Benefit) - $100 per month
                              </td>
                              <td class="units ng-scope" ng-if="ui.configuration(item) === 'with-units-and-price'">
                                <span class="unit-price ng-binding">$100.00</span>
                                <span class="per ng-binding">per</span>
                                <span class="units ng-binding">Month</span>
                                <span class="multiplier">x</span>
                                <span class="num-of-units ng-binding ng-scope" ng-if="!ui.showQuantity(item)">1</span>
                              </td>
                              <td class="cost ng-binding ng-scope" ng-if="ui.showCost(ui.configuration(item))">$100.00</td>
                            </tr>
                            <tr class="item with-units-and-price" ng-repeat="item in section.items">
                              <td class="left-interactive-input optional-toggle" ng-class="{
                            empty: ui.hideLeftInteractiveInput(item),
                            'optional-toggle': ui.showOption(item),
                            'quantity-input': ui.showQuantity(item)
                            }">
                              <input ng-if="ui.showOption(item)" type="checkbox" ng-model="item.interactive.settings.enabled" class="ng-pristine ng-untouched ng-valid ng-scope ng-empty">
                              </td>
                              <td class="name ng-binding" colspan="1">30-Year Term Life Coverage ($500,000 Benefit) - $150 per month</td>
                              <td class="units ng-scope" ng-if="ui.configuration(item) === 'with-units-and-price'">
                                <span class="unit-price ng-binding">$150.00</span>
                                <span class="per ng-binding">per</span>
                                <span class="units ng-binding">Month</span>
                                <span class="multiplier">x</span>
                                <span class="num-of-units ng-binding ng-scope" ng-if="!ui.showQuantity(item)">1</span>
                              </td>
                              <td class="cost ng-binding ng-scope" ng-if="ui.showCost(ui.configuration(item))">$150.00</td>
                            </tr>
                            <tr class="item with-units-and-price" ng-repeat="item in section.items">
                              <td class="left-interactive-input optional-toggle" ng-class="{
                            empty: ui.hideLeftInteractiveInput(item),
                            'optional-toggle': ui.showOption(item),
                            'quantity-input': ui.showQuantity(item)
                            }">
                              <input ng-if="ui.showOption(item)" type="checkbox" ng-model="item.interactive.settings.enabled" class="ng-pristine ng-untouched ng-valid ng-scope ng-not-empty">
                              </td>
                              <td class="name ng-binding" colspan="1">30-Year Term Life Coverage ($1 Million Benefit) - $250 per month</td>
                              <td class="units ng-scope" ng-if="ui.configuration(item) === 'with-units-and-price'">
                                <span class="unit-price ng-binding">$250.00</span>
                                <span class="per ng-binding">per</span>
                                <span class="units ng-binding">Month</span>
                                <span class="multiplier">x</span>
                                <span class="num-of-units ng-binding ng-scope" ng-if="!ui.showQuantity(item)">1</span>
                              </td>
                              <td class="cost ng-binding ng-scope" ng-if="ui.showCost(ui.configuration(item))">$250.00</td>
                            </tr>
                          </tbody>
                        </table>
                      <table class="totals ng-scope">
                        <tbody>
                          <tr ng-show="ui.config.subTotal" class="">
                            <td class="ng-binding"><b>Subtotal</b></td>
                            <td class="ng-binding" style="text-align: right;">$250.00</td>
                          </tr>
                          <tr ng-show="ui.block.$totalDiscounts > 0" class="ng-hide">
                            <td class="ng-binding"><b>Discount</b>
                            </td>
                            <td class="ng-binding" style=" text-align: right;">-$0.00</td>
                          </tr>
                          <tr class="final-total">
                            <td class="ng-binding"><b>Total</b>
                              <span ng-if="!ui.config.taxTotal" class="ng-binding ng-scope"><b>(Ex. Tax)</b></span>
                            </td>
                            <td ng-if="!ui.config.taxTotal" class="ng-binding ng-scope" style="text-align: right;"><b>$250.00</b></td>
                          </tr>
                        </tbody>
                      </table>
                      <h3>RIDER OPTIONS</h3>

                      <table class="items large ng-scope" ng-class="{ 'text-items-only': ui.isTextItemsOnly(section) }" ng-if="!ui.isMobile">
                      <tbody>
                        <tr class="item with-units-and-price" ng-repeat="item in section.items">
                          <td class="left-interactive-input optional-toggle" ng-class="{
                            empty: ui.hideLeftInteractiveInput(item),
                            'optional-toggle': ui.showOption(item),
                            'quantity-input': ui.showQuantity(item)
                            }">
                            <input ng-if="ui.showOption(item)" type="checkbox" ng-model="item.interactive.settings.enabled" class="ng-pristine ng-untouched ng-valid ng-scope ng-empty">
                          </td>
                          <td class="name ng-binding" colspan="1">30-Year Term Life Coverage ($250,000 Benefit) - $100 per month</td>
                          <td class="units ng-scope" ng-if="ui.configuration(item) === 'with-units-and-price'">
                            <span class="unit-price ng-binding">$100.00</span>
                            <span class="per ng-binding">per</span>
                            <span class="units ng-binding">Month</span>
                            <span class="multiplier">x</span>
                            <span class="num-of-units ng-binding ng-scope" ng-if="!ui.showQuantity(item)">1</span>
                          </td>
                          <td class="cost ng-binding ng-scope" ng-if="ui.showCost(ui.configuration(item))">$100.00</td>
                        <tr class="item with-units-and-price" ng-repeat="item in section.items">
                          <td class="left-interactive-input optional-toggle" ng-class="{
                            empty: ui.hideLeftInteractiveInput(item),
                            'optional-toggle': ui.showOption(item),
                            'quantity-input': ui.showQuantity(item)
                            }">
                            <input ng-if="ui.showOption(item)" type="checkbox" ng-model="item.interactive.settings.enabled" class="ng-pristine ng-untouched ng-valid ng-scope ng-empty">
                          </td>
                          <td class="name ng-binding" colspan="1">30-Year Term Life Coverage ($500,000 Benefit) - $150 per month</td>
                          <td class="units ng-scope" ng-if="ui.configuration(item) === 'with-units-and-price'">
                          <span class="unit-price ng-binding">$150.00</span>
                          <span class="per ng-binding">per</span>
                          <span class="units ng-binding">Month</span>
                          <span class="multiplier">x</span>
                          <span class="num-of-units ng-binding ng-scope" ng-if="!ui.showQuantity(item)">1</span>
                        </td>
                        <td class="cost ng-binding ng-scope" ng-if="ui.showCost(ui.configuration(item))">$150.00</td>
                      </tr>
                      <tr class="item with-units-and-price" ng-repeat="item in section.items">
                        <td class="left-interactive-input optional-toggle" ng-class="{
                            empty: ui.hideLeftInteractiveInput(item),
                            'optional-toggle': ui.showOption(item),
                            'quantity-input': ui.showQuantity(item)
                            }">
                            <input ng-if="ui.showOption(item)" type="checkbox" ng-model="item.interactive.settings.enabled" class="ng-pristine ng-untouched ng-valid ng-scope ng-not-empty">
                          </td>
                          <td class="name ng-binding" colspan="1">30-Year Term Life Coverage ($1 Million Benefit) - $250 per month</td>
                          <td class="units ng-scope" ng-if="ui.configuration(item) === 'with-units-and-price'">
                            <span class="unit-price ng-binding">$250.00</span>
                            <span class="per ng-binding">per</span>
                            <span class="units ng-binding">Month</span>
                            <span class="multiplier">x</span>
                            <span class="num-of-units ng-binding ng-scope" ng-if="!ui.showQuantity(item)">1</span>
                          </td>
                          <td class="cost ng-binding ng-scope" ng-if="ui.showCost(ui.configuration(item))">$250.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="totals ng-scope">
                      <tbody>
                        <tr ng-show="ui.config.subTotal" class="">
                          <td class="ng-binding"><b>Subtotal</b></td>
                          <td class="ng-binding" style="text-align: right;">$430.00</td>
                        </tr>
                        <tr ng-show="ui.block.$totalDiscounts > 0" class="ng-hide">
                          <td class="ng-binding"><b>Discount</b></td>
                          <td class="ng-binding" style=" text-align: right;">-$0.00</td>
                        </tr>
                        <tr class="final-total">
                          <td class="ng-binding"><b>Total </b>
                            <span ng-if="!ui.config.taxTotal" class="ng-binding ng-scope"><b>(Ex. Tax)</b>
                            </span>
                          </td>
                          <td ng-if="!ui.config.taxTotal" class="ng-binding ng-scope" style="text-align: right;"><b>$430.00</b></td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                </div>
              </section>
            </div>
        </main>
      </div>
    </div>
   </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import leftNav from '@/components/leftnav.vue'
    import parentComp from '@/components/parentcomponent.vue'
    export default {
        components: {
            Header,
            leftNav,
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
                myths_arr: [],
                contactus: []
            }
        }
    }
</script>
