Команда для сборки имеджа.
docker build -t example-web-project:latest .
Создание и запуск контейнера.
docker run -d -p8080:80 --name web-project example-web-project
