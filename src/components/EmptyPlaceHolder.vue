<template>
  <div class="empty-placeholder h-28 flex justify-center items-center text-gray-500">
    <slot />
  </div>
</template>
<style lang="css" scoped>
.empty-placeholder {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='13' ry='13' stroke='rgb(219, 220, 222)' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 13px;
}
</style>
