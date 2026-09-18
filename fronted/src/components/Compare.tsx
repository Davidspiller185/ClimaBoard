import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import type {City}  from "../types/types";
export default function Compare(){
    const {lat1,lon1,lat2,lon2} = useParams()
    const {data,loading,err} = useFetch<{city1:City,city2:City}>
    (`/comperWeather?latitude=${lat1}&longitude=${lon1}&latitude=${lat2}&longitude=${lon2})`)
    return (
        <>
        {loading?<p>Loading...</p>:
        err?<p>{err}</p>:
        data? JSON.stringify(data):null}
        
        </>
    )

}