import { AxiosInstance } from 'axios';
import { KeywordsPermormance } from './types/ranking';

const endpoint = 'locations';

export default (axios: AxiosInstance) => {
  return {
    addKeywords: (locationId: string, inputKeywords: Array<string>) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { addKeywords },
              errors,
            },
          } = await axios.post(endpoint + '/keywords', {
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
        } catch (error) {
          reject(error);
        }
      });
    },
    listKeywords: (locationId: string) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { keywordsByLocationId },
              errors,
            },
          } = await axios.get(endpoint + '/' + locationId + '/keywords');
          if (errors) {
            return reject(errors);
          }
          if (keywordsByLocationId.error) {
            return reject(keywordsByLocationId.error);
          }
          resolve(keywordsByLocationId);
        } catch (error) {
          reject(error);
        }
      });
    },
    getKeywordsPerformance: (
      locationId: string,
      params: KeywordsPermormance
    ) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { keywordsByLocationId },
              errors,
            },
          } = await axios.get(
            endpoint + '/' + locationId + '/keywords-performance',
            { params }
          );
          if (errors) {
            return reject(errors);
          }
          if (keywordsByLocationId.error) {
            return reject(keywordsByLocationId.error);
          }
          resolve(keywordsByLocationId);
        } catch (error) {
          reject(error);
        }
      });
    },
    archiveKeyword: (id: string) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { archiveKeyword },
              errors,
            },
          } = await axios.post(endpoint + '/keywords/archive', id);
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
        } catch (error) {
          reject(error);
        }
      });
    },
  };
};
