heroku pg:promote `heroku config --app $1  | grep HEROKU_POSTGRESQL | cut -f1 -d':'` --app $1
