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
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at") VALUES
	('00000000-0000-0000-0000-000000000000', '518bcf9c-ad68-4282-b0cd-e0b23db17f8f', 'authenticated', 'authenticated', 'pakokrew@gmail.com', '$2a$10$d9c1NU1mGQshX9keW4DZruliTq8ERiVZ3EtQ4O5PhsGSB98nfAMIq', '2024-01-25 17:12:17.016413+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-01-25 17:12:17.019118+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-01-25 17:12:17.009522+00', '2024-01-25 17:12:17.020972+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL),
	('00000000-0000-0000-0000-000000000000', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'authenticated', 'authenticated', 'pac@opac.me', '$2a$10$MGQ9DcxopVGPFx/7OMJE2.btle0GMs8rouUHwa.EPjiHC/AjaimU.', '2024-01-15 12:07:58.58133+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-01-15 12:40:38.227726+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-01-15 12:07:58.577309+00', '2024-01-15 14:10:28.541702+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('ca09e145-d985-46d8-aa93-922c71c16ae9', 'ca09e145-d985-46d8-aa93-922c71c16ae9', '{"sub": "ca09e145-d985-46d8-aa93-922c71c16ae9", "email": "pac@opac.me", "email_verified": false, "phone_verified": false}', 'email', '2024-01-15 12:07:58.579273+00', '2024-01-15 12:07:58.579326+00', '2024-01-15 12:07:58.579326+00', '17df37b1-93f7-4172-8b97-0fef75ac8bdd'),
	('518bcf9c-ad68-4282-b0cd-e0b23db17f8f', '518bcf9c-ad68-4282-b0cd-e0b23db17f8f', '{"sub": "518bcf9c-ad68-4282-b0cd-e0b23db17f8f", "email": "pakokrew@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-01-25 17:12:17.014953+00', '2024-01-25 17:12:17.014988+00', '2024-01-25 17:12:17.014988+00', '51b5487b-99d3-4c06-b473-f97be07cb07e');

--
-- Data for Name: annonces; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."annonces" ("id", "created_at", "title", "content", "user_id") VALUES
	('ddaecf51-5f52-4c01-84b0-072fa75de70b', '2024-01-15 12:09:31.562675+00', 'cherche', 'marteau', 'ca09e145-d985-46d8-aa93-922c71c16ae9'),
	('567041af-9415-4ad0-89c0-89de049e29bb', '2024-01-15 12:12:21.400068+00', 'qq', 'qqq', 'ca09e145-d985-46d8-aa93-922c71c16ae9'),
	('47a26a18-6737-4db9-a689-c4722dd56708', '2024-01-15 18:04:16.903214+00', 'fsfs', 'fsfs', 'ca09e145-d985-46d8-aa93-922c71c16ae9'),
	('75dcd21f-0133-47cd-b889-fecd3e4b95a2', '2024-01-15 18:05:01.812142+00', 'fdsqf', 'fq', 'ca09e145-d985-46d8-aa93-922c71c16ae9');


--
-- Data for Name: annonce_comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."annonce_comments" ("created_at", "user_id", "content", "annonce_id", "id") VALUES
	('2024-01-15 12:09:35.666875+00', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'random', 'ddaecf51-5f52-4c01-84b0-072fa75de70b', '337e4499-fdd5-4381-8692-7dbde7492cc7'),
	('2024-01-15 12:09:38.745058+00', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'random', 'ddaecf51-5f52-4c01-84b0-072fa75de70b', '5d4bbd65-dc6d-48f4-b8f9-12b74aa04aa4'),
	('2024-01-15 12:09:39.947231+00', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'random', 'ddaecf51-5f52-4c01-84b0-072fa75de70b', 'f50d0f7c-90e0-495f-aa1b-4d617e230f35'),
	('2024-01-15 18:04:25.576131+00', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'random', '47a26a18-6737-4db9-a689-c4722dd56708', '5c8f915e-cf6e-48ef-b229-f6477cc9d195'),
	('2024-01-15 18:04:26.237852+00', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'random', '47a26a18-6737-4db9-a689-c4722dd56708', 'adc73b28-515f-4ffd-a737-c0fd89daaede'),
	('2024-01-15 18:05:03.217478+00', 'ca09e145-d985-46d8-aa93-922c71c16ae9', 'random', '75dcd21f-0133-47cd-b889-fecd3e4b95a2', '831a107e-f9d8-4b3f-ab89-1688041d163c');


--
-- Data for Name: annonce_likes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."annonce_likes" ("user_id", "annonce_id") VALUES
	('ca09e145-d985-46d8-aa93-922c71c16ae9', 'ddaecf51-5f52-4c01-84b0-072fa75de70b'),
	('ca09e145-d985-46d8-aa93-922c71c16ae9', '567041af-9415-4ad0-89c0-89de049e29bb'),
	('ca09e145-d985-46d8-aa93-922c71c16ae9', '47a26a18-6737-4db9-a689-c4722dd56708');


--
-- Data for Name: user_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."user_roles" ("user_id", "role") VALUES
	('ca09e145-d985-46d8-aa93-922c71c16ae9', 'mod');



INSERT INTO "public"."user_profiles" ("user_id", "created_at", "visible", "name", "short_desc", "description", "email", "organisation", "telephone", "avatar_url") VALUES
	('518bcf9c-ad68-4282-b0cd-e0b23db17f8f', '2024-01-25 17:12:17.00885+00', false, 'pakokrew', 'Charpentier', 'J''aime le bois et les poutres
Surtout els poutres', 'pak@gmail.com', 'Charpente33', '+3361235789', ''),
	('ca09e145-d985-46d8-aa93-922c71c16ae9', '2024-01-24 16:59:36.277207+00', true, 'Bob', 'Menuisier', 'Jaime le bois
Des fois je vais me promener dans la foret', 'daz@dez.dfer', 'Asso lesécolos', '+3361235789', '');


--
-- PostgreSQL database dump complete
--

RESET ALL;
