import {createContext} from 'react';

const cardContext = createContext({
  item:{},
  setItems:()=>null,
})
export default cardContext