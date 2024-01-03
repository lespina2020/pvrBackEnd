PGDMP  &    (    	             |            pvr    16.1    16.1 `    ;           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            <           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            =           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            >           1262    16719    pvr    DATABASE     v   CREATE DATABASE pvr WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE pvr;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false            ?           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            �            1259    16721    averias    TABLE     �  CREATE TABLE public.averias (
    id integer NOT NULL,
    chofer text NOT NULL,
    observacion text NOT NULL,
    averia text NOT NULL,
    hora time without time zone NOT NULL,
    fecha date NOT NULL,
    "idUsuario" text NOT NULL,
    "idEstado" smallint NOT NULL,
    unidad text NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL,
    trial083 character(1)
);
    DROP TABLE public.averias;
       public         heap    postgres    false    4            �            1259    16720    averias_id_seq    SEQUENCE     �   CREATE SEQUENCE public.averias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.averias_id_seq;
       public          postgres    false    216    4            @           0    0    averias_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.averias_id_seq OWNED BY public.averias.id;
          public          postgres    false    215            �            1259    16742 	   ayudantes    TABLE     >  CREATE TABLE public.ayudantes (
    id integer NOT NULL,
    "nombreApellido" text NOT NULL,
    cedula integer NOT NULL,
    telefono text NOT NULL,
    "idUsuario" text NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL,
    trial089 character(1)
);
    DROP TABLE public.ayudantes;
       public         heap    postgres    false    4            �            1259    16741    ayudantes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ayudantes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.ayudantes_id_seq;
       public          postgres    false    4    218            A           0    0    ayudantes_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.ayudantes_id_seq OWNED BY public.ayudantes.id;
          public          postgres    false    217            �            1259    16762 
   categorias    TABLE     �   CREATE TABLE public.categorias (
    id integer NOT NULL,
    categorias text NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL,
    trial093 character(1)
);
    DROP TABLE public.categorias;
       public         heap    postgres    false    4            �            1259    16780    choferes    TABLE     �  CREATE TABLE public.choferes (
    id integer NOT NULL,
    "nombreApellido" text NOT NULL,
    cedula integer NOT NULL,
    telefono text NOT NULL,
    firma text NOT NULL,
    "certificadoMedico" date,
    licencia date,
    "idUsuario" text NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL,
    trial093 character(1)
);
    DROP TABLE public.choferes;
       public         heap    postgres    false    4            �            1259    16779    choferes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.choferes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.choferes_id_seq;
       public          postgres    false    4    221            B           0    0    choferes_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.choferes_id_seq OWNED BY public.choferes.id;
          public          postgres    false    220            �            1259    16800    empresas    TABLE     q  CREATE TABLE public.empresas (
    id integer NOT NULL,
    "nombreEmpresa" text NOT NULL,
    "rifEmpresa" text NOT NULL,
    "telefonoEmpresa" text NOT NULL,
    "emailEmpresa" text NOT NULL,
    "direccionEmpresa" text NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL,
    trial096 character(1)
);
    DROP TABLE public.empresas;
       public         heap    postgres    false    4            �            1259    16822    marca    TABLE     k   CREATE TABLE public.marca (
    id integer NOT NULL,
    marca text NOT NULL,
    trial096 character(1)
);
    DROP TABLE public.marca;
       public         heap    postgres    false    4            �            1259    16829    modelos    TABLE     �   CREATE TABLE public.modelos (
    id integer NOT NULL,
    modelo text NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    trial096 character(1)
);
    DROP TABLE public.modelos;
       public         heap    postgres    false    4            �            1259    16847    rutas    TABLE     �  CREATE TABLE public.rutas (
    id integer NOT NULL,
    ruta text NOT NULL,
    "codRuta" character varying(4) NOT NULL,
    "idSupervisor" text NOT NULL,
    "idUsuario" text NOT NULL,
    "idSector" text NOT NULL,
    status smallint DEFAULT 1 NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL,
    trial099 character(1)
);
    DROP TABLE public.rutas;
       public         heap    postgres    false    4            �            1259    16846    rutas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.rutas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.rutas_id_seq;
       public          postgres    false    226    4            C           0    0    rutas_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.rutas_id_seq OWNED BY public.rutas.id;
          public          postgres    false    225            �            1259    16869    salidas    TABLE     �  CREATE TABLE public.salidas (
    id integer NOT NULL,
    unidad text NOT NULL,
    chofer text NOT NULL,
    pvr jsonb NOT NULL,
    placa text NOT NULL,
    "tipoUnidad" text NOT NULL,
    correlativo integer,
    "idUsuario" text NOT NULL,
    fecha date,
    "updatedAt" timestamp without time zone NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    trial099 character(1),
    status boolean
);
    DROP TABLE public.salidas;
       public         heap    postgres    false    4            �            1259    16868    salidas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.salidas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.salidas_id_seq;
       public          postgres    false    4    228            D           0    0    salidas_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.salidas_id_seq OWNED BY public.salidas.id;
          public          postgres    false    227            �            1259    16889    sectores    TABLE     �   CREATE TABLE public.sectores (
    id integer NOT NULL,
    sector text NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL,
    trial099 character(1)
);
    DROP TABLE public.sectores;
       public         heap    postgres    false    4            �            1259    16907    supervisores    TABLE     >  CREATE TABLE public.supervisores (
    id integer NOT NULL,
    "nombreApellido" text NOT NULL,
    cedula text NOT NULL,
    telefono text NOT NULL,
    "idUsuario" text NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    trial099 character(1)
);
     DROP TABLE public.supervisores;
       public         heap    postgres    false    4            �            1259    16906    supervisores_id_seq    SEQUENCE     �   CREATE SEQUENCE public.supervisores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.supervisores_id_seq;
       public          postgres    false    231    4            E           0    0    supervisores_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.supervisores_id_seq OWNED BY public.supervisores.id;
          public          postgres    false    230            �            1259    16927 
   tipofallas    TABLE     �   CREATE TABLE public.tipofallas (
    id integer NOT NULL,
    fallas text NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL,
    trial102 character(1)
);
    DROP TABLE public.tipofallas;
       public         heap    postgres    false    4            �            1259    16945    tipousuarios    TABLE     "  CREATE TABLE public.tipousuarios (
    id integer NOT NULL,
    nameuser character varying(20) NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL,
    ruta text NOT NULL,
    menu text NOT NULL,
    trial102 character(1)
);
     DROP TABLE public.tipousuarios;
       public         heap    postgres    false    4            �            1259    16944    tipousuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tipousuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.tipousuarios_id_seq;
       public          postgres    false    234    4            F           0    0    tipousuarios_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.tipousuarios_id_seq OWNED BY public.tipousuarios.id;
          public          postgres    false    233            �            1259    16966    users    TABLE     �  CREATE TABLE public.users (
    id integer NOT NULL,
    firstname character varying(255),
    lastname character varying(255),
    email character varying(255),
    password character varying(255),
    cedula text NOT NULL,
    firma text NOT NULL,
    "tipoUsuario" text NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL,
    trial102 character(1)
);
    DROP TABLE public.users;
       public         heap    postgres    false    4            �            1259    16965    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    236    4            G           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    235            �            1259    16987 	   vehiculos    TABLE     �  CREATE TABLE public.vehiculos (
    id integer NOT NULL,
    placa character varying(50) NOT NULL,
    unidad text NOT NULL,
    "idModelo" integer NOT NULL,
    "idCategoria" integer NOT NULL,
    "idUsuario" text,
    "idEstado" smallint DEFAULT 1 NOT NULL,
    "idMarca" integer NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL,
    trial106 character(1)
);
    DROP TABLE public.vehiculos;
       public         heap    postgres    false    4            �            1259    16986    vehiculos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.vehiculos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.vehiculos_id_seq;
       public          postgres    false    4    238            H           0    0    vehiculos_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.vehiculos_id_seq OWNED BY public.vehiculos.id;
          public          postgres    false    237            �            1259    17008    verificador    TABLE     @  CREATE TABLE public.verificador (
    id integer NOT NULL,
    "nombreApellido" text NOT NULL,
    cedula integer NOT NULL,
    telefono text NOT NULL,
    "idUsuario" text NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL,
    trial106 character(1)
);
    DROP TABLE public.verificador;
       public         heap    postgres    false    4            �            1259    17014    verificadores    TABLE     [  CREATE TABLE public.verificadores (
    id integer NOT NULL,
    "nombreApellido" text NOT NULL,
    cedula integer NOT NULL,
    telefono text NOT NULL,
    firma text NOT NULL,
    "idUsuario" text NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL,
    trial106 character(1)
);
 !   DROP TABLE public.verificadores;
       public         heap    postgres    false    4            �            1259    17013    verificadores_id_seq    SEQUENCE     �   CREATE SEQUENCE public.verificadores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.verificadores_id_seq;
       public          postgres    false    4    241            I           0    0    verificadores_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.verificadores_id_seq OWNED BY public.verificadores.id;
          public          postgres    false    240            c           2604    16724 
   averias id    DEFAULT     h   ALTER TABLE ONLY public.averias ALTER COLUMN id SET DEFAULT nextval('public.averias_id_seq'::regclass);
 9   ALTER TABLE public.averias ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            d           2604    16745    ayudantes id    DEFAULT     l   ALTER TABLE ONLY public.ayudantes ALTER COLUMN id SET DEFAULT nextval('public.ayudantes_id_seq'::regclass);
 ;   ALTER TABLE public.ayudantes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            e           2604    16783    choferes id    DEFAULT     j   ALTER TABLE ONLY public.choferes ALTER COLUMN id SET DEFAULT nextval('public.choferes_id_seq'::regclass);
 :   ALTER TABLE public.choferes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            f           2604    16850    rutas id    DEFAULT     d   ALTER TABLE ONLY public.rutas ALTER COLUMN id SET DEFAULT nextval('public.rutas_id_seq'::regclass);
 7   ALTER TABLE public.rutas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    226    226            h           2604    16872 
   salidas id    DEFAULT     h   ALTER TABLE ONLY public.salidas ALTER COLUMN id SET DEFAULT nextval('public.salidas_id_seq'::regclass);
 9   ALTER TABLE public.salidas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    228    228            i           2604    16910    supervisores id    DEFAULT     r   ALTER TABLE ONLY public.supervisores ALTER COLUMN id SET DEFAULT nextval('public.supervisores_id_seq'::regclass);
 >   ALTER TABLE public.supervisores ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230    231            j           2604    16948    tipousuarios id    DEFAULT     r   ALTER TABLE ONLY public.tipousuarios ALTER COLUMN id SET DEFAULT nextval('public.tipousuarios_id_seq'::regclass);
 >   ALTER TABLE public.tipousuarios ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    233    234    234            k           2604    16969    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    236    235    236            l           2604    16990    vehiculos id    DEFAULT     l   ALTER TABLE ONLY public.vehiculos ALTER COLUMN id SET DEFAULT nextval('public.vehiculos_id_seq'::regclass);
 ;   ALTER TABLE public.vehiculos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    237    238    238            n           2604    17017    verificadores id    DEFAULT     t   ALTER TABLE ONLY public.verificadores ALTER COLUMN id SET DEFAULT nextval('public.verificadores_id_seq'::regclass);
 ?   ALTER TABLE public.verificadores ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    240    241    241                      0    16721    averias 
   TABLE DATA           �   COPY public.averias (id, chofer, observacion, averia, hora, fecha, "idUsuario", "idEstado", unidad, "createdAt", "updatedAt", trial083) FROM stdin;
    public          postgres    false    216   �s       !          0    16742 	   ayudantes 
   TABLE DATA           |   COPY public.ayudantes (id, "nombreApellido", cedula, telefono, "idUsuario", "createdAt", "updatedAt", trial089) FROM stdin;
    public          postgres    false    218   5}       "          0    16762 
   categorias 
   TABLE DATA           X   COPY public.categorias (id, categorias, "createdAt", "updatedAt", trial093) FROM stdin;
    public          postgres    false    219   �}       $          0    16780    choferes 
   TABLE DATA           �   COPY public.choferes (id, "nombreApellido", cedula, telefono, firma, "certificadoMedico", licencia, "idUsuario", "createdAt", "updatedAt", trial093) FROM stdin;
    public          postgres    false    221   S~       %          0    16800    empresas 
   TABLE DATA           �   COPY public.empresas (id, "nombreEmpresa", "rifEmpresa", "telefonoEmpresa", "emailEmpresa", "direccionEmpresa", "createdAt", "updatedAt", trial096) FROM stdin;
    public          postgres    false    222   J�       &          0    16822    marca 
   TABLE DATA           4   COPY public.marca (id, marca, trial096) FROM stdin;
    public          postgres    false    223   ��       '          0    16829    modelos 
   TABLE DATA           Q   COPY public.modelos (id, modelo, "updatedAt", "createdAt", trial096) FROM stdin;
    public          postgres    false    224   ��       )          0    16847    rutas 
   TABLE DATA           �   COPY public.rutas (id, ruta, "codRuta", "idSupervisor", "idUsuario", "idSector", status, "createdAt", "updatedAt", trial099) FROM stdin;
    public          postgres    false    226   o�       +          0    16869    salidas 
   TABLE DATA           �   COPY public.salidas (id, unidad, chofer, pvr, placa, "tipoUnidad", correlativo, "idUsuario", fecha, "updatedAt", "createdAt", trial099, status) FROM stdin;
    public          postgres    false    228   ͚       ,          0    16889    sectores 
   TABLE DATA           R   COPY public.sectores (id, sector, "createdAt", "updatedAt", trial099) FROM stdin;
    public          postgres    false    229   ]�       .          0    16907    supervisores 
   TABLE DATA              COPY public.supervisores (id, "nombreApellido", cedula, telefono, "idUsuario", "updatedAt", "createdAt", trial099) FROM stdin;
    public          postgres    false    231   ��       /          0    16927 
   tipofallas 
   TABLE DATA           T   COPY public.tipofallas (id, fallas, "createdAt", "updatedAt", trial102) FROM stdin;
    public          postgres    false    232   8�       1          0    16945    tipousuarios 
   TABLE DATA           d   COPY public.tipousuarios (id, nameuser, "createdAt", "updatedAt", ruta, menu, trial102) FROM stdin;
    public          postgres    false    234   ��       3          0    16966    users 
   TABLE DATA           �   COPY public.users (id, firstname, lastname, email, password, cedula, firma, "tipoUsuario", "createdAt", "updatedAt", trial102) FROM stdin;
    public          postgres    false    236   3�       5          0    16987 	   vehiculos 
   TABLE DATA           �   COPY public.vehiculos (id, placa, unidad, "idModelo", "idCategoria", "idUsuario", "idEstado", "idMarca", "createdAt", "updatedAt", trial106) FROM stdin;
    public          postgres    false    238   0�       6          0    17008    verificador 
   TABLE DATA           ~   COPY public.verificador (id, "nombreApellido", cedula, telefono, "idUsuario", "createdAt", "updatedAt", trial106) FROM stdin;
    public          postgres    false    239   k�       8          0    17014    verificadores 
   TABLE DATA           �   COPY public.verificadores (id, "nombreApellido", cedula, telefono, firma, "idUsuario", "createdAt", "updatedAt", trial106) FROM stdin;
    public          postgres    false    241   ��       J           0    0    averias_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.averias_id_seq', 52, true);
          public          postgres    false    215            K           0    0    ayudantes_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.ayudantes_id_seq', 10, true);
          public          postgres    false    217            L           0    0    choferes_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.choferes_id_seq', 191, true);
          public          postgres    false    220            M           0    0    rutas_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.rutas_id_seq', 58, true);
          public          postgres    false    225            N           0    0    salidas_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.salidas_id_seq', 92, true);
          public          postgres    false    227            O           0    0    supervisores_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.supervisores_id_seq', 6, true);
          public          postgres    false    230            P           0    0    tipousuarios_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.tipousuarios_id_seq', 4, true);
          public          postgres    false    233            Q           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 12, true);
          public          postgres    false    235            R           0    0    vehiculos_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.vehiculos_id_seq', 121, true);
          public          postgres    false    237            S           0    0    verificadores_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.verificadores_id_seq', 14, true);
          public          postgres    false    240            p           2606    16740    averias pk_averias 
   CONSTRAINT     P   ALTER TABLE ONLY public.averias
    ADD CONSTRAINT pk_averias PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.averias DROP CONSTRAINT pk_averias;
       public            postgres    false    216            r           2606    16761    ayudantes pk_ayudantes 
   CONSTRAINT     T   ALTER TABLE ONLY public.ayudantes
    ADD CONSTRAINT pk_ayudantes PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.ayudantes DROP CONSTRAINT pk_ayudantes;
       public            postgres    false    218            t           2606    16778    categorias pk_categorias 
   CONSTRAINT     V   ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT pk_categorias PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.categorias DROP CONSTRAINT pk_categorias;
       public            postgres    false    219            v           2606    16799    choferes pk_choferes 
   CONSTRAINT     R   ALTER TABLE ONLY public.choferes
    ADD CONSTRAINT pk_choferes PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.choferes DROP CONSTRAINT pk_choferes;
       public            postgres    false    221            x           2606    16816    empresas pk_empresas 
   CONSTRAINT     R   ALTER TABLE ONLY public.empresas
    ADD CONSTRAINT pk_empresas PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.empresas DROP CONSTRAINT pk_empresas;
       public            postgres    false    222            z           2606    16828    marca pk_marca 
   CONSTRAINT     L   ALTER TABLE ONLY public.marca
    ADD CONSTRAINT pk_marca PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.marca DROP CONSTRAINT pk_marca;
       public            postgres    false    223            |           2606    16845    modelos pk_modelos 
   CONSTRAINT     P   ALTER TABLE ONLY public.modelos
    ADD CONSTRAINT pk_modelos PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.modelos DROP CONSTRAINT pk_modelos;
       public            postgres    false    224            ~           2606    16867    rutas pk_rutas 
   CONSTRAINT     L   ALTER TABLE ONLY public.rutas
    ADD CONSTRAINT pk_rutas PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.rutas DROP CONSTRAINT pk_rutas;
       public            postgres    false    226            �           2606    16888    salidas pk_salidas 
   CONSTRAINT     P   ALTER TABLE ONLY public.salidas
    ADD CONSTRAINT pk_salidas PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.salidas DROP CONSTRAINT pk_salidas;
       public            postgres    false    228            �           2606    16905    sectores pk_sectores 
   CONSTRAINT     R   ALTER TABLE ONLY public.sectores
    ADD CONSTRAINT pk_sectores PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.sectores DROP CONSTRAINT pk_sectores;
       public            postgres    false    229            �           2606    16926    supervisores pk_supervisores 
   CONSTRAINT     Z   ALTER TABLE ONLY public.supervisores
    ADD CONSTRAINT pk_supervisores PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.supervisores DROP CONSTRAINT pk_supervisores;
       public            postgres    false    231            �           2606    16943    tipofallas pk_tipofallas 
   CONSTRAINT     V   ALTER TABLE ONLY public.tipofallas
    ADD CONSTRAINT pk_tipofallas PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.tipofallas DROP CONSTRAINT pk_tipofallas;
       public            postgres    false    232            �           2606    16964    tipousuarios pk_tipousuarios 
   CONSTRAINT     Z   ALTER TABLE ONLY public.tipousuarios
    ADD CONSTRAINT pk_tipousuarios PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.tipousuarios DROP CONSTRAINT pk_tipousuarios;
       public            postgres    false    234            �           2606    16985    users pk_users 
   CONSTRAINT     L   ALTER TABLE ONLY public.users
    ADD CONSTRAINT pk_users PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.users DROP CONSTRAINT pk_users;
       public            postgres    false    236            �           2606    17007    vehiculos pk_vehiculos 
   CONSTRAINT     T   ALTER TABLE ONLY public.vehiculos
    ADD CONSTRAINT pk_vehiculos PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.vehiculos DROP CONSTRAINT pk_vehiculos;
       public            postgres    false    238            �           2606    17033    verificadores pk_verificadores 
   CONSTRAINT     \   ALTER TABLE ONLY public.verificadores
    ADD CONSTRAINT pk_verificadores PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.verificadores DROP CONSTRAINT pk_verificadores;
       public            postgres    false    241               �	  x��Z�r۸���uf�Jr	���z�q���l2n��N[�� YВ�7���:ӝ�A�b�@R"Rr�fz��|������:?lDN.�������\�|q����"/x�Ȃ��|��B���h�"�u<��]�dJ��P��#n���Z4?9��#�9�ɊK�W���s�6���Z�"����'w$藃���6r�C:u.nx"
E*Y����L�t�IDǽ4��;oԊg䂥�y����d2,x�b�pIH��K�~ߑ����U�${�s����X��X�䄼�7�I�gxD<�^J(/y60v�W@"�Z��̤q���Ww`��a���W�P�C��N[�[�
m�L�����EmE=W�d�Ϫf�E)ۉ�Xdl����-��8f�$w�dd1��y��ѐ@
y���@+�ɂg
�e*�`N�S�q[=�C[+�G�.R%ɟ6B@|g�>d@B@2�c�Ёg��QK���֋��QƵk,�!�Ds����a7�X�֚�����W{��Pj��#�����&m9�c��L�|@^1���d��BI�^����p����a�vԱ��k�2��٨��Թ�ĉ�[��X�t4<���!�	y������O|����k�x���]��MHK�"W���/ B�Iˬ\K۟��vL��Aڱ��t�1`M�d���kD�<��'�l�,��:V5��g�j��jG^Kw�+��N�%���w|��A�����X�d�8</�Z�`��R�e0����Զ�/��hD��u�#�t�,i�(����
�ﰉE"�"S�Lv�Q��0�[�q�-��<�A����K�����d8O�/�%�OK��@-{��ؼ�(�M��A��󓈱/�BuÐ���m�fyq��?/�,����#Ꞹ��$,�{���_6�8�`��g��g��؇9���t&�\amƑ҇��-���↧�\�B�l��ge�[
����V<��˷ß.[7�.^�����4��7÷��gU��F���iSC��3��A8�	�|�{������=Ŭ�U.�ƽ4�\���}P�h���3�NC��w�a�O��Ď~`�F4�A��\��kW(;?<��ɚ�d2 S�����+|dU_��[UCY�YyjK�»��׬��u��?XG�V)9>dсg+ӏ�Nd)i�G�k涯Y��A��k�b�t�QO[�{��;�<��yI�Ω�1�Y��2���[��,[	9L��@k_*���!���|���gL g��$�<�$Y*z|���ۇ���>^�� ��&�&qD eʒSҺZ��r�޳�%p	Oȭ?�,�*"lS���� �%�9�KK�Аq<QkZٻ��
�G�[��κ��.����M��6Auȇ7\�n
kQ�LR��Z��n����J�����gu�Q}�����p�7.b���������9	��CEk0�>kI�Rnp�Y�NI����g�r%�"|��[u�B���i�oV�� �UQ�Ԥ��X�Zv�.}�'ϫ����W��3�4��n|���)aM�8\��:V�ʢ�/�϶����&�����YO���a6eF55�蘵�����k�*�a8��g���������tb�<�W��5x�˰S͡�X� �<ݒ���30���$�s/�[S�ʞ�٭�G������и�l�‚�-�F�;v+x����4J���x��co�:Z�cBQ}M�p�Kϱ��^臆�݊���4{A-x��Y{#�U�I���n��ٜk�v����ٝD���p/���s	􂥾k�|$,�{�7v)2%W{#�x�L~fz���}�3<m&K_������UP�,u��҃e:��<ٕv���]�@�A�Ux� ���}&����;=�Y��ԏ��vD:ߞ\1�t��Cݱu�¢���9��i�jf�'/��qٌ�}j����;���4x|o/<6X�4���>k���mɷ��T���b�a�1�>�ڇ�����zi@ŷFʏ�<5m�Sc�<5n�S��V�Y�<h� ���8ĬqEA�KV��g���#�9�0%� ��ܬ�S08��m�!k� ��'��G����,؀�x�WQ�,�Ҡ�^IRa�UW`=gsQ<b�.����,c�����5�n@1;��~'��7B\'����$��0�-�������T{3�{��s������������VkX�����a�����TL�:~2�-<u/Ҽݦ�j^o��W���:�|�Kn�&ƫnu�®կ_|��
q{+D�cR��қ4����ӣ����|R����������Se����B�����|�b��O롂��k�UcD�ʰ�]��S��xJ�m(�}���Av������#��j�{$r�ό%��B����R��a��g��m�� �����ӽ'y�Z-�N�jU�1��=|:>k��*v������`Q��v}4;9::�u�c4      !   G   x�34�pu	�Wpr��4426��05�45313B΢��N##c]C]#C3+ 2��*����� �D      "   �   x����� D��W�6��
7�4�Q1�����QLL�.^_fvfG���b�!&(��V(��F�"#��n�O{X��jpa%�悩�EF����"߃o�a
sNL��~fJY�<d��EF��=���yYW�r�O�F�EFL
8�����*j��E����埞��8]��C�����}��/�K[�      $   �  x���Kr�F�ץS�r���;��=V���Vx�o��	�	�h6��mf9K�A�?�
�@6Zv���OU���g��l]wm�W]Uo�62�SA
&�g�������;���&�T�-U%�B녴���W�;�y�j����cB
���k����7�/q��U�h�5פ)��<q<;���6w���T?m뾏L
!��`V�5L��j�u��m�qv�e��ka*�� }�v�m6�9p_���J;�I�`��(��okbU�,��Oj`	�~m�]_} +��N
��l���uY���n��i����(=.��J��O8��Ӭ���a���s��`hR!�P����A���Z`�I����Շ���x�<TLp���6i��j�<>3Pj���,�\�P
!rS�8����>2�=FdN0J3h3P�p���rd:���>":4�M�����O�Q���!͔F(�Q���K�"�pt>*��׆����(��:>*�_>*ˮ���y���u�cߜϫ�C�������W'�+��8HBF��BYQ0��Q<�y�/���)�+�H���]���3b�lb�E�"!�A0�Q����<�؛������ۦ}�H�HO\JKA($W�y�3ŵ����G��|���a�oo;$߳e�y�5�{��r����T�h�������E[L���f����b�,�tP��ܫ�qǆD2oafa��#)�}�%i��OX^�J�̒H҉Q�qfn�ͤF,��Q �Mu�(��F��,-rvg��.C�i9J����z�T�+�)	eT
�ck�����a��;ko�5�J_�b� �6��HaO�4GR��e�ٺ�;�+������pXp���)�(��	<}R#\I ��"=��߼�A9���$�|1�ɳ7M���*]&i|Z��`����qtd�X��]��6�U?�u�P#�RV��2X�T2�3pz�=5�����MD�������4��g��W(t�8g��ƬN W}6o�1�%�L�s�^�p�Gq͢�MjD��_ۻ������-. m��)�YD6��6��'�ė(A����u�f����K2�)[(��R���Ԉ�Av��hx, ����5\b�^���gj���4�3ĐC����.�{��c�B�(�)C���%��8޼����|խ��fK4����q�p\� Π)24S����l6ˮ������Qz&g���!���Z���2��[�D���oy�m@��(P��	%>,����s�C�F��.i׈�u�q��wU����qm�Nj�!��]�th��c��д��F)x��4��]�o"%i��K���m:�4/����m,��)�`�R�P��B�H�#W����T��Q�ߚ��	˩.�9T���6����2rO��Db5��#>6���x��hZt(�-[ZXOEz�9t��{�5��O�y�A���CC!�r)��\Cq!Nkg�.�Ojĳ�[�i2j,1�4�;�3P�nR#�~&/~J�}�pA��D5ATѳߚ5��$�}D��Ō�#�/����՞�P�!s@8�Hb����m�t��U�8�"��ڌ����|����x�����>�m\��A�t	o[2v�l��~��睶�� ��RÛ��]5�[�&+����t��e�"�$S�Le����n��xА�r�f=N��4�%���!�j�4	�$�1	T^�����Ԁ������5�f���'�4H��B����1�{)�ŉ������o�����޽�=�`|�_�h	���I�!h*����F$3����F;8jLr[:�|~��,I�	�ޯm����W��K\��G��ˉi�� >�(�%�?Ԟ��/iNB8GC��}�����sJ��t��,c%����iug�S@�ݹ�G���Û���y�-�&�_��gP��.?�SR�aR������t�z��LtKΖ�����R������C<òoP^bK�Rg��![��&\���Dew>�P#�`��>�b��B����&�Ԉ�H��A<�{E�P#�dO�뺥����Q/��)��q����Q����s�A#�b��k�ӞI������(�2֏���O��4¥����� ]1?FJ���G=̔F�>�e�Zm��v������8�
�����<2��Tu)1�\wiγ�.����+�#�G�/cT5��"��锆äF<�>w[���M�z)�B�������<�Mj���m\���<a�p>{8�8�Ec�I�X�}�׸��}$�
7l��r�fZ�0�3P(�ߠ�j~�i���&�����с�k�u�4�^�obֈ&�m��O�*�]��~�8"�A����Hֈ% p�H\Ȑ���g篝U�z3��Y*��)�X���z��W��h$�`�f�]_=�}�YR�Z�@Es�)��:y�nS��IA�����j�f��q�4B���s3��	�=^X�O�`���5�׈'r���Uu~��ǟ��8{w������衳A�fG�0�j1�бOcgs�:��p޶�7:�A<���'5z$�ԕ"y�mWt����4v���(�����0�.���&)��q��Lj���p������R��4����.
O��Mv��v1ⶸH/�����C�'��}���LI���OWDTb��MR�CD9�>���e|Jm������BR1ƌ���}��P#�b��&/;�Xj�a��*�L��K��������T�*}� �x�M�2Q@�:���bG���� �B����)`F�E^~�ۯ>��uo�uӦ�0B:���e48�A��v�P#�e����^W�RAX�W(�Fpx�R�R��D���n@s�ѱ7�m���#���#j�����ҧw�Y���Fv_#�gg��z��-�F@җwE80Gw��3hv�K���wF��]���Җ��Z�����/�j�ϜG�c�������e���k>��S��@C5�S���buY����]Q�+gU���R�,s����5w)9}ycJ����^�z����      %   1   x���,N)N�L,NI�E��)X�XZ��a����� �8Y      &      x������ � �      '   �   x���AN�0E��)|� �i�ֻ���H�������H��l�x����7�K��$�$x/��ʬ!��������zXyH�'F���r2���V�x)�ӏ�燸z�����8d����,�k�;n�v��~v�u���WkOq\5�g�0�ٕ�双��������3���\�D%��� |�qR       )   N  x��Z�n�8}v���=@+�d9��c3�D%y:Ƽd��@�L���,��M�c{�HJ򥱰�!�U�Ⱥש����TR�*��jY�R����O�$�)�U�\�LZ��&j��2,�o���Ί먠=62Ӧ��߱0��ue��I6�'�ȍŎM����23�x�6�;e[#���vO�i2���Qr%��"I��QZ{_O�����J�0��E�O����6B����S�;��=��\���M�c�z���ݛ����J4r)+�L�݂�΂���L+�Ke�ԍ�>�,Z(B"S�^\ق�Vgf_$��<9n��(r�9�
��g�#ት,J)���ױ_���~ X��\U�Y� ��䙣odQ(!����$��(9��5?w��g~�Պ,�o��*�6z�=����V�PK�sL&m4	�����+U���1�+��GBf
�҆�r��U���j�l�*�J��ߒ;�R�<Hި��'���	QV�R�SA
�7]��G�ݒ���2�mW\��7H�u�Yr��^$Ӊ�z�,���Y�{7z�q���%K�)观�O"!Dc2
�\�q6Fd�U�=�Q���w��#�E!쨍4Sx-�:�Aΐp缽�Z٪�{��~.	օ�<�aj6g����#�>��LY��1S0���$r��I%���t�����u����h0V<A�uO^���q��|�YY�l�|X�j�����@��I��)�6��%Sٰ(3�95l�	-F�ƄiJ3����k�n�7���LM��܏!�Gl�Hyu�A+!��Ze��zOR&��K�B�6q#`l~�jE��$�%�iR��Y7��:������s͚\���	�Z݃�]��1G�����;�����aR�J�jN�/P��\�>3^	R�P&�:Q��F���OG�ψ6N�dҡ(�h�l}�`]v�1��]�9�^����HȤ2��^f� D�kCz�zW�ɜ��A�(�D�V������L����Pr��A��K�H+��z��lR��iƹH�� ��QP���dtD�C[�ђj�	����QMft�C楳�Hd]��4����v
!�TqEXğϾ5K�ETt�{al�{7gq6=�*�#�0�|�Zr:�j�(sDe?��R��(l�\����U�s�`Y�?5������%0Fx���jD���Y��ꗔ��+v�@ұ*��8G	o�זˈ�8&�-Q��� ��G�j����G8Ib9>�O^��-�D	uqy{�I��R�h0�|�2MxYlD��
ej���t߽�+H$|��VsE!��	@��cP���;0B����b�8�y/�R?އŝՄAF
�:|�h�d���Sz�(�B-�*V$�!P��L��[V�&?Qj�j� |�(d8�6�ҔK���pg,0'�	���8hd�:�C9.d�}}ΑK��H����G�P�\s����V�&�5d�^#��|�����J� Q�`���� 6;�@|�oQ�\>�/�|��s��P���k/y3_�V�(��C�Ѕ ��	O�6GR��Vy�, 1��`�����ì�f�bf��5v��Q�6���7`p��,E�%Y�ݚ�4�v�U��H\Pв0�r��c�
�#�Bִ�s�1o��ғS����.Z���5y3�d&�5�鱗��	9�aEA]�W���\=�j���T�cp饿7*�U+CExM����6d��x�@�h�J�ST^�;(����Ӭ���ɮ������a�/{�Vp�%�ISy�(aǈ�6�/wa{ŕv_Yd4�R��@�T�6���8@�:�<
����BbD*�P�rE)�� Tn�CtA�FAd+��Efس��y���|�;�����P �B���h�����c�죒�`����Q�����bD�4P8���b��&	��">��ڋ�t�ɲ����kC�{EsE�Yv�Di,T�����Ȩ#��?�8nH�������܏v7���+�ޣ� c!�[c9Bv����/�f*EN����+]Ec�*2�k+z��&�����P���C�8�]���CW��1[��,���i~Z;�'��;U�/�+)�ˍ)���7n�d�-�}�oCG����uT�\�� �*C��E~/l��+����4pj� ��\���s�}5�5.b�Dbr2�|
�6�����O�}+[$��A�=,m��$L�(�����[�_ⵎ���x�/��#sGOCS�	�v0C4�k%<�|��ҝS���
mF! -�	7��h��*w��s*��A�e�O'6a��Wr�̠����t�h�QK���W��iX��Yj\��3K��Fh�~�4����<�UG���rR-���@Zw*#��fq7�
uS)�]
h́��SU5��:T5n��D�K�H �����b2�rM���$l~�۶_<�R�Fr�C ����IKI]&������N��	|u8�v4|�%��w�&�� �D��$� ��Dj��.+��ai�j����[Y��ħJ3?N�4ד_�_9��k�c0jf� ,���'x�+`�����#6���4.��A<^/Nqc0\��!G��0,D�t�ukMu���T�� � �[���)�c��[yB� OtoG�ˈ�p*LXD��HH�%<W�Z�L@O��tI��:%A+�Z��q�=TfW�B^�8���$d��3jP���a66���ګ@iU�4aF��H
Ȭ�C��8���ʺ���!�|n�Q�x,�J�y@	�V��G���E`g�٩fO��=�4�j�}��:�O��t�x���e��M��c2=�ɛ#��ƕ�t�oMU�r�|���n�����ia�/	P�.���T��׍�^i<�/I�e�߹Yo��5�����3JQ��Ay�����"=���Օ��`G?<�7K��po��'B��##�[7� p3h���i��h$ͥ/��W�������o/�ޣ�߿���.�>�ߟ�ޟ"񏧏��w����x}~{a&O ���1�L'u��j�>Egu?@0,3@RfNm���҅�ht��t  ���C��/ŀǸ/MN���� )0��t- ��ij�K� ��1^�F����H��+���������/#�In���ivZ�O���H����OS���ɩݱ�2����!mB�y��t0�[ŗZ�V�`�'�Ș2Q
�a��kI	d.�
�3<��ຣ�<,��y*A|�h��Ӏ4��ǵ�A;��q�,��;�l�C�O���t���3@�K��2��<���*��Y�l���~�")M�V>j��n�� �j8v���G�c��؈�Y�X�EH ,&"�u�M�0��U�4^L�������I�4��9|$��*�Z�P�M�Gk���B'�0NDsk�� ?��p�OӅ#KqZ���qZ{1�NF`
��� ����� 2"4:ٷ�>�--+C���#ݵle�k1�����G��S=$��(~0e�O+Ґqv/L���d��0�~8�ݙC�!N��a�r�E�P�j��ɚo�s]_"q�Ou+D&��+T���]��ur�3иr�1ڒ�[i�t�D����&Z)��%lڀ";a"K���������y���T�|jf�lM�n�_9e���NC"����(H&}Dg(DPbn���E����������k/9�"O��#ѧ�;�����e4h]�_���t�+z���N�:ir��EG����ӿ��^�>�?���?�__�����ߞ>^s�8<%������t���9�pJڟ�?�?������O����݋��������@CN���|�����W ��<�N���#��b~ �p�����$7�k�h8�z��ƞ�>��x�1IJ[�W�8=J�1p�������{�x{����~�Q�E2K4���^^\\�{1(�      +      x���r�Ʋ����@�z��w E;L(R�:$�ή$�6�(R��\�W��؏��!/�g@�ġa� Y�0U��1٠f�COw���Ƅ����qxDjD��ޡw�n�����]4����&�]E�������K�_���j4�����zu5�N����H2x}z�>��ә���C���u[�����w�����,y����M��-���}����W+#͵���r���x<����*������>����Ps�H��h~7�nb;f���؋�ի�W�l<���9���;��FӉ[|���.�|M��o����?�42VF�jąy��r����|��W!o|7���ϛ�eL�L�@��hu����㫏��z��!v0��Gw�O�����F�d5x<���J�E�;��Y��x��Wy����ec�839?@��97Pkt�5������x6z?���s���+b�1�BT�j6 �՟����d=�k2������V&�wA��~X: ~X�~4������)���hO'�#;�s�֎�>&�ٲҙ���i���_wf�-Vu���^:3o6�p?���F�ȼ������|ͦ�?��]#��'����g�hb�U���v4�M��w��&����r�,����?��f��w#s'����������� d��9=h�O��Yh���@ y`w���t~����J��� #_��e`a/��?x�L,���f�"��$_{�攧�q���{3�ݳ����wCfKu����ϛ�t*P�
�S� (� =78���y&H3���A�{[f�^�	:��'����B�S�S*HC�VTP3"��B2�����tCO!�t��y3�ޅ��.��Ԅ��O�'~bm�Q��^]U�s��$�F��-=�<
h��C�CA�P y���$���._�e>R<���F8�) �|���I�;X�̈��@�0 �b ��9kN� c�%���s{"����4�b�2ίc�cA�X�Ex��J,�h-ȀI�KR���|�Sdߐ���,�@'e��Ƙ:���nc�x\��og���G^{x�=���+�V��,�l \�[h:,~dePpMR0�ߘ?3'^ߏ�^\S� J��cG	G��Q�-��-�3��. �"�4��g�r�P�t�1h���dD0J���W� ��>VZ��'�/��9�#�#D#�P��;[B؀3���$��W��>�GJ��II�����k�G�8��� ����len�90������4@:�;��Q`P�����n):97�!�!�H���%$��.��H��י���X@���T��iH�Q�3 �7��6�3�2��d��k���*8��j��g��sPށ:WyP���"НxP6���/D�OqXJA�A�q_K^�n��|"�$B,r����'2�������3�%�o����H�Qե���.o�)Q�5���( �����5��8��A�i�`a���u{݁w�{6��!H�����X�m�6k�#�B��<U��W�a�$�ff�3_�ܻB� _55�� �pT�n8j����kۋR��`�fJ;0804��C�:���:��u��e@�O�*����fJ��lp!d�v�Pv�d��}4�6NX�� ��:��xy��m88|��͖*���$=��f�1�
4�.c�q�a`��+=.�"�5h@��a��B	��|���fb�
,G�#��!�:����S�7�ݪ�y���(����po80��DM)ó�)LI����8;.4���U
��0��p_QY�nmd�����^�Q�`J����;�7�����(l���ZRUCJ���2��D�ϋ�0�T@X;�,j$/e`�Y�!����"(�#��%/�ί$}����h���J^����"͖)����t�qb^��(5�:��x���m8j�̔Z�}���T��2S�b�;���$`�vD��-��A�VK��/��f�� c���u`�s�����+�#l�tn���F6F;��>������w�R{��B: ����g���f&H�=�M��jdSw�as|p|��n/=C��3�5jx@��J"y�:	����b�I�3�ǚ�3�Jb����^�k������p6�{�\x����(���k�`sñ������C����g���r8��8�ڝ$9.4�X�£~�{$0]��X�H�ϐ���f�U�q�P"Pĥ܌O�t�l�ǣ���b�Q�����H�x��]<LZm� d-�Ss7�z(d�k;��f���@D([�{l6������&`�: ~Xx��>4L�g���dǆ���*l0{z�l^n�_�S��p�k��y`���j��J�r^���(��6�y=���?�\�Q��m��;t�c�Ԓ�1R: N���w��S���@�[)�ԅ��j�:UD[�u<����Tpނ#BHd��(�"�u|�+��ױ��M吨�C�r	3��H�?��\�3��hbR�JR��7�CjNe���%P6��x�0�B�B�|%����5Y��)E0�������v_���ס����"	��ǙOi��dU0h���@fjI[�0�~�g��6���o����y�CJ��h)����p�o8X�HIQ�!����2�}��kؠ��ːyI��=�����=n�/��/�|��2<���ޱ;�ץ�>P�c�f�R+z�V�-
�\Xe�����db&��s'S���.6��jg	Aaͤ�̚�qR: ����gB�vg�5�x��
6��s����==���ax�����\�J�8�=M�V��`����$�M�F�7��mO�-��N��-`����bv�ـq�y�
�Y�������@S`�������۳��},�GJ��e{��ӒD�J$��O��IJX�
�W�'R�ƚ�w<����E׺���k�V �n�x�n8$��1Qp�ۓ3��4l.V?��t����3X��5$�e,<����&E>+)b��$@�g��X���xU�5b�r���Oc��g��hc�<
%����
`�-��_4��X�	?�G J��&��8��R���_�0��*7ǅ�q��aп���pM����\&�H���4�,o�A㜄����Yo!�E��x��7wv�TMͨ��t ��%� 0(�	,���Huy��K���i\x�sh�.o�@���2�é�ʊ��kRn�C�y��Β�l4�I&!%%BV2��Č�7_��6�`��j�� ц� ���7�u�����1� �.��AD�W""�}p�Tx�2"��U"6���|�D���P<U�fI�[�"Z#!���sxt]��6?VK6h�`� [2�x�-vp��M���=ʱR]�Ai���U`mp�JM�B�U��e.�u�`|�U�K���d9��T��C�3b���73M�v|�����;�����9P��d \%�·��v��~$�A�e)��]/�r;@8@4`�_'����+WΖ(�aj)2�!)|���=�i�@|�'��V�4��)p�6�o�E@��� ���75E\`�f<{kO\�R⢦���{n.�*�f�1�)�X������z�I���6HP� A��ʑh��|3MS$غ7�EKJ�y7H�]�o�;���Od��m*����R{�� @�t�k���$� ��H^C�\&�.��q�J.�� �Ex�qx������f-_���e��ptU �Ѽ�҉���6K�'�]�ZSY�up��n8 j��4SP��^���Bs���Җ!H�P`���X� �� �Dr�DnәpV �x�h���'~ğ��Ļ�.�R�a�����32[�C�� ��f�2N8����9���aeo{�ߺ��+ӽ�C�z�D�c%+����J
<V�P�OD�8{>0<�Y��v��{��Gt���A�UHQ�m��)�T��9-}Q͠\a�_$���Y<��L'_��V��� ��:��p���vHH�+H(hO�^)�E��3�����rY���y
_i�    �x�܎	��i�|&@:Z�u�`�k�}\�J,|JR!%f��Jy�P�	��z	ѧQ<�.�����VLH3[�T�K-�*���P4�1!��
���ZF�,��P z�P�ϐ�~��9,�Ͼ��`O�t�����kP�0��Jh�2��IRѴś-h`��#&9V�ּ-fR�j���ν|2k�����W�@��U�ɠ+``1��������\A�y���P����?;g�@��*��'�r]ؒ��V(��BT#j�
�xͼ���}">��(��d�.L�v \%�~p�Y�a�U��p���Z?K"UMφ���F�}�>�#^p��~�Z�ȍV��òz��_�LT�p�e��jd��F��GW�/��.�W��F�9;� 3�z���S>gu�QP��!Ԫ���R�F�cV%lN�͂�{�n���Î��!=,��m%�>�e0���D$-��I�*Էq�D��m>�z��m�vo�����p�/mvL ���0� ;�N1���U,�>��D����� �|Y�͠m���[Ȩ`K�H�ݧB�b!�D��ؖ �����4���V& J��p��������f|b�Be3>]}4?n<aw;,k+��PX�t�\H(��^ҟ���C!_�ڹT0V�U!^~@�`��@1�扢��*���Mt?�\�96|��g%�Dx��*��%�ܾ���J���/0�׹��`����3s����Hʼ�D��ê��s��+Q][�ʳu�p�h2�a��`a��/+��l6�6��I�[Ώȸ�R%�Kb��F7��_yF��Ԣ�K�E�7ށ"�G7eN(*@�B�+�����U(�T�f&�]}!�!�+j�:���UI�t�C>Z�z��>9����;����N�߅��~l��۝�p�uzޛ���t�5L9=vz��0���n^s����O��e�|+W���O�8����j_��Ӱ�����m~Ƶ��hy׷I_���~BP����*�\�����xl������t�L�̫�j��pC��Sfw��p�Y=M�:��Ĭ����oi>�G��i?���I{��[.�htݙ�E��w������v���Wy�B�� ?s������a]}O$��J���j�5mH���3�M���_�\q���5m�i��N������<k��<�Eо����y���MEE+qm+���f�|O&��gn��p���gE��4g�Tӎ�p"�wO���gPި(K�mSϯ��}���P��w[!y�=���z �p�{z���b�x�)i��*^p�J^N`��<R2MqҘ'���=3�F_�`ؽ��S��<Ƿ���=<�v}�{���B��C/iu�6�~8��n���;oy��v7�_;Ϻ�}��м���ݳ�a�|t	[���0�o;�������;�^��<�z]�A���Ϟ�t���^��gƻ�e>2�d�ax�99k<��N�k�36�����n����w�z'���91vw;��܋��[�^h\��r��|�1c���XhFO��_x�x��N��=�)�~�B�6{$#��-�j�~��ygx6�̣�n�ù��a2�d��IR�W�r��`�q.k������b��	���r�	;�m��*yC�9o�������k�;��!�J���e�e�eԭ�'IU4w�ŕ6OQ��jf�����ޕY6�����Uѧ�]�<2S�ϕ� 8��V;o(Xrat�)ަ��sC�F�e��C���z��P�����8���ALD̮��r��Vi�Ҵ|[$rO"ߐN�4��M'��ڻ-�ޮ�Xb�����]2 .��َ�J<)��s�������7�:�.���&���e֏`��:�*���L��|�U�	5'(���4�IŞ�"޸T���=����m��LuD �60S��*0	�~ A ӈ:$8$8$���U�%6��du�9�/{��%ZP	����|����v��1�������Q�mL�ݺdH� ��b ��E�`>`���.�aON� �Xc�T`�]���C��@D�T��H���d�h�qe2U�6��r��#��a�:����S�7��NC|�>CC �a1 ������Ŕ�b)�T���gJ-v��Rr��}�Js�p�h#�R��z�0,�~98�l��xz�$y��У���;��~�^�EUQ<i��6�fo�u�A0�8�8�TN@���Y9��X�)8	���|	ۤ��|	d4�ú!ű�Bc�̕�K4�&F�vEfMuͥ�2(�8@���H���v�8�i.G�(��	ǉ�r�!��S��0<�>��85�6VADZ�-m���:�gL�]9ݘ����*O'Š�7KfJͩ,��:�
ʆ;P��J��2$4Y��=A��j�V<zR���C�CE�P*�#�mP!�}{��G��J:�"�@����P.�UH�������&������8���2�����wO;�z`D=�T��*@*j1 /��8b$���L��`��ۗإ�y0�1����u��#aa���u{݁w�{��aK�U��L�:Wpb���e�Qe��~��c3�̃��Etm��:m�NM��#�x���ulH��j����.e�
�s_oj���NE��ql�%���`4��)�(���UA�(}����GX4����"�24�fї�d�DX�}X�	Յ�ԣaa�CC E��Ҕ!	����kL�)��OJ���8�90����ʪ�
�x��9f{Z����`��IN$��M�E����$�&T��j�0h���P&O"ًx]�|B��Q-��������$�kl�P���&G�]
�Z}�90�zgx�=];<�P@��){�^�Z�'h��Zq̈��MIcŤ�7lJM ��-�����Q!�j&�nn�'��p'�&`[�B�oGG��Q��֒����&�}�+ҵ�F��ʰ`��I>�j����m��&�\ӝ�8R �a1 ��������)��h�4@�v˫)�sAǆ沁�֯�x�&�p��r�QR>iF�2~��S&��e����S����4�K-b���x�)�C*TCGKb_R��p5L@Z�6W�%29P4�%N�q����*��59�l�W}�s���%ReއP�<hN�6�p5�_M�aln|=K�uf�P$�B���X�¯
��dŞJ�~�P���X���̹�&���޸��"�\�H�]�-2t&n˯iN�CjD���G���L�ܛ/(ڎ�$�f�T5:�p��v��A�9�P	+�� ����z),�Xˀ�'f�C�����|D����E�My��*�9Q� ��(K���W�*`M�$9N�K[�vm'�Ƭ7rJM�B" �@�j�d���iI���Q�%v%�Dv%�s%'�	�'t�؄+�̐��R�)Il�U��M�&�$�����zI���v�"2 E�� 8���:<����%��P��<Ԝ4�W�S���orth0��i!��O�M%�m*!TÖ����b�Lr�0�b�˩�"vJ~M*��
(��8@u�`�`-XL��h8!�,�΋�c�cDsaE��V��,`��UF$9�Xd���2b�x�p��<iF�5���g�ѧ�,�F�O�|ܔ�S=nJ��P6��" �9�F�@����9s"+��Ξ9��'G�F�nE���Y��`:��,�MH��WO�R��_����l��b��n��Awp(R*s?�O���(�1Q�d���$0PPW0����944T��d�	+K͏�DV�Dq�u1�akB7LmZ�h�r	���~���k����� '���!��EsA�p�'r�(X@�/x�6��	OA�d�j�$�,N�&���϶�yͷ9r��nD�Ԙ*)�p�v�J��|�D�� �
�/����3VK	Ub��+�X�X�0VlW.aXA͏��,_7?��g�I��x��LS��t����g����6=�0x�Qq]jKuť��˙�Ha�FT͆�#��uR��� ���h��*l৮�p��nw��E�:�$h��O�e v  �$X���bA��j�, .FW�[�N�����mra��ة= $�"(��@�uu��}�Ծ�<A�D��'�3�8�TNlYXgy �|�U�@JڔX��Fu���=Q��#=� �>1A0t�D��v�^G��|-v�}7����r��x�Xns E��M�Qm�[���+4.IrE�f��El��;���9���lS��VS��TW]:P�_Lw� ����^�r_�x\pyH=��f�x��ۡ¡bTl%hO�l�O�(�[�f��*��ۓ���
u��kN�j�	I4*)�x�^�bdɟM��;�)��C��Χp�xɠ�_�냋A�3X�6ė���Ɏ� J[��knJ(�B&�����Y|=�f�<*��8��z8��}�����@�#W@�r���*_�)!�V�N���G�p�T��	�'�p��n�/�X�£�f�`�>ƕx���qֱN����
b˲���,�{o��/�x+�ݼ�Ԓ*!�x��vt��$(�$�z;�/�	P�I�A�X�P8���q�����vQx��8q^	Y+%.HVG�t��:
��Y�V'v��������Z�����^s��TR,�eP���"���eZ`*(rd��E�N����?A)��D�r�s'�K.z�p�v�Ҭw_H\*�c����<�}�>����'+`P�	�V0����(�y�������W<};�̎*)�p�Lv���Đ�8ڛY��ȫp2�M�D(t��/�>�^tO��
�ͳw��
?1�#�RNXI@D�0�����Ɏ�S�]tcVeg�����3>����wO;�'�EfNu)��R�[�X@]����R$�E=8~26K����lǉs���-�m�	m���%N`bE<P&����?�?��(      ,   @   x�3�u
�W�rq��4202�50�52S02�21�24�*�e�������A��=... z��      .   {   x�u�=
�@@�z�{����l��$	Db*���H��_��/�8O5��\��������F���s$+����Y�T�-��|���S?�e�@,�,�o��8��qU]���!���$+      /   \   x�3�t����t�q�4202�50�52T00�24�2��*�e��������������H�VcN�P� GW�`WK-�����p��qqq q"�      1      x�3��/H-JL�/�4000�#+0�*��Z\R����W�Z̩��eę����^TZ�O�!E�i���E 3�@�s&��f�e���Tm�L�N�4202�5��50V04�22�2��*������ ��?o      3   �  x�u�Ms�:�u�.��Bx�!hQ��W;w�
	�ȃ��	mu�ε3��~sN҈g�9��<�(8���^��2�,%|��^���}���9Τ����{���i�l�-M ҠJt�Aʳ`�)ɒ�R�� C�{P�!���Au¶FzH��.R����Q�S�X�(�4��xܳ��|�i��C^�l�;AuZ�,ʱ,Ȱp^���;Zy�5��^���@����#�0�"b�����w�o�H.B("!w���zm�����u8�c�)�Kn���<�;���s������&�bΏ�+@*T4�ʏ���y��l j��Ӛ���,��Q�F]�%��Yb'��;p��np�F������֭^mq�e��j��W��%k�X��8���t�HUE��#�$]!���Ӛ�A���eŊ��6���w��&y����_�����?">�,Fvd{�����AuO�:�Ι�S�8|��j���zPk�(� ԟ��<
.��.�^~lD�w�}l�"]O����:�Fo9��z���(Н�q���l��9��z
0"����}�mm������Ӛ�! nC��\��-�<�����#�U�/5_i+�&]��z��~l坘����^a	�Q�&#J!~�_Z��mw�ꏻ�����T�V�J�>��p;Yu��������]���ِކ�����u�m��s��e��]z��gw:k��������	�(��H��T(�HDn_��N��*;`E      5   +  x����n#7�����)Q���8��6�.��{�(����Oib;�X�%0�)��O:$S"_?�φ���;�G����/C���l�Ⱕ8q�ĵѕ孥����yބl����(���>}4��9�Ǘ��M��H(��NQ�"�'�0Q�(*�L�8��Ey#&�c�$�Лǹ	��&���T�0����_1�D���l�)������G���x��C��<�4q�ƣk2߆w��&�i�0��t1`ل��$|Mg1h�e�����b0nwK�+&���	%�:�({mz4���%~ ���OX��@;�E��{����!ƃ�c������-�VKL<Ġ�i5��I��T�j"D��l��Zb7y��Q�Z�r}�1A�q-T�q��:��^ŐF1u*v����]��^1q��㕆�֩g�?ۊ��Ϧ�#��=H��P~�*Wc�@�9�s�)����c\j�ԃ��պ>�g����\����6�IU��/Nk�C����.�z2���I1n���W��d���]	:�쇵yk�6|mx��m^��e��Ӆ��DZ��F��]���8�6�/��q��L:뎡����~��e��Ŏ�Wp��Y��{L�0�0�w� �	�o��(Lh�X1d���k���*kϣ���٨��<ʬU�Y�o���ƀ�ÿ>�!X�9���8ұ8:��۫r��#�=�@��/2,P�!-.7������U���[�)G�̻�p��p��O��n�*�'WNrұa,�*q娞�����<���v��T9I9X̃�`W:����L�#�S�wՀ�&Vc�	�_�]�/p���8�5��ơ�qCN�_p]L9�q�r���s�b�ɍ�*g�C�3��=��	8һF�)G�l�8�P���m�U��R�O�����q�Ŕ�'VN���'砞0��ͽ�Np3�r�Y/�~�[L9�p�rz�^mk1儅#��Y�,���9�8�a��;�?K�����������Z����՘��E�^=(^b�.��1�X/�w��?�9vtr؎�'���J�n_���|���^Μ�*{��);���P+����m������x      6      x������ � �      8   =  x�}ѽj�0����z��I���t+M)!K����4�����W1������A��!�f��ȱK� ��cR��黗��?@Ni��V(Wh��ύ�@
J԰�<<u��M��.�;����Y���&��؜�1��L%��@v��*���~5y�4FQ汶$��@��C�� o��l�59�"����G�Q�������b+����1��{��M=9Z�s���8Ǉ��FK�8
^/my�ص��
@���8�����ub�o��7W�9h�]l�����!�bs�rI��-�1�}�����B.�Yl��s]U�/O�7     