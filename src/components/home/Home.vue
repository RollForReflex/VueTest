<template>
<div class="ev-dashboard">
  <div class="ev-dashboard__heading h1">This is the dashboard</div>
  <div class="card">
    <div class="card-header">
      Example #2
    </div>
  </div>
  <br>

</div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'dashboard',

  data () {
    return {
      addressInfo: {
        addressLine1: '',
        addressLine2: '',
        email: '',
        state: '',
        country: '',
        zipcode: ''
      },
      addressModalVisible: false,
      isLoadingFriends: false,
      error: ''
    }
  },

  computed: {
    reversedSearchText: function () {
      console.log(Vue.options.store)
      return this.$store.state.appnav.searchText.split('').reverse().join('')
    }
  }
}
</script>

<style lang="scss">
.ev-dashboard {
  margin-top: 60px;
}

</style>