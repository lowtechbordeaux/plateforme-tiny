
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

CREATE SCHEMA IF NOT EXISTS "supabase_migrations";

ALTER SCHEMA "supabase_migrations" OWNER TO "postgres";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE TYPE "public"."roles" AS ENUM (
    'user',
    'mod',
    'admin'
);

ALTER TYPE "public"."roles" OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."annonce_comments" (
    "created_at" timestamp with time zone DEFAULT now() NOT NULL,
    "user_id" uuid DEFAULT auth.uid() NOT NULL,
    "content" text NOT NULL,
    "annonce_id" uuid NOT NULL,
    "id" uuid DEFAULT gen_random_uuid() NOT NULL
);

ALTER TABLE "public"."annonce_comments" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."annonce_likes" (
    "user_id" uuid DEFAULT auth.uid() NOT NULL,
    "annonce_id" uuid NOT NULL
);

ALTER TABLE "public"."annonce_likes" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."annonces" (
    "id" uuid DEFAULT gen_random_uuid() NOT NULL,
    "created_at" timestamp with time zone DEFAULT now() NOT NULL,
    "title" text NOT NULL,
    "content" text,
    "user_id" uuid DEFAULT auth.uid() NOT NULL
);

ALTER TABLE "public"."annonces" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."user_roles" (
    "user_id" uuid NOT NULL,
    "role" public.roles NOT NULL
);

ALTER TABLE "public"."user_roles" OWNER TO "postgres";

ALTER TABLE ONLY "public"."annonce_comments"
    ADD CONSTRAINT "annonce_comments_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."annonce_likes"
    ADD CONSTRAINT "annonce_likes_pkey" PRIMARY KEY ("user_id", "annonce_id");

ALTER TABLE ONLY "public"."annonces"
    ADD CONSTRAINT "annonces_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."user_roles"
    ADD CONSTRAINT "roles_pkey" PRIMARY KEY ("user_id");

ALTER TABLE ONLY "public"."annonce_comments"
    ADD CONSTRAINT "annonce_comments_annonce_id_fkey" FOREIGN KEY (annonce_id) REFERENCES public.annonces(id);

ALTER TABLE ONLY "public"."annonce_comments"
    ADD CONSTRAINT "annonce_comments_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id);

ALTER TABLE ONLY "public"."annonce_likes"
    ADD CONSTRAINT "annonce_likes_annonce_id_fkey" FOREIGN KEY (annonce_id) REFERENCES public.annonces(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."annonce_likes"
    ADD CONSTRAINT "annonce_likes_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."annonces"
    ADD CONSTRAINT "annonces_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."user_roles"
    ADD CONSTRAINT "user_roles_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE;

CREATE POLICY "Admin can assign role" ON "public"."user_roles" FOR INSERT TO authenticated WITH CHECK ((EXISTS ( SELECT 1
   FROM public.user_roles user_roles_1
  WHERE ((auth.uid() = user_roles_1.user_id) AND (user_roles_1.role = 'admin'::public.roles)))));

CREATE POLICY "Enable delete for users based on user_id" ON "public"."annonce_comments" FOR DELETE TO authenticated USING ((auth.uid() = user_id));

CREATE POLICY "Enable delete for users based on user_id" ON "public"."annonce_likes" FOR DELETE TO authenticated USING ((auth.uid() = user_id));

CREATE POLICY "Enable insert for users based on user_id" ON "public"."annonce_comments" FOR INSERT TO authenticated WITH CHECK ((auth.uid() = user_id));

CREATE POLICY "Enable insert for users based on user_id" ON "public"."annonce_likes" FOR INSERT TO authenticated WITH CHECK ((auth.uid() = user_id));

CREATE POLICY "Enable read access for all users" ON "public"."annonce_comments" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."annonce_likes" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."annonces" FOR SELECT USING (true);

CREATE POLICY "Only mod can insert annonces" ON "public"."annonces" FOR INSERT TO authenticated WITH CHECK (((EXISTS ( SELECT 1
   FROM public.user_roles
  WHERE ((auth.uid() = user_roles.user_id) AND (user_roles.role = 'mod'::public.roles)))) AND (auth.uid() = user_id)));

CREATE POLICY "User can see its own role" ON "public"."user_roles" FOR SELECT TO authenticated USING ((auth.uid() = user_id));

ALTER TABLE "public"."annonce_comments" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."annonce_likes" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."annonces" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."user_roles" ENABLE ROW LEVEL SECURITY;

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON TABLE "public"."annonce_comments" TO "anon";
GRANT ALL ON TABLE "public"."annonce_comments" TO "authenticated";
GRANT ALL ON TABLE "public"."annonce_comments" TO "service_role";

GRANT ALL ON TABLE "public"."annonce_likes" TO "anon";
GRANT ALL ON TABLE "public"."annonce_likes" TO "authenticated";
GRANT ALL ON TABLE "public"."annonce_likes" TO "service_role";

GRANT ALL ON TABLE "public"."annonces" TO "anon";
GRANT ALL ON TABLE "public"."annonces" TO "authenticated";
GRANT ALL ON TABLE "public"."annonces" TO "service_role";

GRANT ALL ON TABLE "public"."user_roles" TO "anon";
GRANT ALL ON TABLE "public"."user_roles" TO "authenticated";
GRANT ALL ON TABLE "public"."user_roles" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
