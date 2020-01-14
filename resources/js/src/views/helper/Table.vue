<template>
    <vx-card title="Table and AGrid" code-toggler class="mb-base">
        <div class="vx-row">
            <div class="vx-col w-full">
                <div class="flex btn-group">
                    <vs-button type="relief" icon-pack="feather" icon="icon-plus-square">បន្ថែម</vs-button>
                    <vs-button color="warning" type="relief" icon-pack="feather" icon="icon-edit">កែប្រែ</vs-button>
                    <vs-button color="danger" type="relief" icon-pack="feather" icon="icon-trash-2">លុប</vs-button>
                </div>
                <vs-table multiple v-model="selected" pagination max-items="3" search :data="users">

                    <template slot="thead">
                        <vs-th sort-key="email">Email</vs-th>
                        <vs-th sort-key="username">Name</vs-th>
                        <vs-th sort-key="website">Website</vs-th>
                        <vs-th sort-key="id">Nro</vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr :data="item" :key="index" v-for="(item, index) in data">

                            <vs-td :data="item.email">
                                {{ item.email }}
                            </vs-td>

                            <vs-td :data="item.username">
                                {{ item.username }}
                            </vs-td>

                            <vs-td :data="item.id">
                                {{ item.website }}
                            </vs-td>

                            <vs-td :data="item.id">
                                {{ item.id }}
                            </vs-td>

                        </vs-tr>
                    </template>
                </vs-table>
            </div>
        </div>
        <template slot="codeContainer">
            &lt;vs-table multiple v-model=&quot;selected&quot; pagination max-items=&quot;3&quot; search :data=&quot;users&quot;&gt;

                &lt;template slot=&quot;thead&quot;&gt;
                    &lt;vs-th sort-key=&quot;email&quot;&gt;Email&lt;/vs-th&gt;
                    &lt;vs-th sort-key=&quot;username&quot;&gt;Name&lt;/vs-th&gt;
                    &lt;vs-th sort-key=&quot;website&quot;&gt;Website&lt;/vs-th&gt;
                    &lt;vs-th sort-key=&quot;id&quot;&gt;Nro&lt;/vs-th&gt;
                &lt;/template&gt;

                &lt;template slot-scope=&quot;{data}&quot;&gt;
                    &lt;vs-tr :data=&quot;item&quot; :key=&quot;index&quot; v-for=&quot;(item, index) in data&quot;&gt;

                        &lt;vs-td :data=&quot;item.email&quot;&gt;
                        {{ "\{\{ item.email \}\}" }}
                        &lt;/vs-td&gt;

                        &lt;vs-td :data=&quot;item.username&quot;&gt;
                        {{ "\{\{ item.username \}\}" }}
                        &lt;/vs-td&gt;

                        &lt;vs-td :data=&quot;item.id&quot;&gt;
                        {{ "\{\{ item.website \}\}" }}
                        &lt;/vs-td&gt;

                        &lt;vs-td :data=&quot;item.id&quot;&gt;
                        {{ "\{\{ item.id \}\}" }}
                        &lt;/vs-td&gt;

                    &lt;/vs-tr&gt;
                &lt;/template&gt;
            &lt;/vs-table&gt;
            &lt;script&gt;
            export default {
                name: "Table",
                    data() {
                    return {
                    selected: [],
                        users: [
                            {
                                "id": 1,
                                "name": "Leanne Graham",
                                "username": "Bret",
                                "email": "Sincere@april.biz",
                                "website": "hildegard.org",
                            },
                            {
                                "id": 2,
                                "name": "Ervin Howell",
                                "username": "Antonette",
                                "email": "Shanna@melissa.tv",
                                "website": "anastasia.net",
                            },
                        ]
                    }
                }
            }
            &lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
    export default {
        name: "TableComponent",
        data() {
            return {
                selected: [],
                users: [
                    {
                        "id": 1,
                        "name": "Leanne Graham",
                        "username": "Bret",
                        "email": "Sincere@april.biz",
                        "website": "hildegard.org",
                    },
                    {
                        "id": 2,
                        "name": "Ervin Howell",
                        "username": "Antonette",
                        "email": "Shanna@melissa.tv",
                        "website": "anastasia.net",
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>