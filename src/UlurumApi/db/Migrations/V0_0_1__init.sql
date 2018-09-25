create table users (
  user_id serial primary key,
  login varchar(200) unique not null,
  first_name varchar(60),
  last_name varchar(60),
  password varchar(60) not null,
  salt varchar(40) not null,
  last_password_reset_date timestamp without time zone not null default now()
);

create table posts (
  post_id serial primary key,
  title   VARCHAR(120),
  date    timestamp without time zone,
  user_id int not null references users(user_id) on update cascade on delete cascade
);

create table comments (
  comment_id serial primary key,
  post_id int not null references posts(post_id) on update cascade on delete cascade,
  user_id int not null references users(user_id) on update cascade on delete cascade,
  replied_comment_id int references comments(comment_id) on update cascade on delete cascade,
  content text not null,
  date timestamp without time zone not null default now()
);

create table authorities (
  authority_id serial primary key,
  authority_name varchar(40) unique not null
);

create table users_authorities (
  user_id      int not null references users(user_id) on update cascade on delete cascade,
  authority_id int not null references authorities(authority_id) on update cascade on delete cascade,
  constraint users_authorities_pk primary key (user_id, authority_id)
);

create table likes (
  user_id int not null references users(user_id) on update cascade on delete cascade,
  post_id int not null references posts(post_id) on update cascade on delete cascade,
  constraint likes_pk primary key (user_id, post_id)
);

create table subscriptions (
  follower_user_id int not null references users(user_id) on update cascade on delete cascade,
  followed_user_id int not null references users(user_id) on update cascade on delete cascade,
  constraint subscriptions_pk primary key (follower_user_id, followed_user_id)
);

insert into authorities (authority_id, authority_name)
values (1, 'ADMIN'),
       (2, 'USER');
