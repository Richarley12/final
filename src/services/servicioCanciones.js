export async function servicioCanciones(){
    const URI="https://api.spotify.com/v1/artists/7E7CVSqFdLyh0K4AE9uTMo/top-tracks?market=us"
    const TOKEN="Bearer BQAz_nS_ILw_Aja1E2fJ4ZyYOprLgz90gSUiX1JFd9RkVr0D3kpCbFyhsjo5N0k4PegV1WkmcsGh8G3Re07MVlksbHIseyRrUw7MBL0JyZgSov9rUKi2I33tkkWh0R4Dj35RLfqDJ7gx2LxRhzdADu_lXUPrh9_3ubCc1ZetF4cjS3RW52BP_2436HS1UdtOAgQ"
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }
    let respuesta=await fetch(URI,PETICION)
    let canciones = await respuesta.json()
    return canciones 
}