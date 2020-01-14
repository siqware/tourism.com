<template>
    <vx-card class="mt-base" code-toggler>
        <div class="vx-row">
            <div class="vx-col md:w-1/2 w-full">
                <div class="flex btn-group mb-1">
                    <vs-button @click="$refs.addUser.show()" type="filled" icon-pack="feather" icon="icon-plus-square">
                        បន្ថែម
                    </vs-button>
                    <vs-button :disabled="!(selected.length===1)" @click="$refs.editUser.show(selected[0])" color="success"
                               type="filled" icon-pack="feather"
                               icon="icon-edit">
                        កែប្រែ
                    </vs-button>
                    <vs-button :disabled="!(selected.length===1)" @click="$refs.changePasswordUser.show(selected[0])"
                               color="dark" type="filled" icon-pack="feather" icon="icon-edit">
                        ប្តូរលេខសម្ងាត់
                    </vs-button>
                </div>
            </div>
            <div class="vx-col md:w-1/2 w-full">
                <div class="flex btn-group" :class="!mobilecheck()?'justify-end':'justify-start'">
                    <vs-button :disabled="!selected.length" @click="confirmToggle" color="danger" type="filled"
                               icon-pack="feather" icon="icon-circle">
                        Toggle Status
                    </vs-button>
                    <vs-button :disabled="selected.length<=0" @click="gridApi.deselectAll()" color="warning" type="filled"
                               icon-pack="feather" icon="icon-check-square">
                        មិនជ្រើសរើស
                    </vs-button>
                </div>
            </div>
        </div>
        <vs-divider class="mb-0"/>
        <ag-grid-vue class="ag-theme-material w-100 ag-grid-table"
                     :columnDefs="columnDefs"
                     :defaultColDef="defaultColDef"
                     rowSelection="multiple"
                     @grid-ready="onGridReady"
                     @selection-changed="onSelectionChanged"
                     :pagination="true"
                     :paginationPageSize="100"
                     :animateRows="true"
                     :rowData="all_users">
        </ag-grid-vue>
        <add-user ref="addUser"/>
        <edit-user @finished="selected=[]" ref="editUser"/>
        <change-password-user @finished="selected=[]" ref="changePasswordUser"/>
        <vue-gist-embed gistId="89a5e8ae518d3167a24f7f1f79abe8d2"></vue-gist-embed>
        <vue-gist-embed gistId="2370294c9e86724cb075bee14746c11a"></vue-gist-embed>
    </vx-card>
</template>
<script>
    //Github Gist
    import VueGistEmbed from 'vue-gist-embed';
    //ag-grid
    import Vue from 'vue'
    import {AgGridVue} from "ag-grid-vue";
    import '@sass/vuexy/extraComponents/agGridStyleOverride.scss'
    import AddUser from "./addUser";
    import EditUser from "./editUser";
    import ChangePasswordUser from "./changePasswordUser";

    let statusComponent = Vue.extend({
        template: '<vs-chip transparent style="height: 10px; margin-top: 10px;" :color="com_method()?\'success\':\'warning\'">\n' +
            '            {{com_method()?\'Active\':\'Trashed\'}}\n' +
            '        </vs-chip>',
        methods: {
            com_method() {
                return this.params.data.status;
            }
        }
    });
    let roleComponent = Vue.extend({
        template: '<vs-chip transparent style="height: 10px; margin-top: 10px;" color="primary">\n' +
            '            {{com_method()}}\n' +
            '        </vs-chip>',
        methods: {
            com_method() {
                return this.params.data.role;
            }
        }
    });
    export default {
        name: "User",
        components: {
            ChangePasswordUser,
            EditUser,
            AddUser,
            AgGridVue,
            VueGistEmbed
        },
        data() {
            return {
                selected: [],
                gridApi: null,
                columnDefs: [
                    {headerName: 'ID', field: 'id', checkboxSelection: true},
                    {
                        headerName: 'Profile',
                        field: 'profile',
                        cellRenderer: function (params) {
                            return `<img src="${params.data.profile}" height="50" alt="${params.data.profile}">`;
                        }
                    },
                    {headerName: 'Name', field: 'name'},
                    {headerName: 'Email', field: 'email'},
                    {headerName: 'Role', field: 'role', cellRendererFramework: roleComponent},
                    {headerName: 'Status', field: 'status', cellRendererFramework: statusComponent},
                    {headerName: 'Created At', field: 'created_at'},
                    {headerName: 'Updated At', field: 'updated_at'},
                ],
                defaultColDef: {
                    sortable: true,
                    resizable: true,
                    filter: true,
                },
            }
        },
        methods: {
            onGridReady(params) {
                this.gridApi = params.api;
            },
            onSelectionChanged() {
                this.selected = this.gridApi.getSelectedRows();
            },
            confirmToggle() {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `ផ្ទៀងផ្ទាត់`,
                    text: 'ចុចពាក្យ Accept ដើម្បីបន្ត!',
                    accept: this.toggleUserStatus
                });
            },
            //destroy
            async toggleUserStatus() {
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('toggleUserStatus', data);
                });
                await Promise.all(promises).then(function () {
                    self.$vs.notify({
                        time: 4000,
                        title: 'ប្រតិបត្តិការជោគជ័យ',
                        text: 'ប្រតិបត្តិការជោគជ័យ',
                        color: 'success',
                        iconPack: 'feather',
                        icon: 'icon-check',
                        position: 'top-center'
                    });
                    self.selected = [];
                    self.$vs.loading.close();
                })
            }
        },
        computed: {
            all_users() {
                return this.$store.getters.all_users
            }
        }
    }
</script>

<style scoped>

</style>