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

SELECT * FROM games_data;

DROP TABLE year_data;

CREATE TABLE year_data AS
	SELECT year, na_sales, eu_sales, jp_sales, other_sales, global_sales
	FROM games_data;
	
SELECT * FROM year_data;

SELECT * FROM year_data
	ORDER BY year DESC;

SELECT DISTINCT year
FROM year_data
ORDER BY year ASC;

DROP TABLE data_2010;

CREATE TABLE data_2010 AS
	SELECT * FROM year_data 
	WHERE year='2011';
	
SELECT * FROM data_2010;

DROP TABLE data_2011;

CREATE TABLE data_2011 AS
	SELECT * FROM year_data 
	WHERE year='2011';
	
SELECT * FROM data_2011;

DROP TABLE data_2012;

CREATE TABLE data_2012 AS
	SELECT * FROM year_data 
	WHERE year='2012';
	
SELECT * FROM data_2012;

DROP TABLE data_2013;

CREATE TABLE data_2013 AS
	SELECT * FROM year_data 
	WHERE year='2013';
	
SELECT * FROM data_2013;

DROP TABLE data_2014;

CREATE TABLE data_2014 AS
	SELECT * FROM year_data 
	WHERE year='2014';
	
SELECT * FROM data_2014;

DROP TABLE data_2015;

CREATE TABLE data_2015 AS
	SELECT * FROM year_data 
	WHERE year='2015';
	
SELECT * FROM data_2015;

DROP TABLE data_2016;

CREATE TABLE data_2016 AS
	SELECT * FROM year_data 
	WHERE year='2016';
	
SELECT * FROM data_2016;
	
DROP TABLE data_2017;

CREATE TABLE data_2017 AS
	SELECT * FROM year_data 
	WHERE year='2017';
	
SELECT * FROM data_2017;
	
DROP TABLE data_2020;

CREATE TABLE data_2020 AS
	SELECT * FROM year_data 
	WHERE year='2020';
	
SELECT * FROM data_2020;
	
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