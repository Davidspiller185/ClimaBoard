import {Link} from "react-router"
import useFetch from "../hooks/useFetch"

export default function Dashboard(){
    const Nickname = localStorage.getItem("Nickname")
    const {data,loading,err} = useFetch('weather?latitude=48.85341&longitude=2.3488')
    return (
        <>
            <h1> Welcome {Nickname} </h1>
            {loading?<p>Loading...</p>:
            err?<p>{err}</p>:
            <div>
                {JSON.stringify(data,null,2)}
                </div>}
            <nav> <Link to={'/search'}>
                    Search
                 </Link>
            </nav>
            <nav> <Link to={'/favorites'}>
                    Favorites
                  </Link>
            </nav>
            <nav> <Link to={'/compare'}>
                    Compare
                </Link>
            </nav>

        </>
    )
}
 