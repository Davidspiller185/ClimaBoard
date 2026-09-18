import {create} from 'zustand'
import  type {City} from '../types/types'
import {persist} from "zustand/middleware"
type Store = {
    favorites: City[],
    add: (city:City) => void,
    remove: (id:number) => void
    isFavorites: (id:number) => boolean
}

const useStore = create<Store>()(
    persist(
        (set,get) => ({
            favorites: [],
            add: (city) => {
                set(state => ({
                    favorites:[...state.favorites,city]
                    
                }))
                },
            remove: (id) => {
                set(state => ({
                    favorites: state.favorites.filter(favorite => favorite.id !== id)
                    
                }))
            },
            isFavorites: (id) => {
                return get().favorites.some(favorite => favorite.id === id)

            }

            }),
            {
                name:"favorites"
            }
            ))
export default useStore
    
    

