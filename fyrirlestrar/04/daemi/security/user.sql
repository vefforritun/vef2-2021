CREATE USER "vef2-2021" WITH ENCRYPTED PASSWORD '123';
GRANT USAGE ON SCHEMA public TO "vef2-2021";
GRANT ALL PRIVILEGES ON DATABASE "vef2-2021" TO "vef2-2021";

-- Ef vef2-2021 notandinn bjó ekki til töflurnar
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO "vef2-2021";
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO "vef2-2021";

-- Til að dæmi 06.sql-injection.js virki þarf notandinn að eiga töfluna.. :p
ALTER TABLE "students" OWNER TO "vef2-2021";

