<template>
  <!-- ***** Main Banner Area Start ***** -->
  <div class="page-heading about-page-heading" id="top">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="inner-content">
            <h2>Contact Us</h2>
            <span>Awesome, clean &amp; creative HTML5 Template</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ***** Main Banner Area End ***** -->

  <!-- ***** Contact Area Starts ***** -->
  <div class="contact-us">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90186.37207676383!2d-80.13495239500924!3d25.9317678710111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1877e4a82d%3A0xa891714787d1fb5e!2sPier%20Park!5e1!3m2!1sen!2sth!4v1637512439384!5m2!1sen!2sth"
              width="100%"
              height="400px"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="section-heading">
            <h2>Say Hello. Don't Be Shy!</h2>
            <span>
              Details to details is what makes Hexashop different from the
              other themes.
            </span>
          </div>
          <form id="contact" @submit.prevent="submitContactForm">
            <div class="row">
              <div class="col-lg-6">
                <fieldset>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Your name"
                    v-model="contactForm.name"
                    required
                  />
                </fieldset>
              </div>
              <div class="col-lg-6">
                <fieldset>
                  <input
                    name="email"
                    type="text"
                    id="email"
                    placeholder="Your email"
                    v-model="contactForm.email"
                    required
                  />
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <textarea
                    name="message"
                    rows="6"
                    id="message"
                    placeholder="Your message"
                    v-model="contactForm.message"
                    required
                  ></textarea>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <button
                    type="submit"
                    id="form-submit"
                    class="main-dark-button"
                  >
                    <i class="bi bi-send"></i>
                  </button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- ***** Contact Area Ends ***** -->

  <!-- ***** Subscribe Area Starts ***** -->
  <div class="subscribe">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="section-heading">
            <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
            <span>
              Details to details is what makes Hexashop different from the
              other themes.
            </span>
          </div>
          <form id="subscribe" @submit.prevent="submitSubscribeForm">
            <div class="row">
              <div class="col-lg-5">
                <fieldset>
                  <input
                    name="name"
                    type="text"
                    id="subscribe-name"
                    placeholder="Your Name"
                    v-model="subscribeForm.name"
                    required
                  />
                </fieldset>
              </div>
              <div class="col-lg-5">
                <fieldset>
                  <input
                    name="email"
                    type="text"
                    id="subscribe-email"
                    pattern="[^ @]*@[^ @]*"
                    placeholder="Your Email Address"
                    v-model="subscribeForm.email"
                    required
                  />
                </fieldset>
              </div>
              <div class="col-lg-2">
                <fieldset>
                  <button
                    type="submit"
                    id="form-submit"
                    class="main-dark-button"
                  >
                    <i class="bi bi-send"></i>
                  </button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-4">
          <div class="row">
            <div class="col-6">
              <ul>
                <li>
                  Store Location:
                  <br /><span>Sunny Isles Beach, FL 33160, United States</span>
                </li>
                <li>Phone:<br /><span>010-020-0340</span></li>
                <li>Office Location:<br /><span>North Miami Beach</span></li>
              </ul>
            </div>
            <div class="col-6">
              <ul>
                <li>
                  Work Hours:
                  <br /><span>07:30 AM - 9:30 PM Daily</span>
                </li>
                <li>Email:<br /><span>info@company.com</span></li>
                <li>
                  Social Media:
                  <br /><span>
                    <a href="#">Facebook</a>,
                    <a href="#">Instagram</a>,
                    <a href="#">Behance</a>,
                    <a href="#">Linkedin</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ***** Subscribe Area Ends ***** -->
</template>

<script>
export default {
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        message: '',
      },
      subscribeForm: {
        name: '',
        email: '',
      },
    };
  },
  methods: {
    submitContactForm() {
      // Handle the contact form submission
      console.log('Contact form data:', this.contactForm);
    },
    submitSubscribeForm() {
      // Handle the subscribe form submission
      console.log('Subscribe form data:', this.subscribeForm);
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
