"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/payload-admin-bar";
exports.ids = ["vendor-chunks/payload-admin-bar"];
exports.modules = {

/***/ "(ssr)/./node_modules/payload-admin-bar/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/payload-admin-bar/dist/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PayloadAdminBar = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar dummyUser = {\n    email: 'dev@email.com',\n    id: '12345'\n};\nvar PayloadAdminBar = function (props) {\n    var _a = props.cmsURL, cmsURL = _a === void 0 ? 'http://localhost:8000' : _a, _b = props.apiPath, apiPath = _b === void 0 ? '/api' : _b, _c = props.adminPath, adminPath = _c === void 0 ? '/admin' : _c, collection = props.collection, collectionLabels = props.collectionLabels, id = props.id, logo = props.logo, className = props.className, logoProps = props.logoProps, editProps = props.editProps, createProps = props.createProps, userProps = props.userProps, logoutProps = props.logoutProps, divProps = props.divProps, style = props.style, unstyled = props.unstyled, onAuthChange = props.onAuthChange, classNames = props.classNames, devMode = props.devMode, preview = props.preview, onPreviewExit = props.onPreviewExit, previewProps = props.previewProps;\n    var _d = (0, react_1.useState)(), user = _d[0], setUser = _d[1];\n    (0, react_1.useEffect)(function () {\n        var fetchMe = function () { return __awaiter(void 0, void 0, void 0, function () {\n            var meRequest, meResponse, user_1, err_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 3, , 4]);\n                        return [4 /*yield*/, fetch(\"\" + cmsURL + apiPath + \"/users/me\", {\n                                method: 'get',\n                                credentials: 'include',\n                            })];\n                    case 1:\n                        meRequest = _a.sent();\n                        return [4 /*yield*/, meRequest.json()];\n                    case 2:\n                        meResponse = _a.sent();\n                        user_1 = meResponse.user;\n                        if (user_1) {\n                            setUser(user_1);\n                        }\n                        else {\n                            if (devMode !== true) {\n                                setUser(null);\n                            }\n                            else {\n                                setUser(dummyUser);\n                            }\n                        }\n                        return [3 /*break*/, 4];\n                    case 3:\n                        err_1 = _a.sent();\n                        console.warn(err_1);\n                        if (devMode === true) {\n                            setUser(dummyUser);\n                        }\n                        return [3 /*break*/, 4];\n                    case 4: return [2 /*return*/];\n                }\n            });\n        }); };\n        fetchMe();\n    }, [\n        cmsURL,\n        adminPath,\n        apiPath\n    ]);\n    (0, react_1.useEffect)(function () {\n        if (typeof onAuthChange === 'function') {\n            onAuthChange(user);\n        }\n    }, [\n        user,\n        onAuthChange\n    ]);\n    if (user) {\n        var email = user.email, userID = user.id;\n        return (react_1.default.createElement(\"div\", { className: className, style: __assign(__assign({}, unstyled !== true ? {\n                fontSize: 'small',\n                position: 'fixed',\n                display: 'flex',\n                minWidth: '0',\n                alignItems: 'center',\n                top: 0,\n                left: 0,\n                width: '100%',\n                padding: '0.5rem',\n                zIndex: 99999,\n                boxSizing: 'border-box',\n                backgroundColor: '#222',\n                color: '#fff',\n                fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif'\n            } : {}), style) },\n            react_1.default.createElement(\"a\", __assign({ href: \"\" + cmsURL + adminPath, className: classNames === null || classNames === void 0 ? void 0 : classNames.logo }, logoProps, { style: __assign({}, unstyled !== true ? __assign({ marginRight: '10px', flexShrink: 0, display: 'flex', height: '20px', textDecoration: 'none', color: 'inherit', alignItems: 'center' }, (logoProps === null || logoProps === void 0 ? void 0 : logoProps.style) ? __assign({}, logoProps.style) : {}) : {}) }), logo || 'Payload CMS'),\n            react_1.default.createElement(\"a\", __assign({ href: \"\" + cmsURL + adminPath + \"/collections/users/\" + userID, target: \"_blank\", rel: \"noopener noreferrer\", className: classNames === null || classNames === void 0 ? void 0 : classNames.user }, userProps, { style: __assign({}, unstyled !== true ? __assign({ marginRight: '10px', display: 'block', minWidth: '50px', overflow: 'hidden', textOverflow: 'ellipsis', textDecoration: 'none', whiteSpace: 'nowrap', color: 'inherit' }, (userProps === null || userProps === void 0 ? void 0 : userProps.style) ? __assign({}, userProps.style) : {}) : {}) }),\n                react_1.default.createElement(\"span\", { style: __assign({}, unstyled !== true ? {\n                        whiteSpace: 'nowrap',\n                        textOverflow: 'ellipsis',\n                        overflow: 'hidden',\n                    } : {}) }, email || 'Profile')),\n            react_1.default.createElement(\"div\", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.controls }, divProps, { style: __assign({}, unstyled !== true ? __assign({ display: 'flex', marginRight: '10px', flexShrink: 1, flexGrow: 1, alignItems: 'center', justifyContent: 'flex-end' }, (divProps === null || divProps === void 0 ? void 0 : divProps.style) ? __assign({}, divProps.style) : {}) : {}) }),\n                collection && id && (react_1.default.createElement(\"a\", __assign({ href: \"\" + cmsURL + adminPath + \"/collections/\" + collection + \"/\" + id, target: \"_blank\", rel: \"noopener noreferrer\", className: classNames === null || classNames === void 0 ? void 0 : classNames.edit }, editProps, { style: __assign({ display: 'block' }, unstyled !== true ? __assign({ marginRight: '10px', textDecoration: 'none', color: 'inherit', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', flexShrink: 1 }, (editProps === null || editProps === void 0 ? void 0 : editProps.style) ? __assign({}, editProps.style) : {}) : {}) }),\n                    react_1.default.createElement(\"span\", { style: __assign({}, unstyled !== true ? {\n                            whiteSpace: 'nowrap',\n                            textOverflow: 'ellipsis',\n                            overflow: 'hidden',\n                        } : {}) }, \"Edit \" + ((collectionLabels === null || collectionLabels === void 0 ? void 0 : collectionLabels.singular) || 'page')))),\n                collection && (react_1.default.createElement(\"a\", __assign({ href: \"\" + cmsURL + adminPath + \"/collections/\" + collection + \"/create\", target: \"_blank\", rel: \"noopener noreferrer\", className: classNames === null || classNames === void 0 ? void 0 : classNames.create }, createProps, { style: __assign({}, unstyled !== true ? __assign({ flexShrink: 1, display: 'block', textDecoration: 'none', color: 'inherit', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }, (createProps === null || createProps === void 0 ? void 0 : createProps.style) ? __assign({}, createProps.style) : {}) : {}) }),\n                    react_1.default.createElement(\"span\", { style: __assign({}, unstyled !== true ? {\n                            whiteSpace: 'nowrap',\n                            textOverflow: 'ellipsis',\n                            overflow: 'hidden',\n                        } : {}) }, \"New \" + ((collectionLabels === null || collectionLabels === void 0 ? void 0 : collectionLabels.singular) || 'page')))),\n                preview && (react_1.default.createElement(\"button\", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.preview, onClick: onPreviewExit }, previewProps, { style: __assign({}, unstyled !== true ? __assign({ marginLeft: '10px', background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'inherit', fontFamily: 'inherit', fontSize: 'inherit' }, (previewProps === null || previewProps === void 0 ? void 0 : previewProps.style) ? __assign({}, previewProps.style) : {}) : {}) }), \"Exit preview mode\"))),\n            react_1.default.createElement(\"a\", __assign({ href: \"\" + cmsURL + adminPath + \"/logout\", target: \"_blank\", rel: \"noopener noreferrer\", className: classNames === null || classNames === void 0 ? void 0 : classNames.logout }, logoutProps, { style: __assign({}, unstyled !== true ? __assign({ textDecoration: 'none', color: 'inherit', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', display: 'block', flexShrink: 1 }, (logoutProps === null || logoutProps === void 0 ? void 0 : logoutProps.style) ? __assign({}, logoutProps.style) : {}) : {}) }),\n                react_1.default.createElement(\"span\", { style: __assign({}, unstyled !== true ? {\n                        whiteSpace: 'nowrap',\n                        textOverflow: 'ellipsis',\n                        overflow: 'hidden',\n                    } : {}) }, \"Logout\"))));\n    }\n    return null;\n};\nexports.PayloadAdminBar = PayloadAdminBar;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGF5bG9hZC1hZG1pbi1iYXIvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvQ0FBb0MsZ0JBQWdCO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMENBQTBDLDRCQUE0QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjLDZCQUE2QiwwQkFBMEIsY0FBYyxxQkFBcUI7QUFDeEcsaUJBQWlCLG9EQUFvRCxxRUFBcUUsY0FBYztBQUN4Six1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxtQ0FBbUMsU0FBUztBQUM1QyxtQ0FBbUMsV0FBVyxVQUFVO0FBQ3hELDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0EsOEdBQThHLE9BQU87QUFDckgsaUZBQWlGLGlCQUFpQjtBQUNsRyx5REFBeUQsZ0JBQWdCLFFBQVE7QUFDakYsK0NBQStDLGdCQUFnQixnQkFBZ0I7QUFDL0U7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLFVBQVUsWUFBWSxhQUFhLFNBQVMsVUFBVTtBQUN0RCxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QjtBQUN2QiwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsaURBQWlEO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLElBQUksV0FBVztBQUM3QiwwREFBMEQsbUhBQW1ILGVBQWUsa0JBQWtCLGlDQUFpQyxxSUFBcUksdUZBQXVGLHVCQUF1QixNQUFNLEdBQUc7QUFDM2UsMERBQTBELGtNQUFrTSxlQUFlLGtCQUFrQixpQ0FBaUMsdUtBQXVLLHVGQUF1Rix1QkFBdUIsTUFBTSxHQUFHO0FBQzVsQix3REFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixJQUFJLEdBQUc7QUFDN0IsNERBQTRELHdGQUF3RixjQUFjLGtCQUFrQixpQ0FBaUMsb0hBQW9ILG9GQUFvRixzQkFBc0IsTUFBTSxHQUFHO0FBQzViLG1GQUFtRiwyTUFBMk0sZUFBZSxrQkFBa0Isa0JBQWtCLGlDQUFpQyxrSkFBa0osdUZBQXVGLHVCQUF1QixNQUFNLEdBQUc7QUFDM25CLDREQUE0RCxrQkFBa0I7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLElBQUksR0FBRztBQUNqQyw2RUFBNkUsOE1BQThNLGlCQUFpQixrQkFBa0IsaUNBQWlDLCtJQUErSSw2RkFBNkYseUJBQXlCLE1BQU0sR0FBRztBQUM3bUIsNERBQTRELGtCQUFrQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsSUFBSSxHQUFHO0FBQ2pDLCtFQUErRSwrR0FBK0csa0JBQWtCLGtCQUFrQixpQ0FBaUMscUpBQXFKLGdHQUFnRywwQkFBMEIsTUFBTSxHQUFHO0FBQzNoQiwwREFBMEQsK0tBQStLLGlCQUFpQixrQkFBa0IsaUNBQWlDLCtJQUErSSw2RkFBNkYseUJBQXlCLE1BQU0sR0FBRztBQUMzakIsd0RBQXdELGtCQUFrQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsSUFBSSxHQUFHO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL1JTUC8uL25vZGVfbW9kdWxlcy9wYXlsb2FkLWFkbWluLWJhci9kaXN0L2luZGV4LmpzPzM5YzgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QYXlsb2FkQWRtaW5CYXIgPSB2b2lkIDA7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGR1bW15VXNlciA9IHtcbiAgICBlbWFpbDogJ2RldkBlbWFpbC5jb20nLFxuICAgIGlkOiAnMTIzNDUnXG59O1xudmFyIFBheWxvYWRBZG1pbkJhciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBfYSA9IHByb3BzLmNtc1VSTCwgY21zVVJMID0gX2EgPT09IHZvaWQgMCA/ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnIDogX2EsIF9iID0gcHJvcHMuYXBpUGF0aCwgYXBpUGF0aCA9IF9iID09PSB2b2lkIDAgPyAnL2FwaScgOiBfYiwgX2MgPSBwcm9wcy5hZG1pblBhdGgsIGFkbWluUGF0aCA9IF9jID09PSB2b2lkIDAgPyAnL2FkbWluJyA6IF9jLCBjb2xsZWN0aW9uID0gcHJvcHMuY29sbGVjdGlvbiwgY29sbGVjdGlvbkxhYmVscyA9IHByb3BzLmNvbGxlY3Rpb25MYWJlbHMsIGlkID0gcHJvcHMuaWQsIGxvZ28gPSBwcm9wcy5sb2dvLCBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsIGxvZ29Qcm9wcyA9IHByb3BzLmxvZ29Qcm9wcywgZWRpdFByb3BzID0gcHJvcHMuZWRpdFByb3BzLCBjcmVhdGVQcm9wcyA9IHByb3BzLmNyZWF0ZVByb3BzLCB1c2VyUHJvcHMgPSBwcm9wcy51c2VyUHJvcHMsIGxvZ291dFByb3BzID0gcHJvcHMubG9nb3V0UHJvcHMsIGRpdlByb3BzID0gcHJvcHMuZGl2UHJvcHMsIHN0eWxlID0gcHJvcHMuc3R5bGUsIHVuc3R5bGVkID0gcHJvcHMudW5zdHlsZWQsIG9uQXV0aENoYW5nZSA9IHByb3BzLm9uQXV0aENoYW5nZSwgY2xhc3NOYW1lcyA9IHByb3BzLmNsYXNzTmFtZXMsIGRldk1vZGUgPSBwcm9wcy5kZXZNb2RlLCBwcmV2aWV3ID0gcHJvcHMucHJldmlldywgb25QcmV2aWV3RXhpdCA9IHByb3BzLm9uUHJldmlld0V4aXQsIHByZXZpZXdQcm9wcyA9IHByb3BzLnByZXZpZXdQcm9wcztcbiAgICB2YXIgX2QgPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoKSwgdXNlciA9IF9kWzBdLCBzZXRVc2VyID0gX2RbMV07XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmZXRjaE1lID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtZVJlcXVlc3QsIG1lUmVzcG9uc2UsIHVzZXJfMSwgZXJyXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goXCJcIiArIGNtc1VSTCArIGFwaVBhdGggKyBcIi91c2Vycy9tZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZVJlcXVlc3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBtZVJlcXVlc3QuanNvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVSZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfMSA9IG1lUmVzcG9uc2UudXNlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyKHVzZXJfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGV2TW9kZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlcihkdW1teVVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnJfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGV2TW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXIoZHVtbXlVc2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH07XG4gICAgICAgIGZldGNoTWUoKTtcbiAgICB9LCBbXG4gICAgICAgIGNtc1VSTCxcbiAgICAgICAgYWRtaW5QYXRoLFxuICAgICAgICBhcGlQYXRoXG4gICAgXSk7XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb25BdXRoQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBvbkF1dGhDaGFuZ2UodXNlcik7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHVzZXIsXG4gICAgICAgIG9uQXV0aENoYW5nZVxuICAgIF0pO1xuICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHZhciBlbWFpbCA9IHVzZXIuZW1haWwsIHVzZXJJRCA9IHVzZXIuaWQ7XG4gICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCB1bnN0eWxlZCAhPT0gdHJ1ZSA/IHtcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJ3NtYWxsJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6ICcwJyxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwLjVyZW0nLFxuICAgICAgICAgICAgICAgIHpJbmRleDogOTk5OTksXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIyMicsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBIZWx2ZXRpY2EgTmV1ZSwgQXJpYWwsIHNhbnMtc2VyaWYnXG4gICAgICAgICAgICB9IDoge30pLCBzdHlsZSkgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiXCIgKyBjbXNVUkwgKyBhZG1pblBhdGgsIGNsYXNzTmFtZTogY2xhc3NOYW1lcyA9PT0gbnVsbCB8fCBjbGFzc05hbWVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjbGFzc05hbWVzLmxvZ28gfSwgbG9nb1Byb3BzLCB7IHN0eWxlOiBfX2Fzc2lnbih7fSwgdW5zdHlsZWQgIT09IHRydWUgPyBfX2Fzc2lnbih7IG1hcmdpblJpZ2h0OiAnMTBweCcsIGZsZXhTaHJpbms6IDAsIGRpc3BsYXk6ICdmbGV4JywgaGVpZ2h0OiAnMjBweCcsIHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAnaW5oZXJpdCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH0sIChsb2dvUHJvcHMgPT09IG51bGwgfHwgbG9nb1Byb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsb2dvUHJvcHMuc3R5bGUpID8gX19hc3NpZ24oe30sIGxvZ29Qcm9wcy5zdHlsZSkgOiB7fSkgOiB7fSkgfSksIGxvZ28gfHwgJ1BheWxvYWQgQ01TJyksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgX19hc3NpZ24oeyBocmVmOiBcIlwiICsgY21zVVJMICsgYWRtaW5QYXRoICsgXCIvY29sbGVjdGlvbnMvdXNlcnMvXCIgKyB1c2VySUQsIHRhcmdldDogXCJfYmxhbmtcIiwgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiwgY2xhc3NOYW1lOiBjbGFzc05hbWVzID09PSBudWxsIHx8IGNsYXNzTmFtZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNsYXNzTmFtZXMudXNlciB9LCB1c2VyUHJvcHMsIHsgc3R5bGU6IF9fYXNzaWduKHt9LCB1bnN0eWxlZCAhPT0gdHJ1ZSA/IF9fYXNzaWduKHsgbWFyZ2luUmlnaHQ6ICcxMHB4JywgZGlzcGxheTogJ2Jsb2NrJywgbWluV2lkdGg6ICc1MHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsIHRleHREZWNvcmF0aW9uOiAnbm9uZScsIHdoaXRlU3BhY2U6ICdub3dyYXAnLCBjb2xvcjogJ2luaGVyaXQnIH0sICh1c2VyUHJvcHMgPT09IG51bGwgfHwgdXNlclByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyUHJvcHMuc3R5bGUpID8gX19hc3NpZ24oe30sIHVzZXJQcm9wcy5zdHlsZSkgOiB7fSkgOiB7fSkgfSksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IF9fYXNzaWduKHt9LCB1bnN0eWxlZCAhPT0gdHJ1ZSA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICB9IDoge30pIH0sIGVtYWlsIHx8ICdQcm9maWxlJykpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMgPT09IG51bGwgfHwgY2xhc3NOYW1lcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2xhc3NOYW1lcy5jb250cm9scyB9LCBkaXZQcm9wcywgeyBzdHlsZTogX19hc3NpZ24oe30sIHVuc3R5bGVkICE9PSB0cnVlID8gX19hc3NpZ24oeyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpblJpZ2h0OiAnMTBweCcsIGZsZXhTaHJpbms6IDEsIGZsZXhHcm93OiAxLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcgfSwgKGRpdlByb3BzID09PSBudWxsIHx8IGRpdlByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaXZQcm9wcy5zdHlsZSkgPyBfX2Fzc2lnbih7fSwgZGl2UHJvcHMuc3R5bGUpIDoge30pIDoge30pIH0pLFxuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24gJiYgaWQgJiYgKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiXCIgKyBjbXNVUkwgKyBhZG1pblBhdGggKyBcIi9jb2xsZWN0aW9ucy9cIiArIGNvbGxlY3Rpb24gKyBcIi9cIiArIGlkLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCIsIGNsYXNzTmFtZTogY2xhc3NOYW1lcyA9PT0gbnVsbCB8fCBjbGFzc05hbWVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjbGFzc05hbWVzLmVkaXQgfSwgZWRpdFByb3BzLCB7IHN0eWxlOiBfX2Fzc2lnbih7IGRpc3BsYXk6ICdibG9jaycgfSwgdW5zdHlsZWQgIT09IHRydWUgPyBfX2Fzc2lnbih7IG1hcmdpblJpZ2h0OiAnMTBweCcsIHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAnaW5oZXJpdCcsIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCB3aGl0ZVNwYWNlOiAnbm93cmFwJywgZmxleFNocmluazogMSB9LCAoZWRpdFByb3BzID09PSBudWxsIHx8IGVkaXRQcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWRpdFByb3BzLnN0eWxlKSA/IF9fYXNzaWduKHt9LCBlZGl0UHJvcHMuc3R5bGUpIDoge30pIDoge30pIH0pLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogX19hc3NpZ24oe30sIHVuc3R5bGVkICE9PSB0cnVlID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9IDoge30pIH0sIFwiRWRpdCBcIiArICgoY29sbGVjdGlvbkxhYmVscyA9PT0gbnVsbCB8fCBjb2xsZWN0aW9uTGFiZWxzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb2xsZWN0aW9uTGFiZWxzLnNpbmd1bGFyKSB8fCAncGFnZScpKSkpLFxuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24gJiYgKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiXCIgKyBjbXNVUkwgKyBhZG1pblBhdGggKyBcIi9jb2xsZWN0aW9ucy9cIiArIGNvbGxlY3Rpb24gKyBcIi9jcmVhdGVcIiwgdGFyZ2V0OiBcIl9ibGFua1wiLCByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiLCBjbGFzc05hbWU6IGNsYXNzTmFtZXMgPT09IG51bGwgfHwgY2xhc3NOYW1lcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2xhc3NOYW1lcy5jcmVhdGUgfSwgY3JlYXRlUHJvcHMsIHsgc3R5bGU6IF9fYXNzaWduKHt9LCB1bnN0eWxlZCAhPT0gdHJ1ZSA/IF9fYXNzaWduKHsgZmxleFNocmluazogMSwgZGlzcGxheTogJ2Jsb2NrJywgdGV4dERlY29yYXRpb246ICdub25lJywgY29sb3I6ICdpbmhlcml0JywgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLCBvdmVyZmxvdzogJ2hpZGRlbicsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH0sIChjcmVhdGVQcm9wcyA9PT0gbnVsbCB8fCBjcmVhdGVQcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3JlYXRlUHJvcHMuc3R5bGUpID8gX19hc3NpZ24oe30sIGNyZWF0ZVByb3BzLnN0eWxlKSA6IHt9KSA6IHt9KSB9KSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IF9fYXNzaWduKHt9LCB1bnN0eWxlZCAhPT0gdHJ1ZSA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHt9KSB9LCBcIk5ldyBcIiArICgoY29sbGVjdGlvbkxhYmVscyA9PT0gbnVsbCB8fCBjb2xsZWN0aW9uTGFiZWxzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb2xsZWN0aW9uTGFiZWxzLnNpbmd1bGFyKSB8fCAncGFnZScpKSkpLFxuICAgICAgICAgICAgICAgIHByZXZpZXcgJiYgKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzID09PSBudWxsIHx8IGNsYXNzTmFtZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNsYXNzTmFtZXMucHJldmlldywgb25DbGljazogb25QcmV2aWV3RXhpdCB9LCBwcmV2aWV3UHJvcHMsIHsgc3R5bGU6IF9fYXNzaWduKHt9LCB1bnN0eWxlZCAhPT0gdHJ1ZSA/IF9fYXNzaWduKHsgbWFyZ2luTGVmdDogJzEwcHgnLCBiYWNrZ3JvdW5kOiAnbm9uZScsIGJvcmRlcjogJ25vbmUnLCBwYWRkaW5nOiAwLCBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdpbmhlcml0JywgZm9udEZhbWlseTogJ2luaGVyaXQnLCBmb250U2l6ZTogJ2luaGVyaXQnIH0sIChwcmV2aWV3UHJvcHMgPT09IG51bGwgfHwgcHJldmlld1Byb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcmV2aWV3UHJvcHMuc3R5bGUpID8gX19hc3NpZ24oe30sIHByZXZpZXdQcm9wcy5zdHlsZSkgOiB7fSkgOiB7fSkgfSksIFwiRXhpdCBwcmV2aWV3IG1vZGVcIikpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiXCIgKyBjbXNVUkwgKyBhZG1pblBhdGggKyBcIi9sb2dvdXRcIiwgdGFyZ2V0OiBcIl9ibGFua1wiLCByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiLCBjbGFzc05hbWU6IGNsYXNzTmFtZXMgPT09IG51bGwgfHwgY2xhc3NOYW1lcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2xhc3NOYW1lcy5sb2dvdXQgfSwgbG9nb3V0UHJvcHMsIHsgc3R5bGU6IF9fYXNzaWduKHt9LCB1bnN0eWxlZCAhPT0gdHJ1ZSA/IF9fYXNzaWduKHsgdGV4dERlY29yYXRpb246ICdub25lJywgY29sb3I6ICdpbmhlcml0JywgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBkaXNwbGF5OiAnYmxvY2snLCBmbGV4U2hyaW5rOiAxIH0sIChsb2dvdXRQcm9wcyA9PT0gbnVsbCB8fCBsb2dvdXRQcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbG9nb3V0UHJvcHMuc3R5bGUpID8gX19hc3NpZ24oe30sIGxvZ291dFByb3BzLnN0eWxlKSA6IHt9KSA6IHt9KSB9KSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogX19hc3NpZ24oe30sIHVuc3R5bGVkICE9PSB0cnVlID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIH0gOiB7fSkgfSwgXCJMb2dvdXRcIikpKSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbmV4cG9ydHMuUGF5bG9hZEFkbWluQmFyID0gUGF5bG9hZEFkbWluQmFyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/payload-admin-bar/dist/index.js\n");

/***/ })

};
;