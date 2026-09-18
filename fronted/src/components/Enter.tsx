import { useEffect, useState} from "react";
import { Link } from "react-router";

export default function Enter(){
    const[Nickname,setNickname] = useState<string>("")
    useEffect(() => {
        localStorage.setItem("Nickname",JSON.stringify(Nickname))
    },[Nickname])

    return (
        <>
        <input 
            placeholder="Nickname"
            value={Nickname}
            onChange={(e) => setNickname(e.target.value)}
        />
        <nav>
            <Link to={"/dashboard"}>
                Go to Dashboard
            </Link>
        </nav>
        </>
            
    )
}





