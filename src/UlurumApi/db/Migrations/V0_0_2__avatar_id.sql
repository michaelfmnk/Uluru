alter table users add column avatar_id varchar(100);
alter table posts add column content text not null default '';
update posts set content=title;
alter table posts drop column title;
alter table posts alter column content drop default;
