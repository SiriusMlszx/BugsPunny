// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
var string = "\n/* \u4ED4\u610F\uFF0C\uD83D\uDC1F\u4ED4\u7ED9\u4F60\u753B\u4E2A\u5154\u516B\u54E5 */\n.container{\n  position:relative;\n  border: 1px solid red;\n  left: 25px;\n}\nbody {\n  background-color: #FAE97F;\n  width: 50%;\n  margin: 100px auto;\n}\n\n/* \u9996\u5148\u662F\u8111\u888B */\n.head {\n  width: 100px;\n  height: 100px;\n  background-color: #A7B0B5;\n  border-radius: 50%;\n  position: relative;\n  z-index: 1;\n}\n\n.head2 {\n  height: 50px;\n  width: 110px;\n  border-radius: 90px 90px 0 0;\n  -moz-border-radius: 90px 90px 0 0;\n  -webkit-border-radius: 90px 90px 0 0;\n  background-color: white;\n  transform: rotate(180deg);\n  position: relative;\n  z-index: 2;\n  bottom: 50px;\n  right: 10px\n}\n\n/* \u7136\u540E\u662F\u8033\u6735 */\n.ear {\n  height: 50px;\n  width: 100px;\n  border-radius: 90px 90px 0 0;\n  -moz-border-radius: 90px 90px 0 0;\n  -webkit-border-radius: 90px 90px 0 0;\n  background-color: #A7B0B5;\n  transform: rotate(90deg);\n  position: relative;\n  z-index: 2;\n  bottom: 210px;\n  left: 30px;\n}\n\n.inner-ear {\n  height: 30px;\n  width: 80px;\n  border-radius: 90px 90px 0 0;\n  -moz-border-radius: 90px 90px 0 0;\n  -webkit-border-radius: 90px 90px 0 0;\n  background-color: #FDE3CA;\n  transform: rotate(90deg);\n  position: relative;\n  z-index: 2;\n  bottom: 250px;\n  left: 38px;\n}\n\n/* \u63A5\u7740\u662F\u9F3B\u5B50 */\n.nose {\n  height: 10px;\n  width: 10px;\n  background-color: pink;\n  border-radius: 30%;\n  position: relative;\n  z-index: 3;\n  bottom: 180px;\n  right: 10px;\n}\n\n/* \u773C\u775B */\n.eyes {\n  position: relative;\n  height: 10px;\n  width: 10px;\n  z-index: 10;\n  left: 15px;\n  bottom: 200px;\n  background: black;\n  border-radius: 50%;\n}\n\n/* \u7259\u9F7F\uFF01 */\n.teeth {\n  height: 30px;\n  width: 6px;\n  background-color: white;\n  position: relative;\n  z-index: 1;\n  bottom: 180px;\n  right: 9px;\n}\n\n/* \u5996\u5A06\u7684\u5C0F\u8EAB\u5B50 */\n.body {\n  height: 70px;\n  width: 160px;\n  border-radius: 90px 90px 0 0;\n  -moz-border-radius: 90px 90px 0 0;\n  -webkit-border-radius: 90px 90px 0 0;\n  background-color: #A7B0B5;\n  transform: rotate(-90deg);\n  position: relative;\n  z-index: 1;\n  bottom: 128px;\n  right: 45px;\n}\n\n.inner-body {\n  height: 50px;\n  width: 140px;\n  border-radius: 90px 90px 0 0;\n  -moz-border-radius: 90px 90px 0 0;\n  -webkit-border-radius: 90px 90px 0 0;\n  background-color: white;\n  transform: rotate(-90deg);\n  position: relative;\n  z-index: 2;\n  bottom: 190px;\n  right: 34px;\n}\n\n/* \u8116\u5B50 */\n.neck {\n  height: 30px;\n  width: 10px;\n  background-color: white;\n  position: relative;\n  z-index: 1;\n  bottom: 300px;\n  left: 51px;\n}\n\n/* \u5C3E\u5DF4 */\n.tail,\n.inner-tail {\n  border-radius: 90px 90px 0 0;\n  -moz-border-radius: 90px 90px 0 0;\n  -webkit-border-radius: 90px 90px 0 0;\n  transform: rotate(90deg);\n  position: relative;\n  transform: rotate(140deg);\n}\n\n.tail {\n  height: 40px;\n  width: 70px;\n  background-color: #A7B0B5;\n  bottom: 210px;\n  left: 60px;\n  z-index: 1;\n}\n\n.inner-tail {\n  height: 50px;\n  width: 70px;\n  background-color: white;\n  bottom: 250px;\n  left: 65px;\n  z-index: 0;\n}\n\n/* \u80F3\u818A */\n.left-leg,\n.right-leg {\n  width: 10px;\n  height: 90px;\n  background-color: #A7B0B5;\n  position: relative;\n  z-index: -2;\n}\n\n.left-leg {\n  bottom: 255px;\n  left: 60px\n}\n\n.right-leg {\n  bottom: 349px;\n  left: 40px\n}\n\n.left-foot,\n.right-foot {\n  height: 40px;\n  width: 80px;\n  border-radius: 90px 90px 0 0;\n  -moz-border-radius: 90px 90px 0 0;\n  -webkit-border-radius: 90px 90px 0 0;\n  background-color: white;\n  position: relative;\n  z-index: 3;\n}\n\n/* \u817F\u548C\u811A */\n.left-foot {\n  bottom: 380px;\n  right: 30px;\n}\n\n.right-foot {\n  bottom: 420px;\n  left: 60px;\n}\n\n/* \u624B\u548C\u80F3\u818A */\n.right-arm,\n.right-arm2 {\n  width: 10px;\n  height: 60px;\n  background-color: #a7b0b5;\n  position: relative;\n  z-index: 9;\n}\n\n.right-arm {\n  transform: rotate(-50deg);\n  bottom: 670px;\n  left: 82px;\n}\n\n.right-arm2 {\n  transform: rotate(50deg);\n  bottom: 695px;\n  left: 85px;\n}\n\n.right-hand,\n.left-hand {\n  height: 30px;\n  width: 50px;\n  border-radius: 90px 90px 0 0;\n  -moz-border-radius: 90px 90px 0 0;\n  -webkit-border-radius: 90px 90px 0 0;\n  background-color: white;\n  position: relative;\n  z-index: 99;\n}\n\n.right-hand {\n  transform: rotate(90deg);\n  bottom: 720px;\n  left: 60px;\n}\n\n.left-hand {\n  transform: rotate(-40deg);\n  bottom: 940px;\n  right: 100px;\n}\n\n.left-arm,\n.left-arm2 {\n  width: 10px;\n  height: 60px;\n  background-color: #a7b0b5;\n  position: relative;\n  z-index: -1;\n}\n\n.left-arm {\n  bottom: 820px;\n  transform: rotate(60deg);\n}\n\n.left-arm2 {\n  bottom: 875px;\n  right: 50px;\n  transform: rotate(110deg);\n}\n\n/* \u5154\u5B50\u6700\u7231\u5403\u4EC0\u4E48\uFF1F\uFF1F */\n.carrot {\n  background-color: #EE812F;\n  height: 60px;\n  width: 30px;\n  position: relative;\n  bottom: 975px;\n  right: 80px;\n  transform: rotate(45deg);\n}\n\n.carrot2,\n.carrot3 {\n  height: 20px;\n  width: 40px;\n  border-radius: 90px 90px 0 0;\n  -moz-border-radius: 90px 90px 0 0;\n  -webkit-border-radius: 90px 90px 0 0;\n  background-color: green;\n  position: relative;\n  z-index: -1;\n}\n\n.carrot2 {\n  bottom: 985px;\n  right: 120px;\n  transform: rotate(-60deg);\n}\n\n.carrot3 {\n  bottom: 990px;\n  right: 120px;\n  transform: rotate(100deg);\n}\n\n/* \u6211\u8FD8\u53EF\u4EE5\u8BA9\u8033\u6735\u52A8\u8D77\u6765\u54E6 */\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  33% {\n    transform: rotate(5deg);\n  }\n\n  66% {\n    transform: rotate(-5deg);\n  }\n\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n.ears {\n  transform-origin: 0 0;\n  animation: wave 400ms infinite linear;\n}\n";
var player = {
  id: undefined,
  time: 25,
  n: 1,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  init: function init() {
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnFast': 'fast',
    '#btnNormal': 'normal'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) // if用来防止遍历继承的对象
        {
          var value = player.events[key];
          document.querySelector(key).onclick = player[value];
        }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.pause();
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 50;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 25;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52775" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map