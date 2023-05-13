<template>

  <div class="row">
    <div class="col-md-3" id="sidebar-container">
      <Sidebar />
    </div>

    <div class="col-md-9">
      <div class="row">

        <div class="col-md-12 mb-3">
          <div class="container text-center">
            <h3>COMING SOON!</h3>

            <p class="text-wrap p-4">
              Degen Domains browser extension allows you to enter a Degen domain name in the URL bar and the 
              extension will redirect you to the URL that is set for that domain. If no URL is set, the extension 
              will redirect you to the domain page on the Degen Domains website.
            </p>
          </div>
        </div>

      </div>

      <div class="row">

        <div class="col-md-6 mb-3">
          <div class="container text-center">
            <h3>Chrome/Brave/Edge/Opera</h3>

            <p>
              <small><em>
                <a target="_blank" href="https://chrome.google.com/webstore/#">
                  Download
                </a>
              </em></small>
            </p>

            <a target="_blank" href="https://chrome.google.com/webstore/#">
              <img class="img-fluid browser-img mb-3" src="../assets/chrome-logo.png" />
            </a>
          </div>
        </div>

        <div class="col-md-6 mb-3">
          <div class="container text-center">
            <h3>Firefox</h3>

            <p>
              <small><em>
                <a target="_blank" href="https://addons.mozilla.org/#">
                  Download
                </a>
              </em></small>
            </p>

            <a target="_blank" href="https://addons.mozilla.org/#">
              <img class="img-fluid browser-img mb-3" src="../assets/firefox-logo.png" />
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>

<script lang="ts">
import Sidebar from '../components/Sidebar.vue';

export default {
  name: "BrowserExtension",

  components: {
    Sidebar
  }
}
</script>

<style scoped>
.browser-img {
  max-height: 200px;
}
</style>