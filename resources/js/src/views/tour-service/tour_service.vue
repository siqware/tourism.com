<template>
    <div>
        <vx-card title="Lazy Load">
            <vs-button @click="$refs.modal.open()" size="large" type="relief">Primary</vs-button>
        </vx-card>

        <sweet-modal ref="modal" title="Tour Service" :blocking="true" :width="!mobilecheck()?'90%':''">
            <vs-divider position="left">Service</vs-divider>
            <div class="vx-row">
                <div class="vx-col md:w-1/3 mt-5">
                    <v-select :clearable="false" v-model="services.type" placeholder="Please select a location type" :options="new_options" label="label_data">
                        <template v-slot:option="option">
                            {{ option.label_data }}
                        </template>
                    </v-select>
                </div>
                <div class="vx-col md:w-1/3">
                    <vs-input class="w-full" v-model="services.name" label-placeholder="Name"/>
                </div>
                <div class="vx-col md:w-1/3">
                    <vue-dropzone class="max-content p-1" :duplicateCheck="true" ref="image2"
                                  @vdropzone-success="successUpload" id="dropzone2"
                                  :options="dropzoneOption">
                    </vue-dropzone>
                </div>
                <div class="vx-col md:w-full mt-2">
                    <vs-textarea label="Contacts" v-model="services.contact" class="w-full"/>
                </div>
                <div class="vx-col md:w-1/2">
                    <vs-input class="w-full" v-model="services.destination_x" label-placeholder="X Coordinate"/>
                </div>
                <div class="vx-col md:w-1/2">
                    <vs-input class="w-full" v-model="services.destination_y" label-placeholder="Y Coordinate"/>

                </div>
                <vs-divider position="left">Detail</vs-divider>

                <div class="vx-col md:w-1/2">
                    <vs-input class="w-full" v-model="detail_item.sub_name" label-placeholder="Sub-name"/>
                </div>
                <div class="vx-col md:w-1/2">
                    <vs-input class="w-full" v-model="detail_item.qty" label-placeholder="Quality"/>
                </div>
                <div class="vx-col md:w-full mt-2 mb-2">
                    <tinymce id="d1" v-model="detail_item.description"></tinymce>
                </div>
                <div class="vx-col w-full">
                    <vue-dropzone class="p-1" :duplicateCheck="true" ref="image"
                                  @vdropzone-success="successUploads" id="dropzone"
                                  :options="dropzoneOptions"
                    >
                    </vue-dropzone>
                </div>
            </div>

            <div class="vx-row">
                <div class="vx-col md:w-1/3 mt-2 mb-2">
                    <vs-button @click="addServiceDetail" type="relief">Add Item</vs-button>
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

                        <vs-td :data="data[indextr].service_item">
                            {{ data[indextr].service_item }}
                        </vs-td>

                        <vs-td :data="data[indextr].item_qty">
                            {{ data[indextr].item_qty }}
                        </vs-td>

                        <vs-td :data="data[indextr].item_description">
                            <p v-html="tr.item_description"></p>
                        </vs-td>

                        <vs-td :data="data[indextr].images">
                            <!--{{ data[indextr].images }}?-->
                            <img height="30" v-for="(item, i) in tr.images" :src="item" :key="i" alt="">
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
                    maxFiles: 10,
                    addRemoveLinks: true,
                    dictDefaultMessage: "ដាក់រូបភាពទំនិញបើមាន",
                    thumbnailWidth: 150,
                    thumbnailHeight: 150,
                },
                dropzoneOption: {
                    url: route('file.upload.thumb'),
                    maxFiles: 1,
                    addRemoveLinks: true,
                    dictDefaultMessage: "ដាក់រូបភាព Thumbnail",
                    thumbnailWidth: 150,
                    thumbnailHeight: 150,
                },
                service_detail: [],
                content: this.value,
                editor: null,
                cTinyMce: null,
                checkerTimeout: null,
                isTyping: false,
                //Select
                selected:null,
                options: [
                    {
                        id:1,
                        title: 'Hotel',
                        icon: 'fa-book',
                    },{
                        id:2,
                        title: 'Restaurant',
                        icon: 'fa-book',
                    },
                ],
                services: {
                    type: '',
                    name: '',
                    contact: '',
                    thumbnail: '',
                    destination_x: '',
                    destination_y: '',
                },
                service_details: [],
                detail_item: {
                    sub_name: '',
                    qty: 1,
                    description: '',
                    gallery_item: []
                }
            }
        },
        computed: {
            new_options(){
                return this.options.map(function (x){
                    return {
                        id:x.id,
                        label_data:`${x.title}`
                    }
                });
            }
        },
        methods:{
            //image upload
            successUpload(file, res) {
                this.services.thumbnail = (res.path);
            },
            successUploads(file, res) {
                this.detail_item.gallery_item.push(res.path);
            },
            //edit thumb
            editThumb(){
                this.$refs.image3.manuallyAddFile({size:123}, this.image);
            },
            addServiceDetail(){
                let di = this.detail_item;
                this.service_detail.push({
                    service_id: 0,
                    gallery_id: 0,
                    service_item: di.sub_name,
                    item_qty: di.qty,
                    item_description: di.description,
                    images: di.gallery_item,
                    is_available: true,
                });
                this.$refs.image.removeAllFiles();
                this.clearDetail();
                console.log(this.service_detail)
            },
            clearDetail(){
                var di = this.detail_item;
                di.sub_name = '';
                di.gallery_item = [];
                di.description = '';
                di.qty = 1;
            }
        }
    }
</script>

<style scoped>

</style>