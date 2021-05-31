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
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (16, NULL, 'ab 128GB Speicherkapazität:', 250, 1);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (17, NULL, 'mit bis zu 16GB Speicherkapazität:', 117, 2);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (18, NULL, 'mit bis zu 64GB Speicherkapazität:', 189, 2);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (19, NULL, 'ab 128GB Speicherkapazität:', 269, 2);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (20, NULL, 'mit bis zu 16GB Speicherkapazität:', 142, 3);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (21, NULL, 'mit bis zu 64GB Speicherkapazität:', 214, 3);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (22, NULL, 'ab 128GB Speicherkapazität:', 286, 3);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (24, NULL, '16 GB', 10, 23);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (26, NULL, '64GB', 15, 23);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (27, NULL, '128GB', 25, 23);


--
-- Data for Name: order_table; 
--

INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) VALUES (29, '2021-05-25 13:17:46.251', 'SanDisk Cruzer USB-Stick 64GB : 15€', '0fd9d5fc-c6bb-40b2-9118-3989e1dd51dc', 'Auftrag eingegangen', 30, 14);

INSERT INTO public.website_user (id, email, password, role, username) VALUES (1, 'cassandra@datenrettung-schilling.de', '$2y$12$W8MCcCaBjY6iubhELz5mDe1zJ/g3uLxRD6s2YSIPsOmtZYk0LVcSu', 'admin', 'admin');


