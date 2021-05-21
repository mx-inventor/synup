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
        addKeywords: (locationId, inputKeywords) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { addKeywords }, errors, }, } = yield axios.post(endpoint + "/keywords", {
                        input: {
                            locationId,
                            inputKeywords,
                        },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (addKeywords.error) {
                        return reject(addKeywords.error);
                    }
                    if (addKeywords.errors) {
                        return reject(addKeywords.errors);
                    }
                    resolve(addKeywords);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        listKeywords: (locationId) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { keywordsByLocationId }, errors, }, } = yield axios.get(endpoint + "/" + locationId + "/keywords");
                    if (errors) {
                        return reject(errors);
                    }
                    if (keywordsByLocationId.error) {
                        return reject(keywordsByLocationId.error);
                    }
                    resolve(keywordsByLocationId);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        getKeywordsPerformance: (locationId, params) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { keywordsByLocationId }, errors, }, } = yield axios.get(endpoint + "/" + { locationId } + "/keywords-performance", { params });
                    if (errors) {
                        return reject(errors);
                    }
                    if (keywordsByLocationId.error) {
                        return reject(keywordsByLocationId.error);
                    }
                    resolve(keywordsByLocationId);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        archiveKeyword: (id) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { archiveKeyword }, errors, }, } = yield axios.post(endpoint + "/keywords/archive", id);
                    if (errors) {
                        return reject(errors);
                    }
                    if (archiveKeyword.error) {
                        return reject(archiveKeyword.error);
                    }
                    if (archiveKeyword.errors) {
                        return reject(archiveKeyword.errors);
                    }
                    resolve(archiveKeyword);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
    };
};
