<template>
  <div class="root-container border border-red-500">
    <slot name="header" />
    <div class="flex py-8 px-12 h-auto">
      <slot name="default" />
    </div>
  </div>
</template>
