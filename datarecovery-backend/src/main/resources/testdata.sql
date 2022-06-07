ALTER SEQUENCE HIBERNATE_SEQUENCE RESTART WITH 200;

--
-- Data for Name: category;
--

INSERT INTO public.category (id, description, name, replacement, title, sequence_id)
VALUES (2, NULL, 'HDD', false, 'Datenrettung bei defekter HDD
(z.B. klackert, wird nicht erkannt, möchte formatiert werden):', NULL);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id)
VALUES (3, NULL, 'SSD', false, 'Datenrettung bei defekter SSD
(z.B. wird nicht erkannt, möchte formatiert werden):', NULL);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id)
VALUES (9, 'Gerne erstelle ich Ihnen hier ein für Fall spezifisches Angebot.
Bitte nennen Sie mir dafür die Anzahl an Festplatten, die Kapazität pro Festplatte, das RAID-Level und ob bzw. wie viele Festplatten beschädigt sind.

Preisbeispiele für RAID und Apple Fusiondrive:
RAID: Raidlevel 1 mit 2x 1TB HDD (1x davon defekt): 150,00 EUR
RAID: Raidlevel 0 mit 2x 1TB HDD (1x davon defekt): 500,00 EUR
RAID: Raidlevel 6 mit 5x 6TB HDD (1x davon defekt): 500,00 EUR
Apple Fusiondrive: iMac (defekt), 1TB HDD (fehlerfrei) + 128Gb SSD (fehlerfrei): 250,00 EUR
Apple Fusiondrive: iMac (fehlerfrei), 1TB HDD (defekt) + 128Gb SSD (fehlerfrei): 550,00 EUR ',
        'RAID oder Apple Fusiondrive', false, 'RAID & Apple Fusion Drive:', 3);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id)
VALUES (4, NULL, 'Defekte (micro) SD-Karte oder USB-Stick', false, 'Datenrettung bei defekten USB-Stick / (micro) SD-Karte
(wird nicht erkannt, möchte formatiert werden):', NULL);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id)
VALUES (19, NULL, 'WD Portable (externe Festplatte)', true, NULL, NULL);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id)
VALUES (23, NULL, 'SanDisk Cruzer USB-Stick', true, NULL, NULL);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id)
VALUES (35, '', 'HDD', false, 'Datenrettung bei defekter HDD:', 1);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id)
VALUES (36, '', 'Sicherung auf WD Elements Portable externer Festplatte', true, '', 1);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id)
VALUES (37, '', 'SSD', false, 'Datenrettung bei defekter SSD (SATA-basiert / kein NVMe):', 1);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id)
VALUES (38, '', 'Defekte (micro) SD-Karte oder USB-Stick', false,
        'Datenrettung bei defekter (micro) SD-Karte oder USB-Stick:', 2);
INSERT INTO public.category (id, description, name, replacement, title, sequence_id)
VALUES (39, 'Gerne erstelle ich Ihnen hier ein für Ihr Fall spezifisches Angebot.
Bitte nennen Sie mir dafür die Anzahl an Festplatten, die Kapazität pro Festplatte, das RAID Level und ob bzw. wie viele Festplatten physisch beschädigt sind.

Womit Sie rechnen müssen:
119,00 EUR (Grundpreis) + 119,00 EUR pro 1TB (Gesamtkapazität der benötigten Festplatten)
+ sofern notwendig, der Preis für eine Festplattenreparatur aus "Datenrettung bei defekter HDD".  ', 'RAID', false,
        'Datenrettung bei RAID:', 2);


--
-- Data for Name: category_questions;
--

INSERT INTO public.category_questions (category_id, questions)
VALUES (35, 'Inspizierung des Inneren. IST ALLES OK?');
INSERT INTO public.category_questions (category_id, questions)
VALUES (35, 'Ist ein Teilespender auf Lager?');
INSERT INTO public.category_questions (category_id, questions)
VALUES (36, 'Wurde die SSD bereits geöffnet?');


--
-- Data for Name: customer;
--

INSERT INTO public.customer (id, city, email, first_name, last_name, postal_code, street, tel)
VALUES (8, 'Ludwigsburg', 'thomas.schuehly@outlook.com', 'Thomas', 'Schühly', '71638', 'Friedrich-Ebert-Straße 70',
        '+4915156523909');
