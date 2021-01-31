# Postgres dæmi

Þessi dæmi gera ráð fyrir því að:

* postgres keyri á `localhost`
* eigi gagnagrunn sem heitir `vef2-2021`
* gagnagrunnur hafi töfluna `people` skilgreinda í `schema.sql`
* notandinn `vef2-2021` hafi les og skrif aðgang

Til að fá þetta allt til að virka er hægt að nota CLI tól (gert ráð fyrir að skipanir séu keyrðar í _þessari_ möppu):

```bash
> createdb vef2-2021
> psql vef2-2021 < schema.sql
CREATE TABLE
> psql -U vef2-2021 vef2-2021
```

Eða nota pgAdmin4.
