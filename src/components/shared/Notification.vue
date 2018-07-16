<template lang="pug">
    .container
        .columns
            .column.is-10.is-offset-1
                .notification.is-danger
                    slot(name="message") Algo anduvo mal :-(

</template>
<style lang="scss" scoped>
    .notification{
        margin-top: 10px;
    }
</style>
