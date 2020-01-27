(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tour-service/tour_service.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/tour-service/tour_service.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "tour_destination",
  components: {
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      image: 'images/placeholder/placeholder.png',
      //dropzone option
      dropzoneOptions: {
        url: route('file.upload.thumb'),
        maxFiles: 10,
        addRemoveLinks: true,
        dictDefaultMessage: "ដាក់រូបភាពទំនិញបើមាន",
        thumbnailWidth: 150,
        thumbnailHeight: 150
      },
      dropzoneOption: {
        url: route('file.upload.thumb'),
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "ដាក់រូបភាព Thumbnail",
        thumbnailWidth: 150,
        thumbnailHeight: 150
      },
      service_detail: [],
      content: this.value,
      editor: null,
      cTinyMce: null,
      checkerTimeout: null,
      isTyping: false,
      //Select
      selected: null,
      options: [{
        id: 1,
        title: 'Hotel',
        icon: 'fa-book'
      }, {
        id: 2,
        title: 'Restaurant',
        icon: 'fa-book'
      }],
      services: {
        type: '',
        name: '',
        contact: '',
        thumbnail: '',
        destination_x: '',
        destination_y: ''
      },
      service_details: [],
      detail_item: {
        sub_name: '',
        qty: 1,
        description: '',
        gallery_item: []
      }
    };
  },
  computed: {
    new_options: function new_options() {
      return this.options.map(function (x) {
        return {
          id: x.id,
          label_data: "".concat(x.title)
        };
      });
    }
  },
  methods: {
    //image upload
    successUpload: function successUpload(file, res) {
      this.services.thumbnail = res.path;
    },
    successUploads: function successUploads(file, res) {
      this.detail_item.gallery_item.push(res.path);
    },
    //edit thumb
    editThumb: function editThumb() {
      this.$refs.image3.manuallyAddFile({
        size: 123
      }, this.image);
    },
    addServiceDetail: function addServiceDetail() {
      var di = this.detail_item;
      this.service_detail.push({
        service_id: 0,
        gallery_id: 0,
        service_item: di.sub_name,
        item_qty: di.qty,
        item_description: di.description,
        images: di.gallery_item,
        is_available: true
      });
      this.$refs.image.removeAllFiles();
      this.clearDetail();
      console.log(this.service_detail);
    },
    clearDetail: function clearDetail() {
      var di = this.detail_item;
      di.sub_name = '';
      di.gallery_item = [];
      di.description = '';
      di.qty = 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tour-service/tour_service.vue?vue&type=template&id=9a9a01ba&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/tour-service/tour_service.vue?vue&type=template&id=9a9a01ba&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "vx-card",
        { attrs: { title: "Lazy Load" } },
        [
          _c(
            "vs-button",
            {
              attrs: { size: "large", type: "relief" },
              on: {
                click: function($event) {
                  return _vm.$refs.modal.open()
                }
              }
            },
            [_vm._v("Primary")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "sweet-modal",
        {
          ref: "modal",
          attrs: {
            title: "Tour Service",
            blocking: true,
            width: !_vm.mobilecheck() ? "90%" : ""
          }
        },
        [
          _c("vs-divider", { attrs: { position: "left" } }, [
            _vm._v("Service")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-row" },
            [
              _c(
                "div",
                { staticClass: "vx-col md:w-1/3 mt-5" },
                [
                  _c("v-select", {
                    attrs: {
                      clearable: false,
                      placeholder: "Please select a location type",
                      options: _vm.new_options,
                      label: "label_data"
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "option",
                        fn: function(option) {
                          return [
                            _vm._v(
                              "\n                        " +
                                _vm._s(option.label_data) +
                                "\n                    "
                            )
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.services.type,
                      callback: function($$v) {
                        _vm.$set(_vm.services, "type", $$v)
                      },
                      expression: "services.type"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/3" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: { "label-placeholder": "Name" },
                    model: {
                      value: _vm.services.name,
                      callback: function($$v) {
                        _vm.$set(_vm.services, "name", $$v)
                      },
                      expression: "services.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/3" },
                [
                  _c("vue-dropzone", {
                    ref: "image2",
                    staticClass: "max-content p-1",
                    attrs: {
                      duplicateCheck: true,
                      id: "dropzone2",
                      options: _vm.dropzoneOption
                    },
                    on: { "vdropzone-success": _vm.successUpload }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-full mt-2" },
                [
                  _c("vs-textarea", {
                    staticClass: "w-full",
                    attrs: { label: "Contacts" },
                    model: {
                      value: _vm.services.contact,
                      callback: function($$v) {
                        _vm.$set(_vm.services, "contact", $$v)
                      },
                      expression: "services.contact"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/2" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: { "label-placeholder": "X Coordinate" },
                    model: {
                      value: _vm.services.destination_x,
                      callback: function($$v) {
                        _vm.$set(_vm.services, "destination_x", $$v)
                      },
                      expression: "services.destination_x"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/2" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: { "label-placeholder": "Y Coordinate" },
                    model: {
                      value: _vm.services.destination_y,
                      callback: function($$v) {
                        _vm.$set(_vm.services, "destination_y", $$v)
                      },
                      expression: "services.destination_y"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("vs-divider", { attrs: { position: "left" } }, [
                _vm._v("Detail")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/2" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: { "label-placeholder": "Sub-name" },
                    model: {
                      value: _vm.detail_item.sub_name,
                      callback: function($$v) {
                        _vm.$set(_vm.detail_item, "sub_name", $$v)
                      },
                      expression: "detail_item.sub_name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/2" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: { "label-placeholder": "Quality" },
                    model: {
                      value: _vm.detail_item.qty,
                      callback: function($$v) {
                        _vm.$set(_vm.detail_item, "qty", $$v)
                      },
                      expression: "detail_item.qty"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-full mt-2 mb-2" },
                [
                  _c("tinymce", {
                    attrs: { id: "d1" },
                    model: {
                      value: _vm.detail_item.description,
                      callback: function($$v) {
                        _vm.$set(_vm.detail_item, "description", $$v)
                      },
                      expression: "detail_item.description"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-full" },
                [
                  _c("vue-dropzone", {
                    ref: "image",
                    staticClass: "p-1",
                    attrs: {
                      duplicateCheck: true,
                      id: "dropzone",
                      options: _vm.dropzoneOptions
                    },
                    on: { "vdropzone-success": _vm.successUploads }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col md:w-1/3 mt-2 mb-2" },
              [
                _c(
                  "vs-button",
                  {
                    attrs: { type: "relief" },
                    on: { click: _vm.addServiceDetail }
                  },
                  [_vm._v("Add Item")]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "vs-table",
            {
              attrs: { "max-items": "100", data: _vm.service_detail },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(data, function(tr, indextr) {
                      return _c(
                        "vs-tr",
                        { key: indextr, attrs: { data: tr } },
                        [
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].service_item } },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(data[indextr].service_item) +
                                  "\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].item_qty } },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(data[indextr].item_qty) +
                                  "\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].item_description } },
                            [
                              _c("p", {
                                domProps: {
                                  innerHTML: _vm._s(tr.item_description)
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].images } },
                            _vm._l(tr.images, function(item, i) {
                              return _c("img", {
                                key: i,
                                attrs: { height: "30", src: item, alt: "" }
                              })
                            }),
                            0
                          )
                        ],
                        1
                      )
                    })
                  }
                }
              ])
            },
            [
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", { attrs: { "sort-key": "kh_name" } }, [
                    _vm._v("Sub-name")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "en_name" } }, [
                    _vm._v("Quality")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "gender" } }, [
                    _vm._v("Description")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "gender" } }, [
                    _vm._v("Gallary")
                  ])
                ],
                1
              )
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { slot: "button", size: "large", type: "relief" },
              slot: "button"
            },
            [_vm._v("Save")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/tour-service/tour_service.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/tour-service/tour_service.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tour_service_vue_vue_type_template_id_9a9a01ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tour_service.vue?vue&type=template&id=9a9a01ba&scoped=true& */ "./resources/js/src/views/tour-service/tour_service.vue?vue&type=template&id=9a9a01ba&scoped=true&");
/* harmony import */ var _tour_service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tour_service.vue?vue&type=script&lang=js& */ "./resources/js/src/views/tour-service/tour_service.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tour_service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tour_service_vue_vue_type_template_id_9a9a01ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tour_service_vue_vue_type_template_id_9a9a01ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9a9a01ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/tour-service/tour_service.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/tour-service/tour_service.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/tour-service/tour_service.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tour_service.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tour-service/tour_service.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/tour-service/tour_service.vue?vue&type=template&id=9a9a01ba&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/tour-service/tour_service.vue?vue&type=template&id=9a9a01ba&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_service_vue_vue_type_template_id_9a9a01ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tour_service.vue?vue&type=template&id=9a9a01ba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tour-service/tour_service.vue?vue&type=template&id=9a9a01ba&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_service_vue_vue_type_template_id_9a9a01ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_service_vue_vue_type_template_id_9a9a01ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);