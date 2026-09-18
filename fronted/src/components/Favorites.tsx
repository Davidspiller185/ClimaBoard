
import type { City } from "../types/types";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router";

export default function Favorites(){
    const {data,loading,err} = useFetch<City[]>('favoritesCitys')
    return (
        <>
        {loading? <p>loading...</p>:
         err? <p>{err}</p>:
         data?.length?
         data.map(item => (
            <div key={item.id}>
                {JSON.stringify(item)}
            
            <Link  to={`/city details/${item.id}/${item.latitude}/${item.longitude}`}>
                    {item.name} {item.country} {item.timezone}
                
            </Link>
            </div>
            
         ))
         :null
}
        
        </>
        
    )

}