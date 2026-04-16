System.register(["jimu-core","jimu-arcgis","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/FloorSelector/src/runtime/widget.tsx ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const { useState, useRef, useEffect } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const LEVELS = ['LB', 'L0', 'L0A', 'L1', 'L1M', 'L2', 'L2M', 'L3', 'L4', 'L5', 'L5M', 'L6', 'L7', 'L8', 'L9', 'L10'];
function Widget(props) {
    var _a;
    const [jimuMapView, setJimuMapView] = useState();
    const [currentLevel, setCurrentLevel] = useState('L2');
    const levelRef = useRef('L2');
    const isProcessing = useRef(false); // Safety gate
    const applyFloorLogic = (level, jmv) => __awaiter(this, void 0, void 0, function* () {
        var _b;
        if (!((_b = jmv === null || jmv === void 0 ? void 0 : jmv.view) === null || _b === void 0 ? void 0 : _b.map) || isProcessing.current)
            return;
        isProcessing.current = true;
        const sql = `FLOOR = '${level}'`;
        try {
            // Apply visual and data filters
            const layers = jmv.view.map.layers.toArray();
            for (const layer of layers) {
                if (layer.type === 'feature') {
                    layer.definitionExpression = sql;
                    const lv = yield jmv.view.whenLayerView(layer);
                    if (lv) {
                        lv.featureEffect = {
                            filter: { where: sql },
                            excludedEffect: "opacity(0%)"
                        };
                    }
                }
                if (layer.type === 'vector-tile') {
                    const title = layer.title || "";
                    if (title.startsWith('AMS_L')) {
                        layer.visible = title.includes(`AMS_${level}`);
                    }
                }
            }
            // Sync DataSources for Popups
            if (jmv.jimuLayerViews) {
                Object.values(jmv.jimuLayerViews).forEach((jimuLayerView) => {
                    var _a;
                    const ds = (_a = jimuLayerView === null || jimuLayerView === void 0 ? void 0 : jimuLayerView.getLayerDataSource) === null || _a === void 0 ? void 0 : _a.call(jimuLayerView);
                    if (ds)
                        ds.updateQueryParams({ where: sql }, props.id);
                });
            }
        }
        catch (err) {
            console.error("Floor Logic Error:", err);
        }
        finally {
            // Allow next execution after a tiny breather
            setTimeout(() => { isProcessing.current = false; }, 100);
        }
    });
    useEffect(() => {
        if (!(jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view))
            return;
        // When the user clicks, wait slightly for the popup to start,
        // then enforce the floor logic to hide "ghost" points.
        const clickHandle = jimuMapView.view.on('click', () => {
            setTimeout(() => {
                applyFloorLogic(levelRef.current, jimuMapView);
            }, 300);
        });
        const stationaryHandle = jimuMapView.view.watch('stationary', (isStationary) => {
            if (isStationary)
                applyFloorLogic(levelRef.current, jimuMapView);
        });
        applyFloorLogic(levelRef.current, jimuMapView);
        return () => {
            clickHandle.remove();
            stationaryHandle.remove();
        };
    }, [jimuMapView]);
    const handleLevelChange = (evt) => {
        const val = evt.target.value;
        setCurrentLevel(val);
        levelRef.current = val;
        if (jimuMapView)
            applyFloorLogic(val, jimuMapView);
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-floor-selector p-3", style: { backgroundColor: '#fff', borderRadius: '4px', border: '1px solid #ddd' } },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: (jmv) => setJimuMapView(jmv) }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h6", { className: "mb-2", style: { fontWeight: 'bold' } }, "Level Selector"),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { onChange: handleLevelChange, value: currentLevel, style: { width: '100%' } }, LEVELS.map(lvl => jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { key: lvl, value: lvl }, lvl)))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9GbG9vclNlbGVjdG9yL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUNjO0FBQ3ZCO0FBRXpDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLDRDQUFLLENBQUM7QUFFOUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUV0RyxTQUFTLE1BQU0sQ0FBQyxLQUEwQjs7SUFDckQsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRyxRQUFRLEVBQWUsQ0FBQztJQUM5RCxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUs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RSxXQUFLLENBQUMsZUFBZSwwQ0FBRyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFJO1FBQ3RILG1FQUFJLFNBQVMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxxQkFBcUI7UUFDdkUsMkRBQUMsMkNBQU0sSUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQzdFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQywyREFBQywyQ0FBTSxJQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBRyxHQUFHLENBQVUsQ0FBQyxDQUMzRCxDQUNQLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFDTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRmxvb3JTZWxlY3Rvci9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IFJlYWN0LCBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSc7XG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcyc7XG5pbXBvcnQgeyBTZWxlY3QsIE9wdGlvbiB9IGZyb20gJ2ppbXUtdWknO1xuXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9ID0gUmVhY3Q7XG5cbmNvbnN0IExFVkVMUyA9IFsnTEInLCAnTDAnLCAnTDBBJywgJ0wxJywgJ0wxTScsICdMMicsICdMMk0nLCAnTDMnLCAnTDQnLCAnTDUnLCAnTDVNJywgJ0w2JywgJ0w3JywgJ0w4JywgJ0w5JywgJ0wxMCddO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQocHJvcHM6IEFsbFdpZGdldFByb3BzPGFueT4pIHtcbiAgICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSA9IHVzZVN0YXRlPEppbXVNYXBWaWV3PigpO1xuICAgIGNvbnN0IFtjdXJyZW50TGV2ZWwsIHNldEN1cnJlbnRMZXZlbF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdMMicpO1xuICAgIGNvbnN0IGxldmVsUmVmID0gdXNlUmVmKCdMMicpO1xuICAgIGNvbnN0IGlzUHJvY2Vzc2luZyA9IHVzZVJlZihmYWxzZSk7IC8vIFNhZmV0eSBnYXRlXG5cbiAgICBjb25zdCBhcHBseUZsb29yTG9naWMgPSBhc3luYyAobGV2ZWw6IHN0cmluZywgam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgICAgICBpZiAoIWptdj8udmlldz8ubWFwIHx8IGlzUHJvY2Vzc2luZy5jdXJyZW50KSByZXR1cm47XG4gICAgICAgIGlzUHJvY2Vzc2luZy5jdXJyZW50ID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBzcWwgPSBgRkxPT1IgPSAnJHtsZXZlbH0nYDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQXBwbHkgdmlzdWFsIGFuZCBkYXRhIGZpbHRlcnNcbiAgICAgICAgICAgIGNvbnN0IGxheWVycyA9IGptdi52aWV3Lm1hcC5sYXllcnMudG9BcnJheSgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBsYXllciBvZiBsYXllcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAobGF5ZXIudHlwZSA9PT0gJ2ZlYXR1cmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gc3FsO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGx2ID0gYXdhaXQgam12LnZpZXcud2hlbkxheWVyVmlldyhsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgKGx2IGFzIGFueSkuZmVhdHVyZUVmZmVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHsgd2hlcmU6IHNxbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVkRWZmZWN0OiBcIm9wYWNpdHkoMCUpXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGxheWVyLnR5cGUgPT09ICd2ZWN0b3ItdGlsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBsYXllci50aXRsZSB8fCBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGl0bGUuc3RhcnRzV2l0aCgnQU1TX0wnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIudmlzaWJsZSA9IHRpdGxlLmluY2x1ZGVzKGBBTVNfJHtsZXZlbH1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3luYyBEYXRhU291cmNlcyBmb3IgUG9wdXBzXG4gICAgICAgICAgICBpZiAoam12LmppbXVMYXllclZpZXdzKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhqbXYuamltdUxheWVyVmlld3MpLmZvckVhY2goKGppbXVMYXllclZpZXc6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcyA9IGppbXVMYXllclZpZXc/LmdldExheWVyRGF0YVNvdXJjZT8uKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkcykgZHMudXBkYXRlUXVlcnlQYXJhbXMoeyB3aGVyZTogc3FsIH0gYXMgYW55LCBwcm9wcy5pZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZsb29yIExvZ2ljIEVycm9yOlwiLCBlcnIpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgLy8gQWxsb3cgbmV4dCBleGVjdXRpb24gYWZ0ZXIgYSB0aW55IGJyZWF0aGVyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgaXNQcm9jZXNzaW5nLmN1cnJlbnQgPSBmYWxzZTsgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIWppbXVNYXBWaWV3Py52aWV3KSByZXR1cm47XG5cbiAgICAgICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MsIHdhaXQgc2xpZ2h0bHkgZm9yIHRoZSBwb3B1cCB0byBzdGFydCxcbiAgICAgICAgLy8gdGhlbiBlbmZvcmNlIHRoZSBmbG9vciBsb2dpYyB0byBoaWRlIFwiZ2hvc3RcIiBwb2ludHMuXG4gICAgICAgIGNvbnN0IGNsaWNrSGFuZGxlID0gamltdU1hcFZpZXcudmlldy5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBhcHBseUZsb29yTG9naWMobGV2ZWxSZWYuY3VycmVudCwgamltdU1hcFZpZXcpO1xuICAgICAgICAgICAgfSwgMzAwKTsgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHN0YXRpb25hcnlIYW5kbGUgPSBqaW11TWFwVmlldy52aWV3LndhdGNoKCdzdGF0aW9uYXJ5JywgKGlzU3RhdGlvbmFyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzU3RhdGlvbmFyeSkgYXBwbHlGbG9vckxvZ2ljKGxldmVsUmVmLmN1cnJlbnQsIGppbXVNYXBWaWV3KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXBwbHlGbG9vckxvZ2ljKGxldmVsUmVmLmN1cnJlbnQsIGppbXVNYXBWaWV3KTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2xpY2tIYW5kbGUucmVtb3ZlKCk7XG4gICAgICAgICAgICBzdGF0aW9uYXJ5SGFuZGxlLnJlbW92ZSgpO1xuICAgICAgICB9O1xuICAgIH0sIFtqaW11TWFwVmlld10pO1xuXG4gICAgY29uc3QgaGFuZGxlTGV2ZWxDaGFuZ2UgPSAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgdmFsID0gZXZ0LnRhcmdldC52YWx1ZTtcbiAgICAgICAgc2V0Q3VycmVudExldmVsKHZhbCk7XG4gICAgICAgIGxldmVsUmVmLmN1cnJlbnQgPSB2YWw7XG4gICAgICAgIGlmIChqaW11TWFwVmlldykgYXBwbHlGbG9vckxvZ2ljKHZhbCwgamltdU1hcFZpZXcpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1mbG9vci1zZWxlY3RvciBwLTNcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJywgYm9yZGVyUmFkaXVzOiAnNHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnIH19PlxuICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50IHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX0gb25BY3RpdmVWaWV3Q2hhbmdlPXsoam12KSA9PiBzZXRKaW11TWFwVmlldyhqbXYpfSAvPlxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTJcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+TGV2ZWwgU2VsZWN0b3I8L2g2PlxuICAgICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17aGFuZGxlTGV2ZWxDaGFuZ2V9IHZhbHVlPXtjdXJyZW50TGV2ZWx9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAge0xFVkVMUy5tYXAobHZsID0+IDxPcHRpb24ga2V5PXtsdmx9IHZhbHVlPXtsdmx9Pntsdmx9PC9PcHRpb24+KX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=