INSERT INTO public.customer (id, city, email, first_name, last_name, postal_code, street, tel)
VALUES (30, 'Ludwigsburg', 'thomas.schuehly@outlook.com', 'Cassandra', 'Schilling', '71638', 'Friedrich-Ebert-Straße',
        '');
INSERT INTO public.customer (id, city, email, first_name, last_name, postal_code, street, tel)
VALUES (32, 'Dießen', 'tobias.jungbauer@googlemail.com', 'Tobias ', 'Jungbauer ', '86911', 'Egerstraße 12',
        '015161408355');
INSERT INTO public.customer (id, city, email, first_name, last_name, postal_code, street, tel)
VALUES (34, 'Osnabrück', 'tobias.jungbauer@googlemail.com', 'Tobias', 'Jungbauer', '41234', 'Spitalhof 105a',
        '97123871');
INSERT INTO public.customer (id, city, email, first_name, last_name, postal_code, street, tel)
VALUES (53, 'Ludwigsburg', 'thomas.schuehly@outlook.com', 'Thomas', 'Schuehly', '71638', 'Kaiserstraße 25', '97123871');


--
-- Data for Name: product;
--

INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id)
VALUES (1, NULL, 'mit bis zu 1TB Festplattenkapazität:', 350, 2, 2);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id)
VALUES (5, NULL, 'mit bis zu 500GB Festplattenkapazität:', 300, 2, 1);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id)
VALUES (2, NULL, 'mit bis zu 2TB Festplattenkapazität:', 475, 2, 3);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id)
VALUES (12, NULL, 'mit bis zu 1TB Festplattenkapazität:', 300, 3, 2);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id)
VALUES (11, NULL, 'mit bis zu 500GB Festplattenkapazität:', 250, 3, 1);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id)
VALUES (13, NULL, 'mit bis zu 2TB Festplattenkapazität:', 425, 3, 3);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id)
VALUES (14, NULL, 'mit bis zu 16GB Speicherkapazität:', 125, 4, 1);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id)
VALUES (16, NULL, 'mit bis zu 128GB Speicherkapazität:', 300, 4, 1);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id)
VALUES (15, NULL, 'mit bis zu 64GB Speicherkapazität:', 200, 4, 1);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id)
VALUES (18, NULL, NULL, NULL, 9, 1);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id)
VALUES (20, NULL, '1TB', 60, 19, 1);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id)
VALUES (21, NULL, '2TB ', 70, 19, 1);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id)
VALUES (24, NULL, '16 GB', 10, 23, 1);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id)
VALUES (26, NULL, '64GB', 15, 23, 1);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id)
VALUES (27, NULL, '128GB', 25, 23, 1);
INSERT INTO public.product (id, create_date, name, price, category_id, sequence_id)
VALUES (28, NULL, '500GB', 50, 19, 1);


INSERT INTO public.orderproduct (id, name, price, category_id)
VALUES (5, 'mit bis zu 500GB Festplattenkapazität:', 300, 2);
INSERT INTO public.orderproduct (id, name, price, category_id)
VALUES (11, 'mit bis zu 500GB Festplattenkapazität:', 250, 3);
--
-- Data for Name: order_table;
--4f415268-26b4-11ec-9621-0242ac1300021


INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (7, '2021-05-01 09:35:46.122', 'Sie senden einen eigenen Ersatzspeicher zur Sicherung mit: kostenfrei',
        '4f415538-26b4-11ec-9621-0242ac130002', 'Auftrag eingegangen', 8, 5, 2);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (29, '2021-05-02 13:17:46.251', 'SanDisk Cruzer USB-Stick 64GB : 15€', '4f415628-26b4-11ec-9621-0242ac1300023',
        'Datenrettung erfolgreich abgeschlossen', 30, 11, 1);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (31, '2021-05-03 14:08:54.861', 'WD Portable (externe Festplatte) 500GB : 50€',
        '4f4156e6-26b4-11ec-9621-0242ac1300024', 'Datenrettung nicht erfolgreich abgeschlossen', 32, 5, 2);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (52, '2021-05-04 20:01:10.675', 'Sicherung auf WD Elements Portable externe Festplatte 500GB: 50,00 EUR',
        '4f41579a-26b4-11ec-9621-0242ac1300025', 'Erste Analyse', 53, 5, 1);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (53, '2021-05-05 09:35:46.122', 'Sie senden einen eigenen Ersatzspeicher zur Sicherung mit: kostenfrei',
        '4f41584e-26b4-11ec-9621-0242ac1300026', 'Speicher wird erneut ausgelesen (Reread)', 8, 5, 2);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (54, '2021-05-06 13:17:46.251', 'SanDisk Cruzer USB-Stick 64GB : 15€', '4f415c18-26b4-11ec-9621-0242ac1300027',
        'Auftrag eingegangen', 30, 11, 1);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (55, '2021-05-07 14:08:54.861', 'WD Portable (externe Festplatte) 500GB : 50€',
        '4f415d08-26b4-11ec-9621-0242ac1300028', 'Bestellung erster Teilespender', 32, 5, 2);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (56, '2021-05-08 20:01:10.675', 'Sicherung auf WD Elements Portable externe Festplatte 500GB: 50,00 EUR',
        '4f415dd0-26b4-11ec-9621-0242ac130003', 'Speicher wird ausgelesen', 53, 5, 1);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (745, '2021-05-09 20:01:10.675', 'Sicherung auf WD Elements Portable externe Festplatte 500GB: 50,00 EUR',
        '4f415dd0-26b4-11ec-9621-0242ac1300029', 'Paket eingegangen', 53, 5, 1);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (57, '2021-05-10 20:01:10.675', 'Sicherung auf WD Elements Portable externe Festplatte 500GB: 50,00 EUR',
        '4f415dd0-26b4-11ec-9621-0242ac13000210', 'Warte auf Ankunft / Erinnerung', 53, 5, 1);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (58, '2021-05-11 20:01:10.675', 'Sicherung auf WD Elements Portable externe Festplatte 500GB: 50,00 EUR',
        '4f415dd0-26b4-11ec-9621-0242ac13000211', 'Bestellung zweiter Teilespender', 53, 5, 1);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (59, '2021-05-12 20:01:10.675', 'Sicherung auf WD Elements Portable externe Festplatte 500GB: 50,00 EUR',
        '4f415dd0-26b4-11ec-9621-0242ac13000212', 'Bestellung dritter Teilespender', 53, 5, 1);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (60, '2021-05-13 20:01:10.675', 'Sicherung auf WD Elements Portable externe Festplatte 500GB: 50,00 EUR',
        '4f415dd0-26b4-11ec-9621-0242ac13000213', 'Warte auf Pinout', 53, 5, 1);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (61, '2021-05-14 20:01:10.675', 'Sicherung auf WD Elements Portable externe Festplatte 500GB: 50,00 EUR',
        '4f415dd0-26b4-11ec-9621-0242ac13000214', 'Speicher wird erneut ausgelesen (Reread)', 53, 5, 1);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (62, '2021-05-15 20:01:10.675', 'Sicherung auf WD Elements Portable externe Festplatte 500GB: 50,00 EUR',
        '4f415dd0-26b4-11ec-9621-0242ac13000215', 'Abspeicherung Dateien', 53, 5, 1);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (63, '2021-05-16 20:01:10.675', 'Sicherung auf WD Elements Portable externe Festplatte 500GB: 50,00 EUR',
        '4f415dd0-26b4-11ec-9621-0242ac13000216', 'Einlagerung', 53, 5, 1);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (64, '2021-05-17 20:01:10.675', 'Sicherung auf WD Elements Portable externe Festplatte 500GB: 50,00 EUR',
        '4f415dd0-26b4-11ec-9621-0242ac13000217', 'Rückversand', 53, 5, 1);
INSERT INTO public.order_table (id, order_date, replacement, tracking_id, tracking_state, customer_id, order_product_id,
                                monthly_payment)
VALUES (65, '2021-05-18 20:01:10.675', 'Sicherung auf WD Elements Portable externe Festplatte 500GB: 50,00 EUR',
        '4f415dd0-26b4-11ec-9621-0242ac13000218', 'Auftrag abgeschlossen', 53, 5, 1);

