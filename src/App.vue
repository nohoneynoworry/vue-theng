<template>
  <LoginModal/>
  <RegisterModal />
  <HyperHeader v-if="$route.name != 'NotFound'" />
  <router-view />
  <HyperFooter v-if="$route.name != 'NotFound'" />
</template>
<script>
import HyperHeader from './components/HyperHeader.vue';
import HyperFooter from './components/HyperFooter.vue';
import RegisterModal from './components/RegisterModal.vue';
import LoginModal from './components/LoginModal.vue';
export default {
  components: {
    HyperHeader,
    HyperFooter,
    RegisterModal,
    LoginModal
  }
}
</script>
