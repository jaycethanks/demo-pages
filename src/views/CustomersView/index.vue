<script lang="ts" setup>
import Customers from '@/views/CustomersView/components/Customers.vue'
import Subscriptions from '@/views/CustomersView/components/Subscriptions.vue'
import Entitlements from '@/views/CustomersView/components/Entitlements.vue'
import Events from '@/views/CustomersView/components/Events.vue'
import InvoiceCreditBalance from '@/views/CustomersView/components/InvoiceCreditBalance.vue'
import Invoices from '@/views/CustomersView/components/Invoices.vue'
import Logs from '@/views/CustomersView/components/Logs.vue'
import PaymentMethods from '@/views/CustomersView/components/PaymentMethods.vue'
import Payments from '@/views/CustomersView/components/Payments.vue'
import PendingInvoiceItems from '@/views/CustomersView/components/PendingInvoiceItems.vue'
import Quotes from '@/views/CustomersView/components/Quotes.vue'
import RecentActivity from '@/views/CustomersView/components/RecentActivity.vue'
import SendEmail from '@/views/CustomersView/components/SendEmail.vue'
// aside comps
import Details from '@/views/CustomersView/components/RightSide/Details.vue'
import Insights from '@/views/CustomersView/components/RightSide/Insights.vue'
import Metadata from '@/views/CustomersView/components/RightSide/Metadata.vue'
import Notes from '@/views/CustomersView/components/RightSide/Notes.vue'
</script>
<template>
  <div class="flex gap-12">
    <main class="flex-1 border-error border">
      <Customers />
      <Subscriptions />
      <Payments />
      <PaymentMethods />
      <Entitlements />
      <Invoices />
      <PendingInvoiceItems />
      <Quotes />
      <InvoiceCreditBalance />
      <RecentActivity />
      <SendEmail />
      <Logs />
      <Events />
    </main>
    <aside class="w-[300px] border-primary border">
      <Notes />
      <Insights />
      <Details />
      <Metadata />
    </aside>
  </div>
</template>
<style lang="less" scoped></style>
