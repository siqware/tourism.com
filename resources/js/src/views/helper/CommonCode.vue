<template>
    <vx-card title="Common Code" code-toggler class="mb-base">
        <h4 class="text-primary">Please toggle to see code</h4>
        <template slot="codeContainer">
            &lt;script&gt;
                //map promise
                async destroyProduct(){
                    let self = this;
                    self.$vs.loading();
                    const promises = self.selected.map(async function (data) {
                        await self.$store.dispatch('destroyProduct', data.id);
                    });
                    await Promise.all(promises).then(function () {
                        self.$vs.notify({
                            time: 4000,
                            title: 'ប្រតិបត្តិការជោគជ័យ',
                            text: 'ទិន្នន័យបានលុប',
                            color: 'success',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            position: 'top-center'
                        });
                        self.selected = [];
                        self.$vs.loading.close();
                    })
                }
            //Reduce sum function
                total_income() {
                    return this.data.items.reduce(function (total, item) {
                        return total + parseFloat(item.balance)
                    }, 0)
                }
            //for loop
            for (const [index, el] of item.invoice_detail.entries()) {
                if (el.inventory_type === 'bundle'){
                    total += parseFloat(item.amount);
                    break;
                }
                if (el.inventory_type !=='purchase_only') {
                    total += parseFloat(el.amount)
                }
            }
            &lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
    export default {
        name: "CommonCode",
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
        methods: {
            //image upload
            successUpload(file, res) {
                this.image = (res.path)
            },
            //edit thumb
            editThumb() {
                this.$refs.image3.manuallyAddFile({size: 123}, this.image);
            },
        }
    }
</script>

<style scoped>

</style>