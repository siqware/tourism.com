<template>
    <div>
        <vx-card title="Lazy Load">
            <vs-button @click="$refs.modal.open()" size="large" type="relief">Primary</vs-button>
        </vx-card>

        <sweet-modal ref="modal" title="TinyMCE" :blocking="true" :width="!mobilecheck()?'70%':''">
            <div class="vx-row">
                <div class="vx-col md:w-1/3 mt-5">
                    <v-select :clearable="false" v-model="selected" placeholder="Please select a location type" :options="new_options" label="label_data">
                        <template v-slot:option="option">
                            {{ option.label_data }}
                        </template>
                    </v-select>
                </div>
                <div class="vx-col md:w-1/3">
                    <vs-input class="w-full" label-placeholder="Location name"/>
                </div>
                <div class="vx-col md:w-1/3">
                    <div class="vx-row">
                        <div class="vx-col w-full">
                            <vue-dropzone class="max-content p-1" :duplicateCheck="true" ref="image2"
                                          @vdropzone-success="successUpload" id="dropzone2"
                                          :options="dropzoneOption">
                            </vue-dropzone>
                        </div>
                    </div>
                </div>
                <div class="vx-col md:w-full mt-2">
                    <tinymce id="d1"></tinymce>
                </div>
                <div class="vx-col md:w-1/2">
                    <vs-input class="w-full" label-placeholder="X Coordinate"/>
                </div>
                <div class="vx-col md:w-1/2">
                    <vs-input class="w-full" label-placeholder="Y Coordinate"/>
                </div>
                <div class="vx-col w-full mt-2">
                    <vue-dropzone class="p-1" :duplicateCheck="true" ref="image"
                                  @vdropzone-success="successUploads" id="dropzone"
                                  :options="dropzoneOptions"
                    >
                    </vue-dropzone>
                </div>
            </div>

            <vs-button size="large" type="relief" slot="button">That's fine!</vs-button>
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
                selected:null,
                options: [
                    {
                        id:1,
                        title: 'Temple',
                        icon: 'fa-book',
                    },
                ],
                image: 'images/placeholder/placeholder.png',
                images: [],
                //dropzone option
                dropzoneOption: {
                    url: route('file.upload.thumb'),
                    maxFiles: 1,
                    addRemoveLinks: true,
                    dictDefaultMessage: "ដាក់រូបភាព Thumbnail",
                    thumbnailWidth: 150,
                    thumbnailHeight: 150,
                },
                dropzoneOptions: {
                    url: route('file.upload.thumb'),
                    maxFiles: 10,
                    addRemoveLinks: true,
                    dictDefaultMessage: "ដាក់រូបភាពលម្អិតពីទីតាំងនោះ",
                    thumbnailWidth: 150,
                    thumbnailHeight: 150,
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
                this.image = (res.path);
                console.log(this.image)
            },
            successUploads(file, res) {
                this.images.push (res.path);
                console.log(this.images)
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