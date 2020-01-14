<template>
    <vx-card title="Form Validation" code-toggler class="mb-base">
        <div id="printMe">
            <div class="vx-row">
                <div class="vx-col md:w-1/3 w-full">
                    <!-- Append Button -->
                    <vx-input-group class="mb-base">
                        <vs-input v-validate="'required'" placeholder="Input" name="input" v-model="input" class="w-full" />
                        <template slot="append">
                            <div class="append-text btn-addon">
                                <vs-button @click="formSubmit">Button</vs-button>
                            </div>
                        </template>
                    </vx-input-group>
                    <!-- /Append Button -->
                    <span class="text-danger text-sm" v-show="errors.has('input')">{{ errors.first('input') }}</span>
                </div>
            </div>
        </div>
        <template slot="codeContainer">
            &lt;!-- Append Button --&gt;
                &lt;vx-input-group class=&quot;mb-base&quot;&gt;
                &lt;vs-input v-validate=&quot;'required'&quot; placeholder=&quot;Input&quot; name=&quot;input&quot; v-model=&quot;input&quot; class=&quot;w-full&quot; /&gt;
                &lt;template slot=&quot;append&quot;&gt;
                &lt;div class=&quot;append-text btn-addon&quot;&gt;
                &lt;vs-button @click=&quot;formSubmit&quot;&gt;Button&lt;/vs-button&gt;
                &lt;/div&gt;
                &lt;/template&gt;
                &lt;/vx-input-group&gt;
            &lt;!-- /Append Button --&gt;
            &lt;span class=&quot;text-danger text-sm&quot; v-show=&quot;errors.has('input')&quot;&gt;{{ "\{\{ errors.first('input') \}\}" }}&lt;/span&gt;
           &lt;script&gt;
            formSubmit() {
                let self = this;
                    this.$validator.validateAll().then(result => {
                        if (result) {
                            self.$vs.loading();
                            self.$store.dispatch('formSubmit', {name:self.brand}).then(function (data) {
                            if (data) {
                                self.$vs.notify({
                                time: 4000,
                                title: 'ប្រតិបត្តិការជោគជ័យ',
                                text: 'ទិន្នន័យបានបន្ថែម',
                                color: 'success',
                                iconPack: 'feather',
                                icon: 'icon-check',
                                position: 'top-center'
                            });
                        self.resetField();
                        } else {
                            self.$vs.notify({
                                title: 'ប្រតិបត្តិការបរាជ័យ',
                                text: 'ទិន្នន័យមិនបានបន្ថែម',
                                color: 'danger',
                                iconPack: 'feather',
                                icon: 'icon-message-square',
                                position: 'top-center'
                            });
                        }
                        self.$vs.loading.close();
                        });
                        } else {
                            self.$vs.notify({
                                title: 'ប្រតិបត្តិការបរាជ័យ',
                                text: 'សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ',
                                color: 'danger',
                                iconPack: 'feather',
                                icon: 'icon-message-square',
                                position: 'top-center'
                            })
                    }
                });
            },
            &lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
    export default {
        name: "FormValidation",
        data(){
            return{
                input:'',
            }
        },
        methods:{
            //form submit
            //store
            formSubmit() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.notify({
                            time: 4000,
                            title: 'ប្រតិបត្តិការជោគជ័យ',
                            text: 'ទិន្នន័យបានបន្ថែម',
                            color: 'success',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            position: 'top-center'
                        });
                    } else {
                        self.$vs.notify({
                            title: 'ប្រតិបត្តិការបរាជ័យ',
                            text: 'សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ',
                            color: 'danger',
                            iconPack: 'feather',
                            icon: 'icon-message-square',
                            position: 'top-center'
                        })
                    }
                });
            },
        }
    }
</script>

<style scoped>

</style>