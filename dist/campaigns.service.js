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
const endpoint = "locations/review-campaigns";
exports.default = (axios) => {
    return {
        create: (locationId, name, locationCustomers) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { createReviewCampaign }, errors, }, } = yield axios.post(`${endpoint}`, {
                        input: {
                            locationId,
                            name,
                            locationCustomers,
                        },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (createReviewCampaign.error) {
                        return reject(createReviewCampaign.error);
                    }
                    if (createReviewCampaign.errors) {
                        return reject(createReviewCampaign.errors);
                    }
                    resolve(createReviewCampaign);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        addCustomers: (reviewCampaignId, locationCustomers) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { addCustomersToReviewCampaign }, errors, }, } = yield axios.post(`${endpoint}/customers`, {
                        input: {
                            reviewCampaignId,
                            locationCustomers,
                        },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (addCustomersToReviewCampaign.error) {
                        return reject(addCustomersToReviewCampaign.error);
                    }
                    if (addCustomersToReviewCampaign.errors) {
                        return reject(addCustomersToReviewCampaign.errors);
                    }
                    resolve(addCustomersToReviewCampaign);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        list: (locationId, params) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { listReviewCampaigns }, errors, }, } = yield axios.get(`locations/${locationId}/review-campaigns`, {
                        params,
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (listReviewCampaigns.error) {
                        return reject(listReviewCampaigns.error);
                    }
                    if (listReviewCampaigns.errors) {
                        return reject(listReviewCampaigns.errors);
                    }
                    resolve(listReviewCampaigns);
                }
                catch (error) {
                    reject(error);
                }
            }));
            return;
        },
    };
};
