# docker_openai_service
Node backend as a proxy for calling OpenAI API

# -- DEV Local--
$ docker compose -f docker-compose.dev.yml up --build

Running on http://localhost:40002/prompt

# -- Call API --
$ curl -X POST http://localhost:40002/prompt \
-H "Content-Type: application/json" \
-d '{"prompt": "Say hello in Japanese", "max_tokens": 100}'  
