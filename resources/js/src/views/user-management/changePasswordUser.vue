<template>
    <sweet-modal ref="changePasswordUser" :title="`Change ${data.name}'s Password`" :blocking="true" :width="!mobilecheck()?'60%':''">
        <div class="vx-row">
            <div class="vx-col w-full mt-2">
                <vs-input type="password" ref="password" v-validate="'required|min:6|max:10'" label-placeholder="ពាក្យសម្ងាត់" name="password" v-model="data.password" class="w-full" />
                <span class="text-danger text-sm" v-show="errors.has('password')">{{ errors.first('password') }}</span>
            </div>
            <div class="vx-col w-full mt-2">
                <vs-input type="password" v-validate="'required|min:6|max:10|confirmed:password'" label-placeholder="ផ្ទៀងផ្ទាត់ ពាក្យសម្ងាត់" name="confirm_password" v-model="data.confirm_password" class="w-full"/>
                <span class="text-danger text-sm" v-show="errors.has('confirm_password')">{{ errors.first('confirm_password') }}</span>
            </div>
        </div>
        <vs-button @click="updateUserPassword" slot="button">Change</vs-button>
    </sweet-modal>
</template>
<script>
    export default {
        name: "changePasswordUser",
        data(){
            return{
                data: {
                    id:null,
                    password: '',
                    confirm_password: '',
                    name:''
                },
            }
        },
        methods:{
            show(data) {
                this.$refs.changePasswordUser.open();
                this.data.id = data.id;
                this.data.name = data.name;
            },
            //store
            updateUserPassword() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('updateUserPassword', self.data).then(function (data) {
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
                                self.$emit('finished');
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
        }
    }
</script>

<style scoped>

</style>