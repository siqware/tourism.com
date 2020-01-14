<template>
    <vx-card title="AGrid Component" code-toggler class="mb-base">
        <div class="vx-row">
            <div class="vx-col w-full">
                <div class="flex btn-group">
                    <vs-button type="relief" icon-pack="feather" icon="icon-plus-square">Add</vs-button>
                    <vs-button :disabled="selected.length!==1" color="warning" type="relief" icon-pack="feather"
                               icon="icon-edit">Edit
                    </vs-button>
                    <vs-button :disabled="selected.length<=0" color="danger" type="relief" icon-pack="feather"
                               icon="icon-trash-2">Delete
                    </vs-button>
                    <vs-button :disabled="selected.length<=0" @click="gridApi.deselectAll()" type="relief"
                               icon-pack="feather" icon="icon-check-square">Clear
                    </vs-button>
                    <vs-button :disabled="selected.length<=0" color="success"
                               @click="gridApi.exportDataAsCsv({onlySelected: true})" type="relief" icon-pack="feather"
                               icon="icon-download-cloud">Export
                    </vs-button>
                </div>
                <ag-grid-vue class="ag-theme-material w-100 my-4 ag-grid-table"
                             :columnDefs="columnDefs"
                             :defaultColDef="defaultColDef"
                             rowSelection="multiple"
                             @grid-ready="onGridReady"
                             @selection-changed="onSelectionChanged"
                             :pagination="true"
                             :paginationPageSize="100"
                             :animateRows="true"
                             :rowData="rowData">
                </ag-grid-vue>
            </div>
            {{selected}}
        </div>
        <template slot="codeContainer">
            {{code}}
        </template>
    </vx-card>
</template>
<script>
    //ag-grid
    import {AgGridVue} from "ag-grid-vue";
    import '@sass/vuexy/extraComponents/agGridStyleOverride.scss'

    export default {
        name: "AgridComponent",
        components: {
            AgGridVue
        },
        data() {
            return {
                selected: [],
                gridApi: null,
                columnDefs: [
                    {
                        headerName: 'Make',
                        field: 'make',
                        checkboxSelection: true
                    },
                    {
                        headerName: 'Model',
                        field: 'model',
                        cellRenderer: function (params) {
                            return '<img src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png" width="100%" alt="">';
                        }
                    },
                    {
                        headerName: 'Price',
                        field: 'price'
                    }
                ],
                defaultColDef: {
                    sortable: true,
                    resizable: true,
                    filter: true,
                },
                rowData: [
                    {make: 'Toyota', model: 'Celica', price: 35000},
                    {make: 'Ford', model: 'Mondeo', price: 32000},
                    {make: 'Porsche', model: 'Boxter', price: 72000}
                ],
                code: '<template>\n' +
                    '    <vx-card title="AGrid Component" code-toggler class="mb-base">\n' +
                    '        <div class="vx-row">\n' +
                    '            <div class="vx-col w-full">\n' +
                    '                <div class="flex btn-group">\n' +
                    '                    <vs-button type="relief" icon-pack="feather" icon="icon-plus-square">Add</vs-button>\n' +
                    '                    <vs-button :disabled="selected.length!==1" color="warning" type="relief" icon-pack="feather" icon="icon-edit">Edit</vs-button>\n' +
                    '                    <vs-button :disabled="selected.length<=0" color="danger" type="relief" icon-pack="feather" icon="icon-trash-2">Delete</vs-button>\n' +
                    '                    <vs-button :disabled="selected.length<=0" @click="gridApi.deselectAll()" type="relief" icon-pack="feather" icon="icon-check-square">Clear</vs-button>\n' +
                    '                    <vs-button :disabled="selected.length<=0" color="success" @click="gridApi.exportDataAsCsv({onlySelected: true})" type="relief" icon-pack="feather" icon="icon-download-cloud">Export</vs-button>\n' +
                    '                </div>\n' +
                    '                <ag-grid-vue class="ag-theme-material w-100 my-4 ag-grid-table"\n' +
                    '                             :columnDefs="columnDefs"\n' +
                    '                             :defaultColDef="defaultColDef"\n' +
                    '                             rowSelection="multiple"\n' +
                    '                             @grid-ready="onGridReady"\n' +
                    '                             @selection-changed="onSelectionChanged"\n' +
                    '                             :pagination="true"\n' +
                    '                             :paginationPageSize="100"\n' +
                    '                             :animateRows="true"\n' +
                    '                             :rowData="rowData">\n' +
                    '                </ag-grid-vue>\n' +
                    '            </div>\n' +
                    '            {{selected}}\n' +
                    '        </div>\n' +
                    '        <template slot="codeContainer">\n' +
                    '            {{code}}\n' +
                    '        </template>\n' +
                    '    </vx-card>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    //ag-grid\n' +
                    '    import {AgGridVue} from "ag-grid-vue";\n' +
                    '    import \'@sass/vuexy/extraComponents/agGridStyleOverride.scss\'\n' +
                    '    export default {\n' +
                    '        name: "AgridComponent",\n' +
                    '        components:{\n' +
                    '            AgGridVue\n' +
                    '        },\n' +
                    '        data() {\n' +
                    '            return {\n' +
                    '                selected: [],\n' +
                    '                gridApi: null,\n' +
                    '                columnDefs: [\n' +
                    '                    {\n' +
                    '                        headerName: \'Make\',\n' +
                    '                        field: \'make\',\n' +
                    '                        checkboxSelection: true},\n' +
                    '                    {\n' +
                    '                        headerName: \'Model\',\n' +
                    '                        field: \'model\',\n' +
                    '                        cellRenderer:function (params) {\n' +
                    '                            return \'<img src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png" width="100%" alt="">\';\n' +
                    '                        }\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        headerName: \'Price\',\n' +
                    '                        field: \'price\'\n' +
                    '                    }\n' +
                    '                ],\n' +
                    '                defaultColDef: {\n' +
                    '                    sortable: true,\n' +
                    '                    resizable: true,\n' +
                    '                    filter: true,\n' +
                    '                },\n' +
                    '                rowData: [\n' +
                    '                    {make: \'Toyota\', model: \'Celica\', price: 35000},\n' +
                    '                    {make: \'Ford\', model: \'Mondeo\', price: 32000},\n' +
                    '                    {make: \'Porsche\', model: \'Boxter\', price: 72000}\n' +
                    '                ],\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            onGridReady(params) {\n' +
                    '                this.gridApi = params.api;\n' +
                    '            },\n' +
                    '            onSelectionChanged() {\n' +
                    '                this.selected = this.gridApi.getSelectedRows();\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</\script>',
            }
        },
        methods: {
            onGridReady(params) {
                this.gridApi = params.api;
            },
            onSelectionChanged() {
                this.selected = this.gridApi.getSelectedRows();
            }
        }
    }
</script>
<style lang="scss">
</style>