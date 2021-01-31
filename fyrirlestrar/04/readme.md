# Fyrirlestur 4, 4. febrúar 2021

[Fyrirlestur 4.1 – Öryggi](04.1.security.md), [vídeó]()

* [logging](daemi/security/01.logging.js)
* [xss-reflected](daemi/security/02.xss-reflected.js)
* [xss-persistent](daemi/security/03.xss-persistent.js)
* [xss-log](daemi/security/04.xss-log.js)
* [powered-by](daemi/security/05.powered-by.js)

[Fyrirlestur 4.2 – Öryggi](04.2.security.md), [vídeó]()

* [sql-injection](daemi/security/06.sql-injection.js)
* [command-injection](daemi/security/07.command-injection.js)
* [csp](daemi/security/08.csp.js)
* [csrf](daemi/security/09.csrf.js)

[Fyrirlestur 4.3: Vefþjónustur](04.3.vefþjonustur.md), [vídeó]()

* [get](daemi/ws/01.get.js)
* [post](daemi/ws/02.post.js)
* [put](daemi/ws/03.put.js)
* [patch](daemi/ws/04.patch.js)
* [delete](daemi/ws/05.delete.js)

---

## Aukaefni

* OWASP top 10
  - [A10:2017 Insufficient Logging and Monitoring](https://github.com/OWASP/Top10/blob/master/2017/en/0xaa-logging-detection-response.md)
  - [A9:2017 Using Components with Known Vulnerabilities](https://github.com/OWASP/Top10/blob/master/2017/en/0xa9-known-vulns.md)
  - [A8:2017 Insecure Deserialization](https://github.com/OWASP/Top10/blob/master/2017/en/0xa8-insecure-deserialization.md)
  - [A7:2017 Cross-Site Scripting (XSS)](https://github.com/OWASP/Top10/blob/master/2017/en/0xa7-xss.md)
  - [A6:2017 Security Misconfiguration](https://github.com/OWASP/Top10/blob/master/2017/en/0xa6-security-misconfiguration.md)
  - [A5:2017 Broken Access Control](https://github.com/OWASP/Top10/blob/master/2017/en/0xa5-broken-access-control.md)
  - [A4:2017 XML External Entities (XXE)](https://github.com/OWASP/Top10/blob/master/2017/en/0xa4-xxe.md)
  - [A3:2017 Sensitive Data Exposure](https://github.com/OWASP/Top10/blob/master/2017/en/0xa3-sensitive-data-disclosure.md)
  - [A2:2017 Broken Authentication](https://github.com/OWASP/Top10/blob/master/2017/en/0xa2-broken-authentication.md)
  - [A1:2017 Injection](https://github.com/OWASP/Top10/blob/master/2017/en/0xa1-injection.md)
* [How To Safely Store A Password](https://codahale.com/how-to-safely-store-a-password/)
* [We Hacked Apple for 3 Months: Here’s What We Found](https://samcurry.net/hacking-apple/)
* [Wikipedia: List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
* [How to GET a Cup of Coffee](http://www.infoq.com/articles/webber-rest-workflow)

## Verkefni vikunnar

* Verkefni 2
  * [ ] Passa upp á XSS veikleika
  * [ ] Passa upp á SQL injection veikleika
* Hópverkefni 1
  * [ ] Stofna/komast í hóp, sjá #vef2-2021-vantar-hop á slack
  * [ ] Ákveða samskipti, tímalínu, reglulega hittinga, og verkaskiptingu
  * [ ] Skoða fyrri, sambærileg hópverkefni í vef2: [2018](https://github.com/vefforritun/vef2-2018-h1-synilausn/), [2019](https://github.com/vefforritun/vef2-2019-h1-synilausn)

## Ítarefni

* [have i been pwned?](https://haveibeenpwned.com/)
* [Reply All #130: The Snapchat Thief](https://www.gimletmedia.com/reply-all/130-lizard)
* [Hacker Lexicon: SQL Injections, an Everyday Hacker’s Favorite Attack](https://www.wired.com/2016/05/hacker-lexicon-sql-injections-everyday-hackers-favorite-attack/)
* [How I Hacked 40 sites in 7 minutes](https://hackernoon.com/how-i-hacked-40-websites-in-7-minutes-5b4c28bc8824)
* [The MySpace Worm that Changed the internet Forever](https://motherboard.vice.com/en_us/article/wnjwb4/the-myspace-worm-that-changed-the-internet-forever)
* [Meet the seven people who hold the keys to worldwide internet security](https://www.theguardian.com/technology/2014/feb/28/seven-people-keys-worldwide-internet-security-web)
* [XSS Prevention Cheat Sheet](https://www.owasp.org/index.php/SQL_Injection_Prevention_Cheat_Sheet)
* [alert(1) to win – XSS leikur!](https://alf.nu/alert1)
* [OWASP: Logging cheat sheet](https://www.owasp.org/index.php/Logging_Cheat_Sheet)
* [Let’s Encrypt](https://letsencrypt.org/)
* [csurf](https://github.com/expressjs/csurf)
* [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
* [Helmet](https://github.com/helmetjs/helmet)
* [Panama Papers: Email Hackable via WordPress, Docs Hackable via Drupal](https://www.wordfence.com/blog/2016/04/panama-papers-wordpress-email-connection/)
* [GitHub lætur vita ef verkefni notar þekkta, óörugga pakk](https://github.com/blog/2470-introducing-security-alerts-on-github)
* [How I hacked Facebook: Part One](https://alaa.blog/2020/12/how-i-hacked-facebook-part-one/)
* [UK company ">&lt;SCRIPT SRC=HTTPS://MJT.XSS.HT> LTD" told to change its name](https://boingboing.net/2020/11/09/uk-company-script-srchttps-mjt-xss-ht-ltd-told-to-change-its-name.html).
* [Regular expression Denial of Service - ReDoS](https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS)
* [trim: Regular Expression Denial of Service (ReDoS)](https://snyk.io/vuln/SNYK-JS-TRIM-1017038)
* [Everything you should know about certificates and PKI but are too afraid to ask](https://smallstep.com/blog/everything-pki/)
* [How HTTPS Works](https://howhttps.works/)
* [Time-based One-time Password algorithm](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm)
* [Doktorsritgerð Fielding](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)
* [REST isn’t what you think it is, and that’s OK](http://www.intridea.com/blog/2010/4/29/rest-isnt-what-you-think-it-is)
* [Hypertext Application Language](https://en.wikipedia.org/wiki/Hypertext_Application_Language) (HAL) staðlar hvernig þessum upplýsingum er komið til skila
