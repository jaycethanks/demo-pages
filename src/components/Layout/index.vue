<script lang='ts' setup>
import Header from "./Header.vue"
import Footer from "./Footer.vue"
import SideBar from "./SideBar.vue"
import RootContainer from "./RootContainer.vue"
</script>
<template>
    <div class="app-root">
        <Header />
        <RootContainer class="border border-red-500 flex">
            <SideBar />
            <RouterView />
        </RootContainer>
        <Footer />


    </div>
</template>
<style lang='less' scoped></style>