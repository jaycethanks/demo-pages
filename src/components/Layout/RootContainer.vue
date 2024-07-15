<template>
  <div class="root-container border border-red-500">
    <slot name="header" />
    <div class="flex py-8 px-12">
      <slot name="default" />
    </div>
  </div>
</template>
