import axios from "axios"
import { configs } from "../configs"

export const getApi = async (url, params) => {
   try {
      const response = await axios.get(`${configs.api_host_dev}/${configs.version}/${url}`, {
         params
      })

      return response.data.data
   } catch (error) {

   }
} 