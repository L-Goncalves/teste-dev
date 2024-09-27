import axios from 'axios'
import { ProductItem } from '../types';

//  HERE WE COULD FOR EXAMPLE ADD PAGE PARAMS ETC
export const getProducts = async () : Promise<ProductItem[] | void>=> {
    
    const endpointUrl = 'https://raw.githubusercontent.com/L-Goncalves/teste-dev/refs/heads/master/assets/api.json'

    try {
       const result = await axios.get(endpointUrl)
       return result.data;
    } catch (error) {
        console.error(error);
    }
    
}