# Reto_Interseguro

http://localhost:3000/api/qr

# Payload

{
  "matriz": [
    [12, -51, 4],
    [6, 167, -68],
    [-4, 24, -41]
  ]
}


# Detener contenedores
docker stop 96b344e21e47
docker stop aa49d769be89

# Iniciar contenedores 
for /F "tokens=*" %i in ('docker ps -aq') do docker start %i
