use eatwise;

---------------------------- PROCEDURES --------------------

-- Procedure for creating a new user
delimiter $$
create procedure create_user(in_username varchar(50), in_password varchar(50), in_email varchar(50))
    begin
        insert into user(username, password, email) values(in_username, in_password, in_email);
    end $$
delimiter ;

delimiter $$

-- Procedure for creating a store
create procedure create_store(in_name varchar(50), in_type varchar(50), in_address varchar(50), in_description varchar(200), in_opening_time time, in_closing_time time, in_price_min float(24), in_price_max float(24), in_delivery bit(1), in_bathroom bit(1))
    begin
        insert into store(name, type, address, description, longitude, latitude, opening_time, closing_time, price_min, price_max, delivery, bathroom, votes) values(in_name, in_type, in_address, in_description, null, null, in_opening_time, in_closing_time, in_price_min, in_price_max, in_delivery, in_bathroom, 0);
    end $$
delimiter ;

delimiter $$

-- Procedure for offerings
create procedure create_offering(in_specialty varchar(50))
    begin
        insert into offering(specialty) values(in_specialty);
    end $$
delimiter ;

delimiter $$

-- Procedure for store offerings
create procedure create_store_offering(in_store_id int, in_offering_id int)
    begin
        insert into store_offering values(in_store_id, in_offering_id);
    end $$
delimiter ;

delimiter $$

-- Procedure for contact_infos
create procedure create_contact_info(in_contact_number varchar(50))
    begin
        insert into contact_info(contact_number) values(in_contact_number);
    end $$
delimiter ;

delimiter $$

-- Procedure for store contact infos
create procedure create_store_contact_info(in_store_id int, in_contact_info_id int)
    begin
        insert into store_contact_info values(in_store_id, in_contact_info_id);
    end $$
delimiter ;

delimiter $$

-- Procedure for reports
create procedure create_report(in_description varchar(300), in_time_report datetime)
    begin
        insert into report(description, time_report) values(in_description, current_timestamp);
    end $$
delimiter ;

delimiter $$

-- Procedure for store reports
create procedure create_store_report(in_store_id int, in_report_id int)
    begin
        insert into store_report values(in_store_id, in_report_id);
    end $$
delimiter ;

delimiter $$

-- Procedure for comments
create procedure create_comment(in_description varchar(300), in_time_comment datetime)
    begin
        insert into comment(description, time_comment) values(in_description, current_timestamp);
    end $$
delimiter ;

delimiter $$

-- Procedure for store comments
create procedure create_store_comment(in_store_id int, in_comment_id int)
    begin
        insert into store_comment values(in_store_id, in_comment_id);
    end $$
delimiter ;

delimiter $$





-- OK: Procedure for viewing all users for an admin
create procedure view_all_users_admin()
    begin
        select * from user;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing all users
create procedure view_all_users()
    begin
        select username, password, email from user;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing a specific user for an admin
create procedure view_user_admin(in_user_id int)
    begin
        select * from user where in_user_id = user_id;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing a specific user
create procedure view_user(in_user_id int)
    begin
        select username, password, email from user where in_user_id = user_id;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing all stores for an admin
create procedure view_all_stores_admin()
    begin
        select * from store;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing all stores
create procedure view_all_stores()
    begin
        select name, type, address, description, longitude, latitude, opening_time, closing_time, price_min, price_max, delivery, bathroom, votes from store where is_added = 1;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing a specific store for admins
create procedure view_store_admin(in_store_id int)
    begin
        select * from store where in_store_id = store_id;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing a specific store
create procedure view_store(in_store_id int)
    begin
        select name, type, address, description, longitude, latitude, opening_time, closing_time, price_min, price_max, delivery, bathroom, votes from store from store where in_store_id = store_id and is_added = 1;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing a specific store by name for admins
create procedure view_store_by_name_admin(in_name varchar(50))
    begin
        select * from store where name = in_name;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing a specific store by name
create procedure view_store_by_name(in_name varchar(50))
    begin
        select name, type, address, description, longitude, latitude, opening_time, closing_time, price_min, price_max, delivery, bathroom, votes from store from store where name = in_name and is_added = 1;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing specific stores by type for admins
create procedure view_store_by_type_admin(in_type varchar(50))
    begin
        select * from store where type = in_type;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing specific stores by type
