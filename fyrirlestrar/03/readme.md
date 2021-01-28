# Fyrirlestur 3, 24. janúar 2019

[Fyrirlestur 3.1: Form](03.2.form.md), [vídeó](https://youtu.be/)

* [get.js](daemi/form/01.get.js)
* [post-urlencoded.js](daemi/form/02.post-urlencoded.js)
* [post-plain.js](daemi/form/03.post-plain.js)
* [post-form.js](daemi/form/04.post-form.js)
* [urlencoded-middleware.js](daemi/form/05.urlencoded-middleware.js)
* [json-middleware.js](daemi/form/06.json-middleware.js)
* [multer.js](daemi/form/07.multer.js)
* [data.js](daemi/form/08.data.js)
* [data-validator.js](daemi/form/09.data-validator.js)
* [data-sanitize.js](daemi/form/10.data-sanitize.js)
* [post-redirect-get.js](daemi/form/11.post-redirect-get.js)

[Fyrirlestur 3.2: Postgres](03.2.postgres.md), [vídeó](https://youtu.be/)

* [select](daemi/postgres/01.select.js)
* [insert](daemi/postgres/02.insert.js)

[Fyrirlestur 3.3: Heroku](03.3.heroku.md), [vídeó]()

* [env](daemi/heroku/env.js)

## Aukaefni

* [Node.js: Events](https://nodejs.org/api/events.html#events_events), skanna
* [validator.js Validators](https://github.com/validatorjs/validator.js#validators)
* [Express validator documentation](https://express-validator.github.io/docs/)
* [Falsehoods Programmers Believe About Names – With Examples](https://shinesolutions.com/2018/01/08/falsehoods-programmers-believe-about-names-with-examples/)
* [Að setja upp og tengjast Postgres](../../itarefni/postgres.md)
* [pgAdmin](http://www.pgadmin.org/)
* Postgres skjölun, skanna og hafa handhægt þegar verið að vinna verkefni
  * [5.4. Constraints](https://www.postgresql.org/docs/current/ddl-constraints.html)
  * [8. Data Types](http://www.postgresql.org/docs/current/static/datatype.html), sér í lagi
    * [8.1. Numeric Types](http://www.postgresql.org/docs/current/static/datatype-numeric.html) (integer, serial)
    * [8.3. Character Types](https://www.postgresql.org/docs/current/datatype-character.html) (char, varchar, text)
    * [8.5. Date/Time Types](http://www.postgresql.org/docs/current/static/datatype-datetime.html) (timestamp with time zone)
* [node-postgres documentation](https://node-postgres.com/), hafa til hliðsjónar þegar tengst við postgres frá node.js
* [The Twelve-Factor App](https://12factor.net/)

## Verkefni vikunnar

* [ ] Skoða form dæmi vel, það er mikilvægt að skilja munin á `GET` og `POST`, hvernig við vinnum með `POST` gögn á bakenda, og hvernig express tekur við gögnum (`GET`, `POST`., og `POST` með `files`)
* [ ] Skoða validation dæmi og documentation fyrir express validator, munum vinna nokkuð mikið með validation á gögnum í verkefnum vorsins
* [ ] [Setja upp postgres](../../itarefni/postgres.md)
* [ ] [Setja upp pgAdmin](http://www.pgadmin.org/)
* [ ] [Ná tengingu við posgres gegnum node.js](./daemi/postgres)
* [ ] [Búa til account á heroku.com](https://www.heroku.com/), nýta [Heroku for GitHub students](https://www.heroku.com/github-students)
* [ ] [Sækja Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
* [ ] [Clonea heroku dæmi og setja upp á ykkar account](https://github.com/vefforritun/vef2-2021-heroku)

## Ítarefni

* [A curated list of falsehoods programmers believe in.](https://github.com/kdeldycke/awesome-falsehood)
* [PostgreSQL on the command-line](http://phili.pe/posts/postgresql-on-the-command-line/)
* [PostgreSQL Exercises](https://pgexercises.com/)
* [Best practices for securely storing API keys](https://www.freecodecamp.org/news/how-to-securely-store-api-keys-4ff3ea19ebda/)
* [How to Manage Application Secrets (7 Levels of Credential Management)](https://devopsdirective.com/posts/2020/11/credential-management/)
* [The drastic effects of omitting NODE_ENV in your Express.js applications](https://www.dynatrace.com/news/blog/the-drastic-effects-of-omitting-node_env-in-your-express-js-applications/)
