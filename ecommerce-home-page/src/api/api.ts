import axios from 'axios'
import { ProductItem } from '../types';

//  HERE WE COULD FOR EXAMPLE ADD PAGE PARAMS ETC
export const getProducts = async () : Promise<ProductItem[] | void>=> {
    
    const endpointUrl = 'https://run.mocky.io/v3/fb9d7c62-cd62-41ea-bdc7-e6e552dbc3a2'

    try {
       const result = await axios.get(endpointUrl)
       return result.data;
    } catch (error) {
        console.error(error);
    }
    
}