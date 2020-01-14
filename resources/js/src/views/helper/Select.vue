<template>
    <vx-card title="Vue Select" code-toggler class="mb-base">
        <v-select :clearable="false" v-model="selected" placeholder="Please select a value" :options="new_options" label="label_data">
            <template v-slot:option="option">
                {{ option.label_data }}
            </template>
        </v-select>
        <template slot="codeContainer">
            &lt;v-select :clearable=&quot;false&quot; v-model=&quot;selected&quot; placeholder=&quot;Please select a value&quot; :options=&quot;new_options&quot; label=&quot;label_data&quot;&gt;
                &lt;template v-slot:option=&quot;option&quot;&gt;
                    {{ "\{\{ option.label_data \}\}" }}
                &lt;/template&gt;
            &lt;/v-select&gt;

            &lt;script&gt;
                export default {
                    name: "VueSelect",
                    data(){
                        return{
                            selected:null,
                            options: [
                                {
                                    id:1,
                                    title: 'Read the Docs',
                                    icon: 'fa-book',
                                    url: 'https://codeclimate.com/github/sagalbot/vue-select'
                                },
                                {
                                    id:2,
                                    title: 'View on GitHub',
                                    icon: 'fa-github',
                                    url: 'https://codeclimate.com/github/sagalbot/vue-select'
                                },
                            ]
                        }
                    },
                    computed:{
                        new_options(){
                            return this.options.map(function (x){
                                return {
                                    id:x.id,
                                    label_data:`${x.title}-${x.url}`
                                }
                            });
                        }
                    }
                }
            &lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
    export default {
        name: "VueSelect",
        data(){
            return{
                selected:null,
                options: [
                    {
                        id:1,
                        title: 'Read the Docs',
                        icon: 'fa-book',
                        url: 'https://codeclimate.com/github/sagalbot/vue-select'
                    },
                    {
                        id:2,
                        title: 'View on GitHub',
                        icon: 'fa-github',
                        url: 'https://codeclimate.com/github/sagalbot/vue-select'
                    },
                    {
                        id:3,
                        title: 'View on NPM',
                        icon: 'fa-database',
                        url: 'https://codeclimate.com/github/sagalbot/vue-select'
                    },
                    {
                        id:4,
                        title: 'View Codepen Examples',
                        icon: 'fa-pencil',
                        url: 'https://codeclimate.com/github/sagalbot/vue-select'
                    }
                ]
            }
        },
        computed:{
            new_options(){
                return this.options.map(function (x){
                    return {
                        id:x.id,
                        label_data:`${x.title}-${x.url}`
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>