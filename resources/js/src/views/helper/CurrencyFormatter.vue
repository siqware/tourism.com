<template>
    <vx-card title="Currency Formatter" code-toggler class="mb-base">
        {{formatter.format(1200)}}
        <template slot="codeContainer">
            &lt;script&gt;
                this.formatter.format(1200)
                //usd
                Vue.prototype.formatter = new Intl.NumberFormat('km-KH', {
                    style: 'currency',
                    currency: 'USD',
                });
                //Khmer Riel
                Vue.prototype.formatter = new Intl.NumberFormat('km-KH', {
                    style: 'currency',
                    currency: 'kmr',
                });
            &lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
    export default {
        name: "CurrencyFormatter",
    }
</script>

<style scoped>

</style>