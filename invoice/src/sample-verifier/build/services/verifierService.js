"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifierService = void 0;
var onyx_ssi_sdk_1 = require("@jpmorganchase/onyx-ssi-sdk");
var VerifierService = /** @class */ (function () {
    function VerifierService() {
    }
    VerifierService.prototype.verify = function (vp) {
        return __awaiter(this, void 0, void 0, function () {
            var result, ethrDID, didResolver, isVpJwtValid, vcJwt, _i, vcJwt_1, vc, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = true;
                        ethrDID = new onyx_ssi_sdk_1.EthrDIDMethod({
                            name: process.env.CHAIN_NAME,
                            registry: process.env.REGISTRY_ADDRESS,
                            rpcUrl: process.env.WEB3_URL
                        });
                        didResolver = (0, onyx_ssi_sdk_1.getSupportedResolvers)([ethrDID]);
                        console.log('Verifying Presentation JWT');
                        return [4 /*yield*/, (0, onyx_ssi_sdk_1.verifyPresentationJWT)(vp, didResolver, { policies: { issuanceDate: true, expirationDate: true, format: true } })];
                    case 1:
                        isVpJwtValid = _a.sent();
                        if (!isVpJwtValid) return [3 /*break*/, 8];
                        vcJwt = (0, onyx_ssi_sdk_1.getCredentialsFromVP)(vp);
                        console.log("Verifying ".concat(vcJwt.length, " Credentials"));
                        _i = 0, vcJwt_1 = vcJwt;
                        _a.label = 2;
                    case 2:
                        if (!(_i < vcJwt_1.length)) return [3 /*break*/, 7];
                        vc = vcJwt_1[_i];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.verifyVC(vc, didResolver)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        return [2 /*return*/, false];
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 9];
                    case 8: return [2 /*return*/, false];
                    case 9: return [2 /*return*/, result];
                }
            });
        });
    };
    VerifierService.prototype.verifyVC = function (vc, didResolver) {
        return __awaiter(this, void 0, void 0, function () {
            var isVCJwtValid, vcDidsVerified, vcIssuerDid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, onyx_ssi_sdk_1.verifyCredentialJWT)(vc, didResolver, { policies: { issuanceDate: true, expirationDate: true, format: true } })
                        //verification of credential subject and issuer DIDS
                    ];
                    case 1:
                        isVCJwtValid = _a.sent();
                        return [4 /*yield*/, (0, onyx_ssi_sdk_1.verifyDIDs)(vc, didResolver)];
                    case 2:
                        vcDidsVerified = _a.sent();
                        vcIssuerDid = (0, onyx_ssi_sdk_1.getIssuerFromVC)(vc) === process.env.TRUSTED_ISSUER;
                        if (!isVCJwtValid) {
                            throw new Error("VC JWT is invalid: ".concat(vc));
                        }
                        if (!vcDidsVerified) {
                            throw new Error("VC DIDs are invalid: ".concat(vc));
                        }
                        if (!vcIssuerDid) {
                            throw new Error("VC Issuer not trusted: ".concat(vc));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return VerifierService;
}());
exports.VerifierService = VerifierService;
