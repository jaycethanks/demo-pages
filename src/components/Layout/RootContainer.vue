<template>
  <div class="root-container">
    <slot name="header" />
    <div class="flex py-8 px-8 h-auto gap-6">
      <slot name="default" />
    </div>
  </div>
</template>
