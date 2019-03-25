drop database if exists moviesample;

create database moviesample;

use moviesample;

create table if not exists movie(
	_id int auto_increment,
	title varchar(50),
	year int,
	actor varchar(50),
	director varchar(50),
	franchise varchar(50),
	constraint movie_id_pk primary key(_id)
);

-- INITIAL DATA ---------------------------

insert into movie(title, year, actor, director, franchise)
	values
	("Backend Boyz", 2019, "Backend Devs", "Backend TL", "CS128"),
	("Some Movie Title", 2019, "Some actors", "Some director", "Some franchise"),
	("Twilight", 2008, "Kristen Stewart", "Catherine Hardwicke", "Twilight")