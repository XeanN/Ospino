import { getAssetUrl } from '../utils/assets';

export const categoriesConfig = [
    { slug: "dulces",       name: "Dulces"       },
    { slug: "chocolateria", name: "Chocolatería" },
    { slug: "galletas",     name: "Galletas"     },
    { slug: "snacks",       name: "Snacks"       },
    { slug: "bebidas",      name: "Bebidas"      },
    { slug: "abarrotes",    name: "Abarrotes"    },
];

export const allProducts = [

    // =========================================================
    // AMBROSOLI
    // =========================================================
    { id: 1, name: "Limón Ambrosoli", category: "dulces", subcategory: "Caramelos Duros", brand: "Ambrosoli",
        presentation: "Caja x 20 Bolsas x 100 Und", unit_weight: "390 gr", code: "2044",
        img_primary: getAssetUrl('dulces/001_limonambrosoli.jpg'),
        description: "Caramelo de limón Ambrosoli." },

    // =========================================================
    // BENOTI
    // =========================================================
    { id: 10, name: "Benoti Copitos de Chocolate", category: "galletas", subcategory: "Cereales", brand: "Benoti",presentation: "Bolsa x 30 Und", unit_weight: "160 gr", code: "9015",img_primary: getAssetUrl('galletas/002_benoticopitos.jpg'),description: "Copitos de chocolate Benoti." },

    { id: 11, name: "Benoti Aritos", category: "galletas", subcategory: "Cereales", brand: "Benoti",presentation: "Bolsa x 30 Und", unit_weight: "160 gr", code: "9013",img_primary: getAssetUrl('galletas/003_benotiaritos.jpg'),description: "Aritos Benoti." },

    // =========================================================
    // BOGIE
    // =========================================================
    { id: 20, name: "Bogie Menta x 120", category: "dulces", subcategory: "Chicles", brand: "Bogie", presentation: "Caja x 41 Disp x 120 Und", unit_weight: "N/A", code: "16018", img_primary: getAssetUrl('dulces/004_bogie_menta120.jpg'), description: "Chiclets Bogie sabor menta." },
    { id: 21, name: "Bogie Familiar (Surtido)", category: "dulces", subcategory: "Chicles", brand: "Bogie", presentation: "Caja x 38 Disp x 20 Und", unit_weight: "N/A", code: "16020", img_primary: getAssetUrl('dulces/005_bogie_familiar.jpg'), description: "Chiclets Bogie Familiar surtido." },
    { id: 22, name: "Bogie Surtido x 120", category: "dulces", subcategory: "Chicles", brand: "Bogie", presentation: "Caja x 41 Disp x 120 Und", unit_weight: "N/A", code: "16013", img_primary: getAssetUrl('dulces/006_bogie_surtido120.jpg'), description: "Chiclets Bogie surtido." },

    // =========================================================
    // BON O BON
    // =========================================================
    { id: 30, name: "Bon O Bon Corazón (Petit)", category: "chocolateria", subcategory: "Bonbones", brand: "Bon O Bon", presentation: "Caja x 18 Dsp x 45 Gr", unit_weight: "45 Gr", code: "007006", img_primary: getAssetUrl('chocolateria/007_bonobon_corazonpetit.jpg'), description: "Bombón Bon O Bon Corazón Petit." },
    { id: 31, name: "Bon O Bon Ventana Leche", category: "chocolateria", subcategory: "Bonbones", brand: "Bon O Bon", presentation: "Caja x 20 Dis x 18 Uni", unit_weight: "N/A", code: "007054", img_primary: getAssetUrl('chocolateria/008_bonobon_ventana.jpg'), description: "Bombón Bon O Bon Ventana Leche." },
    { id: 32, name: "Corazón Pote Bon O Bon", category: "chocolateria", subcategory: "Bonbones", brand: "Bon O Bon", presentation: "Caja x 16 Potes x 180 Gr", unit_weight: "180 Gr", code: "007055", img_primary: getAssetUrl('chocolateria/009_bonobon_pote.jpg'), description: "Pote de bombones Bon O Bon Corazón." },
    { id: 33, name: "Mini Bon O Bon Oblea", category: "chocolateria", subcategory: "Bonbones", brand: "Bon O Bon", presentation: "Caja x 12 Bls x 288 Gr", unit_weight: "288 Gr", code: "007030", img_primary: getAssetUrl('chocolateria/010_bonobon_minioblea.jpg'), description: "Mini Bon O Bon en oblea." },

    // =========================================================
    // CASINO
    // =========================================================
    { id: 40, name: "Casino Pack Choco", category: "galletas", subcategory: "Galletas Rellenas", brand: "Casino", presentation: "Caja x 8 Pack x 6 Und", unit_weight: "258 Grs", code: "017033", img_primary: getAssetUrl('galletas/011_casino_packchoco.jpg'), description: "Galleta Casino rellena de crema de chocolate." },
    { id: 41, name: "Casino Taco (Chocolate)", category: "galletas", subcategory: "Galletas Rellenas", brand: "Casino", presentation: "Caja x 28 Pqt", unit_weight: "129 Gr", code: "017005", img_primary: getAssetUrl('galletas/012_casino_tacochoco.jpg'), description: "Galletas Casino Taco sabor chocolate." },
    { id: 42, name: "Casino Pack Fresa", category: "galletas", subcategory: "Galletas Rellenas", brand: "Casino", presentation: "Caja x 8 Pack x 6 Und", unit_weight: "258 Grs", code: "017035", img_primary: getAssetUrl('galletas/013_casino_packfresa.jpg'), description: "Galleta Casino rellena de crema de fresa." },
    { id: 43, name: "Casino Pack Menta", category: "galletas", subcategory: "Galletas Rellenas", brand: "Casino", presentation: "Caja x 8 Pack x 6 Und", unit_weight: "258 Grs", code: "017037", img_primary: getAssetUrl('galletas/014_casino_packmenta.jpg'), description: "Galleta Casino rellena de crema de menta." },
    { id: 44, name: "Casino Pack Vainilla", category: "galletas", subcategory: "Galletas Rellenas", brand: "Casino", presentation: "Caja x 8 Pack x 6 Und", unit_weight: "258 Grs", code: "017038", img_primary: getAssetUrl('galletas/015_casino_packvainilla.jpg'), description: "Galleta Casino rellena de crema de vainilla." },
    { id: 45, name: "Casino Taco (Menta)", category: "galletas", subcategory: "Galletas Rellenas", brand: "Casino", presentation: "Caja x 28 Pqt", unit_weight: "129 Gr", code: "017016", img_primary: getAssetUrl('galletas/016_casino_tacomenta.jpg'), description: "Galletas Casino Taco sabor menta." },

    // =========================================================
    // CHIPS AHOY
    // =========================================================
    { id: 50, name: "Chips Ahoy Pack", category: "galletas", subcategory: "Galletas Bulces", brand: "Chips Ahoy",
        presentation: "Caja x 24 Pack x 6 Und", unit_weight: "N/A", code: "36032",
        img_primary: getAssetUrl('galletas/017_chipsahoy_pack.jpg'),
        description: "Galleta Chips Ahoy con chips de chocolate." },

    // =========================================================
    // COSTA
    // =========================================================
    { id: 60, name: "Chips Chocolate Costa", category: "galletas", subcategory: "Galletas Rellenas", brand: "Costa", presentation: "Caja x 12 Pack x 6 Und", unit_weight: "36 Gr", code: "019077", img_primary: getAssetUrl('galletas/018_chipschoco_costa.jpg'), description: "Galletas Costa Chips con chispas de chocolate." },
    { id: 61, name: "Frac Galleta Chocolate", category: "galletas", subcategory: "Galletas Rellenas", brand: "Costa", presentation: "Caja x 12 Pack x 6 Und", unit_weight: "41 Gr", code: "019065", img_primary: getAssetUrl('galletas/019_frac_choco_costa.jpg'), description: "Galletas Frac rellenas de chocolate." },
    { id: 62, name: "Wafer Costa Chocolate", category: "galletas", subcategory: "Wafers", brand: "Costa", presentation: "Caja x 32 Un", unit_weight: "124 Gr", code: "019070", img_primary: getAssetUrl('galletas/020_waferchoco_costa.jpg'), description: "Wafer Costa sabor a chocolate." },
    { id: 63, name: "Agua Line Pack", category: "galletas", subcategory: "Galletas Saladas", brand: "Costa", presentation: "Caja x 12 Pqs x 6 Und", unit_weight: "42 Gr", code: "019062", img_primary: getAssetUrl('galletas/021_agualine_pack.jpg'), description: "Galletas de agua Agua Line en pack." },
    { id: 64, name: "Agua Line Taco", category: "galletas", subcategory: "Galletas Dulces", brand: "Costa", presentation: "Caja x 21 Und", unit_weight: "200 Gr", code: "019063", img_primary: getAssetUrl('galletas/022_agualine_taco.jpg'), description: "Galletas de agua Agua Line en taco." },
    { id: 65, name: "Caritas Costa", category: "galletas", subcategory: "Galletas Dulces", brand: "Costa", presentation: "Caja x 16 Pack x 6 Und", unit_weight: "44.5 Gr", code: "019060", img_primary: getAssetUrl('galletas/023_caritas_costa.jpg'), description: "Galletas dulces Caritas de Costa." },
    { id: 66, name: "Surtidas Costa Lata", category: "galletas", subcategory: "Galletas Dulces", brand: "Costa", presentation: "Lata", unit_weight: "18 x 452 Gr", code: "019081", img_primary: getAssetUrl('galletas/024_surtidas_lata.jpg'), description: "Lata de galletas surtidas Costa." },
    { id: 67, name: "Vainiya Galleta", category: "galletas", subcategory: "Galletas Dulces", brand: "Costa", presentation: "Caja x 20 Pack x 6 Unds", unit_weight: "32 Gr", code: "019035", img_primary: getAssetUrl('galletas/025_vainiyapack.jpg'), description: "Galletas de vainilla Vainiya Costa." },
    { id: 68, name: "Soda Line Pack", category: "galletas", subcategory: "Galletas Saladas", brand: "Costa", presentation: "Caja x 12 Pack x 6 Und", unit_weight: "40 Gr", code: "019040", img_primary: getAssetUrl('galletas/026_sodaline_pack.jpg'), description: "Galletas Soda Line de Costa en pack." },
    { id: 69, name: "Soda Line Taco", category: "galletas", subcategory: "Galletas Saladas", brand: "Costa", presentation: "Caja x 21 Und", unit_weight: "170 Gr", code: "019041", img_primary: getAssetUrl('galletas/027_sodaline_taco.jpg'), description: "Galletas Soda Line de Costa en taco." },
    { id: 70, name: "Wafer Costa Fresa", category: "galletas", subcategory: "Wafers", brand: "Costa", presentation: "Caja x 32 Un", unit_weight: "124 Gr", code: "019071", img_primary: getAssetUrl('galletas/028_waferfresa_costa.jpg'), description: "Wafer Costa sabor a fresa." },
    { id: 71, name: "Wafer Costa Vainilla", category: "galletas", subcategory: "Wafers", brand: "Costa", presentation: "Caja x 32 Un", unit_weight: "124 Gr", code: "019073", img_primary: getAssetUrl('galletas/029_wafervainilla_costa.jpg'), description: "Wafer Costa sabor a vainilla." },
    { id: 72, name: "Nik Chico Vainilla", category: "galletas", subcategory: "Wafers", brand: "Costa", presentation: "12 Pack x 6 Und", unit_weight: "27 Gr", code: "019050", img_primary: getAssetUrl('galletas/030_nikchico_vainilla.jpg'), description: "Galletas Nik Chico sabor vainilla." },
    { id: 73, name: "Vizio Pequeño", category: "chocolateria", subcategory: "Almendras", brand: "Costa", presentation: "Caja x 60 Dis", unit_weight: "63 Gr", code: "019036", img_primary: getAssetUrl('chocolateria/031_vizio_pequeno.jpg'), description: "Almendras bañadas en chocolate Vizio." },
    { id: 74, name: "Vizio Sobre", category: "chocolateria", subcategory: "Almendras", brand: "Costa", presentation: "Caja x 10 Disp x 20 Sobres", unit_weight: "N/A", code: "019039", img_primary: getAssetUrl('chocolateria/032_vizio_sobre.jpg'), description: "Sobres de almendras bañadas en chocolate Vizio." },

    // =========================================================
    // FERRERO ROCHER
    // =========================================================
    { id: 70, name: "Ferrero Rocher T3 Tripack", category: "chocolateria", subcategory: "Bombones Premium", brand: "Ferrero Rocher",
        presentation: "Caja x 6 Disp x 16 Bolsas", unit_weight: "37.5 gr", code: "51002",
        img_primary: getAssetUrl('chocolateria/033_ferrero_rocher.jpg'),
        description: "Bombón Ferrero Rocher en tripack de 3 unidades." },

    // =========================================================
    // FIELD
    // =========================================================
    { id: 80, name: "Soda Galleta Field", category: "galletas", subcategory: "Galletas Importadas", brand: "Field", presentation: "Caja x 36 Pack x 6 Und", unit_weight: "32 Gr", code: "036059", img_primary: getAssetUrl('galletas/034_soda_field.jpg'), description: "Galleta Soda Field importada." },
    { id: 81, name: "Vainilla Field Galleta", category: "galletas", subcategory: "Galletas Importadas", brand: "Field", presentation: "Caja x 24 Pack x 6 Und", unit_weight: "N/A", code: "036014", img_primary: getAssetUrl('galletas/035_vainilla_field.jpg'), description: "Galletas de vainilla Field importadas." },

    // =========================================================
    // GLOBO POP
    // =========================================================
    { id: 90, name: "Globo Pop Leche/Chocolate", category: "dulces", subcategory: "Chupetes", brand: "Globo Pop", presentation: "Caja x 30 Bls x 24 Und", unit_weight: "N/A", code: "016015", img_primary: getAssetUrl('dulces/036_globopop_leche.jpg'), description: "Chupete Globo Pop sabor leche y chocolate." },
    { id: 91, name: "Globo Pop Cereza Acid", category: "dulces", subcategory: "Chupetes", brand: "Globo Pop", presentation: "Caja x 30 Bls x 24 Und", unit_weight: "N/A", code: "016003", img_primary: getAssetUrl('dulces/037_globopop_cereza.jpg'), description: "Chupete Globo Pop Acid sabor cereza." },
    { id: 92, name: "Globo Pop Fresa Aluminizado", category: "dulces", subcategory: "Chupetes", brand: "Globo Pop", presentation: "Caja x 30 Bls x 24 Und", unit_weight: "N/A", code: "016004", img_primary: getAssetUrl('dulces/038_globopop_fresa.jpg'), description: "Chupete aluminizado Globo Pop sabor a fresa." },
    { id: 93, name: "Globo Pop Maracuyá", category: "dulces", subcategory: "Chupetes", brand: "Globo Pop", presentation: "Caja x 30 Bls x 24 Und", unit_weight: "432 Gr", code: "016019", img_primary: getAssetUrl('dulces/039_globopop_maracuya.jpg'), description: "Chupete Globo Pop sabor maracuyá." },
    { id: 94, name: "Globo Pop Neón", category: "dulces", subcategory: "Chupetes", brand: "Globo Pop", presentation: "Caja x 30 Bols x 25 Und", unit_weight: "432 Grs", code: "016005", img_primary: getAssetUrl('dulces/040_globopop_neon.jpg'), description: "Chupete Globo Pop Neón." },
    { id: 95, name: "Globo Pop Surtido", category: "dulces", subcategory: "Chupetes", brand: "Globo Pop", presentation: "Caja x 30 Bls x 24 Und", unit_weight: "N/A", code: "016006", img_primary: getAssetUrl('dulces/041_globopop_surtido.jpg'), description: "Chupete Globo Pop surtido." },
    { id: 96, name: "Led (Surtido) Globo Pop", category: "dulces", subcategory: "Chupetes", brand: "Globo Pop", presentation: "Caja de 12 Dpl x 20 Un", unit_weight: "N/A", code: "016028", img_primary: getAssetUrl('dulces/042_globopop_led.jpg'), description: "Chupete Globo Pop Led surtido." },

    // =========================================================
    // GRANO DE ORO
    // =========================================================
    { id: 100, name: "Avena Grano de Oro", category: "abarrotes", subcategory: "Avena", brand: "Grano de Oro", presentation: "Agranel", unit_weight: "5 Kg", code: "048003", img_primary: getAssetUrl('abarrotes/043_avena_granodeoro.jpg'), description: "Avena Grano de Oro a granel." },
    { id: 101, name: "Fideo Macarrón Grano de Oro", category: "abarrotes", subcategory: "Fideos", brand: "Grano de Oro", presentation: "Caja x 20 Und", unit_weight: "250 Gr", code: "048021", img_primary: getAssetUrl('abarrotes/044_macarron_granodeoro.jpg'), description: "Fideo macarrón Grano de Oro." },
    { id: 102, name: "Fideo Super Combo Grano de Oro", category: "abarrotes", subcategory: "Fideos", brand: "Grano de Oro", presentation: "Caja x 20 Und", unit_weight: "250 Gr", code: "048001", img_primary: getAssetUrl('abarrotes/045_supercombo_granodeoro.jpg'), description: "Fideo Super Combo Grano de Oro (Canuto, Codo, Tornillo, Corbata)." },
    { id: 103, name: "Fideo Tallarín Grano de Oro", category: "abarrotes", subcategory: "Fideos", brand: "Grano de Oro", presentation: "Caja x 20 Und", unit_weight: "500 Gr", code: "048015", img_primary: getAssetUrl('abarrotes/046_tallarin_granodeoro.jpg'), description: "Fideo tallarín Grano de Oro." },

    // =========================================================
    // HALLS
    // =========================================================
    { id: 110, name: "Halls Barra Cherry", category: "dulces", subcategory: "Caramelos Mentolados", brand: "Halls", presentation: "Caja x 30 Dsp x 12 Und", unit_weight: "2.8 G", code: "036011", img_primary: getAssetUrl('dulces/047_halls_cherry.jpg'), description: "Caramelo Halls sabor a Cherry." },
    { id: 111, name: "Halls Barra Fruti Mix", category: "dulces", subcategory: "Caramelos Mentolados", brand: "Halls", presentation: "Caja x 30 Dis x 12 Und", unit_weight: "302.24 Grs", code: "036046", img_primary: getAssetUrl('dulces/048_halls_frutimix.jpg'), description: "Caramelo Halls sabor Fruti Mix." },
    { id: 112, name: "Halls Barra Mentol", category: "dulces", subcategory: "Caramelos Mentolados", brand: "Halls", presentation: "Caja x 30 Dsp x 12 Und", unit_weight: "28 Grs", code: "036008", img_primary: getAssetUrl('dulces/049_halls_mentol.jpg'), description: "Caramelo Halls clásico sabor a mentol." },
    { id: 113, name: "Halls Barra Mora Azul", category: "dulces", subcategory: "Caramelos Mentolados", brand: "Halls", presentation: "Caja x 30 Dis x 12 Und", unit_weight: "302.24 Grs", code: "036009", img_primary: getAssetUrl('dulces/050_halls_moraazul.jpg'), description: "Caramelo Halls sabor a Mora Azul." },
    { id: 114, name: "Halls Barra Strong", category: "dulces", subcategory: "Caramelos Mentolados", brand: "Halls", presentation: "Caja x 30 Dis x 12 Und", unit_weight: "27.5 G", code: "036010", img_primary: getAssetUrl('dulces/051_halls_strong.jpg'), description: "Caramelo Halls sabor Strong." },
    { id: 115, name: "Halls Bolsa Xstrong", category: "dulces", subcategory: "Caramelos Mentolados", brand: "Halls", presentation: "Caja x 30 Bls x 100 Und", unit_weight: "300 Grs", code: "036051", img_primary: getAssetUrl('dulces/052_halls_bolsastrong.jpg'), description: "Bolsa de caramelos Halls Xstrong." },

    // =========================================================
    // INKA CHIPS
    // =========================================================
    { id: 120, name: "Inka Chips Familiar Jalapeño", category: "snacks", subcategory: "Papas Fritas", brand: "Inka Chips",presentation: "Caja x 12 Und", unit_weight: "135 gr", code: "29016",img_primary: getAssetUrl('snacks/053_inkachips_jalapeno.jpg'),description: "Inka Chips en presentación familiar sabor a jalapeño." },

    // =========================================================
    // MONFER
    // =========================================================
    { id: 130, name: "Monfer Corazón Rojo x 3", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Caja x 90 Estuches", unit_weight: "36 Gr", code: "110001", img_primary: getAssetUrl('chocolateria/054_monfer_corazonrojo3.jpg'), description: "Bombón de chocolate Monfer en estuche corazón rojo x 3 unidades." },
    { id: 131, name: "Monfer Corazón Rojo x 5", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Caja x 60 Estuches", unit_weight: "40 Gr", code: "110010", img_primary: getAssetUrl('chocolateria/055_monfer_corazonrojo5.jpg'), description: "Bombón de chocolate Monfer en estuche corazón rojo x 5 unidades." },
    { id: 132, name: "Monfer Corazón Rojo x 8", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Caja x 36 Estuches", unit_weight: "64 Gr", code: "110012", img_primary: getAssetUrl('chocolateria/056_monfer_corazonrojo8.jpg'), description: "Bombón de chocolate Monfer en estuche corazón rojo x 8 unidades." },
    { id: 133, name: "Monfer Bolsa Bombones", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Caja x 6 Bls x 80 Uni", unit_weight: "1 Kg", code: "110030", img_primary: getAssetUrl('chocolateria/057_monfer_bolsa1kg.jpg'), description: "Bolsa de bombones de chocolate Monfer de 1Kg." },
    { id: 134, name: "Monfer Estrella", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Caja x 36 Estuches", unit_weight: "62.5 Gr", code: "110027", img_primary: getAssetUrl('chocolateria/058_monfer_estrella.jpg'), description: "Bombón de chocolate Monfer en estuche forma de estrella." },
    { id: 135, name: "Monfer Rosa x 4", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Caja x 8 Dsp x 12 Estuches", unit_weight: "50 Gr", code: "110005", img_primary: getAssetUrl('chocolateria/059_monfer_rosa.jpg'), description: "Bombón de chocolate Monfer en estuche de rosa x 4 unidades." },
    { id: 136, name: "Monfer Rectangular Mix x 12", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Caja x 24 Estuches", unit_weight: "123 Gr", code: "110016", img_primary: getAssetUrl('chocolateria/060_monfer_rectangularmix.jpg'), description: "Estuche rectangular mix de bombones Monfer x 12 unidades." },
    { id: 137, name: "Monfer Corazón Dorado x 12", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Caja x 28 Estuches", unit_weight: "150 Gr", code: "110013", img_primary: getAssetUrl('chocolateria/061_monfer_corazondorado12.jpg'), description: "Bombón de chocolate Monfer en estuche corazón dorado x 12 unidades." },
    { id: 138, name: "Monfer Corazón Dorado x 3", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Caja x 90 Estuches", unit_weight: "37.5 Gr", code: "110003", img_primary: getAssetUrl('chocolateria/062_monfer_corazondorado3.jpg'), description: "Bombón de chocolate Monfer en estuche corazón dorado x 3 unidades." },
    { id: 139, name: "Monfer Corazón Dorado x 8", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Caja x 36 Estuches", unit_weight: "100 Gr", code: "110011", img_primary: getAssetUrl('chocolateria/063_monfer_corazondorado8.jpg'), description: "Bombón de chocolate Monfer en estuche corazón dorado x 8 unidades." },

    // =========================================================
    // OREO
    // =========================================================
    { id: 140, name: "Oreo (Taco) Regular", category: "galletas", subcategory: "Galletas Importadas", brand: "Oreo", presentation: "Caja x 30 Und", unit_weight: "108 Gr", code: "036056", img_primary: getAssetUrl('galletas/064_oreo_taco.jpg'), description: "Galleta Oreo clásica en presentación taco." },
    { id: 141, name: "Oreo Pack", category: "galletas", subcategory: "Galletas Importadas", brand: "Oreo", presentation: "Caja x 28 Pack x 6 Pqt", unit_weight: "36 Gr", code: "036054", img_primary: getAssetUrl('galletas/065_oreo_pack.jpg'), description: "Galletas Oreo en presentación pack." },

    // =========================================================
    // ORQUÍDEA
    // =========================================================
    { id: 150, name: "Orquídea Corazón x 5 (Cacao 50%)", category: "chocolateria", subcategory: "Bombones y Trufas", brand: "Orquídea",presentation: "Estuche x 5 Und", unit_weight: "N/A", code: "10009", img_primary: getAssetUrl('chocolateria/066_orquidea_corazon5.jpg'),description: "Bombón Orquídea relleno, cobertura de chocolate 50% cacao." },

    // =========================================================
    // OSPINO
    // =========================================================
    { id: 160, name: "Cusco Ospino Caja", category: "chocolateria", subcategory: "Chocolates Nacionales", brand: "Ospino", presentation: "Caja x 50 Und", unit_weight: "80 Gr", code: "137002", img_primary: getAssetUrl('chocolateria/067_cusco_ospino.jpg'), description: "Chocotaza Cusco Ospino en presentación caja." },
    { id: 161, name: "Cusco Ospino Plancha", category: "chocolateria", subcategory: "Chocolates Nacionales", brand: "Ospino", presentation: "Plancha x 6 Dsp x 12 Und", unit_weight: "80 Gr", code: "137001", img_primary: getAssetUrl('chocolateria/068_cusco_ospinoplancha.jpg'), description: "Chocotaza Cusco Ospino en presentación plancha." },

    // =========================================================
    // PICARAS
    // =========================================================
    { id: 170, name: "Picaras Fresa Corazón", category: "galletas", subcategory: "Galletas Dulces", brand: "Picaras", presentation: "30 Bolsas x 6 Und", unit_weight: "38 Gr", code: "014026", img_primary: getAssetUrl('galletas/069_picaras_fresa.jpg'), description: "Galletas Picaras sabor fresa con forma de corazón." },
    { id: 171, name: "Picaras Mini", category: "galletas", subcategory: "Galletas Dulces", brand: "Picaras", presentation: "Caja x 14 Tiras x 6 Unds", unit_weight: "46 Gr", code: "014004", img_primary: getAssetUrl('galletas/070_picaras_mini.jpg'), description: "Galletas Picaras en presentación mini." },
    { id: 172, name: "Picaras Clásica", category: "galletas", subcategory: "Galletas Dulces", brand: "Picaras", presentation: "30 Packs x 6 Und", unit_weight: "N/A", code: "014045", img_primary: getAssetUrl('galletas/071_picaras_clasica.jpg'), description: "Galleta Picaras clásica." },
    { id: 173, name: "Picaras Extremas", category: "galletas", subcategory: "Galletas Dulces", brand: "Picaras", presentation: "Caja x 30 Bolsas x 6 Und", unit_weight: "38 Gr", code: "014025", img_primary: getAssetUrl('galletas/072_picaras_extrema.jpg'), description: "Galletas Picaras Extremas." },
    { id: 174, name: "Picaras Menta", category: "galletas", subcategory: "Galletas Dulces", brand: "Picaras", presentation: "30 Pack x 6 Unds", unit_weight: "40 Gr", code: "014022", img_primary: getAssetUrl('galletas/073_picaras_menta.jpg'), description: "Galletas Picaras sabor a menta." },

    // =========================================================
    // RITZ
    // =========================================================
    { id: 180, name: "Ritz Queso Pack", category: "galletas", subcategory: "Galletas Dulces", brand: "Ritz", presentation: "Caja x 20 Pqts x 6 U", unit_weight: "N/A", code: "036013", img_primary: getAssetUrl('galletas/074_ritz_queso.jpg'), description: "Galletas Ritz con relleno sabor a queso en pack." },
    { id: 181, name: "Ritz Taco", category: "galletas", subcategory: "Galletas Saladas", brand: "Ritz", presentation: "Caja x 64 Und", unit_weight: "52.5 G", code: "036053", img_primary: getAssetUrl('galletas/075_ritz_taco.jpg'), description: "Galleta Ritz clásica en presentación taco." },
    { id: 182, name: "Ritz Plain Pack", category: "galletas", subcategory: "Galletas Saladas", brand: "Ritz", presentation: "Caja x 24 Pack x 6 Und", unit_weight: "N/A", code: "036052", img_primary: getAssetUrl('galletas/076_ritz_plain.jpg'), description: "Galleta Ritz clásica (Plain) en presentación pack." },

    // =========================================================
    // SAN JORGE
    // =========================================================
    { id: 190, name: "Agua de Mesa S/Gas", category: "bebidas", subcategory: "Otras Bebidas", brand: "San Jorge", presentation: "Bidón", unit_weight: "20 Lt", code: "047019", img_primary: getAssetUrl('bebidas/077_aguamesa_sanjorge.jpg'), description: "Agua de mesa sin gas San Jorge de 20 litros." },
    { id: 191, name: "Pebesal (Agua Crackers)", category: "bebidas", subcategory: "Otras Bebidas", brand: "San Jorge", presentation: "Caja x 10 Bls", unit_weight: "450 Gr", code: "047054", img_primary: getAssetUrl('bebidas/078_pebesalagua.jpg'), description: "Galletas Pebesal Agua Crackers San Jorge." },
    { id: 192, name: "Angel Grande Copix Chocolate", category: "galletas", subcategory: "Cereales", brand: "San Jorge", presentation: "Caja x 30 Und", unit_weight: "130 Grs", code: "004018", img_primary: getAssetUrl('galletas/079_copix_chocolate.jpg'), description: "Cereal Angel Grande Copix sabor chocolate." },
    { id: 193, name: "Mega Waffer Gn Chocolate", category: "galletas", subcategory: "Wafers", brand: "San Jorge", presentation: "Caja x 16 Pqt", unit_weight: "61 Gr", code: "047029", img_primary: getAssetUrl('galletas/080_megawaffer_choco.jpg'), description: "Mega Waffer Gn sabor a chocolate." },
    { id: 194, name: "Mini Gn (Chocolate) Rellenita", category: "galletas", subcategory: "Galletas Rellenas", brand: "San Jorge", presentation: "Caja x 8 Bls x 50 Und", unit_weight: "N/A", code: "047032", img_primary: getAssetUrl('galletas/081_minign_choco.jpg'), description: "Mini Gn galleta sandwich rellenita de chocolate." },
    { id: 195, name: "Rellenita Choco & Fresa", category: "galletas", subcategory: "Galletas Rellenas", brand: "San Jorge", presentation: "Caja x 5 Pack x 8 Und", unit_weight: "N/A", code: "047058", img_primary: getAssetUrl('galletas/082_rellenita_chocofresa.jpg'), description: "Galleta Rellenita San Jorge sabor choco y fresa." },
    { id: 196, name: "Rellenita Chocolate", category: "galletas", subcategory: "Galletas Rellenas", brand: "San Jorge", presentation: "Caja x 5 Pack x 8 Und", unit_weight: "N/A", code: "047064", img_primary: getAssetUrl('galletas/083_rellenita_choco.jpg'), description: "Galleta Rellenita San Jorge sabor a chocolate." },
    { id: 197, name: "Taco Rellenitas Chocolate", category: "galletas", subcategory: "Galletas Rellenas", brand: "San Jorge", presentation: "Taco x 24 Und", unit_weight: "N/A", code: "047072", img_primary: getAssetUrl('galletas/084_tacorellenita_choco.jpg'), description: "Taco de galletas Rellenitas de chocolate San Jorge." },
    { id: 198, name: "Wafer Gn Chocolate", category: "galletas", subcategory: "Wafers", brand: "San Jorge", presentation: "5 Pack x 6 Un", unit_weight: "27 Gr", code: "047038", img_primary: getAssetUrl('galletas/085_wafergn_choco.jpg'), description: "Wafer Gn de chocolate San Jorge." },
    { id: 199, name: "Angel Grande Avena", category: "galletas", subcategory: "Cereales", brand: "San Jorge", presentation: "Caja x 30 Bls", unit_weight: "130 Gr", code: "004007", img_primary: getAssetUrl('galletas/086_copix_avena.jpg'), description: "Cereal Angel Grande de avena." },
    { id: 200, name: "Angel Grande Chock", category: "galletas", subcategory: "Cereales", brand: "San Jorge", presentation: "Caja x 30 Und", unit_weight: "130 Grs", code: "004017", img_primary: getAssetUrl('galletas/087_cereal_chock.jpg'), description: "Cereal Angel Grande Chock." },
    { id: 201, name: "Angel Grande Flakes", category: "galletas", subcategory: "Cereales", brand: "San Jorge", presentation: "Caja x 30 Und", unit_weight: "130 Grs", code: "004021", img_primary: getAssetUrl('galletas/088_cereal_flakes.jpg'), description: "Cereal Angel Grande Flakes." },
    { id: 202, name: "Angel Grande Fresia Almohada", category: "galletas", subcategory: "Cereales", brand: "San Jorge", presentation: "Caja x 30 Und", unit_weight: "110 Grs", code: "004012", img_primary: getAssetUrl('galletas/089_cereal_fresia.jpg'), description: "Cereal Angel Grande Fresia en almohaditas." },
    { id: 203, name: "Angel Grande Mel", category: "galletas", subcategory: "Cereales", brand: "San Jorge", presentation: "Caja x 30 Und", unit_weight: "130 Grs", code: "004025", img_primary: getAssetUrl('galletas/090_cereal_mel.jpg'), description: "Cereal Angel Grande Mel." },
    { id: 204, name: "Angel Grande Zuck", category: "galletas", subcategory: "Cereales", brand: "San Jorge", presentation: "Caja x 30 Und", unit_weight: "130 Grs", code: "004027", img_primary: getAssetUrl('galletas/091_cereal_zuck.jpg'), description: "Cereal Angel Grande Zuck." },
    { id: 205, name: "Angel (Tira) Fresia Almohada", category: "galletas", subcategory: "Cereales", brand: "San Jorge", presentation: "Caja x 15 Tiras x 12 Und", unit_weight: "18 Gr", code: "004011", img_primary: getAssetUrl('galletas/092_angel_tirafresia.jpg'), description: "Cereal Angel Fresia en almohaditas presentación tira." },
    { id: 206, name: "Angelitos Bongy Masmelos", category: "galletas", subcategory: "Cereales", brand: "San Jorge", presentation: "24 Bls x 50 U", unit_weight: "5 Gr", code: "022044", img_primary: getAssetUrl('galletas/093_angelitos_bongymas.jpg'), description: "Masmelos surtidos Angelitos Bongy." },
    { id: 207, name: "Animalitos Bolsa", category: "galletas", subcategory: "Galletas Dulces", brand: "San Jorge", presentation: "Bolsa x 20 Bls", unit_weight: "60 Gr", code: "047042", img_primary: getAssetUrl('galletas/094_animalitos_bolsa.jpg'), description: "Galletas Animalitos San Jorge en bolsa." },
    { id: 208, name: "Animalitos Tren", category: "galletas", subcategory: "Galletas Dulces", brand: "San Jorge", presentation: "Tren x 4 Bls", unit_weight: "N/A", code: "047045", img_primary: getAssetUrl('galletas/095_animalitos_tren.jpg'), description: "Galletas Animalitos San Jorge en presentación tren." },
    { id: 209, name: "Animalitos x 10 Bolsas", category: "galletas", subcategory: "Galletas Dulces", brand: "San Jorge", presentation: "Bolsa x 10 Bls", unit_weight: "N/A", code: "047044", img_primary: getAssetUrl('galletas/096_animalitos_10bolsas.jpg'), description: "Galletas Animalitos San Jorge paquete de 10 bolsas." },
    { id: 210, name: "Animalitos 3 Kgs", category: "galletas", subcategory: "Galletas Dulces", brand: "San Jorge", presentation: "Caja/Bolsa", unit_weight: "3 Kgs", code: "047043", img_primary: getAssetUrl('galletas/097_animalitos_3kg.jpg'), description: "Galletas Animalitos San Jorge presentación 3 kilos." },
    { id: 211, name: "Blackout Clásica", category: "galletas", subcategory: "Galletas Rellenas", brand: "San Jorge", presentation: "8 Paqt x 4 Und", unit_weight: "N/A", code: "047040", img_primary: getAssetUrl('galletas/098_blackout_clasica.jpg'), description: "Galletas Blackout clásica San Jorge." },
    { id: 212, name: "Blackout Menta", category: "galletas", subcategory: "Galletas Rellenas", brand: "San Jorge", presentation: "8 Paqt x 4 Und", unit_weight: "N/A", code: "047041", img_primary: getAssetUrl('galletas/099_blackout_menta.jpg'), description: "Galletas Blackout sabor a menta San Jorge." },
    { id: 213, name: "Coconut Lonchera", category: "galletas", subcategory: "Galletas Dulces", brand: "San Jorge", presentation: "Paquete x 25 Unidades", unit_weight: "55 G", code: "047069", img_primary: getAssetUrl('galletas/100_coconut_lonchera.jpg'), description: "Galletas Coconut Lonchera San Jorge." }

];

export const getSubcategories = (categorySlug) => {
    const filtered = allProducts.filter(p => p.category === categorySlug);
    return [...new Set(filtered.map(p => p.subcategory))];
};

export const getCategoryName = (slug) => {
    const found = categoriesConfig.find(c => c.slug === slug);
    return found ? found.name : "Todos los Productos";
};