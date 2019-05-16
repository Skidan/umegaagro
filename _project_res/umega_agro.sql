CREATE DATABASE IF NOT EXISTS umega_trailers DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE umega_trailers;

CREATE TABLE chassis (
	id_chassis SMALLINT PRIMARY KEY AUTO_INCREMENT,
	chassis_system_code CHAR(12)
);

CREATE TABLE frame (
	id_frame TINYINT PRIMARY KEY AUTO_INCREMENT,
	frame_system_code CHAR(12)
);

CREATE TABLE axles (
	id_axle TINYINT PRIMARY KEY AUTO_INCREMENT,
	axle_manufacturer ENUM('ADR', 'TVZ', 'Teknoax') NOT NULL,
	axle_length_mm ENUM('1700', '1800', '1900', '2000', '2100') NOT NULL,
	axle_brake_size ENUM('300x60', '400x80', '406x120') NOT NULL,
	axle_is_steered BOOLEAN NOT NULL;
	axle_square_mm TINYINT(3) UNSIGNED NOT NULL,
	axle_system_code CHAR(12)
);

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
	--tire_manufacturer CHAR(30) NOT NULL,
	tire_speed_load_index VARCHAR(8),
	tire_is_enforced BOOLEAN DEFAULT 0,
	tire_homologation VARCHAR(30),
	tire_system_code CHAR(12)
);
CREATE TABLE rims (
	id_rim TINYINT PRIMARY KEY AUTO_INCREMENT,
	rim_diameter_inch DECIMAL(3,1) NOT NULL,
	rim_width_inch DECIMAL(3,1) NOT NULL,
	rim_hole_num TINYINT UNSIGNED NOT NULL,
	--rim_manufacturer CHAR(30) NOT NULL,
	rim_system_code CHAR(12)
);
CREATE TABLE wheels (
	id_wheel SMALLINT PRIMARY KEY AUTO_INCREMENT,
	wheel_system_code CHAR(12)
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

-- rear underrun protection device
CREATE TABLE rupd (
	id_rupd TINYINT PRIMARY KEY AUTO_INCREMENT,
	rupd_system_code CHAR(12)
); 

CREATE TABLE body ();