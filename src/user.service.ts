import { AxiosInstance } from "axios";
import { User } from "./types/User";

const endpointRoles = "roles";
const endpointUsers = "users";

export default (axios: AxiosInstance) => {
  return {
    getAllRoles: (params: User) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { fetchAccountRoles },
              errors,
            },
          } = await axios.get(endpointRoles, { params });
          if (errors) {
            return reject(errors);
          }
          if (fetchAccountRoles.error) {
            return reject(fetchAccountRoles.error);
          }
          resolve(fetchAccountRoles);
        } catch (error) {
          reject(error);
        }
      });
    },
    createWithRole: (user: User) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { addUser },
              errors,
            },
          } = await axios.post(endpointUsers + "/create", {
            input: {
              ...user,
            },
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
        } catch (error) {
          reject(error);
        }
      });
    },
    addLocations: (userId: string, locationIds: Array<string>) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { addLocationsForUser },
              errors,
            },
          } = await axios.post(endpointUsers + "/locations/add", {
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
        } catch (error) {
          reject(error);
        }
      });
    },
    addFolders: (userId: string, folderIds: Array<string>) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { addFoldersForUser },
              errors,
            },
          } = await axios.post(endpointUsers + "/folders/add", {
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
        } catch (error) {
          reject(error);
        }
      });
    },
    getAll: (params: User) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { users },
              errors,
            },
          } = await axios.get(endpointUsers, { params });
          if (errors) {
            return reject(errors);
          }
          if (users.error) {
            return reject(users.error);
          }
          resolve(users);
        } catch (error) {
          reject(error);
        }
      });
    },
    listResources: (userId: User) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { listUserResources },
              errors,
            },
          } = await axios.get(endpointUsers + "/" + userId + "/resources");
          if (errors) {
            return reject(errors);
          }
          if (listUserResources.error) {
            return reject(listUserResources.error);
          }
          resolve(listUserResources);
        } catch (error) {
          reject(error);
        }
      });
    },
    listByIds: (userIds?: Array<string>) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { usersByIds },
              errors,
            },
          } = await axios.get("users-by-ids/", {
            params: { userIds: userIds },
          });
          if (errors) {
            return reject(errors);
          }
          if (usersByIds.error) {
            return reject(usersByIds.error);
          }
          resolve(usersByIds);
        } catch (error) {
          reject(error);
        }
      });
    },
    update: (userId: string, user: User) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { updateUser },
              errors,
            },
          } = await axios.post(endpointUsers + "/update", {
            input: {
              ...user,
              id: userId,
            },
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
        } catch (error) {
          reject(error);
        }
      });
    },
    removeLocations: (userId: string, locationIds: Array<string>) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { removeLocationsForUser },
              errors,
            },
          } = await axios.post(endpointUsers + "/locations/remove", {
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
        } catch (error) {
          reject(error);
        }
      });
    },
    removeFolders: (userId: string, folderIds: Array<string>) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { removeFoldersForUser },
              errors,
            },
          } = await axios.post(endpointUsers + "/folders/remove", {
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
        } catch (error) {
          reject(error);
        }
      });
    },
  };
};
