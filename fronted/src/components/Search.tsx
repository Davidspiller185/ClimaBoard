import { useState } from "react"
import useFetch from "../hooks/useFetch"
import { Link } from "react-router"
import type { City } from "../types/types"


export default function Search(){
    const[city,setCity] = useState<string>("")
    const {data,loading,err} = useFetch<{results:City[]}>(city? `searchCity?name=${city}` : "")
    return (
        <>
        <input 
            placeholder="city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
        />
        {city? (loading?<p>Loading...</p>:
         err?<p>{err}</p>:
         data?.results?.length === 0 ?
            <p>City not found</p>
         :
         <div>
            {JSON.stringify(data,null,2)}
            </div>) : null}
        
        <nav>
            {data?.results?.map((item) => (
                <Link key={item.id} to={`/city details/${item.id}/${item.latitude}/${item.longitude}`}>
                    {item.name} {item.country} {item.timezone}
                </Link>
            ))}
        </nav>
        </>
    )
    
}