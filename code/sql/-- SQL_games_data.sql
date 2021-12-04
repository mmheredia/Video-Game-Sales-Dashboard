-- SQL_games_data
-- Creating the table for our SQL database.

DROP TABLE games_data;

CREATE TABLE games_data(
	game_id SERIAL PRIMARY KEY,
	rank INT,
	name TEXT,
	platform TEXT,
	year INT, 
	genre TEXT, 
	publisher TEXT,
  na_sales FLOAT, 
	eu_sales FLOAT,
	jp_sales FLOAT,
	other_sales FLOAT,
	global_sales FLOAT
);

DROP TABLE sales_data;

CREATE TABLE sales_data (
	game_id SERIAL PRIMARY KEY,
	year INT,
	na_sales FLOAT, 
	eu_sales FLOAT,
	jp_sales FLOAT,
	other_sales FLOAT,
	global_sales FLOAT
);

INSERT INTO sales_data (year, na_sales, eu_sales, jp_sales, other_sales, global_sales)
VALUES 	
	(2010, 4078.16, 2271.56, 1218.38, 754.03, 8322.13),
	(2011, 3962.42, 2204.82, 1176.22, 725.98, 8069.44),
	(2012, 3926.81, 2181.87, 1168.1, 719.84, 7996.62),
	(2013, 4063.07, 2266.57, 1218.07, 752.36, 8300.07),
	(2014, 3864.53, 2140.42, 1155.25, 706.16, 7866.36),
	(2015, 3932.57, 2187.68, 1168.45, 722.15, 8010.85),
	(2016, 3299.08, 1770.88, 989.78, 591.21, 6650.95),
	(2017, 1010.01, 1900.65, 563.09, 350.39, 3825.14),
	(2020, 535.16, 223.95, 260.21, 71.71, 1091.03);
	
SELECT * FROM sales_data;
