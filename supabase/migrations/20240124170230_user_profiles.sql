create table "public"."user_profiles" (
    "id" uuid not null default gen_random_uuid(),
    "user_id" uuid not null default auth.uid(),
    "created_at" timestamp with time zone not null default now(),
    "name" text not null,
    "short_desc" text,
    "description" text
);


alter table "public"."user_profiles" enable row level security;

CREATE UNIQUE INDEX user_profiles_pkey ON public.user_profiles USING btree (id);

CREATE UNIQUE INDEX user_profiles_user_id_2_key ON public.user_profiles USING btree (user_id);

alter table "public"."user_profiles" add constraint "user_profiles_pkey" PRIMARY KEY using index "user_profiles_pkey";

alter table "public"."user_profiles" add constraint "user_profiles_user_id_2_key" UNIQUE using index "user_profiles_user_id_2_key";

alter table "public"."user_profiles" add constraint "user_profiles_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."user_profiles" validate constraint "user_profiles_user_id_fkey";

GRANT ALL ON TABLE "public"."user_profiles" TO "anon";
GRANT ALL ON TABLE "public"."user_profiles" TO "authenticated";
GRANT ALL ON TABLE "public"."user_profiles" TO "service_role";

create policy "Enable read access for all users"
on "public"."user_profiles"
as permissive
for select
to public
using (true);


create policy "Users can delete their profile"
on "public"."user_profiles"
as permissive
for delete
to public
using ((auth.uid() = user_id));


create policy "Users can insert their profile"
on "public"."user_profiles"
as permissive
for insert
to public
with check ((auth.uid() = user_id));


create policy "Users can update their profile"
on "public"."user_profiles"
as permissive
for update
to public
using ((auth.uid() = user_id))
with check ((auth.uid() = user_id));



