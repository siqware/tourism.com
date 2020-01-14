<template>
    <vx-card no-shadow>
        <moment/>
        <modal/>
        <vue-select/>
        <currency-formatter/>
        <range-date-picker/>
        <print-js/>
        <form-validation/>
        <vuex-module/>
        <drop-zone/>
        <common-code/>
        <table-component/>
        <agrid-component/>
    </vx-card>
</template>

<script>
    import Moment from "./Moment";
    import Modal from "./Modal";
    import VueSelect from "./Select";
    import CurrencyFormatter from "./CurrencyFormatter";
    import RangeDatePicker from "./DateRangePicker";
    import PrintJs from "./PrintJS";
    import FormValidation from "./FormValidation";
    import VuexModule from "./VuexModule";
    import DropZone from "./DropZone";
    import CommonCode from "./CommonCode";
    import TableComponent from "./Table";
    import AgridComponent from "./AgrideComponent";
    export default {
        name: "Helper",
        components: {
            AgridComponent,
            TableComponent,
            CommonCode,
            DropZone,
            VuexModule, FormValidation, PrintJs, RangeDatePicker, CurrencyFormatter, VueSelect, Modal, Moment},
    }
</script>

<style scoped>

</style>