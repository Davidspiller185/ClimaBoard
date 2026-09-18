import { useEffect, useState } from "react"


export default function useFetch<T>(url:string){
    const fullUrl = 'http://localhost:8000/' + url
    const[data,setData] = useState<T>()
    const[loading,setLoading] = useState(true)
    const[err,setErr] = useState<string>()
    useEffect(() => {
        if(!url){
            return 
        }
        fetch(fullUrl)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => setErr(err.message))
        .finally(() => setLoading(false))
    },[url,fullUrl])
    return {data,loading,err}
}
