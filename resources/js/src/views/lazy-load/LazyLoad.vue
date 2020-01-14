<template>
    <vx-card title="Lazy Load" code-toggler class="mb-base">
        <div class="vx-row">
            <div class="vx-col w-full">
                {{all_users}}
            </div>
        </div>
        <template slot="codeContainer">
            {{code}}
        </template>
    </vx-card>
</template>

<script>
    export default {
        name: "LazyLoad",
        data(){
            return{
                code:'<script>\n' +
                    '    const state = {\n' +
                    '        users: [],\n' +
                    '        total: null,\n' +
                    '    };\n' +
                    '    const actions = {\n' +
                    '        async fetchUser({commit}) {\n' +
                    '            async function next_page(url) {\n' +
                    '                const res = await axios.post(url);\n' +
                    '                return res.data\n' +
                    '            }\n' +
                    '            if (!state.users.length >= state.total) {\n' +
                    '                try {\n' +
                    '                    axios.post(route(\'user.json\')).then(function (res) {\n' +
                    '                        return res.data\n' +
                    '                    }).then(async function (data) {\n' +
                    '                        commit(\'SET_USER\', data);\n' +
                    '                        async function f(next_url) {\n' +
                    '                            if (next_url) {\n' +
                    '                                next_page(next_url).then(async function (_data) {\n' +
                    '                                    commit(\'SET_USER\', _data);\n' +
                    '                                    await f(_data.next_page_url);\n' +
                    '                                });\n' +
                    '                            }\n' +
                    '                        }\n' +
                    '                        await f(data.next_page_url)\n' +
                    '                    });\n' +
                    '                } catch (e) {\n' +
                    '                    return false\n' +
                    '                }\n' +
                    '            }\n' +
                    '        }\n' +
                    '    };\n' +
                    '    const mutations = {\n' +
                    '        SET_USER: function (state, data) {\n' +
                    '            state.total = data.total;\n' +
                    '            data.data.forEach(function (item, index) {\n' +
                    '                state.users.push(item);\n' +
                    '            });\n' +
                    '        },\n' +
                    '    };\n' +
                    '</\script>'
            }
        },
        computed:{
            all_users(){
                return this.$store.getters.all_users
            }
        },
        async created() {
            await this.$store.dispatch('fetchUser');
        }
    }
</script>

<style scoped>

</style>