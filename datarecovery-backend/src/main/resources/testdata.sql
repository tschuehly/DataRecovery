--
-- Data for Name: category; 
--

INSERT INTO public.category (id, description, name, replacement, title, sequence_id) VALUES (2, NULL, 'HDD', false, 'Datenrettung bei defekter HDD
(z.B. klackert, wird nicht erkannt, möchte formatiert werden):', NULL);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id) VALUES (3, NULL, 'SSD', false, 'Datenrettung bei defekter SSD
(z.B. wird nicht erkannt, möchte formatiert werden):', NULL);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id) VALUES (9, 'Gerne erstelle ich Ihnen hier ein für Fall spezifisches Angebot.
Bitte nennen Sie mir dafür die Anzahl an Festplatten, die Kapazität pro Festplatte, das RAID-Level und ob bzw. wie viele Festplatten beschädigt sind.

Preisbeispiele für RAID und Apple Fusiondrive:
RAID: Raidlevel 1 mit 2x 1TB HDD (1x davon defekt): 150,00 EUR
RAID: Raidlevel 0 mit 2x 1TB HDD (1x davon defekt): 500,00 EUR
RAID: Raidlevel 6 mit 5x 6TB HDD (1x davon defekt): 500,00 EUR
Apple Fusiondrive: iMac (defekt), 1TB HDD (fehlerfrei) + 128Gb SSD (fehlerfrei): 250,00 EUR
Apple Fusiondrive: iMac (fehlerfrei), 1TB HDD (defekt) + 128Gb SSD (fehlerfrei): 550,00 EUR ', 'RAID oder Apple Fusiondrive', false, 'RAID & Apple Fusion Drive:', 3);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id) VALUES (4, NULL, 'USB-Stick oder (micro) SD-Karte', false, 'Datenrettung bei defekten USB-Stick / (micro) SD-Karte
(wird nicht erkannt, möchte formatiert werden):', NULL);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id) VALUES (19, NULL, 'WD Portable (externe Festplatte)', true, NULL, NULL);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id) VALUES (23, NULL, 'SanDisk Cruzer USB-Stick', true, NULL, NULL);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id) VALUES (35, '', 'HDD', false, 'Datenrettung bei defekter HDD:', 1);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id) VALUES (36, '', 'Sicherung auf WD Elements Portable externer Festplatte', true, '', 1);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id) VALUES (37, '', 'SSD', false, 'Datenrettung bei defekter SSD (SATA-basiert / kein NVMe):', 1);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id) VALUES (38, '', 'SD-Karte oder USB-Stick', false, 'Datenrettung bei defekter (micro) SD-Karte oder USB-Stick:', 2);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id) VALUES (39, 'Gerne erstelle ich Ihnen hier ein für Ihr Fall spezifisches Angebot.
Bitte nennen Sie mir dafür die Anzahl an Festplatten, die Kapazität pro Festplatte, das RAID Level und ob bzw. wie viele Festplatten physisch beschädigt sind.

Womit Sie rechnen müssen:
119,00 EUR (Grundpreis) + 119,00 EUR pro 1TB (Gesamtkapazität der benötigten Festplatten)
+ sofern notwendig, der Preis für eine Festplattenreparatur aus "Datenrettung bei defekter HDD".  ', 'RAID', false, 'Datenrettung bei RAID:', 2);


--
-- Data for Name: category_questions; 
--

INSERT INTO public.category_questions (category_id, questions) VALUES (35, 'Inspizierung des Inneren. IST ALLES OK?');
INSERT INTO public.category_questions (category_id, questions) VALUES (35, 'Ist ein Teilespender auf Lager?');
INSERT INTO public.category_questions (category_id, questions) VALUES (36, 'Wurde die SSD bereits geöffnet?');


--
-- Data for Name: customer; 
--

INSERT INTO public.customer (id, city, email, first_name, last_name, postal_code, street, tel) VALUES (8, 'Ludwigsburg', 'thomas.schuehly@outlook.com', 'Thomas', 'Schühly', '71638', 'Friedrich-Ebert-Straße 70', '+4915156523909');
INSERT INTO public.customer (id, city, email, first_name, last_name, postal_code, street, tel) VALUES (30, 'Ludwigsburg', 'thomas.schuehly@outlook.com', 'Cassandra', 'Schilling', '71638', 'Friedrich-Ebert-Straße', '');
INSERT INTO public.customer (id, city, email, first_name, last_name, postal_code, street, tel) VALUES (32, 'Dießen', 'tobias.jungbauer@googlemail.com', 'Tobias ', 'Jungbauer ', '86911', 'Egerstraße 12', '015161408355');
INSERT INTO public.customer (id, city, email, first_name, last_name, postal_code, street, tel) VALUES (34, 'Osnabrück', 'laura.lingert@web.de', 'Laura', 'Lingert', '49074', 'Johannisstraße 105a', '01781438504');
INSERT INTO public.customer (id, city, email, first_name, last_name, postal_code, street, tel) VALUES (53, 'Ludwigsburg', 'thomas.schuehly@outlook.com', 'Thomas', 'Schuehly', '71638', 'Kaiserstraße 25', '97123871');


--
-- Data for Name: product; 
--

INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id) VALUES (6, NULL, 'mit bis zu 1TB Festplattenkapazität:', 350, 2,2);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id) VALUES (5, NULL, 'mit bis zu 500GB Festplattenkapazität:', 300, 2,1);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id) VALUES (10, NULL, 'mit bis zu 2TB Festplattenkapazität:', 475, 2,3);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id) VALUES (12, NULL, 'mit bis zu 1TB Festplattenkapazität:', 300, 3,2);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id) VALUES (11, NULL, 'mit bis zu 500GB Festplattenkapazität:', 250, 3,1);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id) VALUES (13, NULL, 'mit bis zu 2TB Festplattenkapazität:', 425, 3,3);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id) VALUES (14, NULL, 'mit bis zu 16GB Speicherkapazität:', 125, 4,1);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (16, NULL, 'mit bis zu 128GB Speicherkapazität:', 300, 4);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (15, NULL, 'mit bis zu 64GB Speicherkapazität:', 200, 4);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (18, NULL, NULL, NULL, 9);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (20, NULL, '1TB', 60, 19);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (21, NULL, '2TB ', 70, 19);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (24, NULL, '16 GB', 10, 23);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (26, NULL, '64GB', 15, 23);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (27, NULL, '128GB', 25, 23);
INSERT INTO public.product (id, create_date, name, price, category_id) VALUES (28, NULL, '500GB', 50, 19);


