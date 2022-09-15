import {useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGif = (category) => {
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState([true])

    const getData = async () => {
        setGifs(await getGifs(category));
        setLoading(false)
    }

    useEffect(() => {
        getData().catch(console.error)
    }, []);

  return [gifs, loading]

}