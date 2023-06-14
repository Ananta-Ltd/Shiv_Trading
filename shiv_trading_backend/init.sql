--for creating database
CREATE DATABASE shivtrading;

--for creating tables
CREATE TABLE product(
    p_id INT PRIMARY KEY,
    product_name VARCHAR(100)
);

CREATE TABLE sizes(
    s_id INT PRIMARY KEY,
    sizes VARCHAR(100)
);

CREATE TABLE rooms(
    room_id INT PRIMARY KEY,
    room_name VARCHAR(100)
);

CREATE TABLE cpfittings(
    fitting_id INT PRIMARY KEY,
    fitting_name VARCHAR(100)
);

--Table for relationship between tables product,rooms and sizes
CREATE TABLE product_room_size(
    prs_id INT PRIMARY KEY,
    p_id INT,
    room_id INT,
    s_id INT,
    FOREIGN KEY(p_id) REFERENCES product(p_id),
    FOREIGN KEY(room_id) REFERENCES rooms(room_id),
    FOREIGN KEY(s_id) REFERENCES sizes(s_id)
);

--Table for storing photos of each product of each size
CREATE TABLE photos(
    photo_id INT PRIMARY KEY,
    photos_address VARCHAR(255)
);

CREATE TABLE photos_product(
    pp_id INT PRIMARY KEY,
    photo_id INT,
    prs_id INT,
    FOREIGN KEY(photo_id) REFERENCES photos(photo_id),
    FOREIGN KEY(prs_id) REFERENCES product_room_size(prs_id)
);

--Table for relationship between tables product and cpfittings
CREATE TABLE product_fitting(
    p_fitting_id INT PRIMARY KEY,
    p_id INT,
    fitting_id INT,
    FOREIGN KEY(p_id) REFERENCES product(p_id),
    FOREIGN KEY(fitting_id) REFERENCES cpfittings(fitting_id)
);

--For Inserting data
INSERT INTO product(product_name)
VALUES
    ("Wall Tiles"),
    ("Floor Tiles"),
    ("Sanitary and CP Fittings"),
    ("Granite and Marbles");

INSERT INTO sizes(sizes)
VALUES
    ("12×18inch"),
    ("24×12inch"),
    ("24×24inch"),
    ("24×48inch"),
    ("32×32inch"),
    ("12×12inch"),
    ("16×16inch");

INSERT INTO rooms(room_name)
VALUES
    ("Bedroom"),
    ("Living room"),
    ("Outdoor"),
    ("Kitchen"),
    ("Bathroom"),
    ("Parking");

INSERT INTO cpfittings(fitting_name)
VALUES
    ("Single Piece Basin"),
    ("Two Piece Basin"),
    ("Counter Basin"),
    ("Wall Hung Commote"),
    ("Double Vacuum Commote"),
    ("Single Vacuum Commote")


INSERT INTO product_room_size(p_id,room_id,s_id)
VALUES
    (1,1,1),
    (1,1,2),
    (1,1,3),
    (1,1,4),
    (1,2,1),
    (1,2,2),
    (1,2,3),
    (1,2,4),
    (1,3,1),
    (1,3,2),
    (1,3,3),
    (1,3,4),
    (1,4,1),
    (1,4,2),
    (1,4,3),
    (1,4,4),
    (1,5,1),
    (1,5,2),
    (1,5,3),
    (1,5,4),
    (2,1,6),
    (2,1,3),
    (2,1,4),
    (2,1,5),
    (2,2,6),
    (2,2,3),
    (2,2,4),
    (2,2,5),
    (2,3,6),
    (2,3,3),
    (2,3,4),
    (2,3,5),
    (2,4,6),
    (2,4,3),
    (2,4,4),
    (2,4,5),
    (2,5,6),
    (2,5,3),
    (2,5,4),
    (2,5,5),
    (2,6,7),
    (2,6,6);

INSERT INTO product_fitting(p_id,fitting_id)
VALUES
    (3,1),
    (3,2),
    (3,3),
    (3,4),
    (3,5)