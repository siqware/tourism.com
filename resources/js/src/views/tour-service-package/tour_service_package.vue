<template>
    <div>
        <vx-card title="Lazy Load">
            <vs-button @click="$refs.modal.open()" size="large" type="relief">Primary</vs-button>
        </vx-card>

        <sweet-modal ref="modal" title="TinyMCE" :blocking="true" :width="!mobilecheck()?'70%':''">
            <div class="vx-row">
                <div class="vx-col md:w-1/3">
                    <vs-input class="w-full" label-placeholder="Label-placeholder"/>
                </div>
                <div class="vx-col md:w-1/3">
                    <vs-input class="w-full" label-placeholder="Label-placeholder"/>
                </div>
                <div class="vx-col md:w-1/3">
                    <div class="vx-row">
                        <div class="vx-col w-full">
                            <vue-dropzone class="max-content p-1" :duplicateCheck="true" ref="image2"
                                          @vdropzone-success="successUpload" id="dropzone2"
                                          :options="dropzoneOptions">
                            </vue-dropzone>
                        </div>
                    </div>
                </div>
                <div class="vx-col md:w-full mt-2">
                    <vs-textarea label="Label in Textarea" class="w-full"/>
                </div>
                <div class="vx-col w-full">
                    <vue-dropzone class="p-1" :duplicateCheck="true" ref="image"
                                  @vdropzone-success="successUpload" id="dropzone"
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
                image: 'images/placeholder/placeholder.png',
                //dropzone option
                dropzoneOptions: {
                    url: route('file.upload.thumb'),
                    maxFiles: 1,
                    addRemoveLinks: true,
                    dictDefaultMessage: "ដាក់រូបភាពទំនិញបើមាន",
                    thumbnailWidth: 150,
                    thumbnailHeight: 150,
                }
            }
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