<script lang="ts" setup>
import Header from './Header.vue'
import InnerHeader from './InnerHeader.vue'
import Footer from './Footer.vue'
import SideBar from './SideBar.vue'
import RootContainer from './RootContainer.vue'
</script>
<template>
  <div class="app-root">
    <Header />
    <RootContainer>
      <template #header>
        <InnerHeader />
      </template>
      <SideBar />
      <RouterView class="flex-1 px-12" />
    </RootContainer>
    <Footer />
  </div>
</template>
<style lang="less" scoped></style>
