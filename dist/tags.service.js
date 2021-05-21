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
const endpoint = "locations/tags";
exports.default = (axios) => {
    return {
        addLocation: (locationId, tag) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { addTag }, errors, }, } = yield axios.post(`${endpoint}`, {
                        input: {
                            locationId,
                            tag,
                        },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (addTag.errors) {
                        return reject(addTag.errors);
                    }
                    resolve(addTag);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        removeLocation: (locationId, tag) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { removeTag }, errors, }, } = yield axios.post(`${endpoint}/remove`, {
                        input: {
                            locationId,
                            tag,
                        },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (removeTag.errors) {
                        return reject(removeTag.errors);
                    }
                    resolve(removeTag);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
    };
};
