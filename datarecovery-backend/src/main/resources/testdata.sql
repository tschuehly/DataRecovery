--
-- Data for Name: category; 
--

INSERT INTO public.category (id, description, name, replacement, title, sequence_id) VALUES (1, NULL, 'USB-Stick', false, 'Datenrettung bei defektem USB-Stick:', NULL);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id) VALUES (2, NULL, 'SD-Karte', false, 'Datenrettung bei defekter SD-Karte:', NULL);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id) VALUES (3, NULL, 'Micro SD-Karte', false, 'Datenrettung bei defekter Micro SD-Karte:', NULL);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id) VALUES (23, NULL, 'SanDisk Cruzer USB-Stick', true, NULL, NULL);
--
-- Data for Name: customer; 
--
INSERT INTO public.customer (id, city, email, first_name, last_name, postal_code, street, tel) VALUES (8, 'Ludwigsburg', 'thomas.schuehly@outlook.com', 'Thomas', 'Schühly', '71638', 'Friedrich-Ebert-Straße 70', '+4915156523909');
INSERT INTO public.customer (id, city, email, first_name, last_name, postal_code, street, tel) VALUES (30, 'Ludwigsburg', 'thomas.schuehly@outlook.com', 'Cassandra', 'Schilling', '71638', 'Friedrich-Ebert-Straße', '');
INSERT INTO public.customer (id, city, email, first_name, last_name, postal_code, street, tel) VALUES (32, 'Dießen', 'Cassandra.schilling@googlemail.com', 'Cassandra ', 'Schilling ', '86911', 'Egerstraße 12', '015161408355');
INSERT INTO public.customer (id, city, email, first_name, last_name, postal_code, street, tel) VALUES (53, 'Ludwigsburg', 'thomas.schuehly@outlook.com', 'Thomas', 'Schuehly', '71638', 'Kaiserstraße 25', '97123871');
--
-- Data for Name: product; 
--
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (14, NULL, 'mit bis zu 16GB Speicherkapazität:', 107, 1);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (15, NULL, 'mit bis zu 64GB Speicherkapazität:', 179, 1);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (16, NULL, 'mit 128GB Speicherkapazität:', 250, 1);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (17, NULL, 'mit bis zu 16GB Speicherkapazität:', 117, 2);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (18, NULL, 'mit bis zu 64GB Speicherkapazität:', 189, 2);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (19, NULL, 'mit 128GB Speicherkapazität:', 269, 2);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (20, NULL, 'mit bis zu 16GB Speicherkapazität:', 142, 3);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (21, NULL, 'mit bis zu 64GB Speicherkapazität:', 214, 3);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (22, NULL, 'mit 128GB Speicherkapazität:', 286, 3);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (24, NULL, '16 GB', 10, 23);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (26, NULL, '64GB', 15, 23);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (27, NULL, '128GB', 25, 23);
--
-- Data for Name: order_table; 
--

INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) VALUES (1, '2021-05-25 13:17:46.251', 'SanDisk Cruzer USB-Stick 64GB : 15€', '0fd9d5fc-c6bb-40b2-9118-3989e1dd51dc', 'Auftrag eingegangen', 30, 14);
insert into order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) values (2, '2020-12-11', 'SanDisk Cruzer USB-Stick 64GB : 15€', '809f8f5d-d4c4-4af1-a25b-d937dfde4114', 'Auftrag eingegangen', 30, 15);
insert into order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) values (3, '2020-03-30', 'SanDisk Cruzer USB-Stick 64GB : 15€', '41eac0f8-81cb-4c9c-b768-48e0f5951505', 'Auftrag eingegangen', 30, 20);
insert into order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) values (4, '2016-09-14', 'SanDisk Cruzer USB-Stick 64GB : 15€', '96885bd6-ad9d-4aea-93b1-c50d93c800d0', 'Auftrag eingegangen', 53, 16);
insert into order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) values (5, '2017-01-15', 'SanDisk Cruzer USB-Stick 64GB : 15€', 'ef8a06aa-856b-4c51-959f-338805e38aec', 'Auftrag eingegangen', 8, 19);
insert into order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) values (6, '2021-04-17', 'SanDisk Cruzer USB-Stick 64GB : 15€', 'ece6fd68-636d-4ef4-a8dd-7784f88e8382', 'Auftrag eingegangen', 53, 16);
insert into order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) values (7, '2019-07-12', 'SanDisk Cruzer USB-Stick 64GB : 15€', 'd0581b64-7e76-41ed-a30c-15b51eb87a61', 'Auftrag eingegangen', 8, 20);
insert into order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) values (8, '2019-08-17', 'SanDisk Cruzer USB-Stick 64GB : 15€', 'e35b7c8a-2085-42a2-aff9-a0c7c933c0b0', 'Auftrag eingegangen', 53, 17);
insert into order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) values (9, '2019-01-17', 'SanDisk Cruzer USB-Stick 64GB : 15€', '4cd4580c-dd52-4d08-b863-b37d59a2d687', 'Auftrag eingegangen', 32, 14);
insert into order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) values (10, '2019-02-05', 'SanDisk Cruzer USB-Stick 64GB : 15€', '0d7237ed-5d7b-4b00-9acf-0afc4d6524b8', 'Auftrag eingegangen', 30, 16);
insert into order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) values (11, '2020-03-05', 'SanDisk Cruzer USB-Stick 64GB : 15€', '704babd1-853c-4470-b248-ff0345f0177e', 'Auftrag eingegangen', 32, 14);
insert into order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) values (12, '2018-02-18', 'SanDisk Cruzer USB-Stick 64GB : 15€', '8ca556c8-83e0-4635-bcce-4ed794e40b9c', 'Auftrag eingegangen', 8, 15);
insert into order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) values (13, '2019-09-11', 'SanDisk Cruzer USB-Stick 64GB : 15€', '11f97eb3-b5a8-47f4-85b3-6cf5cc6d9af8', 'Auftrag eingegangen', 53, 19);
insert into order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) values (14, '2017-07-09', 'SanDisk Cruzer USB-Stick 64GB : 15€', 'd7dcf053-5722-49b0-9df3-b89c129edf3c', 'Auftrag eingegangen', 8, 16);

INSERT INTO public.website_user (id, email, password, role, username) VALUES (1, 'cassandra@datenrettung-schilling.de', '$2y$12$W8MCcCaBjY6iubhELz5mDe1zJ/g3uLxRD6s2YSIPsOmtZYk0LVcSu', 'admin', 'admin');


