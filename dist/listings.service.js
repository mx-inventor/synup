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
        getPremium: (locationId) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data, errors }, } = yield axios.get(`${endpoint}/${locationId}/listings/premium`);
                    if (errors) {
                        return reject(errors);
                    }
                    if (data.listingsForLocation.errors) {
                        return reject(data.listingsForLocation.errors);
                    }
                    resolve(data.listingsForLocation);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        getAdittional: (locationId) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data, errors }, } = yield axios.get(`${endpoint}/${locationId}/listings/additional`);
                    if (errors) {
                        return reject(errors);
                    }
                    if (data.listingsForLocation.errors) {
                        return reject(data.listingsForLocation.errors);
                    }
                    resolve(data.listingsForLocation);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
    };
};
