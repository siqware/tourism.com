<template>
    <div>
        <vx-card title="Lazy Load">
            <vs-button @click="$refs.modal.open()" size="large" type="relief">Primary</vs-button>
        </vx-card>

        <sweet-modal ref="modal" title="Tour Service" :blocking="true" :width="!mobilecheck()?'90%':''">
            <vs-divider position="left">Service</vs-divider>
            <div class="vx-row">
                <div class="vx-col md:w-1/2">
                    <vs-input class="w-full" label-placeholder="Type"/>
                </div>
                <div class="vx-col md:w-1/2">
                    <vs-input class="w-full" label-placeholder="Name"/>
                </div>
                <div class="vx-col md:w-full mt-2">
                    <vs-textarea label="Contacts" class="w-full"/>
                </div>

                <vs-divider position="left">Detail</vs-divider>

                <div class="vx-col md:w-1/2">
                    <vs-input class="w-full" label-placeholder="Sub-name"/>
                </div>
                <div class="vx-col md:w-1/2">
                    <vs-input class="w-full" label-placeholder="Quality"/>
                </div>
                <div class="vx-col md:w-full mt-2 mb-2">
                    <tinymce id="d1"></tinymce>
                </div>
                <div class="vx-col w-full">
                    <vue-dropzone class="p-1" :duplicateCheck="true" ref="image"
                                  @vdropzone-success="successUpload" id="dropzone"
                                  :options="dropzoneOptions"
                    >
                    </vue-dropzone>
                </div>
            </div>

            <div class="vx-row">
                <div class="vx-col md:w-1/3 mt-2 mb-2">
                    <vs-button size="large" type="relief">Add Item</vs-button>
                </div>
            </div>
            <vs-table max-items="100" :data="service_detail">

                <template slot="thead">
                    <vs-th sort-key="kh_name">Sub-name</vs-th>
                    <vs-th sort-key="en_name">Quality</vs-th>
                    <vs-th sort-key="gender">Description</vs-th>
                    <vs-th sort-key="gender">Gallary</vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                        <vs-td :data="data[indextr].kh_name">
                            {{ data[indextr].kh_name }}
                        </vs-td>

                        <vs-td :data="data[indextr].en_name">
                            {{ data[indextr].en_name }}
                        </vs-td>

                        <vs-td :data="data[indextr].gender">
                            {{ data[indextr].gender }}
                        </vs-td>

                        <vs-td :data="data[indextr].gender">
                            {{ data[indextr].gender }}
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>


            <vs-button size="large" type="relief" slot="button">Save</vs-button>
        </sweet-modal>
    </div>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    export default {
        name: "tour_destination",
        components: {
            vueDropzone: vue2Dropzone
        },
        data() {
            return {
                image: 'images/placeholder/placeholder.png',
                //dropzone option
                dropzoneOptions: {
                    url: route('file.upload.thumb'),
                    maxFiles: 1,
                    addRemoveLinks: true,
                    dictDefaultMessage: "ដាក់រូបភាពទំនិញបើមាន",
                    thumbnailWidth: 150,
                    thumbnailHeight: 150,
                },
                service_detail: [],
                content: this.value,
                editor: null,
                cTinyMce: null,
                checkerTimeout: null,
                isTyping: false
            }
        },
        mounted() {
            this.init();
        },
        methods:{
            //image upload
            successUpload(file, res) {
                this.image = (res.path)
            },
            //edit thumb
            editThumb(){
                this.$refs.image3.manuallyAddFile({size:123}, this.image);
            },
        }
    }
</script>

<style scoped>

</style>