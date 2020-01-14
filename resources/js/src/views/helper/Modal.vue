<template>
    <vx-card title="Modal and TinyMCE" code-toggler class="mb-base">
        <vs-button @click="$refs.modal.open()">Open</vs-button>
        <sweet-modal ref="modal" title="TinyMCE" :blocking="true" :width="!mobilecheck()?'50%':''">
            <tinymce id="d1" v-model="data"></tinymce>
            <vs-button slot="button">That's fine!</vs-button>
        </sweet-modal>
        <template slot="codeContainer">
            &lt;vs-button @click=&quot;$refs.modal.open()&quot;&gt;Open&lt;/vs-button&gt;
                &lt;sweet-modal ref=&quot;modal&quot; title=&quot;TinyMCE&quot; :blocking=&quot;true&quot; :width=&quot;!mobilecheck()?'50%':''&quot;&gt;
                &lt;tinymce id=&quot;d1&quot; v-model=&quot;data&quot;&gt;&lt;/tinymce&gt;
                &lt;vs-button slot=&quot;button&quot;&gt;That's fine!&lt;/vs-button&gt;
            &lt;/sweet-modal&gt;
            //TinyMCE Code
            &lt;script&gt;
                export default {
                    data() {
                        return {
                        content: this.value,
                        editor: null,
                        cTinyMce: null,
                        checkerTimeout: null,
                        isTyping: false
                        };
                    },
                    mounted() {
                        this.init();
                    },
                }
            &lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
    export default {
        name: "Modal",
        data(){
            return{
                data:'working fine',
            }
        }
    }
</script>

<style scoped>

</style>