INSERT INTO public.website_user (id, email, password, role, username)
VALUES (1, 'tobias@jungbauerdatenrettung.de', '$2a$12$F/KnVOtCNhFt37zki0GkteWiN8uplRqV3CyLR18hZkmjBZJmF20LK', 'ADMIN',
        'admin');
INSERT INTO public.website_user (id, email, password, role, username)
VALUES (2, 'tobias@jungbauerdatenrettung.de', '$2a$12$F/KnVOtCNhFt37zki0GkteWiN8uplRqV3CyLR18hZkmjBZJmF20LK', 'B2B',
        'b2b');

INSERT INTO public.keyword_rank(id, keyword, url, rank, request_time)
VALUES (0, 'Datenretter', 'https://www.jungbauerdatenrettung.de/', 30, TIMESTAMP '2022-04-11 19:32:05.287');
INSERT INTO public.keyword_rank(id, keyword, url, rank, request_time)
VALUES (1, 'Datenrettung Festplatte', 'https://www.jungbauerdatenrettung.de/', 20, TIMESTAMP '2022-04-11 19:32:15.653');
INSERT INTO public.keyword_rank(id, keyword, url, rank, request_time)
VALUES (2, 'Datenrettung HDD', 'https://www.jungbauerdatenrettung.de/', 12, TIMESTAMP '2022-04-11 19:32:26.04');
INSERT INTO public.keyword_rank(id, keyword, url, rank, request_time)
VALUES (3, 'Datenrettung', 'https://www.jungbauerdatenrettung.de/', 39, TIMESTAMP '2022-04-11 19:32:36.354');
INSERT INTO public.keyword_rank(id, keyword, url, rank, request_time)
VALUES (4, 'SSD Datenrettung', 'https://www.jungbauerdatenrettung.de/', 40, TIMESTAMP '2022-04-11 19:33:07.496');
INSERT INTO public.keyword_rank(id, keyword, url, rank, request_time)
VALUES (5, 'Datenrettung Kosten', 'https://www.jungbauerdatenrettung.de/blog/datenrettung-kosten', 29,
        TIMESTAMP '2022-04-11 19:33:38.402');
INSERT INTO public.keyword_rank(id, keyword, url, rank, request_time)
VALUES (6, 'Datenrettung Festplatte Kosten', 'https://www.jungbauerdatenrettung.de/', 20,
        TIMESTAMP '2022-04-11 19:33:48.695');
INSERT INTO public.keyword_rank(id, keyword, url, rank, request_time)
VALUES (7, 'Datenretter', 'https://www.jungbauerdatenrettung.de/', 25, TIMESTAMP '2022-04-12 20:43:43.249');
INSERT INTO public.keyword_rank(id, keyword, url, rank, request_time)
VALUES (8, 'Datenrettung Festplatte', 'https://www.jungbauerdatenrettung.de/', 20,
        TIMESTAMP '2022-04-12 20:43:53.699');
INSERT INTO public.keyword_rank(id, keyword, url, rank, request_time)
VALUES (9, 'Datenrettung HDD', 'https://www.jungbauerdatenrettung.de/', 5, TIMESTAMP '2022-04-12 20:44:04.092');
INSERT INTO public.keyword_rank(id, keyword, url, rank, request_time)
VALUES (10, 'Datenrettung', 'https://www.jungbauerdatenrettung.de/', 41, TIMESTAMP '2022-04-12 20:44:14.42');
INSERT INTO public.keyword_rank(id, keyword, url, rank, request_time)
VALUES (11, 'SSD Datenrettung', 'https://www.jungbauerdatenrettung.de/blog/apple-ssd-datenrettung', 31,
        TIMESTAMP '2022-04-12 20:44:45.532');
INSERT INTO public.keyword_rank(id, keyword, url, rank, request_time)
VALUES (12, 'Datenrettung Kosten', 'https://www.jungbauerdatenrettung.de/blog/datenrettung-kosten', 80,
        TIMESTAMP '2022-04-12 20:45:16.371');
INSERT INTO public.keyword_rank(id, keyword, url, rank, request_time)
VALUES (13, 'Datenrettung Festplatte Kosten', 'https://www.jungbauerdatenrettung.de/', 12,
        TIMESTAMP '2022-04-12 20:45:26.638');
