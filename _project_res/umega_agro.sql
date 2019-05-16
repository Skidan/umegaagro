CREATE DATABASE IF NOT EXISTS umega_trailers DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE umega_trailers;

CREATE TABLE axles (
	id_axle TINYINT PRIMARY KEY AUTO_INCREMENT,
	axle_manufacturer ENUM('ADR', 'TVZ', 'Teknoax') NOT NULL,
	axle_length_mm ENUM('1700', '1800', '1900', '2000', '2100') NOT NULL,
	axle_brake_size ENUM('300x60', '400x80', '406x120') NOT NULL,
	axle_maxload_kg SMALLINT(5) UNSIGNED NOT NULL,
	axle_is_steered BOOLEAN NOT NULL,
	axle_square_mm TINYINT(3) UNSIGNED NOT NULL,
	axle_system_code CHAR(12)
);
INSERT INTO axles 
    (axle_manufacturer,	axle_length_mm,	axle_brake_size, axle_maxload_kg, axle_is_steered, axle_square_mm, axle_system_code)
VALUES
    ('ADR', '1700', '300x60', 04512, false, 070, 0),
    ('ADR', '1800', '400x80', 06854, false, 080, 0),
    ('ADR', '1900', '400x80', 11400, false, 090, 0),
    ('ADR', '2100', '400x80', 11000, false, 090, 0),
    ('ADR', '2100', '400x80', 11200, false, 110, 0),
    ('ADR', '2100', '400x80', 11500, true, 120, 0),
    ('ADR', '1900', '406x120', 14000, true, 150, 0),
    ('ADR', '1900', '406x120', 14000, false, 150, 0),
    ('ADR', '1900', '406x120', 11000, true, 90, 0),
    ('ADR', '1900', '406x120', 11000, true, 90, 0),
    ('TVZ', '1700', '300x60', 04512, false, 070, 0),
    ('TVZ', '1800', '400x80', 04512, false, 080, 0),
    ('TVZ', '1900', '400x80', 11000, false, 090, 0),
    ('TVZ', '1900', '400x80', 11400, false, 100, 0),
    ('TVZ', '2000', '406x120', 14000, false, 120, 0),
    ('TVZ', '2100', '400x80', 11400, false, 120, 0),
    ('TVZ', '1900', '406x120', 14500, false, 150, 0),
    ('TVZ', '1900', '406x120', 14200, true, 150, 0),
    ('Teknoax', '1700', '300x60', 04512, false, 070, 0),
    ('Teknoax', '1800', '400x80', 04512, false, 080, 0),
    ('Teknoax', '1900', '400x80', 11000, false, 090, 0),
    ('Teknoax', '1900', '400x80', 11400, false, 100, 0),
    ('Teknoax', '2000', '406x120', 14000, false, 120, 0),
    ('Teknoax', '2100', '400x80', 11400, false, 120, 0),
    ('Teknoax', '1900', '406x120', 13800, false, 150, 0),
    ('Teknoax', '1900', '406x120', 13800, true, 150, 0);

CREATE TABLE suspension (
	id_suspension TINYINT PRIMARY KEY AUTO_INCREMENT,
	susp_manufacturer ENUM('ADR', 'TVZ', 'Teknoax', 'Self-made') NOT NULL,
	susp_load_capacity_ton TINYINT(2) UNSIGNED NOT NULL,
	susp_axle_number TINYINT(1) UNSIGNED NOT NULL DEFAULT 2,
	suspension_system_code CHAR(12)
);

CREATE TABLE tires (
	id_tire TINYINT PRIMARY KEY AUTO_INCREMENT,
	tire_type ENUM('radial', 'diagonal'),
	tire_width_mm SMALLINT(3) UNSIGNED NOT NULL,
	tire_width_inch DECIMAL(3,1) NOT NULL,
	tire_height_percent TINYINT(2) UNSIGNED NOT NULL,
	tire_rim_diameter_inch DECIMAL(3,1) NOT NULL,
	tire_rim_width_inch DECIMAL(3,1) NOT NULL,
	tire_weight_kg SMALLINT(3) UNSIGNED,
	tire_pressure_bar TINYINT(1),
	tire_manufacturer CHAR(30) NOT NULL,
	tire_speed_load_index VARCHAR(8),
	tire_is_enforced BOOLEAN NOT NULL DEFAULT 0,
	tire_homologation VARCHAR(30),
	tire_system_code CHAR(12)
);
INSERT INTO tires 
    (tire_type, tire_width_mm, tire_width_inch, tire_height_percent, tire_rim_diameter_inch, tire_rim_width_inch, tire_weight_kg, tire_pressure_bar, tire_manufacturer, tire_speed_load_index, tire_is_enforced, tire_homologation, tire_system_code) 
