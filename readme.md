# Guia

Build Docker

Docker build . -t nome

ex: docker build . -t upload_service


Re-build Docker

Docker build . -t nome --build

ex: docker build . -t upload_service --build

Run 

docker run -p porta_maquina:porta arquivo nome do container

ex: docker run -p 3000:3000 upload_service