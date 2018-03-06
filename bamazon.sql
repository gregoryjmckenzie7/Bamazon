drop database if exists bamazon_db;

create database bamazon_db;

use bamazon_db;

create table products (
	item_id integer(11) auto_increment not null,
	product_name varchar(100) not null,
	department_name varchar(100) not null,
	price integer default 0,
    stock_quantity integer default 0,
    primary key (item_id)
);

use bamazon_db;

insert into products (product_name, department_name, price, stock_quantity)
values ("HDTV", "Electronics", 900, 20);
insert into products (product_name, department_name, price, stock_quantity)
values ("Stationary Bike", "Fitness", 300, 10);
insert into products (product_name, department_name, price, stock_quantity)
values ("Dinosaur Costume", "Costumes", 34, 98);
insert into products (product_name, department_name, price, stock_quantity)
values ("Leather Jacket", "Fashion", 249, 28);
insert into products (product_name, department_name, price, stock_quantity)
values ("Callaway Golf Set", "Sports", 310, 20);
insert into products (product_name, department_name, price, stock_quantity)
values ("Blade Runner 2049", "Movies", 25, 200);
insert into products (product_name, department_name, price, stock_quantity)
values ("Hoverboard", "Leisure Sports", 2000, 10);
insert into products (product_name, department_name, price, stock_quantity)
values ("Robotic Android", "Electronics", 10000, 3);
insert into products (product_name, department_name, price, stock_quantity)
values ("Flip Flops", "Fashion", 8, 750);
insert into products (product_name, department_name, price, stock_quantity)
values ("Piano Key Neck Tie", "Fashion", 16, 47);

select * from products;

