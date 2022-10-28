import React from 'react';
import mobilesdata from '../../Data/mobiles'; 
import Component2 from './Component2';
export const data = React.createContext();
const Component1 = () =>
{
    
    return(
        <data.Provider value={mobilesdata}>
            <Component2/>
        </data.Provider>
    )
}
export default Component1;
