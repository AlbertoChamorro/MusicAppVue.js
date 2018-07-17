<template lang="pug">
    .container
        .columns
            .column.is-10.is-offset-1
                .notification(:class="isError ? 'is-danger' : 'is-primary'")
                    slot(name="message") Algo anduvo mal :-(

</template>
<script>
export default {
  props: {
    isError: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
    .notification{
        margin-top: 10px;
    }
</style>