--
-- Data for Name: order_table; 
--

INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) VALUES (7, '2021-05-25 09:35:46.122', 'Sie senden einen eigenen Ersatzspeicher zur Sicherung mit: kostenfrei', '2455f26a-a110-4c7d-a907-6873585f0a5b', 'Auftrag eingegangen', 8, 5);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) VALUES (29, '2021-05-25 13:17:46.251', 'SanDisk Cruzer USB-Stick 64GB : 15€', '0fd9d5fc-c6bb-40b2-9118-3989e1dd51dc', 'Auftrag eingegangen', 30, 11);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) VALUES (31, '2021-05-25 14:08:54.861', 'WD Portable (externe Festplatte) 500GB : 50€', '9d89e2a8-d2a3-47d5-ac39-789b2c34064c', 'Auftrag eingegangen', 32, 5);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, product_id) VALUES (52, '2021-05-27 20:01:10.675', 'Sicherung auf WD Elements Portable externe Festplatte 500GB: 50,00 EUR', '7fb274bc-f00e-4a97-9496-cd41d399e271', 'Auftrag eingegangen', 53, 5);

INSERT INTO public.website_user (id, email, password, role, username) VALUES (1, 'tobias@jungbauerdatenrettung.de', '$2y$12$W8MCcCaBjY6iubhELz5mDe1zJ/g3uLxRD6s2YSIPsOmtZYk0LVcSu', 'admin', 'admin');


