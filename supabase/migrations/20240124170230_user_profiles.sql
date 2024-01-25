alter table "public"."user_profiles" add column "visible" boolean default false;
alter table "public"."user_profiles" add column "name" text;
alter table "public"."user_profiles" add column "short_desc" text;
alter table "public"."user_profiles" add column "description" text;
alter table "public"."user_profiles" add column "email" text;
alter table "public"."user_profiles" add column "organisation" text;
alter table "public"."user_profiles" add column "telephone" text;
alter table "public"."user_profiles" add column "avatar_url" text;

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES
	('avatars', 'avatars', NULL, '2024-01-25 17:37:33.475659+00', '2024-01-25 17:37:33.475659+00', true, false, 10485760, '{image/*}', NULL);

create policy "Auth users can upload avatar"
on "storage"."objects"
as permissive
for insert
to public
with check (((bucket_id = 'avatars'::text) AND (auth.role() = 'authenticated'::text)));


create policy "Everyone can read avatar"
on "storage"."objects"
as permissive
for select
to public
using ((bucket_id = 'avatars'::text));



create policy "Enable read access for visible users"
on "public"."user_profiles"
as permissive
for select
to public
using (visible = true);
