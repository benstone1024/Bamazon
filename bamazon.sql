DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INT AUTO_INCREMENT NOT NULL,
product_name  VARCHAR (45) NOT NULL, 
department_name  VARCHAR (45) NOT NULL, 
police DECIMAL (10.2) NOT NULL,
stock_quantity INT(10) NOT NULL,
PRIMARY KEY (item_id)
);

SELECT * FROM products;


INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Uncharted 4", "Video Games", 49.95 , 150),
("DOOM", "Video Games", 59.99 , 200),
("IPAD", "Computers", 399.99 , 150),
("World of Warcraft", "Video Games", 49.95 , 300),
("Macbook Pro", "Computers", 1049.95 , 150),
("Daredevil", "Movies", 29.95 , 150),
("Pepper spray", "Misc", 19.95 , 450),
("Iphone xs", "Phones", 1049.95 , 500),
("Fortenite", "Video Games", 59.95 , 100),
("UAD Apollo Twin ", "Music Instrument", 999.95 , 150)

