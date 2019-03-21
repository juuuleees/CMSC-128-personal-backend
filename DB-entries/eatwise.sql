drop database eatwise;
create database eatwise;

use eatwise;

create table user (
    user_id int auto_increment,
    username varchar(50) not null,
    password varchar(50) not null,
    email varchar(50) not null,
    primary key(user_id)
);

create table admin (
    admin_id int auto_increment,
    user_id int not null,
    primary key(admin_id),
    foreign key(user_id) references user(user_id)
);

create table restaurant (
    restaurant_id int auto_increment,
    name varchar(50),
    type varchar(50),
    address varchar(50),
    description varchar(100),
    longitude float(53),
    latitude float(53),
    opening_time time,
    closing_time time,
    price_min float(24),
    price_max float(24),
    delivery int(1),
    bathroom int(1),
    votes int,
    primary key(restaurant_id)
);

create table offering (
    offering_id int auto_increment,
    specialty varchar(50) not null,
    primary key(offering_id)
);

create table restaurant_offering (
    restaurant_id int not null,
    offering_id int not null,
    foreign key(restaurant_id) references restaurant(restaurant_id),
    foreign key(offering_id) references offering(offering_id)
);

create table contact_info (
    contact_info_id int auto_increment,
    contact_number varchar(50) not null,
    primary key(contact_info_id)
);

create table restaurant_contact_info (
    restaurant_id int not null,
    contact_info_id int not null,
    foreign key(restaurant_id) references restaurant(restaurant_id),
    foreign key(contact_info_id) references contact_info(contact_info_id)
);
