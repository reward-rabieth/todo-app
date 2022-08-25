echo ("echo pulling ...")
git pull 

echo ("echo Building ...")
docker-compose up  -d --build
