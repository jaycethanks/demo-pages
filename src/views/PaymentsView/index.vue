<script lang="ts" setup>
import Connections from '@/views/PaymentsView/components/Connections.vue'
import EventsAndLogs from '@/views/PaymentsView/components/EventsAndLogs.vue'
import Metadata from '@/views/PaymentsView/components/Metadata.vue'
import Payment from '@/views/PaymentsView/components/Payment.vue'
import PaymentDetails from '@/views/PaymentsView/components/PaymentDetails.vue'
import PaymentMethod from '@/views/PaymentsView/components/PaymentMethod.vue'
import ReceiptHistory from '@/views/PaymentsView/components/ReceiptHistory.vue'
import RelatedPayments from '@/views/PaymentsView/components/RelatedPayments.vue'
import RiskInsights from '@/views/PaymentsView/components/RiskInsights.vue'
import Timeline from '@/views/PaymentsView/components/Timeline.vue'
</script>
<template>
  <div>
    <h1 class="text-red-500">Page Payment</h1>
    <Payment />
    <Timeline />
    <PaymentDetails />
    <PaymentMethod />
    <RiskInsights />
    <RelatedPayments />
    <Metadata />
    <Connections />
    <ReceiptHistory />
    <EventsAndLogs />
  </div>
</template>
<style lang="less" scoped></style>
