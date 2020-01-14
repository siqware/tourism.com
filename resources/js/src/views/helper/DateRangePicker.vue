<template>
    <vx-card title="Date Range Picker" code-toggler class="mb-base">
        <div class="vx-row">
            <div class="vx-col w-full">
                <vs-input @click="$refs.modal.open()" icon-pack="feather" icon="icon-calendar" placeholder="Search" v-model="date" class="w-full" />
            </div>
        </div>
        <sweet-modal ref="modal" title="Chose a date" :blocking="true">
            <date-range-picker @update="date_range"/>
        </sweet-modal>
        <template slot="codeContainer">
            &lt;div class=&quot;vx-row&quot;&gt;
                &lt;div class=&quot;vx-col w-full&quot;&gt;
                    &lt;vs-input @click=&quot;$refs.modal.open()&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-calendar&quot; placeholder=&quot;Search&quot; v-model=&quot;date&quot; class=&quot;w-full&quot; /&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;sweet-modal ref=&quot;modal&quot; title=&quot;Chose a date&quot; :blocking=&quot;true&quot;&gt;
            &lt;date-range-picker @update=&quot;date_range&quot;/&gt;
            &lt;/sweet-modal&gt;
            &lt;script&gt;
            export default {
                name: "RangeDatePicker",
                data(){
                    return{
                        date:`${this.moment().format('YYYY/MM/DD')}-${this.moment().endOf('month').add(1,'month').format('YYYY/MM/DD')}`,
                    }
                },
                methods: {
                    date_range(date) {
                        this.date = `${this.moment(date.from).format('YYYY/MM/DD')}-${this.moment(date.to).format('YYYY/MM/DD')}`;
                        this.$refs.modal.close();
                    }
                }
            }
            &lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
    export default {
        name: "RangeDatePicker",
        data(){
            return{
                date:`${this.moment().format('YYYY/MM/DD')}-${this.moment().endOf('month').add(1,'month').format('YYYY/MM/DD')}`,
            }
        },
        methods: {
            date_range(date) {
                this.date = `${this.moment(date.from).format('YYYY/MM/DD')}-${this.moment(date.to).format('YYYY/MM/DD')}`;
                this.$refs.modal.close();
            }
        }
    }
</script>

<style scoped>

</style>