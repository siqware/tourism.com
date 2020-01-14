<template>
    <vx-card title="MomentJs" code-toggler class="mb-base">
        <h4>Calendar</h4>
        {{moment().calendar()}}
        <br>
        <h4>Format</h4>
        {{moment().format('YYYY-MM-DD')}}
        <template slot="codeContainer">
            &lt;script&gt;
                this.moment().format('MMMM Do YYYY, h:mm:ss a'); // December 19th 2019, 4:01:46 pm
                this.moment().format('dddd');                    // Thursday
                this.moment().format(&quot;MMM Do YY&quot;);               // Dec 19th 19
                this.moment().format('YYYY [escaped] YYYY');     // 2019 escaped 2019
                this.moment().format();                          // 2019-12-19T16:01:46+07:00
                // undefined
                this.moment().subtract(10, 'days').calendar(); // 12/09/2019
                this.moment().subtract(6, 'days').calendar();  // Last Friday at 4:00 PM
                this.moment().subtract(3, 'days').calendar();  // Last Monday at 4:00 PM
                this.moment().subtract(1, 'days').calendar();  // Yesterday at 4:00 PM
                this.moment().calendar();                      // Today at 4:00 PM
                this.moment().add(1, 'days').calendar();       // Tomorrow at 4:00 PM
                this.moment().add(3, 'days').calendar();       // Sunday at 4:00 PM
                this.moment().add(10, 'days').calendar();
            &lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
    export default {
        name: "Moment",
        data(){
            return{
                data:'working fine',
            }
        }
    }
</script>

<style scoped>

</style>