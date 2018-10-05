insert into users (user_id, login, first_name, last_name, password, salt, last_password_reset_date, avatar_id) values
(1, 'test@test.com', null, null, '$2a$10$Yw/PB2jPgDGP1ZIDBVG.fuPUmkBV08thVQWny0dU85Oa1rS0DObau', '$2a$10$Yw/PB2jPgDGP1ZIDBVG.fu', '2018-10-05 08:40:23.711854', null),
(2, 'test1@test.com', null, null, '$2a$10$Yw/PB2jPgDGP1ZIDBVG.fuPUmkBV08thVQWny0dU85Oa1rS0DObau', '$2a$10$Yw/PB2jPgDGP1ZIDBVG.fu', '2018-10-05 08:40:23.711854', null),
(3, 'test2@test.com', null, null, '$2a$10$Yw/PB2jPgDGP1ZIDBVG.fuPUmkBV08thVQWny0dU85Oa1rS0DObau', '$2a$10$Yw/PB2jPgDGP1ZIDBVG.fu', '2018-10-05 08:40:23.711854', null),
(4, 'test3@test.com', null, null, '$2a$10$Yw/PB2jPgDGP1ZIDBVG.fuPUmkBV08thVQWny0dU85Oa1rS0DObau', '$2a$10$Yw/PB2jPgDGP1ZIDBVG.fu', '2018-10-05 08:40:23.711854', null),
(5, 'test4@test.com', null, null, '$2a$10$Yw/PB2jPgDGP1ZIDBVG.fuPUmkBV08thVQWny0dU85Oa1rS0DObau', '$2a$10$Yw/PB2jPgDGP1ZIDBVG.fu', '2018-10-05 08:40:23.711854', null),
(6, 'test5@test.com', null, null, '$2a$10$Yw/PB2jPgDGP1ZIDBVG.fuPUmkBV08thVQWny0dU85Oa1rS0DObau', '$2a$10$Yw/PB2jPgDGP1ZIDBVG.fu', '2018-10-05 08:40:23.711854', null);

insert into subscriptions (follower_user_id, followed_user_id) values
(1, 2),
(1, 3),
(1, 4),
(2, 1);

insert into posts (content, "date", user_id) values 
('some tweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet', now(), 1),
('some tweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet', now(), 1),
('some tweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet', now(), 1),
('some tweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet', now(), 2),
('some tweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet', now(), 2),
('some tweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet', now(), 2),
('some tweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet', now(), 3),
('some tweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet', now(), 3),
('some tweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet', now(), 3),
('some tweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet', now(), 4),
('some tweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet', now(), 4),
('some tweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet', now(), 5);
