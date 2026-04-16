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
    const isProcessing = useRef(false);
    const applyFloorLogic = (level, jmv) => __awaiter(this, void 0, void 0, function* () {
        var _b;
        if (!((_b = jmv === null || jmv === void 0 ? void 0 : jmv.view) === null || _b === void 0 ? void 0 : _b.map) || isProcessing.current)
            return;
        isProcessing.current = true;
        const sql = `FLOOR = '${level}'`;
        try {
            const layers = jmv.view.map.layers.toArray();
            // 1. VECTOR TILE LOGIC (Toggle Backgrounds)
            layers.forEach((layer) => {
                if (layer.type === 'vector-tile') {
                    const title = layer.title || "";
                    // Only act on layers that start with AMS_L
                    if (title.startsWith('AMS_L')) {
                        layer.visible = title.includes(`AMS_${level}`);
                    }
                }
            });
            // 2. FEATURE LAYER LOGIC (Filter Points)
            for (const layer of layers) {
                if (layer.type === 'feature') {
                    // Cast to 'any' to avoid the 'definitionExpression' property error
                    layer.definitionExpression = sql;
                    const lv = yield jmv.view.whenLayerView(layer);
                    if (lv) {
                        // Apply the "Ghost Filter" for visual stability
                        lv.featureEffect = {
                            filter: { where: sql },
                            excludedEffect: "opacity(0%)"
                        };
                        // Force a redraw of the layer view
                        if (typeof lv.refresh === 'function') {
                            lv.refresh();
                        }
                    }
                }
            }
            // 3. THE REFRESH NUDGE
            // We wait 150ms to let the Vector Tiles process before nudging the map
            setTimeout(() => {
                if (jmv.view) {
                    const currentCenter = jmv.view.center.clone();
                    jmv.view.goTo(currentCenter, { animate: false });
                }
            }, 150);
            // 4. DATA SOURCE SYNC (For Popups/Widgets)
            if (jmv.jimuLayerViews) {
                Object.values(jmv.jimuLayerViews).forEach((jimuLayerView) => {
                    var _a;
                    const ds = (_a = jimuLayerView === null || jimuLayerView === void 0 ? void 0 : jimuLayerView.getLayerDataSource) === null || _a === void 0 ? void 0 : _a.call(jimuLayerView);
                    if (ds) {
                        ds.updateQueryParams({ where: sql }, props.id);
                    }
                });
            }
        }
        catch (err) {
            console.error("Floor Logic Error:", err);
        }
        finally {
            // Reset gate after a short delay
            setTimeout(() => { isProcessing.current = false; }, 300);
        }
    });
    useEffect(() => {
        if (!(jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view))
            return;
        // Re-enforce logic when user clicks (beats the framework's internal reset)
        const clickHandle = jimuMapView.view.on('click', () => {
            setTimeout(() => {
                applyFloorLogic(levelRef.current, jimuMapView);
            }, 350);
        });
        // Re-enforce logic when map stops moving
        const stationaryHandle = jimuMapView.view.watch('stationary', (isStationary) => {
            if (isStationary) {
                applyFloorLogic(levelRef.current, jimuMapView);
            }
        });
        // Initial run
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
        if (jimuMapView) {
            applyFloorLogic(val, jimuMapView);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9GbG9vclNlbGVjdG9yL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUNjO0FBQ3ZCO0FBRXpDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLDRDQUFLLENBQUM7QUFFOUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUV0RyxTQUFTLE1BQU0sQ0FBQyxLQUEwQjs7SUFDckQsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRyxRQUFRLEVBQWUsQ0FBQztJQUM5RCxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUs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SUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUcsR0FBRyxDQUFVLENBQUMsQ0FDM0QsQ0FDUCxDQUNULENBQUM7QUFDTixDQUFDO0FBQ08sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0Zsb29yU2VsZWN0b3Ivc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnO1xuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnO1xuaW1wb3J0IHsgU2VsZWN0LCBPcHRpb24gfSBmcm9tICdqaW11LXVpJztcblxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSA9IFJlYWN0O1xuXG5jb25zdCBMRVZFTFMgPSBbJ0xCJywgJ0wwJywgJ0wwQScsICdMMScsICdMMU0nLCAnTDInLCAnTDJNJywgJ0wzJywgJ0w0JywgJ0w1JywgJ0w1TScsICdMNicsICdMNycsICdMOCcsICdMOScsICdMMTAnXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0KHByb3BzOiBBbGxXaWRnZXRQcm9wczxhbnk+KSB7XG4gICAgY29uc3QgW2ppbXVNYXBWaWV3LCBzZXRKaW11TWFwVmlld10gPSB1c2VTdGF0ZTxKaW11TWFwVmlldz4oKTtcbiAgICBjb25zdCBbY3VycmVudExldmVsLCBzZXRDdXJyZW50TGV2ZWxdID0gdXNlU3RhdGU8c3RyaW5nPignTDInKTtcbiAgICBjb25zdCBsZXZlbFJlZiA9IHVzZVJlZignTDInKTtcbiAgICBjb25zdCBpc1Byb2Nlc3NpbmcgPSB1c2VSZWYoZmFsc2UpO1xuXG4gICAgY29uc3QgYXBwbHlGbG9vckxvZ2ljID0gYXN5bmMgKGxldmVsOiBzdHJpbmcsIGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICAgICAgaWYgKCFqbXY/LnZpZXc/Lm1hcCB8fCBpc1Byb2Nlc3NpbmcuY3VycmVudCkgcmV0dXJuO1xuICAgICAgICBpc1Byb2Nlc3NpbmcuY3VycmVudCA9IHRydWU7XG5cbiAgICAgICAgY29uc3Qgc3FsID0gYEZMT09SID0gJyR7bGV2ZWx9J2A7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVycyA9IGptdi52aWV3Lm1hcC5sYXllcnMudG9BcnJheSgpO1xuXG4gICAgICAgICAgICAvLyAxLiBWRUNUT1IgVElMRSBMT0dJQyAoVG9nZ2xlIEJhY2tncm91bmRzKVxuICAgICAgICAgICAgbGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxheWVyLnR5cGUgPT09ICd2ZWN0b3ItdGlsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBsYXllci50aXRsZSB8fCBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IGFjdCBvbiBsYXllcnMgdGhhdCBzdGFydCB3aXRoIEFNU19MXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aXRsZS5zdGFydHNXaXRoKCdBTVNfTCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllci52aXNpYmxlID0gdGl0bGUuaW5jbHVkZXMoYEFNU18ke2xldmVsfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIDIuIEZFQVRVUkUgTEFZRVIgTE9HSUMgKEZpbHRlciBQb2ludHMpXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGxheWVycykge1xuICAgICAgICAgICAgICAgIGlmIChsYXllci50eXBlID09PSAnZmVhdHVyZScpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FzdCB0byAnYW55JyB0byBhdm9pZCB0aGUgJ2RlZmluaXRpb25FeHByZXNzaW9uJyBwcm9wZXJ0eSBlcnJvclxuICAgICAgICAgICAgICAgICAgICAobGF5ZXIgYXMgYW55KS5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IHNxbDtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsdiA9IGF3YWl0IGptdi52aWV3LndoZW5MYXllclZpZXcobGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBcIkdob3N0IEZpbHRlclwiIGZvciB2aXN1YWwgc3RhYmlsaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAobHYgYXMgYW55KS5mZWF0dXJlRWZmZWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogeyB3aGVyZTogc3FsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjbHVkZWRFZmZlY3Q6IFwib3BhY2l0eSgwJSlcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvcmNlIGEgcmVkcmF3IG9mIHRoZSBsYXllciB2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChsdiBhcyBhbnkpLnJlZnJlc2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobHYgYXMgYW55KS5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIDMuIFRIRSBSRUZSRVNIIE5VREdFXG4gICAgICAgICAgICAvLyBXZSB3YWl0IDE1MG1zIHRvIGxldCB0aGUgVmVjdG9yIFRpbGVzIHByb2Nlc3MgYmVmb3JlIG51ZGdpbmcgdGhlIG1hcFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGptdi52aWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDZW50ZXIgPSBqbXYudmlldy5jZW50ZXIuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgam12LnZpZXcuZ29UbyhjdXJyZW50Q2VudGVyLCB7IGFuaW1hdGU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDE1MCk7XG5cbiAgICAgICAgICAgIC8vIDQuIERBVEEgU09VUkNFIFNZTkMgKEZvciBQb3B1cHMvV2lkZ2V0cylcbiAgICAgICAgICAgIGlmIChqbXYuamltdUxheWVyVmlld3MpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGptdi5qaW11TGF5ZXJWaWV3cykuZm9yRWFjaCgoamltdUxheWVyVmlldzogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRzID0gamltdUxheWVyVmlldz8uZ2V0TGF5ZXJEYXRhU291cmNlPy4oKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcy51cGRhdGVRdWVyeVBhcmFtcyh7IHdoZXJlOiBzcWwgfSBhcyBhbnksIHByb3BzLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZsb29yIExvZ2ljIEVycm9yOlwiLCBlcnIpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgLy8gUmVzZXQgZ2F0ZSBhZnRlciBhIHNob3J0IGRlbGF5XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgaXNQcm9jZXNzaW5nLmN1cnJlbnQgPSBmYWxzZTsgfSwgMzAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIWppbXVNYXBWaWV3Py52aWV3KSByZXR1cm47XG5cbiAgICAgICAgLy8gUmUtZW5mb3JjZSBsb2dpYyB3aGVuIHVzZXIgY2xpY2tzIChiZWF0cyB0aGUgZnJhbWV3b3JrJ3MgaW50ZXJuYWwgcmVzZXQpXG4gICAgICAgIGNvbnN0IGNsaWNrSGFuZGxlID0gamltdU1hcFZpZXcudmlldy5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBhcHBseUZsb29yTG9naWMobGV2ZWxSZWYuY3VycmVudCwgamltdU1hcFZpZXcpO1xuICAgICAgICAgICAgfSwgMzUwKTsgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlLWVuZm9yY2UgbG9naWMgd2hlbiBtYXAgc3RvcHMgbW92aW5nXG4gICAgICAgIGNvbnN0IHN0YXRpb25hcnlIYW5kbGUgPSBqaW11TWFwVmlldy52aWV3LndhdGNoKCdzdGF0aW9uYXJ5JywgKGlzU3RhdGlvbmFyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzU3RhdGlvbmFyeSkge1xuICAgICAgICAgICAgICAgIGFwcGx5Rmxvb3JMb2dpYyhsZXZlbFJlZi5jdXJyZW50LCBqaW11TWFwVmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEluaXRpYWwgcnVuXG4gICAgICAgIGFwcGx5Rmxvb3JMb2dpYyhsZXZlbFJlZi5jdXJyZW50LCBqaW11TWFwVmlldyk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNsaWNrSGFuZGxlLnJlbW92ZSgpO1xuICAgICAgICAgICAgc3RhdGlvbmFyeUhhbmRsZS5yZW1vdmUoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbamltdU1hcFZpZXddKTtcblxuICAgIGNvbnN0IGhhbmRsZUxldmVsQ2hhbmdlID0gKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGV2dC50YXJnZXQudmFsdWU7XG4gICAgICAgIHNldEN1cnJlbnRMZXZlbCh2YWwpO1xuICAgICAgICBsZXZlbFJlZi5jdXJyZW50ID0gdmFsO1xuICAgICAgICBpZiAoamltdU1hcFZpZXcpIHtcbiAgICAgICAgICAgIGFwcGx5Rmxvb3JMb2dpYyh2YWwsIGppbXVNYXBWaWV3KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1mbG9vci1zZWxlY3RvciBwLTNcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJywgYm9yZGVyUmFkaXVzOiAnNHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnIH19PlxuICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50IHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX0gb25BY3RpdmVWaWV3Q2hhbmdlPXsoam12KSA9PiBzZXRKaW11TWFwVmlldyhqbXYpfSAvPlxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTJcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+TGV2ZWwgU2VsZWN0b3I8L2g2PlxuICAgICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17aGFuZGxlTGV2ZWxDaGFuZ2V9IHZhbHVlPXtjdXJyZW50TGV2ZWx9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAge0xFVkVMUy5tYXAobHZsID0+IDxPcHRpb24ga2V5PXtsdmx9IHZhbHVlPXtsdmx9Pntsdmx9PC9PcHRpb24+KX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=