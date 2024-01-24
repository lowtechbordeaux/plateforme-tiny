alter table "public"."user_profiles" add column "avatar_url" text;

alter table "public"."user_profiles" add column "email" text;

alter table "public"."user_profiles" add column "organisation" text;

alter table "public"."user_profiles" add column "telephone" text;

create policy "Auth users can upload avatar"
on "storage"."objects"
as permissive
for insert
to public
with check (((bucket_id = 'avatar'::text) AND (auth.role() = 'authenticated'::text)));


create policy "Everyone can read avatar"
on "storage"."objects"
as permissive
for select
to public
using ((bucket_id = 'avatar'::text));



