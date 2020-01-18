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
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "ដាក់រូបភាពទំនិញបើមាន",
        thumbnailWidth: 150,
        thumbnailHeight: 150
      },
      service_detail: [],
      content: this.value,
      editor: null,
      cTinyMce: null,
      checkerTimeout: null,
      isTyping: false
    };
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    //image upload
    successUpload: function successUpload(file, res) {
      this.image = res.path;
    },
    //edit thumb
    editThumb: function editThumb() {
      this.$refs.image3.manuallyAddFile({
        size: 123
      }, this.image);
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
                { staticClass: "vx-col md:w-1/2" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: { "label-placeholder": "Type" }
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
                    attrs: { "label-placeholder": "Name" }
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
                    attrs: { label: "Contacts" }
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
                    attrs: { "label-placeholder": "Sub-name" }
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
                    attrs: { "label-placeholder": "Quality" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-full mt-2 mb-2" },
                [_c("tinymce", { attrs: { id: "d1" } })],
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
                    on: { "vdropzone-success": _vm.successUpload }
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
                _c("vs-button", { attrs: { size: "large", type: "relief" } }, [
                  _vm._v("Add Item")
                ])
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
                            { attrs: { data: data[indextr].kh_name } },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(data[indextr].kh_name) +
                                  "\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].en_name } },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(data[indextr].en_name) +
                                  "\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].gender } },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(data[indextr].gender) +
                                  "\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].gender } },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(data[indextr].gender) +
                                  "\n                    "
                              )
                            ]
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