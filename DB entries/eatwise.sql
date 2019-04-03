drop database if exists eatwise;
create database eatwise;

use eatwise;

create table user (
    user_id int auto_increment,
    username varchar(50) not null,
    password varchar(50) not null,
    email varchar(50) not null,
    user_type int(1) not null,
    primary key(user_id)
);

create table store (
    store_id int auto_increment,
    name varchar(50),
    type varchar(50),
    address varchar(50),
    description varchar(200),
    longitude float(53),
    latitude float(53),
    opening_time time,
    closing_time time,
    price_min float(24),
    price_max float(24),
    delivery int(1),
    bathroom int(1),
    votes int,
    is_added int(1),
    primary key(store_id)
);

create table user_store(
    user_id int not null,
    store_id int not null,
    foreign key(user_id) references user(user_id),
    foreign key(store_id) references store(store_id)
);

create table offering (
    offering_id int auto_increment,
    specialty varchar(50) not null,
    primary key(offering_id)
);

create table store_offering (
    store_id int not null,
    offering_id int not null,
    foreign key(store_id) references store(store_id),
    foreign key(offering_id) references offering(offering_id)
);

create table contact_info (
    contact_info_id int auto_increment,
    contact_number varchar(50) not null,
    primary key(contact_info_id)
);

create table store_contact_info (
    store_id int not null,
    contact_info_id int not null,
    foreign key(store_id) references store(store_id),
    foreign key(contact_info_id) references contact_info(contact_info_id)
);

create table report (
	user_id int not null,
    report_id int auto_increment,
    description varchar(300) not null,
    time_report datetime not null,
    primary key(report_id),
    foreign key(user_id) references user(user_id)
);

create table store_report (
    store_id int not null,
    report_id int not null,
    foreign key(store_id) references store(store_id),
    foreign key(report_id) references report(report_id)
);

create table comment (
	user_id int not null,
    comment_id int auto_increment,
    description varchar(300) not null,
    time_comment datetime not null,
    primary key(comment_id),
    foreign key(user_id) references user(user_id)
);

create table store_comment (
    store_id int not null,
    comment_id int not null,
    foreign key(store_id) references store(store_id),
    foreign key(comment_id) references comment(comment_id)
);