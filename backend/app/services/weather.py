import requests
urlWeather = "https://api.open-meteo.com/v1/forecast"
def weatherCity(latitude,longitude):
    response = requests.get(urlWeather,params={
        "latitude":latitude,
        "longitude":longitude,
        "current":"temperature_2m,apparent_temperature,wind_speed_10m,weather_code,cloud_cover"},
        )
    data = response.json()
    return data

def DailyWeather(latitude,longitude):
    response = requests.get(urlWeather,params={
        "latitude":latitude,
        "longitude":longitude,
        "daily":"temperature_2m_mean,apparent_temperature_mean,wind_speed_10m_max,weather_code,precipitation_sum"
    },
    )
    data = response.json()
    return data

def WeatherCompere(latidude,longitude):
    responceCity1 = requests.get(urlWeather,params={
        "latitude":latidude[0],
        "longitude":longitude[0],
        "daily":"temperature_2m_mean,apparent_temperature_mean,wind_speed_10m_max,weather_code,precipitation_sum"
    })
    responseCity2= requests.get(urlWeather,params={
        "latitude":latidude[1],
        "longitude":longitude[1],
        "daily":"temperature_2m_mean,apparent_temperature_mean,wind_speed_10m_max,weather_code,precipitation_sum"
    
    })
    data1 = responceCity1.json()
    data2 = responseCity2.json()
    return {"city1":data1,
            "city2":data2}



