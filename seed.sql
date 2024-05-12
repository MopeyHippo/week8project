create table if not exists
  posts (
    id bigint primary key generated always as identity,
    title text not null,
    content text not null
);

create table if not exists
  comments (
    id bigint primary key generated always as identity,
    title text not null,
    content text not null,
    post_id text not null
);