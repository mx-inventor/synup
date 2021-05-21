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
Object.defineProperty(exports, "__esModule", { value: true });
const endpoint = "locations";
exports.default = (axios) => {
    return {
        bing: (locationId, params) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { bingInsights }, errors, }, } = yield axios.get(`${endpoint}/${locationId}/bing-analytics`, {
                        params,
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (bingInsights.error) {
                        return reject(bingInsights.error);
                    }
                    resolve(bingInsights);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        google: (locationId, params) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { googleInsights }, errors, }, } = yield axios.get(`${endpoint}/${locationId}/google-analytics`, {
                        params,
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (googleInsights.error) {
                        return reject(googleInsights.error);
                    }
                    resolve(googleInsights);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        facebook: (locationId, params) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { facebookInsights }, errors, }, } = yield axios.get(`${endpoint}/${locationId}/facebook-analytics`, {
                        params,
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (facebookInsights.error) {
                        return reject(facebookInsights.error);
                    }
                    resolve(facebookInsights);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
    };
};
