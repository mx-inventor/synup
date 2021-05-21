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
        getByLocationId: (locationId, params) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { interactions }, errors, }, } = yield axios.get(`${endpoint}/${locationId}/reviews`, { params });
                    if (errors) {
                        return reject(errors);
                    }
                    if (interactions.error) {
                        return reject(interactions.error);
                    }
                    resolve(interactions);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        getById: (intractionByIds) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { interactionDetails }, errors, }, } = yield axios.get(`${endpoint}/reviewDetails`, {
                        params: { interactionIds: intractionByIds },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (interactionDetails.error) {
                        return reject(interactionDetails.error);
                    }
                    resolve(interactionDetails);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        respondToAnInteraction: (interactionId, responseContent) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { respondToInteraction }, errors, }, } = yield axios.post(`${endpoint}/reviews/respond`, {
                        interactionId,
                        responseContent,
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (respondToInteraction.error) {
                        return reject(respondToInteraction.error);
                    }
                    if (respondToInteraction.errors) {
                        return reject(respondToInteraction.errors);
                    }
                    resolve(respondToInteraction);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        getSourcesByLocation: (locationId) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { interactionsSetting }, errors, }, } = yield axios.get(`${endpoint}/${locationId}/reviews/settings`);
                    if (errors) {
                        return reject(errors);
                    }
                    if (interactionsSetting.error) {
                        return reject(interactionsSetting.error);
                    }
                    resolve(interactionsSetting);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        addInteractionSource: (locationId, siteUrls) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { editInteractionsSetting }, errors, }, } = yield axios.post(`${endpoint}/reviews/settings/edit`, {
                        locationId,
                        siteUrls,
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (editInteractionsSetting.error) {
                        return reject(editInteractionsSetting.error);
                    }
                    if (editInteractionsSetting.errors) {
                        return reject(editInteractionsSetting.errors);
                    }
                    resolve(editInteractionsSetting);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        editInteractionSource: (locationId, siteUrls) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { editInteractionsSetting }, errors, }, } = yield axios.post(`${endpoint}/reviews/settings/edit`, {
                        locationId,
                        siteUrls,
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (editInteractionsSetting.error) {
                        return reject(editInteractionsSetting.error);
                    }
                    if (editInteractionsSetting.errors) {
                        return reject(editInteractionsSetting.errors);
                    }
                    resolve(editInteractionsSetting);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
    };
};
