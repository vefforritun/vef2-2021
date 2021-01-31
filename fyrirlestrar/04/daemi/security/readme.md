# Öryggis dæmi

Þessi dæmi gera ráð fyrir því að:

* postgres keyri á `localhost`
* eigi gagnagrunn sem heitir `vef2-2021`
* gagnagrunnur hafi töfluna `texts` og `students` skilgreindar í `schema.sql`
  * `psql vef2-2021 < schema.sql`
* notandinn `vef2-2021` hafi les og skrif aðgang

Til að fá þetta allt til að virka er hægt að nota CLI tól (gert ráð fyrir að skipanir séu keyrðar í _þessari_ möppu):

```bash
createdb vef2-2021
psql vef2-2021 -U vef2-2021 < user.sql
psql vef2-2021 -U vef2-2021 < schema.sql
```

Eða nota pgAdmin4.
