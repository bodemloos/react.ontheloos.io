up:
	docker-compose up -d
	docker-compose exec frontend yarn start

init:
	docker-compose up --build -d
	docker-compose exec frontend yarn install
	docker-compose exec frontend yarn run dev
	
down:
	docker-compose down

mvfront:
	docker-compose exec frontend sh

mvweb:
	docker-compose exec webapp sh

f:
	docker-compose exec frontend yarn prettier --write .