create procedure view_store_by_type(in_type varchar(50))
    begin
        select name, type, address, description, longitude, latitude, opening_time, closing_time, price_min, price_max, delivery, bathroom, votes from store from store where type = in_type and is_added = 1;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing viewing specific stores by location for admin
create procedure view_store_by_address_admin(in_address varchar(50))
    begin
        select * from store where address = in_address;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing viewing specific stores by location
create procedure view_store_by_address(in_address varchar(50))
    begin
        select name, type, address, description, longitude, latitude, opening_time, closing_time, price_min, price_max, delivery, bathroom, votes from store from store where address = in_address and is_added = 1;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing specific stores by exact opening time for admins
create procedure view_store_by_opening_time_admin(in_opening_time time)
    begin
        select * from store where opening_time = in_opening_time;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing specific stores by exact opening time
create procedure view_store_by_opening_time(in_opening_time time)
    begin
        select name, type, address, description, longitude, latitude, opening_time, closing_time, price_min, price_max, delivery, bathroom, votes from store from store where opening_time = in_opening_time and is_added = 1;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing specific stores by exact closing time for admins
create procedure view_store_by_closing_time_admin(in_closing_time time)
    begin
        select * from store where closing_time = in_closing_time;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing specific stores by exact closing time
create procedure view_store_by_closing_time(in_closing_time time)
    begin
        select name, type, address, description, longitude, latitude, opening_time, closing_time, price_min, price_max, delivery, bathroom, votes from store from store where closing_time = in_closing_time and is_added = 1;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing specific stores by price min and max, ascending for admins
create procedure view_store_by_price_admin(in_price_min float(24), in_price_max float(24))
    begin
        select * from store where (price_min >= in_price_min and price_max <= in_price_max) order by price_min asc, price_max asc;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing specific stores by price min and max, ascending
create procedure view_store_by_price(in_price_min float(24), in_price_max float(24))
    begin
        select name, type, address, description, longitude, latitude, opening_time, closing_time, price_min, price_max, delivery, bathroom, votes from store from store where (price_min >= in_price_min and price_max <= in_price_max) and is_added = 1 order by price_min asc, price_max asc;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing specific stores by price min and max, descending for admins
create procedure view_store_by_price_desc_admin(in_price_min float(24), in_price_max float(24))
    begin
        select * from store where (price_min >= in_price_min and price_max <= in_price_max) order by price_max desc, price_min desc;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing specific stores by price min and max, descending
create procedure view_store_by_price_desc(in_price_min float(24), in_price_max float(24))
    begin
        select name, type, address, description, longitude, latitude, opening_time, closing_time, price_min, price_max, delivery, bathroom, votes from store from store where (price_min >= in_price_min and price_max <= in_price_max) and is_added = 1 order by price_max desc, price_min desc;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing stores with delivery availability for admins
create procedure view_store_by_delivery_admin()
    begin
        select * from store where delivery != 0;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing stores with delivery availability
create procedure view_store_by_delivery()
    begin
        select name, type, address, description, longitude, latitude, opening_time, closing_time, price_min, price_max, delivery, bathroom, votes from store from store where delivery != 0 and is_added = 1;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing stores with bathroom availability for admins
create procedure view_store_by_bathroom_admin()
    begin
        select * from store where bathroom != 0;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing stores with bathroom availability
create procedure view_store_by_bathroom()
    begin
        select name, type, address, description, longitude, latitude, opening_time, closing_time, price_min, price_max, delivery, bathroom, votes from store from store where bathroom != 0 and is_added = 1;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing stores by specialty for admins
create procedure view_store_by_specialty_admin(in_specialty varchar(50))
    begin
        select store.store_id, name, type, address, longitude, latitude, opening_time, closing_time, price_min, price_max, delivery, bathroom
        from store_offering, offering, store
        where specialty = in_specialty and store_offering.store_id = store.store_id AND store_offering.offering_id = offering.offering_id;
    end $$
delimiter ;

delimiter $$

-- OK: Procedure for viewing stores by specialty
create procedure view_store_by_specialty(in_specialty varchar(50))
    begin
        select store.store_id, name, type, address, longitude, latitude, opening_time, closing_time, price_min, price_max, delivery, bathroom
        from store_offering, offering, store
        where specialty = in_specialty and store_offering.store_id = store.store_id AND store_offering.offering_id = offering.offering_id;
    end $$
