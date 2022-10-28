import React, { useEffect ,useState} from "react";
import axios from 'axios';
const FetchDemo = () => 
{
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err.message));
    },[])

    return(
        <div>
            <h1>Data Received :</h1>
            {
                data.map((item)=>
                {
                    return(
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </div>
                    )
                    
                })
            }
        </div>
    )
}
export default FetchDemo;