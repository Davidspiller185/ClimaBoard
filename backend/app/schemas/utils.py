from pydantic import BaseModel
def utilsCityName(name:str):
    if not name.isalpha():
        return False
    return True

class FavoritesCity(BaseModel):
    id:int