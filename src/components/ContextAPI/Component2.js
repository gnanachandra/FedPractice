import React,{useContext} from 'react';
import {data} from "./Component1";
const Component2 = () =>
{
    const dataReceived = useContext(data);
    console.log(dataReceived);
    return(
        <div>
            <table border={"1px"}>
                <tr>
                    <td>Mobile Name</td>
                    <td>Brand Name</td>
                    <td>Battery Capacity</td>
                </tr>
                {
                    dataReceived.map((items)=>
                    {
                        return (
                            <tr>
                                <td>{items.name}</td>
                                <td>{items.brand}</td>
                                <td>{items.battery}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}
export default Component2;