import React,{Component} from 'react'
import mobilesdata from '../Data/mobiles'
export class DisplayData extends Component
{
    render()
    {
        return (
            <div>
                <table border={"2px"}>
                    <tr>
                        <td>Mobile Name</td>
                        <td>Brand Name</td>
                        <td>Battery Capacity</td>
                    </tr>
                    {
                        mobilesdata.map((mobile)=>
                        {
                            return(
                                <tr>
                                    <td>{mobile.name}</td>
                                    <td>{mobile.brand}</td>
                                    <td>{mobile.battery}</td>
                                </tr>
                            )   
                        })
                    }
                </table>
            </div>
        )
    }
}
export default DisplayData;