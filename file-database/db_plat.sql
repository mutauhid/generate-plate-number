--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: master; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA master;


ALTER SCHEMA master OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: regency; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.regency (
    id integer NOT NULL,
    name character varying NOT NULL,
    regional_plat character varying(5) NOT NULL,
    type_plat character varying(1) NOT NULL
);


ALTER TABLE master.regency OWNER TO postgres;

--
-- Name: regency_id_seq; Type: SEQUENCE; Schema: master; Owner: postgres
--

CREATE SEQUENCE master.regency_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE master.regency_id_seq OWNER TO postgres;

--
-- Name: regency_id_seq; Type: SEQUENCE OWNED BY; Schema: master; Owner: postgres
--

ALTER SEQUENCE master.regency_id_seq OWNED BY master.regency.id;


--
-- Name: vehicle; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.vehicle (
    id integer NOT NULL,
    name character varying NOT NULL,
    type_plat character varying(1) NOT NULL
);


ALTER TABLE master.vehicle OWNER TO postgres;

--
-- Name: vehicle_id_seq; Type: SEQUENCE; Schema: master; Owner: postgres
--

CREATE SEQUENCE master.vehicle_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE master.vehicle_id_seq OWNER TO postgres;

--
-- Name: vehicle_id_seq; Type: SEQUENCE OWNED BY; Schema: master; Owner: postgres
--

ALTER SEQUENCE master.vehicle_id_seq OWNED BY master.vehicle.id;


--
-- Name: tnkb; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tnkb (
    id integer NOT NULL,
    name character varying NOT NULL,
    address character varying NOT NULL,
    no_plat character varying,
    regency_id integer NOT NULL,
    vehicle_id integer NOT NULL,
    startdate date,
    expireddate date
);


ALTER TABLE public.tnkb OWNER TO postgres;

--
-- Name: tnkb_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tnkb_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tnkb_id_seq OWNER TO postgres;

--
-- Name: tnkb_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tnkb_id_seq OWNED BY public.tnkb.id;


--
-- Name: regency id; Type: DEFAULT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.regency ALTER COLUMN id SET DEFAULT nextval('master.regency_id_seq'::regclass);


--
-- Name: vehicle id; Type: DEFAULT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.vehicle ALTER COLUMN id SET DEFAULT nextval('master.vehicle_id_seq'::regclass);


--
-- Name: tnkb id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tnkb ALTER COLUMN id SET DEFAULT nextval('public.tnkb_id_seq'::regclass);


--
-- Data for Name: regency; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.regency (id, name, regional_plat, type_plat) FROM stdin;
2	Jakarta Barat	B	B
3	Jakarta Selatan	B	S
4	Jakarta Utara	B	U
5	Jakarta Pusat	B	P
1	Jakarta Timur	B	T
6	Serang	A	A
7	Pandeglang	A	E
8	Cilegon	A	O
9	Lebak	A	P
10	Tangerang	B	C
11	Depok	B	E
12	Bekasi	B	F
13	Tangerang Selatan	B	W
14	Bandung	D	A
15	Cimahi	D	S
16	Bandung Barat	D	U
17	Cirebon	E	H
18	Indramayu	E	P
19	Majalengka	E	U
20	Kuningan	E	Y
21	Bogor	F	A
22	Sukabumi	F	Q
23	Cianjur	F	W
24	Purwakarta	T	B
25	Karawang	T	K
26	Subang	T	T
27	Sumedang	Z	A
28	Garut	Z	D
29	Tasikmalaya	Z	H
30	Ciamis	Z	T
31	Pangandaran	Z	W
32	Banjar	Z	X
\.


--
-- Data for Name: vehicle; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.vehicle (id, name, type_plat) FROM stdin;
1	Sedan	S
2	Pick Up	P
3	Truk	D
4	Minibus	M
5	HatchBack	H
6	City Car	C
7	Jip	J
8	SUV	V
9	Taksi	T
10	Bus	B
\.


--
-- Data for Name: tnkb; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tnkb (id, name, address, no_plat, regency_id, vehicle_id, startdate, expireddate) FROM stdin;
\.


--
-- Name: regency_id_seq; Type: SEQUENCE SET; Schema: master; Owner: postgres
--

SELECT pg_catalog.setval('master.regency_id_seq', 9, true);


--
-- Name: vehicle_id_seq; Type: SEQUENCE SET; Schema: master; Owner: postgres
--

SELECT pg_catalog.setval('master.vehicle_id_seq', 15, true);


--
-- Name: tnkb_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tnkb_id_seq', 1, false);


--
-- Name: regency regency_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.regency
    ADD CONSTRAINT regency_pkey PRIMARY KEY (id);


--
-- Name: vehicle vehicle_name_key; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.vehicle
    ADD CONSTRAINT vehicle_name_key UNIQUE (name);


--
-- Name: vehicle vehicle_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.vehicle
    ADD CONSTRAINT vehicle_pkey PRIMARY KEY (id);


--
-- Name: vehicle vehicle_type_plat_key; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.vehicle
    ADD CONSTRAINT vehicle_type_plat_key UNIQUE (type_plat);


--
-- Name: tnkb tnkb_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tnkb
    ADD CONSTRAINT tnkb_pkey PRIMARY KEY (id);


--
-- Name: tnkb tnkb_regency_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tnkb
    ADD CONSTRAINT tnkb_regency_id_fkey FOREIGN KEY (regency_id) REFERENCES master.regency(id);


--
-- Name: tnkb tnkb_vehicle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tnkb
    ADD CONSTRAINT tnkb_vehicle_id_fkey FOREIGN KEY (vehicle_id) REFERENCES master.vehicle(id);


--
-- PostgreSQL database dump complete
--

