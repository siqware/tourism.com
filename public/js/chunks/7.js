(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lazy-load/LazyLoad.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/lazy-load/LazyLoad.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "LazyLoad",
  data: function data() {
    return {
      code: '<script>\n' + '    const state = {\n' + '        users: [],\n' + '        total: null,\n' + '    };\n' + '    const actions = {\n' + '        async fetchUser({commit}) {\n' + '            async function next_page(url) {\n' + '                const res = await axios.post(url);\n' + '                return res.data\n' + '            }\n' + '            if (!state.users.length >= state.total) {\n' + '                try {\n' + '                    axios.post(route(\'user.json\')).then(function (res) {\n' + '                        return res.data\n' + '                    }).then(async function (data) {\n' + '                        commit(\'SET_USER\', data);\n' + '                        async function f(next_url) {\n' + '                            if (next_url) {\n' + '                                next_page(next_url).then(async function (_data) {\n' + '                                    commit(\'SET_USER\', _data);\n' + '                                    await f(_data.next_page_url);\n' + '                                });\n' + '                            }\n' + '                        }\n' + '                        await f(data.next_page_url)\n' + '                    });\n' + '                } catch (e) {\n' + '                    return false\n' + '                }\n' + '            }\n' + '        }\n' + '    };\n' + '    const mutations = {\n' + '        SET_USER: function (state, data) {\n' + '            state.total = data.total;\n' + '            data.data.forEach(function (item, index) {\n' + '                state.users.push(item);\n' + '            });\n' + '        },\n' + '    };\n' + '</\script>'
    };
  },
  computed: {
    all_users: function all_users() {
      return this.$store.getters.all_users;
    }
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$store.dispatch('fetchUser');

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }()
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lazy-load/LazyLoad.vue?vue&type=template&id=b512dad8&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/lazy-load/LazyLoad.vue?vue&type=template&id=b512dad8&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Lazy Load", "code-toggler": "" }
    },
    [
      _c("div", { staticClass: "vx-row" }, [
        _c("div", { staticClass: "vx-col w-full" }, [
          _vm._v("\n            " + _vm._s(_vm.all_users) + "\n        ")
        ])
      ]),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v("\n        " + _vm._s(_vm.code) + "\n    ")
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/lazy-load/LazyLoad.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/lazy-load/LazyLoad.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LazyLoad_vue_vue_type_template_id_b512dad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LazyLoad.vue?vue&type=template&id=b512dad8&scoped=true& */ "./resources/js/src/views/lazy-load/LazyLoad.vue?vue&type=template&id=b512dad8&scoped=true&");
/* harmony import */ var _LazyLoad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LazyLoad.vue?vue&type=script&lang=js& */ "./resources/js/src/views/lazy-load/LazyLoad.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LazyLoad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LazyLoad_vue_vue_type_template_id_b512dad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LazyLoad_vue_vue_type_template_id_b512dad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b512dad8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/lazy-load/LazyLoad.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/lazy-load/LazyLoad.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/lazy-load/LazyLoad.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LazyLoad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LazyLoad.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lazy-load/LazyLoad.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LazyLoad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/lazy-load/LazyLoad.vue?vue&type=template&id=b512dad8&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/lazy-load/LazyLoad.vue?vue&type=template&id=b512dad8&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LazyLoad_vue_vue_type_template_id_b512dad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LazyLoad.vue?vue&type=template&id=b512dad8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lazy-load/LazyLoad.vue?vue&type=template&id=b512dad8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LazyLoad_vue_vue_type_template_id_b512dad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LazyLoad_vue_vue_type_template_id_b512dad8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);