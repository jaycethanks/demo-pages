<script lang="ts" setup>
import StoreSvgIcon from '@/components/Icons/StoreSvgIcon.vue'
import BalanceSvgIcon from '@/components/Icons/BalanceSvgIcon.vue'
import BillSvgIcon from '@/components/Icons/BillSvgIcon.vue'
import MoreSvgIcon from '@/components/Icons/MoreSvgIcon.vue'
import PersonSvgIcon from '@/components/Icons/PersonSvgIcon.vue'
import WalletSvgIcon from '@/components/Icons/WalletSvgIcon.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const currentPath = computed(() => route.path)

const MenuList = [
  {
    name: 'FelixTest',
    path: '/felixtest',
    icon: StoreSvgIcon
  },
  {
    name: 'Payments',
    path: '/payments',
    icon: WalletSvgIcon
  },
  {
    name: 'Customers',
    path: '/customers',
    icon: PersonSvgIcon
  },
  {
    name: 'Balances',
    path: '/balances',
    icon: BalanceSvgIcon
  },
  {
    name: 'Billing',
    path: '/billing',
    icon: BillSvgIcon
  },
  {
    name: 'More',
    path: '/more',
    icon: MoreSvgIcon
  }
]
</script>
<template>
  <ul>
    <RouterLink
      class="flex gap-4 items-center"
      v-for="({ name, path, icon }, index) in MenuList"
      :class="[
        index === 0 ? 'mb-12' : 'mb-4',
        currentPath === path ? 'text-[#513cbf] ' : 'text-[#36373e]'
      ]"
      :key="name"
      :to="path"
    >
      <component :is="icon" class="text-2xl shrink-0"></component>
      <span :class="{ 'font-semibold': index === 0 || currentPath === path }">{{ name }}</span>
    </RouterLink>
  </ul>
</template>
