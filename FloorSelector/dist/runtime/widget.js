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
            const layers = jmv.view.map.layers.toArray();
            for (const layer of layers) {
                if (layer.type === 'feature') {
                    // 1. Set the Hard Filter
                    layer.definitionExpression = sql;
                    const lv = yield jmv.view.whenLayerView(layer);
                    if (lv) {
                        // 2. Set the Ghost Filter (Visual)
                        lv.featureEffect = {
                            filter: { where: sql },
                            excludedEffect: "opacity(0%)"
                        };
                        // 3. FORCE REFRESH (The "Pan" Fix)
                        // This forces the layer to redraw immediately in 11.1
                        if (typeof lv.refresh === 'function') {
                            lv.refresh();
                        }
                    }
                }
                // ... (keep your vector tile logic here)
            }
            // 4. THE "NUDGE" (Backup for the Pan issue)
            // If the refresh() above isn't enough, this tiny move 
            // forces the WebGL engine to sync.
            const currentCenter = jmv.view.center.clone();
            jmv.view.goTo(currentCenter, { animate: false });
        }
        catch (err) {
            console.error("Floor Logic Error:", err);
        }
        finally {
            setTimeout(() => { isProcessing.current = false; }, 200);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9GbG9vclNlbGVjdG9yL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUNjO0FBQ3ZCO0FBRXpDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLDRDQUFLLENBQUM7QUFFOUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUV0RyxTQUFTLE1BQU0sQ0FBQyxLQUEwQjs7SUFDckQsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRyxRQUFRLEVBQWUsQ0FBQztJQUM5RCxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUs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QUssRUFBRSxNQUFNLEVBQUUsSUFDN0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLDJEQUFDLDJDQUFNLElBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFHLEdBQUcsQ0FBVSxDQUFDLENBQzNELENBQ1AsQ0FDVCxDQUFDO0FBQ04sQ0FBQztBQUNPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9GbG9vclNlbGVjdG9yL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QsIEFsbFdpZGdldFByb3BzIH0gZnJvbSAnamltdS1jb3JlJztcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJztcbmltcG9ydCB7IFNlbGVjdCwgT3B0aW9uIH0gZnJvbSAnamltdS11aSc7XG5cbmNvbnN0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gPSBSZWFjdDtcblxuY29uc3QgTEVWRUxTID0gWydMQicsICdMMCcsICdMMEEnLCAnTDEnLCAnTDFNJywgJ0wyJywgJ0wyTScsICdMMycsICdMNCcsICdMNScsICdMNU0nLCAnTDYnLCAnTDcnLCAnTDgnLCAnTDknLCAnTDEwJ107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldChwcm9wczogQWxsV2lkZ2V0UHJvcHM8YW55Pikge1xuICAgIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gdXNlU3RhdGU8SmltdU1hcFZpZXc+KCk7XG4gICAgY29uc3QgW2N1cnJlbnRMZXZlbCwgc2V0Q3VycmVudExldmVsXSA9IHVzZVN0YXRlPHN0cmluZz4oJ0wyJyk7XG4gICAgY29uc3QgbGV2ZWxSZWYgPSB1c2VSZWYoJ0wyJyk7XG4gICAgY29uc3QgaXNQcm9jZXNzaW5nID0gdXNlUmVmKGZhbHNlKTsgLy8gU2FmZXR5IGdhdGVcblxuICAgIGNvbnN0IGFwcGx5Rmxvb3JMb2dpYyA9IGFzeW5jIChsZXZlbDogc3RyaW5nLCBqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgICAgIGlmICgham12Py52aWV3Py5tYXAgfHwgaXNQcm9jZXNzaW5nLmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgaXNQcm9jZXNzaW5nLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHNxbCA9IGBGTE9PUiA9ICcke2xldmVsfSdgO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBsYXllcnMgPSBqbXYudmlldy5tYXAubGF5ZXJzLnRvQXJyYXkoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgbGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxheWVyLnR5cGUgPT09ICdmZWF0dXJlJykge1xuICAgICAgICAgICAgICAgICAgICAvLyAxLiBTZXQgdGhlIEhhcmQgRmlsdGVyXG4gICAgICAgICAgICAgICAgICAgIChsYXllciBhcyBhbnkpLmRlZmluaXRpb25FeHByZXNzaW9uID0gc3FsO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGx2ID0gYXdhaXQgam12LnZpZXcud2hlbkxheWVyVmlldyhsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMi4gU2V0IHRoZSBHaG9zdCBGaWx0ZXIgKFZpc3VhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIChsdiBhcyBhbnkpLmZlYXR1cmVFZmZlY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7IHdoZXJlOiBzcWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsdWRlZEVmZmVjdDogXCJvcGFjaXR5KDAlKVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMy4gRk9SQ0UgUkVGUkVTSCAoVGhlIFwiUGFuXCIgRml4KVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBmb3JjZXMgdGhlIGxheWVyIHRvIHJlZHJhdyBpbW1lZGlhdGVseSBpbiAxMS4xXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChsdiBhcyBhbnkpLnJlZnJlc2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobHYgYXMgYW55KS5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gLi4uIChrZWVwIHlvdXIgdmVjdG9yIHRpbGUgbG9naWMgaGVyZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gNC4gVEhFIFwiTlVER0VcIiAoQmFja3VwIGZvciB0aGUgUGFuIGlzc3VlKVxuICAgICAgICAgICAgLy8gSWYgdGhlIHJlZnJlc2goKSBhYm92ZSBpc24ndCBlbm91Z2gsIHRoaXMgdGlueSBtb3ZlIFxuICAgICAgICAgICAgLy8gZm9yY2VzIHRoZSBXZWJHTCBlbmdpbmUgdG8gc3luYy5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDZW50ZXIgPSBqbXYudmlldy5jZW50ZXIuY2xvbmUoKTtcbiAgICAgICAgICAgIGptdi52aWV3LmdvVG8oY3VycmVudENlbnRlciwgeyBhbmltYXRlOiBmYWxzZSB9KTtcblxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGbG9vciBMb2dpYyBFcnJvcjpcIiwgZXJyKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBpc1Byb2Nlc3NpbmcuY3VycmVudCA9IGZhbHNlOyB9LCAyMDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghamltdU1hcFZpZXc/LnZpZXcpIHJldHVybjtcblxuICAgICAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcywgd2FpdCBzbGlnaHRseSBmb3IgdGhlIHBvcHVwIHRvIHN0YXJ0LFxuICAgICAgICAvLyB0aGVuIGVuZm9yY2UgdGhlIGZsb29yIGxvZ2ljIHRvIGhpZGUgXCJnaG9zdFwiIHBvaW50cy5cbiAgICAgICAgY29uc3QgY2xpY2tIYW5kbGUgPSBqaW11TWFwVmlldy52aWV3Lm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFwcGx5Rmxvb3JMb2dpYyhsZXZlbFJlZi5jdXJyZW50LCBqaW11TWFwVmlldyk7XG4gICAgICAgICAgICB9LCAzMDApOyBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc3RhdGlvbmFyeUhhbmRsZSA9IGppbXVNYXBWaWV3LnZpZXcud2F0Y2goJ3N0YXRpb25hcnknLCAoaXNTdGF0aW9uYXJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNTdGF0aW9uYXJ5KSBhcHBseUZsb29yTG9naWMobGV2ZWxSZWYuY3VycmVudCwgamltdU1hcFZpZXcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhcHBseUZsb29yTG9naWMobGV2ZWxSZWYuY3VycmVudCwgamltdU1hcFZpZXcpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGlja0hhbmRsZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHN0YXRpb25hcnlIYW5kbGUucmVtb3ZlKCk7XG4gICAgICAgIH07XG4gICAgfSwgW2ppbXVNYXBWaWV3XSk7XG5cbiAgICBjb25zdCBoYW5kbGVMZXZlbENoYW5nZSA9IChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB2YWwgPSBldnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBzZXRDdXJyZW50TGV2ZWwodmFsKTtcbiAgICAgICAgbGV2ZWxSZWYuY3VycmVudCA9IHZhbDtcbiAgICAgICAgaWYgKGppbXVNYXBWaWV3KSBhcHBseUZsb29yTG9naWModmFsLCBqaW11TWFwVmlldyk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWZsb29yLXNlbGVjdG9yIHAtM1wiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNmZmYnLCBib3JkZXJSYWRpdXM6ICc0cHgnLCBib3JkZXI6ICcxcHggc29saWQgI2RkZCcgfX0+XG4gICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnQgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfSBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXYpID0+IHNldEppbXVNYXBWaWV3KGptdil9IC8+XG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWItMlwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5MZXZlbCBTZWxlY3RvcjwvaDY+XG4gICAgICAgICAgICA8U2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVMZXZlbENoYW5nZX0gdmFsdWU9e2N1cnJlbnRMZXZlbH0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICB7TEVWRUxTLm1hcChsdmwgPT4gPE9wdGlvbiBrZXk9e2x2bH0gdmFsdWU9e2x2bH0+e2x2bH08L09wdGlvbj4pfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==