import { useState, useEffect } from "react";
import axios from "axios";


const useRequestData=(url)=>{
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(()=>{
        setIsLoading(true)
        axios.get(url)
        .then((response)=>{
            setIsLoading(false)
            setData(response.data)
        })
        .catch((er)=>{
            setIsLoading(false)
            setError(er.response.data.message)
        })
    }, [])

    return [data, error, isLoading]
}

export default useRequestData;