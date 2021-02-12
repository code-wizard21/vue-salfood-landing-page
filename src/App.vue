<template>
  <div id="app">
    <Navbar />
    <router-view> </router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/layouts/Navbar/Navbar';
import Footer from '@/components/layouts/Footer/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    scroll-behavior: smooth; 
  }

  #app {
    width: 100%;
    overflow: hidden;
  }
</style>