<template>
  <div dir="rtl">
      <TheHeader/>

      <div class="main" >
      <transition name="fade" mode="out-in">
          <router-view :key="$route.path"></router-view>
      </transition>

      <div  class="layout-sosial">
          <div>
            <ul>
              <li><a class="scroll" href="#section-1"><font-awesome-icon class="sosial-icon" :icon="['fab', 'instagram']"/></a></li>
              <li><a class="scroll" href="#section-2"><font-awesome-icon class="sosial-icon" :icon="['fab', 'facebook']"/></a></li>
              <li><a class="scroll" href="#section-3"><font-awesome-icon class="sosial-icon " :icon="['fab', 'twitter']"/></a></li>
              <li><a class="scroll" href="#section-4"> <font-awesome-icon class="sosial-icon" :icon="['fab', 'linkedin']"/></a></li>
          </ul>
          </div>
      </div>
      </div>
      <TheFooter/>
  </div>
</template>

<script>
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'


export default {
  name: 'TheContainer',
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
