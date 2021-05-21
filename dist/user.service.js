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
const endpointRoles = "roles";
const endpointUsers = "users";
exports.default = (axios) => {
    return {
        getAllRoles: (params) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { fetchAccountRoles }, errors, }, } = yield axios.get(endpointRoles, { params });
                    if (errors) {
                        return reject(errors);
                    }
                    if (fetchAccountRoles.error) {
                        return reject(fetchAccountRoles.error);
                    }
                    resolve(fetchAccountRoles);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        createWithRole: (user) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { addUser }, errors, }, } = yield axios.post(endpointUsers + "/create", {
                        input: Object.assign({}, user),
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (addUser.error) {
                        return reject(addUser.error);
                    }
                    if (addUser.errors) {
                        return reject(addUser.errors);
                    }
                    resolve(addUser);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        addLocations: (userId, locationIds) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { addLocationsForUser }, errors, }, } = yield axios.post(endpointUsers + "/locations/add", {
                        input: {
                            userId,
                            locationIds,
                        },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (addLocationsForUser.error) {
                        return reject(addLocationsForUser.error);
                    }
                    resolve(addLocationsForUser);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        addFolders: (userId, folderIds) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { addFoldersForUser }, errors, }, } = yield axios.post(endpointUsers + "/folders/add", {
                        input: {
                            userId,
                            folderIds,
                        },
                    });
                    console.log(addFoldersForUser);
                    if (errors) {
                        return reject(errors);
                    }
                    if (addFoldersForUser.error) {
                        return reject(addFoldersForUser.error);
                    }
                    resolve(addFoldersForUser);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        getAll: (params) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { users }, errors, }, } = yield axios.get(endpointUsers, { params });
                    if (errors) {
                        return reject(errors);
                    }
                    if (users.error) {
                        return reject(users.error);
                    }
                    resolve(users);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        listResources: (userId) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { listUserResources }, errors, }, } = yield axios.get(endpointUsers + "/" + userId + "/resources");
                    if (errors) {
                        return reject(errors);
                    }
                    if (listUserResources.error) {
                        return reject(listUserResources.error);
                    }
                    resolve(listUserResources);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        listByIds: (userIds) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { usersByIds }, errors, }, } = yield axios.get("users-by-ids/", {
                        params: { userIds: userIds },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (usersByIds.error) {
                        return reject(usersByIds.error);
                    }
                    resolve(usersByIds);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        update: (userId, user) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { updateUser }, errors, }, } = yield axios.post(endpointUsers + "/update", {
                        input: Object.assign(Object.assign({}, user), { id: userId }),
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (updateUser.error) {
                        return reject(updateUser.error);
                    }
                    if (updateUser.errors) {
                        return reject(updateUser.errors);
                    }
                    resolve(updateUser);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        removeLocations: (userId, locationIds) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { removeLocationsForUser }, errors, }, } = yield axios.post(endpointUsers + "/locations/remove", {
                        input: {
                            userId,
                            locationIds,
                        },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (removeLocationsForUser.error) {
                        return reject(removeLocationsForUser.error);
                    }
                    resolve(removeLocationsForUser);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
        removeFolders: (userId, folderIds) => {
            return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let { data: { data: { removeFoldersForUser }, errors, }, } = yield axios.post(endpointUsers + "/folders/remove", {
                        input: {
                            userId,
                            folderIds,
                        },
                    });
                    if (errors) {
                        return reject(errors);
                    }
                    if (removeFoldersForUser.error) {
                        return reject(removeFoldersForUser.error);
                    }
                    resolve(removeFoldersForUser);
                }
                catch (error) {
                    reject(error);
                }
            }));
        },
    };
};