VALUES 
    ('radial', 710, 28.9, 50, 26.5, 20.0, 210, 4, 'BKT FL650 ULTRA', '186A8', false, 0, 0),
    ('radial', 650, 26.5, 50, 30.5, 24.0, 255, 4, 'BKT FL650 ULTRA', '180A8', false, 0, 0),
    ('radial', 600, 24.5, 50, 22.5, 20.0, 182, 4, 'BKT FL650 ULTRA', '168A8', false, 0, 0),
    ('radial', 600, 24.5, 55, 26.5, 20.0, 196, 4, 'BKT FL650 ULTRA', '168A8', false, 0, 0),
    ('radial', 560, 22.8, 45, 22.5, 18.0, 154, 4, 'BKT FL650 ULTRA', '160A8', false, 0, 0),
    ('radial', 425, 17.3, 45, 22.5, 18.0, 154, 4, 'BKT FL650 ULTRA', '160A8', false, 0, 0),
    ('diagonal', 385, 15.7, 65, 22.5, 16.0, 150, 8, 'Michelin X-BIB', '156A8', false, 0, 0),
    ('radial',500,20.4,60,22.5,18.0,140,4,'Michelin High Flotation','162A8',false, 0, 0),
    ('radial',600,24.5,45,26.5,20.0,182,4,'Michelin X-BIB','176A8',false, 0, 0);

CREATE TABLE rims (
	id_rim TINYINT PRIMARY KEY AUTO_INCREMENT,
	rim_diameter_inch DECIMAL(3,1) NOT NULL,
	rim_width_inch DECIMAL(3,1) NOT NULL,
	rim_hole_num TINYINT UNSIGNED NOT NULL,
	rim_manufacturer CHAR(30) NOT NULL,
	rim_system_code CHAR(12)
);

CREATE TABLE IF NOT EXISTS wheels (
  id_wheel SMALLINT PRIMARY KEY AUTO_INCREMENT,  
  tires_id_tire TINYINT NOT NULL,
  rims_id_rim TINYINT NOT NULL,	
  wheel_system_code VARCHAR(12) NULL,

  CONSTRAINT fk_wheels_tires
    FOREIGN KEY (tires_id_tire)
    REFERENCES tires (id_tire)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,

  CONSTRAINT fk_wheels_rims1
    FOREIGN KEY (rims_id_rim)
    REFERENCES rims (id_rim)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION	
);

CREATE TABLE brakes (
	id_brake TINYINT PRIMARY KEY AUTO_INCREMENT,
	brake_system_code CHAR(12)
);

CREATE TABLE couplings_front (
	id_front_coupling TINYINT PRIMARY KEY AUTO_INCREMENT,
	front_coupl_system_code CHAR(12)
);

CREATE TABLE couplings_rear (
	id_rear_hitch TINYINT PRIMARY KEY AUTO_INCREMENT,
	rear_coupl_system_code CHAR(12)
);

CREATE TABLE rupd (
	id_rupd TINYINT PRIMARY KEY AUTO_INCREMENT,
	rupd_system_code CHAR(12)
);

CREATE TABLE frame (
	id_frame TINYINT PRIMARY KEY AUTO_INCREMENT,
	frame_system_code CHAR(12)
);

CREATE TABLE chassis (
	id_chassis SMALLINT PRIMARY KEY AUTO_INCREMENT,
	chassis_system_code CHAR(12)
);

CREATE TABLE body (
	id_body TINYINT PRIMARY KEY AUTO_INCREMENT
);