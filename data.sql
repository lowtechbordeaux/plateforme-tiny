SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.5 (Ubuntu 15.5-1.pgdg20.04+1)

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

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', 'ae4c1af3-66e8-4007-82b1-940db86dd8b4', '{"action":"login","actor_id":"518bcf9c-ad68-4282-b0cd-e0b23db17f8f","actor_username":"pakokrew@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-01-25 17:27:43.604789+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at") VALUES
	('00000000-0000-0000-0000-000000000000', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'authenticated', 'authenticated', 'pac@opac.me', '$2a$10$MGQ9DcxopVGPFx/7OMJE2.btle0GMs8rouUHwa.EPjiHC/AjaimU.', '2024-01-15 12:07:58.58133+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-01-15 12:40:38.227726+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-01-15 12:07:58.577309+00', '2024-01-15 14:10:28.541702+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL),
	('00000000-0000-0000-0000-000000000000', '518bcf9c-ad68-4282-b0cd-e0b23db17f8f', 'authenticated', 'authenticated', 'pakokrew@gmail.com', '$2a$10$d9c1NU1mGQshX9keW4DZruliTq8ERiVZ3EtQ4O5PhsGSB98nfAMIq', '2024-01-25 17:12:17.016413+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-01-25 17:27:43.606737+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-01-25 17:12:17.009522+00', '2024-01-25 17:27:43.610934+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('ca09e145-d985-46d8-aa93-922c71c16ae9', 'ca09e145-d985-46d8-aa93-922c71c16ae9', '{"sub": "ca09e145-d985-46d8-aa93-922c71c16ae9", "email": "pac@opac.me", "email_verified": false, "phone_verified": false}', 'email', '2024-01-15 12:07:58.579273+00', '2024-01-15 12:07:58.579326+00', '2024-01-15 12:07:58.579326+00', '17df37b1-93f7-4172-8b97-0fef75ac8bdd'),
	('518bcf9c-ad68-4282-b0cd-e0b23db17f8f', '518bcf9c-ad68-4282-b0cd-e0b23db17f8f', '{"sub": "518bcf9c-ad68-4282-b0cd-e0b23db17f8f", "email": "pakokrew@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-01-25 17:12:17.014953+00', '2024-01-25 17:12:17.014988+00', '2024-01-25 17:12:17.014988+00', '51b5487b-99d3-4c06-b473-f97be07cb07e');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('901a1b3e-5e5b-484c-b148-0a547d481ba3', '518bcf9c-ad68-4282-b0cd-e0b23db17f8f', '2024-01-25 17:27:43.606799+00', '2024-01-25 17:27:43.606799+00', NULL, 'aal1', NULL, NULL, 'undici', '192.168.65.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('901a1b3e-5e5b-484c-b148-0a547d481ba3', '2024-01-25 17:27:43.611667+00', '2024-01-25 17:27:43.611667+00', 'password', 'b33cdc6d-51b0-46ad-ae80-7d86bdafd581');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 1, '9oUdR3PVbG_Zeu_JAzPjXQ', '518bcf9c-ad68-4282-b0cd-e0b23db17f8f', false, '2024-01-25 17:27:43.608622+00', '2024-01-25 17:27:43.608622+00', NULL, '901a1b3e-5e5b-484c-b148-0a547d481ba3');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: user_profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."user_profiles" ("user_id", "created_at", "visible", "name", "short_desc", "description", "email", "organisation", "telephone", "avatar_url") VALUES
	('518bcf9c-ad68-4282-b0cd-e0b23db17f8f', '2024-01-25 17:12:17.00885+00', true, 'pakokrew', 'Charpentier', 'J''aime le bois et les poutres
Surtout els poutres', 'pak@gmail.com', 'Charpente33', '+3361235789', ''),
	('ca09e145-d985-46d8-aa93-922c71c16ae9', '2024-01-24 16:59:36.277207+00', true, 'Bob', 'Menuisier', 'Jaime le bois
Des fois je vais me promener dans la foret', 'daz@dez.dfer', 'Asso lesécolos', '+3361235789', 'ca09e145-d985-46d8-aa93-922c71c16ae9.jpeg');


--
-- Data for Name: annonces; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."annonces" ("id", "created_at", "title", "content", "user_id") VALUES
	('ddaecf51-5f52-4c01-84b0-072fa75de70b', '2024-01-15 12:09:31.562675+00', 'cherche', 'marteau', 'ca09e145-d985-46d8-aa93-922c71c16ae9'),
	('567041af-9415-4ad0-89c0-89de049e29bb', '2024-01-15 12:12:21.400068+00', 'qq', 'qqq', 'ca09e145-d985-46d8-aa93-922c71c16ae9'),
	('47a26a18-6737-4db9-a689-c4722dd56708', '2024-01-15 18:04:16.903214+00', 'fsfs', 'fsfs', 'ca09e145-d985-46d8-aa93-922c71c16ae9'),
	('75dcd21f-0133-47cd-b889-fecd3e4b95a2', '2024-01-15 18:05:01.812142+00', 'fdsqf', 'fq', 'ca09e145-d985-46d8-aa93-922c71c16ae9'),
	('0a79db66-db09-4b74-aacf-f962a0f93e9f', '2024-01-15 18:15:20.4753+00', '', '', 'ca09e145-d985-46d8-aa93-922c71c16ae9'),
	('8ed14f87-8559-4e86-8480-2a2cfedae7d1', '2024-01-15 18:17:57.290336+00', '', '', 'ca09e145-d985-46d8-aa93-922c71c16ae9');


--
-- Data for Name: annonce_comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."annonce_comments" ("created_at", "user_id", "content", "annonce_id", "id") VALUES
	('2024-01-15 12:09:35.666875+00', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'random', 'ddaecf51-5f52-4c01-84b0-072fa75de70b', '337e4499-fdd5-4381-8692-7dbde7492cc7'),
	('2024-01-15 12:09:38.745058+00', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'random', 'ddaecf51-5f52-4c01-84b0-072fa75de70b', '5d4bbd65-dc6d-48f4-b8f9-12b74aa04aa4'),
	('2024-01-15 12:09:39.947231+00', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'random', 'ddaecf51-5f52-4c01-84b0-072fa75de70b', 'f50d0f7c-90e0-495f-aa1b-4d617e230f35'),
	('2024-01-15 18:04:25.576131+00', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'random', '47a26a18-6737-4db9-a689-c4722dd56708', '5c8f915e-cf6e-48ef-b229-f6477cc9d195'),
	('2024-01-15 18:04:26.237852+00', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'random', '47a26a18-6737-4db9-a689-c4722dd56708', 'adc73b28-515f-4ffd-a737-c0fd89daaede'),
	('2024-01-15 18:05:03.217478+00', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'random', '75dcd21f-0133-47cd-b889-fecd3e4b95a2', '831a107e-f9d8-4b3f-ab89-1688041d163c'),
	('2024-01-25 18:02:13.656346+00', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'random', '8ed14f87-8559-4e86-8480-2a2cfedae7d1', '047f23ac-de03-43c0-83af-c33ee4e9248f'),
	('2024-01-25 18:02:14.294202+00', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'random', '8ed14f87-8559-4e86-8480-2a2cfedae7d1', 'b6b9577b-ec82-4606-9dc2-42c0674fc7e9'),
	('2024-01-25 18:02:14.834998+00', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'random', '8ed14f87-8559-4e86-8480-2a2cfedae7d1', '87f38e43-f3c3-403f-86d5-6cf1ac63b76f');


--
-- Data for Name: annonce_likes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."annonce_likes" ("user_id", "annonce_id") VALUES
	('ca09e145-d985-46d8-aa93-922c71c16ae9', 'ddaecf51-5f52-4c01-84b0-072fa75de70b'),
	('ca09e145-d985-46d8-aa93-922c71c16ae9', '567041af-9415-4ad0-89c0-89de049e29bb'),
	('ca09e145-d985-46d8-aa93-922c71c16ae9', '47a26a18-6737-4db9-a689-c4722dd56708'),
	('ca09e145-d985-46d8-aa93-922c71c16ae9', '8ed14f87-8559-4e86-8480-2a2cfedae7d1');


--
-- Data for Name: user_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."user_roles" ("user_id", "role") VALUES
	('ca09e145-d985-46d8-aa93-922c71c16ae9', 'mod');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES
	('avatars', 'avatars', NULL, '2024-01-25 17:37:33.475659+00', '2024-01-25 17:37:33.475659+00', true, false, 10485760, '{image/*}', NULL);


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id") VALUES
	('ae300502-937f-4428-9a90-597c8d73cdbc', 'avatars', '1706205138420-Photo-31.jpeg', 'ca09e145-d985-46d8-aa93-922c71c16ae9', '2024-01-25 17:52:18.499549+00', '2024-01-25 17:52:18.499549+00', '2024-01-25 17:52:18.499549+00', '{"eTag": "\"69e521520da525441795710bee140a3c\"", "size": 118592, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-01-25T17:52:18.475Z", "contentLength": 118592, "httpStatusCode": 200}', '9759d682-3446-4051-ad6f-6f7a3a423e93', 'ca09e145-d985-46d8-aa93-922c71c16ae9'),
	('b90cfb9e-b240-42e8-a266-8c40761ae842', 'avatars', '1706205143906-Photo-31.jpeg', 'ca09e145-d985-46d8-aa93-922c71c16ae9', '2024-01-25 17:52:23.942314+00', '2024-01-25 17:52:23.942314+00', '2024-01-25 17:52:23.942314+00', '{"eTag": "\"69e521520da525441795710bee140a3c\"", "size": 118592, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-01-25T17:52:23.937Z", "contentLength": 118592, "httpStatusCode": 200}', '53a2b866-91c8-48ef-b259-3f70b0ea343a', 'ca09e145-d985-46d8-aa93-922c71c16ae9'),
	('402e0f68-1834-4230-8456-6fb16ff43eae', 'avatars', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'ca09e145-d985-46d8-aa93-922c71c16ae9', '2024-01-25 17:52:48.400404+00', '2024-01-25 17:52:48.400404+00', '2024-01-25 17:52:48.400404+00', '{"eTag": "\"69e521520da525441795710bee140a3c\"", "size": 118592, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-01-25T17:52:48.391Z", "contentLength": 118592, "httpStatusCode": 200}', 'd370a291-57af-422b-897c-8242a54950eb', 'ca09e145-d985-46d8-aa93-922c71c16ae9'),
	('10d952da-1c3d-406b-b05f-2db99280a288', 'avatars', 'ca09e145-d985-46d8-aa93-922c71c16ae9.jpeg', 'ca09e145-d985-46d8-aa93-922c71c16ae9', '2024-01-25 17:54:19.711999+00', '2024-01-25 17:54:19.711999+00', '2024-01-25 17:54:19.711999+00', '{"eTag": "\"69e521520da525441795710bee140a3c\"", "size": 118592, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-01-25T17:54:19.705Z", "contentLength": 118592, "httpStatusCode": 200}', '94a98e52-c5ad-422d-86ee-817b6add2464', 'ca09e145-d985-46d8-aa93-922c71c16ae9');


--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: supabase_migrations; Owner: postgres
--

INSERT INTO "supabase_migrations"."schema_migrations" ("version", "statements", "name") VALUES
	('20240115195344', '{"SET statement_timeout = 0","SET lock_timeout = 0","SET idle_in_transaction_session_timeout = 0","SET client_encoding = ''UTF8''","SET standard_conforming_strings = on","SELECT pg_catalog.set_config(''search_path'', '''', false)","SET check_function_bodies = false","SET xmloption = content","SET client_min_messages = warning","SET row_security = off","CREATE EXTENSION IF NOT EXISTS \"pgsodium\" WITH SCHEMA \"pgsodium\"","CREATE SCHEMA IF NOT EXISTS \"supabase_migrations\"","ALTER SCHEMA \"supabase_migrations\" OWNER TO \"postgres\"","CREATE EXTENSION IF NOT EXISTS \"pg_graphql\" WITH SCHEMA \"graphql\"","CREATE EXTENSION IF NOT EXISTS \"pg_stat_statements\" WITH SCHEMA \"extensions\"","CREATE EXTENSION IF NOT EXISTS \"pgcrypto\" WITH SCHEMA \"extensions\"","CREATE EXTENSION IF NOT EXISTS \"pgjwt\" WITH SCHEMA \"extensions\"","CREATE EXTENSION IF NOT EXISTS \"supabase_vault\" WITH SCHEMA \"vault\"","CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\" WITH SCHEMA \"extensions\"","CREATE TYPE \"public\".\"roles\" AS ENUM (
    ''user'',
    ''mod'',
    ''admin''
)","ALTER TYPE \"public\".\"roles\" OWNER TO \"postgres\"","SET default_tablespace = ''''","SET default_table_access_method = \"heap\"","create table IF NOT EXISTS \"public\".\"user_profiles\" (
    \"user_id\" uuid not null default auth.uid(),
    \"created_at\" timestamp with time zone not null default now()
)","ALTER TABLE \"public\".\"user_profiles\" OWNER TO \"postgres\"","CREATE TABLE IF NOT EXISTS \"public\".\"annonce_comments\" (
    \"created_at\" timestamp with time zone DEFAULT now() NOT NULL,
    \"user_id\" uuid DEFAULT auth.uid() NOT NULL,
    \"content\" text NOT NULL,
    \"annonce_id\" uuid NOT NULL,
    \"id\" uuid DEFAULT gen_random_uuid() NOT NULL
)","ALTER TABLE \"public\".\"annonce_comments\" OWNER TO \"postgres\"","CREATE TABLE IF NOT EXISTS \"public\".\"annonce_likes\" (
    \"user_id\" uuid DEFAULT auth.uid() NOT NULL,
    \"annonce_id\" uuid NOT NULL
)","ALTER TABLE \"public\".\"annonce_likes\" OWNER TO \"postgres\"","CREATE TABLE IF NOT EXISTS \"public\".\"annonces\" (
    \"id\" uuid DEFAULT gen_random_uuid() NOT NULL,
    \"created_at\" timestamp with time zone DEFAULT now() NOT NULL,
    \"title\" text NOT NULL,
    \"content\" text,
    \"user_id\" uuid DEFAULT auth.uid() NOT NULL
)","ALTER TABLE \"public\".\"annonces\" OWNER TO \"postgres\"","CREATE TABLE IF NOT EXISTS \"public\".\"user_roles\" (
    \"user_id\" uuid NOT NULL,
    \"role\" public.roles NOT NULL
)","ALTER TABLE \"public\".\"user_roles\" OWNER TO \"postgres\"","alter table \"public\".\"user_profiles\" enable row level security","ALTER TABLE ONLY \"public\".\"user_profiles\"
    ADD CONSTRAINT \"user_profiles_user_id_key\" PRIMARY KEY (\"user_id\")","alter table \"public\".\"user_profiles\" add constraint \"user_profiles_user_id_fkey\" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE not valid","ALTER TABLE ONLY \"public\".\"annonce_comments\"
    ADD CONSTRAINT \"annonce_comments_pkey\" PRIMARY KEY (\"id\")","ALTER TABLE ONLY \"public\".\"annonce_likes\"
    ADD CONSTRAINT \"annonce_likes_pkey\" PRIMARY KEY (\"user_id\", \"annonce_id\")","ALTER TABLE ONLY \"public\".\"annonces\"
    ADD CONSTRAINT \"annonces_pkey\" PRIMARY KEY (\"id\")","ALTER TABLE ONLY \"public\".\"user_roles\"
    ADD CONSTRAINT \"roles_pkey\" PRIMARY KEY (\"user_id\")","ALTER TABLE ONLY \"public\".\"annonce_comments\"
    ADD CONSTRAINT \"annonce_comments_annonce_id_fkey\" FOREIGN KEY (annonce_id) REFERENCES public.annonces(id) ON UPDATE CASCADE ON DELETE CASCADE","ALTER TABLE ONLY \"public\".\"annonce_comments\"
    ADD CONSTRAINT \"annonce_comments_user_id_fkey\" FOREIGN KEY (user_id) REFERENCES public.user_profiles(user_id) ON UPDATE CASCADE ON DELETE CASCADE","ALTER TABLE ONLY \"public\".\"annonce_likes\"
    ADD CONSTRAINT \"annonce_likes_annonce_id_fkey\" FOREIGN KEY (annonce_id) REFERENCES public.annonces(id) ON UPDATE CASCADE ON DELETE CASCADE","ALTER TABLE ONLY \"public\".\"annonce_likes\"
    ADD CONSTRAINT \"annonce_likes_user_id_fkey\" FOREIGN KEY (user_id) REFERENCES public.user_profiles(user_id) ON UPDATE CASCADE ON DELETE CASCADE","ALTER TABLE ONLY \"public\".\"annonces\"
    ADD CONSTRAINT \"annonces_user_id_fkey\" FOREIGN KEY (user_id) REFERENCES public.user_profiles(user_id) ON UPDATE CASCADE ON DELETE CASCADE","ALTER TABLE ONLY \"public\".\"user_roles\"
    ADD CONSTRAINT \"user_roles_user_id_fkey\" FOREIGN KEY (user_id) REFERENCES public.user_profiles(user_id) ON UPDATE CASCADE ON DELETE CASCADE","create policy \"Users can select their profile\"
on \"public\".\"user_profiles\"
as permissive
for select
to public
using (auth.uid() = user_id)","create policy \"Users can delete their profile\"
on \"public\".\"user_profiles\"
as permissive
for delete
to public
using ((auth.uid() = user_id))","create policy \"Users can insert their profile\"
on \"public\".\"user_profiles\"
as permissive
for insert
to public
with check ((auth.uid() = user_id))","create policy \"Users can update their profile\"
on \"public\".\"user_profiles\"
as permissive
for update
to public
using ((auth.uid() = user_id))
with check ((auth.uid() = user_id))","CREATE POLICY \"Admin can assign role\" ON \"public\".\"user_roles\" FOR INSERT WITH CHECK ((EXISTS ( SELECT 1
   FROM public.user_roles user_roles_1
  WHERE ((auth.uid() = user_roles_1.user_id) AND (user_roles_1.role = ''admin''::public.roles)))))","CREATE POLICY \"Enable delete for users based on user_id\" ON \"public\".\"annonce_comments\" FOR DELETE USING ((auth.uid() = user_id))","CREATE POLICY \"Enable delete for users based on user_id\" ON \"public\".\"annonce_likes\" FOR DELETE USING ((auth.uid() = user_id))","CREATE POLICY \"Enable insert for users based on user_id\" ON \"public\".\"annonce_comments\" FOR INSERT WITH CHECK ((auth.uid() = user_id))","CREATE POLICY \"Enable insert for users based on user_id\" ON \"public\".\"annonce_likes\" FOR INSERT WITH CHECK ((auth.uid() = user_id))","CREATE POLICY \"Enable read access for all users\" ON \"public\".\"annonce_comments\" FOR SELECT USING (true)","CREATE POLICY \"Enable read access for all users\" ON \"public\".\"annonce_likes\" FOR SELECT USING (true)","CREATE POLICY \"Enable read access for all users\" ON \"public\".\"annonces\" FOR SELECT USING (true)","CREATE POLICY \"Only mod can insert annonces\" ON \"public\".\"annonces\" FOR INSERT WITH CHECK (((EXISTS ( SELECT 1
   FROM public.user_roles
  WHERE ((auth.uid() = user_roles.user_id) AND (user_roles.role = ''mod''::public.roles)))) AND (auth.uid() = user_id)))","CREATE POLICY \"User can see its own role\" ON \"public\".\"user_roles\" FOR SELECT USING ((auth.uid() = user_id))","ALTER TABLE \"public\".\"annonce_comments\" ENABLE ROW LEVEL SECURITY","ALTER TABLE \"public\".\"annonce_likes\" ENABLE ROW LEVEL SECURITY","ALTER TABLE \"public\".\"annonces\" ENABLE ROW LEVEL SECURITY","ALTER TABLE \"public\".\"user_roles\" ENABLE ROW LEVEL SECURITY","GRANT USAGE ON SCHEMA \"public\" TO \"postgres\"","GRANT USAGE ON SCHEMA \"public\" TO \"anon\"","GRANT USAGE ON SCHEMA \"public\" TO \"authenticated\"","GRANT USAGE ON SCHEMA \"public\" TO \"service_role\"","GRANT ALL ON TABLE \"public\".\"user_profiles\" TO \"anon\"","GRANT ALL ON TABLE \"public\".\"user_profiles\" TO \"authenticated\"","GRANT ALL ON TABLE \"public\".\"user_profiles\" TO \"service_role\"","GRANT ALL ON TABLE \"public\".\"annonce_comments\" TO \"anon\"","GRANT ALL ON TABLE \"public\".\"annonce_comments\" TO \"authenticated\"","GRANT ALL ON TABLE \"public\".\"annonce_comments\" TO \"service_role\"","GRANT ALL ON TABLE \"public\".\"annonce_likes\" TO \"anon\"","GRANT ALL ON TABLE \"public\".\"annonce_likes\" TO \"authenticated\"","GRANT ALL ON TABLE \"public\".\"annonce_likes\" TO \"service_role\"","GRANT ALL ON TABLE \"public\".\"annonces\" TO \"anon\"","GRANT ALL ON TABLE \"public\".\"annonces\" TO \"authenticated\"","GRANT ALL ON TABLE \"public\".\"annonces\" TO \"service_role\"","GRANT ALL ON TABLE \"public\".\"user_roles\" TO \"anon\"","GRANT ALL ON TABLE \"public\".\"user_roles\" TO \"authenticated\"","GRANT ALL ON TABLE \"public\".\"user_roles\" TO \"service_role\"","ALTER DEFAULT PRIVILEGES FOR ROLE \"postgres\" IN SCHEMA \"public\" GRANT ALL ON SEQUENCES  TO \"postgres\"","ALTER DEFAULT PRIVILEGES FOR ROLE \"postgres\" IN SCHEMA \"public\" GRANT ALL ON SEQUENCES  TO \"anon\"","ALTER DEFAULT PRIVILEGES FOR ROLE \"postgres\" IN SCHEMA \"public\" GRANT ALL ON SEQUENCES  TO \"authenticated\"","ALTER DEFAULT PRIVILEGES FOR ROLE \"postgres\" IN SCHEMA \"public\" GRANT ALL ON SEQUENCES  TO \"service_role\"","ALTER DEFAULT PRIVILEGES FOR ROLE \"postgres\" IN SCHEMA \"public\" GRANT ALL ON FUNCTIONS  TO \"postgres\"","ALTER DEFAULT PRIVILEGES FOR ROLE \"postgres\" IN SCHEMA \"public\" GRANT ALL ON FUNCTIONS  TO \"anon\"","ALTER DEFAULT PRIVILEGES FOR ROLE \"postgres\" IN SCHEMA \"public\" GRANT ALL ON FUNCTIONS  TO \"authenticated\"","ALTER DEFAULT PRIVILEGES FOR ROLE \"postgres\" IN SCHEMA \"public\" GRANT ALL ON FUNCTIONS  TO \"service_role\"","ALTER DEFAULT PRIVILEGES FOR ROLE \"postgres\" IN SCHEMA \"public\" GRANT ALL ON TABLES  TO \"postgres\"","ALTER DEFAULT PRIVILEGES FOR ROLE \"postgres\" IN SCHEMA \"public\" GRANT ALL ON TABLES  TO \"anon\"","ALTER DEFAULT PRIVILEGES FOR ROLE \"postgres\" IN SCHEMA \"public\" GRANT ALL ON TABLES  TO \"authenticated\"","ALTER DEFAULT PRIVILEGES FOR ROLE \"postgres\" IN SCHEMA \"public\" GRANT ALL ON TABLES  TO \"service_role\"","-- inserts a row into public.user_profiles
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.user_profiles (user_id)
  values (new.id);
  return new;
end;
$$","-- trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user()","RESET ALL"}', 'init'),
	('20240124170230', '{"alter table \"public\".\"user_profiles\" add column \"visible\" boolean default false","alter table \"public\".\"user_profiles\" add column \"name\" text","alter table \"public\".\"user_profiles\" add column \"short_desc\" text","alter table \"public\".\"user_profiles\" add column \"description\" text","alter table \"public\".\"user_profiles\" add column \"email\" text","alter table \"public\".\"user_profiles\" add column \"organisation\" text","alter table \"public\".\"user_profiles\" add column \"telephone\" text","alter table \"public\".\"user_profiles\" add column \"avatar_url\" text","create policy \"Auth users can upload avatar\"
on \"storage\".\"objects\"
as permissive
for insert
to public
with check (((bucket_id = ''avatar''::text) AND (auth.role() = ''authenticated''::text)))","create policy \"Everyone can read avatar\"
on \"storage\".\"objects\"
as permissive
for select
to public
using ((bucket_id = ''avatar''::text))","create policy \"Enable read access for visible users\"
on \"public\".\"user_profiles\"
as permissive
for select
to public
using (visible = true)"}', 'user_profiles');


--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
