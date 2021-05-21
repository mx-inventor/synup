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
const endpoint = "locations/folders";
exports.default = (axios) => {
    return {
        addLocations: (name, locationIds) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { addLocationsToFolder }, errors, }, } = yield axios.post(`${endpoint}`, {
                        input: {
                            name,
                            locationIds,
                        },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (addLocationsToFolder.errors) {
                        return reject(addLocationsToFolder.errors);
                    }
                    resolve(addLocationsToFolder);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        rename: (name, id) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { renameFolder }, errors, }, } = yield axios.post(`${endpoint}/rename`, {
                        input: {
                            name,
                            id,
                        },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (renameFolder.errors) {
                        return reject(renameFolder.errors);
                    }
                    resolve(renameFolder);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        removeLocation: (locationIds) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { deleteLocationsFromFolder }, errors, }, } = yield axios.post(`${endpoint}/remove`, {
                        input: {
                            locationIds,
                        },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (deleteLocationsFromFolder.errors) {
                        return reject(deleteLocationsFromFolder.errors);
                    }
                    resolve(deleteLocationsFromFolder);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        deleteFolder: (name) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { deleteFolder }, errors, }, } = yield axios.post(`folders/remove`, {
                        input: {
                            name,
                        },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (deleteFolder.errors) {
                        return reject(deleteFolder.errors);
                    }
                    resolve(deleteFolder);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
    };
};