delimiter ;

delimiter $$

-- PENDING: Procedure for viewing comments for a ceratin store
create procedure view_comment_by_store(in_store_id int)
    begin
        
    end $$
delimiter ;

delimiter $$

-- PENDING: Procedure for viewing reports for a certain store
create procedure view_report_by_store(in_store_id int)
    begin

    end $$
delimiter ;

delimiter $$

create procedure delete_user(in_user_id int)
    begin
        delete from user where user.user_id = in_user_id;
    end $$
delimiter ;

delimiter $$

create procedure delete_store(in_store_id int)
    begin
        delete from store where store.store_id = in_store_id;
    end $$
delimiter ;

delimiter $$

create procedure delete_contact_info(in_contact_info_id int)
    begin
        delete from contact_info where contact_info.contact_info_id = in_contact_info_id;
    end $$
delimiter ;

delimiter $$

create procedure delete_offering(in_offering_id int)
    begin
        delete from offering where offering.offering_id = in_offering_id;
    end $$
delimiter ;

delimiter $$

create procedure delete_store_contact_info(in_contact_info_id int)
    begin
        delete from store_contact_info where store_contact_info.contact_info_id = in_contact_info_id;
    end $$
delimiter ;

delimiter $$

create procedure delete_all_store_contact_info(in_store_id int)
    begin
        delete from store_contact_info where store_contact_info.store_id = in_store_id;
    end $$
delimiter ;

delimiter $$

create procedure delete_store_offering(in_offering_id int)
    begin
        delete from store_offering where store_offering.offering_id = in_offering_id;
    end $$
delimiter ;

delimiter $$

create procedure delete_all_store_offering(in_store_id int)
    begin
        delete from store_offering where store_offering.store_id = in_store_id;
    end $$
delimiter ;

delimiter $$

create procedure update_store_name(in_store_id int, in_name varchar(50))
    begin
        update store set name = in_name where store_id = in_store_id;
    end $$
delimiter ;

delimiter $$

-- Procedure for editing the type
create procedure update_store_type(in_store_id int, in_type varchar(50))
    begin
        update store set type = in_type where store_id = in_store_id;
    end $$
delimiter ;

delimiter $$

-- Procedure for editing the address
create procedure update_store_address(in_store_id int, in_address varchar(50))
    begin
        update store set address = in_address where store_id = in_store_id;
    end $$
delimiter ;

delimiter $$

-- Procedure for editing the opening time
create procedure update_store_opening_time(in_store_id int, in_opening_time time)
    begin
        update store set opening_time = in_opening_time where store_id = in_store_id;
    end $$
delimiter ;

delimiter $$

-- Procedure for editing the closing time
create procedure update_store_closing_time(in_store_id int, in_closing_time time)
    begin
        update store set closing_time = in_closing_time where store_id = in_store_id;
    end $$
delimiter ;

delimiter $$

-- Procedure for editing the minimum price
create procedure update_store_minimum_price(in_store_id int, in_price_min float(24))
    begin
        update store set price_min = in_price_min where store_id = in_store_id;
    end $$
delimiter ;

delimiter $$

-- Procedure for editing the maximum price
create procedure update_store_maximum_price(in_store_id int, in_price_max float(24))
    begin
        update store set price_max = in_price_max where store_id = in_store_id;
    end $$
delimiter ;

delimiter $$

create procedure update_delivery(in_store_id int, in_delivery int)
    begin
        update store set delivery = in_delivery where store_id = in_store_id;
    end $$
delimiter ;

delimiter $$

create procedure update_bathroom(in_store_id int, in_bathroom int)
    begin
        update store set bathroom = in_bathroom where store_id = in_store_id;
    end $$
delimiter ;

delimiter $$

create procedure update_offering(in_offering_id int, in_specialty varchar(50))
    begin
        update offering set specialty = in_specialty where offering_id = in_offering_id;
    end $$
delimiter ;

delimiter $$

create procedure update_contact_info(in_contact_info_id int, in_contact_number varchar(50))
    begin
        update contact_info set contact_number = in_contact_number where contact_info_id = in_contact_info_id;
    end $$
delimiter ;