DROP TABLE games_data;

CREATE TABLE games_data(
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

SELECT * FROM year_data
ORDER BY year DESC;

SELECT DISTINCT year
FROM year_data
ORDER BY year ASC;

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
	year INT,
	na_sales FLOAT, 
	eu_sales FLOAT,
	jp_sales FLOAT,
	other_sales FLOAT,
	global_sales FLOAT
);

INSERT INTO sales_data (year, na_sales, eu_sales, jp_sales, other_sales, global_sales)
VALUES (2015, 205.64, 195.42, 67.44, 60.02, 528.52),
	(2016, 45.32, 53.52, 27.34,	15.50, 141.68),
	(2017, 0.00, 0.00, 0.10, 0.00, 0.10),
	(2020, 0.54, 0.00, 0.00, 0.04, 0.58);
	
SELECT * FROM sales_data;


INSERT INTO sales_data (year, na_sales, eu_sales, jp_sales, other_sales, global_sales)
VALUES 
	(2010, 608.48, 353.14, 118.98, 119.80, 1200.40),
	(2011, 482.00, 334.62, 106.08, 108.78, 1031.48),
	(2012, 309.86, 237.52, 103.48, 75.64, 726.50),
	(2013, 309.54, 251.60, 95.18, 79.64, 735.96),
	(2014, 263.94, 254.26, 78.92, 80.04, 674.16),
	(2015, 205.64, 195.42, 67.44, 60.02, 528.52),
	(2016, 45.32, 53.52, 27.34,	15.50, 141.68),
	(2017, 0.00, 0.00, 0.10, 0.00, 0.10),
	(2020, 0.54, 0.00, 0.00, 0.04, 0.58);
	
SELECT * FROM sales_data;