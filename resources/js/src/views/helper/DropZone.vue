<template>
    <vx-card title="Dropzone" code-toggler class="mb-base">
        <h4>Full</h4>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vue-dropzone class="p-1" :duplicateCheck="true" ref="image"
                              @vdropzone-success="successUpload" id="dropzone"
                              :options="dropzoneOptions"></vue-dropzone>
            </div>
        </div>
        <h4>Max Content</h4>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vue-dropzone class="max-content p-1" :duplicateCheck="true" ref="image2"
                              @vdropzone-success="successUpload" id="dropzone2"
                              :options="dropzoneOptions"></vue-dropzone>
            </div>
        </div>
        <h4>Max Content for edit</h4>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vue-dropzone class="max-content p-1" :duplicateCheck="true" ref="image3"
                              @vdropzone-success="successUpload" id="dropzone3"
                              :options="dropzoneOptions"
                              @vdropzone-mounted="editThumb"
                ></vue-dropzone>
            </div>
        </div>
        <template slot="codeContainer">
            &lt;h4&gt;Full&lt;/h4&gt;
            &lt;div class=&quot;vx-row&quot;&gt;
                &lt;div class=&quot;vx-col w-full&quot;&gt;
                    &lt;vue-dropzone class=&quot;p-1&quot; :duplicateCheck=&quot;true&quot; ref=&quot;image&quot;
                    @vdropzone-success=&quot;successUpload&quot; id=&quot;dropzone&quot;
                    :options=&quot;dropzoneOptions&quot;&gt;&lt;/vue-dropzone&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;h4&gt;Max Content&lt;/h4&gt;
                &lt;div class=&quot;vx-row&quot;&gt;
                    &lt;div class=&quot;vx-col w-full&quot;&gt;
                    &lt;vue-dropzone class=&quot;max-content p-1&quot; :duplicateCheck=&quot;true&quot; ref=&quot;image2&quot;
                    @vdropzone-success=&quot;successUpload&quot; id=&quot;dropzone2&quot;
                    :options=&quot;dropzoneOptions&quot;&gt;&lt;/vue-dropzone&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;h4&gt;Max Content for edit&lt;/h4&gt;
            &lt;div class=&quot;vx-row&quot;&gt;
                &lt;div class=&quot;vx-col w-full&quot;&gt;
                    &lt;vue-dropzone class=&quot;max-content p-1&quot; :duplicateCheck=&quot;true&quot; ref=&quot;image3&quot;
                    @vdropzone-success=&quot;successUpload&quot; id=&quot;dropzone3&quot;
                    :options=&quot;dropzoneOptions&quot;
                    @vdropzone-mounted=&quot;editThumb&quot;
                &gt;&lt;/vue-dropzone&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;script&gt;
                export default {
                    name: "DropZone",
                    data(){
                        return{
                            image:'images/placeholder/placeholder.png',
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
            &lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
    //dropzone
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    export default {
        name: "DropZone",
        components:{
            'vueDropzone': vue2Dropzone
        },
        data(){
            return{
                image:'images/placeholder/placeholder.png',
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