from fastapi import APIRouter,Query
from ..schemas.utils import utilsCityName,FavoritesCity
from ..services.geocoding import searchcity,postFavorites,getFavorites,FavoritesDeleted
from ..services.weather import weatherCity,DailyWeather,WeatherCompere


router = APIRouter()

@router.get("/health")
def root():
    return {"message": "Hello World"}

@router.get('/searchCity')
def getCitiyes(name:str):
    if  not utilsCityName(name):
        return {"error": "name must to be only string letter"}
    return searchcity(name)

@router.get('/weather')
def getWeather(latitude:float, longitude: float):
    return weatherCity(latitude,longitude)

@router.get('/dailyWeather')
def getDailyWeather(latitude:float,longitude:float):
    return DailyWeather(latitude,longitude)

@router.get('/comperWeather')
def comperWeather(latitude:list[float] = Query(),longitude:list[float] = Query()):
    return WeatherCompere(latitude,longitude)

@router.post('/favoritesCity')
def createFavoritesCity(city:FavoritesCity):
    return postFavorites(city.id)

@router.get('/favoritesCitys')
def getFavoritesCity():
    return getFavorites()

@router.delete('/deleteFavorites/{id}')
def deleteFavorites(id:int):
    return FavoritesDeleted(id)



