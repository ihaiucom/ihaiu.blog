// require("code.js");
// const regeneratorRuntime = require("runtime.js");



var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = (this && this.__generator) || function (thisArg, body) {
  var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
  return { next: verb(0), "throw": verb(1), "return": verb(2) };
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [0, t.value];
      switch (op[0]) {
        case 0: case 1: t = op; break;
        case 4: _.label++; return { value: op[1], done: false };
        case 5: _.label++; y = op[1]; op = [0]; continue;
        case 7: op = _.ops.pop(); _.trys.pop(); continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
          if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
          if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
          if (t[2]) _.ops.pop();
          _.trys.pop(); continue;
      }
      op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
};


// class Hero {
//   constructor() {
//     console.log("My Hero");
//     this.test();
//   }

//   async test() {
//     let a = await this.load();
//     console.log(a);
//   }

//   async load() {
//     console.log("begin load");
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve("Hello Async");
//       }, 5000);
//     });
//   }
// }


var Hero = /** @class */ (function (_super) {
  function Hero() {
    
  }
  Hero.prototype.test = function () {
    return __awaiter(this, void 0, void 0, function () {
      var a;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0: return [4 /*yield*/, this.load()];
          case 1:
            a = _a.sent();
            console.log( a);
            return [2 /*return*/];
        }
      });
    });
  };
  Hero.prototype.load = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        console.log( "begin load");
        return [2 /*return*/, new Promise(function (resolve) {
          setTimeout(function () {
            resolve("Hello Async AA");
          }, 5000);
        })];
      });
    });
  };

  return Hero;
})();

new Hero().test();
