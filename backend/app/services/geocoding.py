import requests
import json
from fastapi import HTTPException
urlGeocoding = "https://geocoding-api.open-meteo.com/v1/search"
urlGeocodingById = "https://geocoding-api.open-meteo.com/v1/get"
def searchcity(city:str):
    response = requests.get(urlGeocoding, params={"name":city})
    data = response.json()
    if not data.get("results"):
        raise HTTPException(status_code=404,detail="City not found")
    return data

def postFavorites(id:int):
    response = requests.get(urlGeocodingById,params={"id":id})
    data = response.json()
    if not data:
        raise HTTPException(status_code=404,detail="city not found")
    with open('app/data/favorites.json',"r") as f:
        load = json.load(f)
        load.append(data)
    with open('app/data/favorites.json',"w",encoding="utf-8") as file:
        json.dump(load,file,indent=4)
    return data

def getFavorites():
    with open('app/data/favorites.json',"r") as f:
        load = json.load(f)
        return load
        

def FavoritesDeleted(id): 
     with open('app/data/favorites.json',"r") as f:
        load = json.load(f)
     for favorite in  load:
        if favorite["id"] == id:
            load.remove(favorite)
            with open('app/data/favorites.json',"w",encoding="utf-8") as file:
                json.dump(load,file,indent=4)
            return {"message": "delete successful favorie with this id"}
        raise HTTPException(status_code=404,detail="not found favorite with this id")




    

