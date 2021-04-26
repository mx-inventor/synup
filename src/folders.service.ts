import { AxiosInstance } from "axios";

const endpoint = 'locations/folders';

export default (axios: AxiosInstance) => {
  return {
    addLocations:(name:string, locationIds:Array<string>)=>{
        return axios.post(`${endpoint}`,{
          input:{
            name,
            locationIds
          }
        });
    },

    rename:(name:string, id:Array<string>)=>{
      return axios.post(`${endpoint}/rename`,{
        input:{
          name,
          id
        }
      });
    },

    removeLocation:(locationIds:Array<string>)=>{
      return axios.post(`${endpoint}/remove`,{
        input:{
          locationIds
        }
      });
    },

    deleteFolder:(name:string)=>{
      return axios.post(`folders/remove`,{
        input:{
          name
        }
      });
    }
  };
};