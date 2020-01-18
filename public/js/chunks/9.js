(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tour-destination/tour_destination.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/tour-destination/tour_destination.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "tour_destination",
  components: {
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      selected: null,
      options: [{
        id: 1,
        title: 'Temple',
        icon: 'fa-book'
      }],
      image: 'images/placeholder/placeholder.png',
      images: [],
      //dropzone option
      dropzoneOption: {
        url: route('file.upload.thumb'),
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "ដាក់រូបភាព Thumbnail",
        thumbnailWidth: 150,
        thumbnailHeight: 150
      },
      dropzoneOptions: {
        url: route('file.upload.thumb'),
        maxFiles: 10,
        addRemoveLinks: true,
        dictDefaultMessage: "ដាក់រូបភាពលម្អិតពីទីតាំងនោះ",
        thumbnailWidth: 150,
        thumbnailHeight: 150
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
      this.image = res.path;
      console.log(this.image);
    },
    successUploads: function successUploads(file, res) {
      this.images.push(res.path);
      console.log(this.images);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tour-destination/tour_destination.vue?vue&type=template&id=3656c7c3&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/tour-destination/tour_destination.vue?vue&type=template&id=3656c7c3&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
            title: "TinyMCE",
            blocking: true,
            width: !_vm.mobilecheck() ? "70%" : ""
          }
        },
        [
          _c("div", { staticClass: "vx-row" }, [
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
                    value: _vm.selected,
                    callback: function($$v) {
                      _vm.selected = $$v
                    },
                    expression: "selected"
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
                  attrs: { "label-placeholder": "Location name" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "vx-col md:w-1/3" }, [
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "vx-col w-full" },
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
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col md:w-full mt-2" },
              [_c("tinymce", { attrs: { id: "d1" } })],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col md:w-1/2" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: { "label-placeholder": "X Coordinate" }
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
                  attrs: { "label-placeholder": "Y Coordinate" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col w-full mt-2" },
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
          ]),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { slot: "button", size: "large", type: "relief" },
              slot: "button"
            },
            [_vm._v("That's fine!")]
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

/***/ "./resources/js/src/views/tour-destination/tour_destination.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/tour-destination/tour_destination.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tour_destination_vue_vue_type_template_id_3656c7c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tour_destination.vue?vue&type=template&id=3656c7c3&scoped=true& */ "./resources/js/src/views/tour-destination/tour_destination.vue?vue&type=template&id=3656c7c3&scoped=true&");
/* harmony import */ var _tour_destination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tour_destination.vue?vue&type=script&lang=js& */ "./resources/js/src/views/tour-destination/tour_destination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tour_destination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tour_destination_vue_vue_type_template_id_3656c7c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tour_destination_vue_vue_type_template_id_3656c7c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3656c7c3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/tour-destination/tour_destination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/tour-destination/tour_destination.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/tour-destination/tour_destination.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_destination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tour_destination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tour-destination/tour_destination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_destination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/tour-destination/tour_destination.vue?vue&type=template&id=3656c7c3&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/tour-destination/tour_destination.vue?vue&type=template&id=3656c7c3&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_destination_vue_vue_type_template_id_3656c7c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tour_destination.vue?vue&type=template&id=3656c7c3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tour-destination/tour_destination.vue?vue&type=template&id=3656c7c3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_destination_vue_vue_type_template_id_3656c7c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_destination_vue_vue_type_template_id_3656c7c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);