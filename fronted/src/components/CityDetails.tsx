import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import  useStore  from "../services/zustand";
export default function CityDetails(){
    const{id,latitude,longitude} = useParams()
    const current = useFetch(`weather?latitude=${latitude}&longitude=${longitude}`)
    const daily = useFetch(`dailyWeather?latitude=${latitude}&longitude=${longitude}`)
    const add = useStore(state => state.add)
    const remove = useStore(state => state.remove)
    const isFavorite = useStore(state => state.isFavorites)
    const addToFavorites = async() => {
        const responce = await fetch('http://localhost:8000/favoritesCity' ,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id:id})
        })
        if(!responce.ok){
            const error = await responce.json()
            console.log(error)
            return
        }
        const city = await responce.json()
        add(city)
    }
    const removeFRomFavorites = async() => {
        const responce = await fetch(`http://localhost:8000/deleteFavorites/${id}`, {
            method:"DELETE"
        })
         if(!responce.ok){
            const error = await responce.json()
            console.log(error)
            return

        }
        remove(Number(id))
        
    }
    
    return (
        <>
        <p>current details</p>
        {current.loading?<p>Loading...</p>:
        current.err?<p>{current.err}</p>:
        <div>
            {JSON.stringify(current.data,null,2)}
        </div>
        }
        <p>daily details</p>
        {daily.loading?<p>Loading...</p>:
        daily.err?<p>{daily.err}</p>:
        <div>
          {JSON.stringify(daily.data,null,2)}    
        </div>}
        <button onClick={() =>{if(!isFavorite(Number(id))){addToFavorites()}}}>
            add to favorites
        </button>
        <button onClick={() =>{if(isFavorite(Number(id))){removeFRomFavorites()}}}>
            remove from favorites
        </button>
       </>
    )


}


