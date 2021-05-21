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
        create: (location) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { createLocation }, }, } = yield axios.post(endpoint, { input: location });
                    if (!createLocation.success) {
                        return reject(createLocation.error);
                    }
                    resolve(createLocation);
                }
                catch (error) {
                    reject(error.response.data || error);
                }
            }));
        },
        list: (params) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { allLocations }, }, } = yield axios.get(endpoint, { params });
                    resolve(allLocations);
                }
                catch (error) {
                    reject(error.response.data || error);
                }
            }));
        },
        getByIds: (ids) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { getLocationsByIds }, }, } = yield axios.get("locations-by-ids", { params: { ids } });
                    resolve(getLocationsByIds);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        search: (query) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { searchLocations }, }, } = yield axios.get(endpoint + "/search", {
                        params: { query },
                    });
                    resolve(searchLocations);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        addPhotos: (locationId, photos) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { addLocationPhotos }, errors, }, } = yield axios.post(`${endpoint}/photos`, {
                        input: { locationId, photos },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    resolve(addLocationPhotos);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        deletePhotos: (locationId, photoIds) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { removeLocationPhotos }, errors, }, } = yield axios.post(`${endpoint}/photos/remove`, {
                        input: { locationId, photoIds },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (removeLocationPhotos.errors) {
                        return reject(removeLocationPhotos.errors);
                    }
                    resolve(removeLocationPhotos);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        updateLocation: (id, locationData) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { updateLocation }, errors, }, } = yield axios.post(`${endpoint}/update`, {
                        input: Object.assign(Object.assign({}, locationData), { id }),
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (updateLocation.error) {
                        return reject(updateLocation.error);
                    }
                    resolve(updateLocation);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        starPhotos: (locationId, photoIds, starred) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { starUnstarLocationPhotos }, errors, }, } = yield axios.post(`${endpoint}/photos/star`, {
                        input: {
                            locationId,
                            photoIds,
                            starred,
                        },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (starUnstarLocationPhotos.error) {
                        return reject(starUnstarLocationPhotos.error);
                    }
                    resolve(starUnstarLocationPhotos);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        archiveLocation: (ids) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { archiveLocations }, errors, }, } = yield axios.post(endpoint + "/archive", {
                        input: { locationIds: ids },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (archiveLocations.error) {
                        return reject(archiveLocations.error);
                    }
                    resolve(archiveLocations);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        activateLocation: (ids) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { activateLocations }, errors, }, } = yield axios.post(endpoint + "/activate", {
                        input: { ids },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (activateLocations.error) {
                        return reject(activateLocations.error);
                    }
                    resolve(activateLocations);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        subscriptions: () => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { activeSubscriptions }, }, } = yield axios.get("subscriptions");
                    resolve(activeSubscriptions);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
    };
};
