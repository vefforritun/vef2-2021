# Fyrirlestur 2, 21. janúar 2019

[Fyrirlestur 2.1: Einingar](02.1.modules.md), [vídeó](https://youtu.be/8oimVmk6kD8)

* [jsdoc.js](daemi/modules/jsdoc.js)
* [modules.js](daemi/modules/modules.js)
* [npm](daemi/modules/npm)

[Fyrirlestur 2.2: Express](02.3.express.md), [vídeó, 1 af 2](https://youtu.be/GD35XdnlsFs), [2 af 2](https://youtu.be/vt4UX4Bh46Q)

* [hello-world.js](daemi/express/01.hello-world.js)
* [request.js](daemi/express/02.request.js)
* [response.js](daemi/express/03.response.js)
* [subapp.js](daemi/express/04.subapp.js)
* [router-app.js](daemi/express/05.router-app.js)
* [router.js](daemi/express/05.router.js)
* [middleware.js](daemi/express/06.middleware.js)
* [error-handling.js](daemi/express/07.error-handling.js)
* [static.js](daemi/express/08.static.js)
* [template-ejs.js](daemi/express/09.template-ejs.js)
* [async-await.js](daemi/express/10.async-await.js)

[Fyrirlestur 2.3: HTTP](03.1.http.md), [vídeó](https://youtu.be/hWVxmMYG3Go)

* [http-methods.js](daemi/http/01.http-methods.js)
* [content-type.js](daemi/http/02.content-type.js)
* [compression.js](daemi/http/03.compression.js)
* [download.js](daemi/http/04.download.js)
* [url.js](daemi/http/05.url.js)

## Aukefni

* [Express skjölun](https://expressjs.com/en/4x/api.html)
* [cURL](https://curl.haxx.se/)
* [Postman](https://www.postman.com/)
* [Insomnia](https://insomnia.rest/)
* [Express middleware listi](http://expressjs.com/en/resources/middleware.html)
* [Connect middleware listi](https://github.com/senchalabs/connect#middleware)

## Verkefni vikunnar

* [ ] Athuga dæmahópaskiptingu
* [ ] Skoða dæmi um einingar, sér í lagi prófa að keyra CommonJS og ES modules
* [ ] Setja upp Express dæmi og prófa
  * [ ] Prófa og skilja mun á request og response hlut m.t.t. HTTP
  * [ ] Prófa router, breyta dæmi og fikta
  * [ ] Prófa middleware, breyta dæmi og fikta
  * [ ] Prófa villumeðhöndlun, breyta dæmi og fikta
* [ ] Renna yfir [Express skjölun](https://expressjs.com/en/4x/api.html)
* [ ] Sækja cURL
* [ ] Sækja Postman
* [ ] Sækja Insomnia
* [ ] Nota cURL og Postman/Insomnia til að gera köll í vefþjón úr dæmum, sjá hvernig headers og efni er skilað
* [ ] Verkefni 1, áframhald
  * Frá því í seinustu viku:
    * [ ] Setja upp git og GitHub account, ef þarf
    * [ ] Clone'a repo og setja upp
    * [ ] Setja upp verkefni og tól: eslint, stylelint, sass
    * [ ] Skoða fyrirlestra úr vef1 (sjá fyrirlestur 1)
    * [ ] Skoða sambærileg verkefni frá fyrri árum í vef2
      * [ ] [vef2 2019](https://github.com/vefforritun/vef2-2019#verkefni)
      * [ ] [vef2 2018](https://github.com/vefforritun/vef2-2018#verkefni)
  * Þessari viku:
    * [ ] Setja upp express með nodemon í verkefni
    * [ ] Setja upp routing
    * [ ] Setja upp EJS template og skipta í header, footer, index og video skjöl
    * [ ] Setja upp subapp sem sér um að birta video lista og stakt

## Ítarefni

* [10 Things I Regret About Node.js - Ryan Dahl - JSConf EU](https://www.youtube.com/watch?v=M3BM9TB-8yA&feature=emb_title)
  * Áhugavert að bera saman við fyrirlesturinn þar sem [Ryan Dahl kynnir Node.js á JSConf _aðeins_ 9 árum áður](http://www.youtube.com/watch?v=ztspvPYybIY)
* [Semantic versioning](https://semver.org/)
* [Rage-quit: Coder unpublished 17 lines of JavaScript and “broke the Internet”](https://arstechnica.com/information-technology/2016/03/rage-quit-coder-unpublished-17-lines-of-javascript-and-broke-the-internet/)
* [Code dependencies are the devil.](https://www.freecodecamp.org/news/code-dependencies-are-the-devil-35ed28b556d/)
* [I’m harvesting credit card numbers and passwords from your site. Here’s how.](https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5)
* „event-stream incident“, óprúttinn aðili tók yfir `event-stream` pakkann á npm
  - ["An npm package with 2,000,000 weekly downloads had malicious code injected into it. No one knows what the malicious code does yet."](https://twitter.com/garybernhardt/status/1067111872225136640)
  - [The npm blog: Details about the event-stream incident](https://blog.npmjs.org/post/180565383195/details-about-the-event-stream-incident)
* [yarn](https://yarnpkg.com/)
* [Deno](https://deno.land/) frá Ryan Dahl
* [Rome](https://rome.tools/) dev tólið til að enda öll dev tól
* [CommonJS spec](http://www.commonjs.org/specs/modules/1.0/)
* [CommonJS modules í Node.js](https://nodejs.org/api/modules.html)
* [ES modules í Node.js](https://nodejs.org/api/esm.html#esm_modules_ecmascript_modules)
* [JSDoc](http://usejsdoc.org/)
* [Express: Fast, unopinionated, minimalist web framework for Node.js](https://expressjs.com/)
* [cURL tutorial](https://curl.haxx.se/docs/httpscripting.html)
* [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
* Headers
  * [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
  * [`Content-Disposition`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)
