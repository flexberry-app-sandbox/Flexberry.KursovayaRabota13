docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovayarabota-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovayarabota-java/app ../../..
