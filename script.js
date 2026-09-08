const products=[
{id:1,name:"Premium Wheat Seeds",cat:"Seeds",price:650,old:750,unit:"5 kg bag",emoji:"🌾",img:"https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:30,desc:"High-quality wheat seeds for productive farming."},
{id:2,name:"Hybrid Vegetable Seeds",cat:"Seeds",price:299,old:349,unit:"250 g pack",emoji:"🌱",img:"https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:45,desc:"A mixed selection of reliable vegetable seeds."},
{id:3,name:"Organic Compost",cat:"Fertilizers",price:399,old:449,unit:"10 kg bag",emoji:"🪴",img:"https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:40,desc:"Organic compost for healthy soil and plants."},
{id:4,name:"NPK Fertilizer",cat:"Fertilizers",price:799,old:899,unit:"5 kg bag",emoji:"🧪",img:"https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=600&auto=format&fit=crop&q=80",rating:4.5,stock:25,desc:"Balanced fertilizer for crop nutrition."},
{id:5,name:"Neem Pesticide",cat:"Pesticides",price:499,old:549,unit:"1 L bottle",emoji:"🌿",img:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:28,desc:"Neem-based plant protection product."},
{id:6,name:"Hand Garden Tool Set",cat:"Farming Tools",price:899,old:999,unit:"Set of 3 tools",emoji:"🛠️",img:"https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:20,desc:"Useful hand tools for garden and farm work."},
{id:7,name:"Drip Irrigation Kit",cat:"Irrigation",price:1299,old:1499,unit:"1 complete kit",emoji:"💧",img:"https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:15,desc:"Efficient drip irrigation starter kit."},
{id:8,name:"Organic Plant Food",cat:"Organic Products",price:349,old:399,unit:"1 kg pouch",emoji:"🌿",img:"https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:35,desc:"Plant food for home gardens and crops."},
{id:9,name:"Cattle Feed",cat:"Animal Feed",price:799,old:899,unit:"25 kg bag",emoji:"🐄",img:"https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&auto=format&fit=crop&q=80",rating:4.5,stock:30,desc:"Nutritious feed for livestock."},
{id:10,name:"Garden Sprayer",cat:"Farming Tools",price:599,old:699,unit:"2 L manual sprayer",emoji:"🚿",img:"https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=600&auto=format&fit=crop&q=80",rating:4.5,stock:22,desc:"Convenient sprayer for garden applications."},
{id:13,name:"Fresh Apples",cat:"Fruits",price:180,old:210,unit:"1 kg",emoji:"🍎",img:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:25,desc:"Crisp, fresh farm-picked red apples for healthy everyday snacking."},
{id:14,name:"Bananas",cat:"Fruits",price:55,old:65,unit:"1 kg",emoji:"🍌",img:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:40,desc:"Naturally sweet, nutrient-rich ripe yellow farm bananas."},
{id:15,name:"Mangoes",cat:"Fruits",price:120,old:150,unit:"1 kg",emoji:"🥭",img:"https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:30,desc:"Juicy seasonal Indian mangoes with aromatic sweetness."},
{id:16,name:"Oranges",cat:"Fruits",price:90,old:110,unit:"1 kg",emoji:"🍊",img:"https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:35,desc:"Fresh, vitamin C rich juicy oranges direct from orchards."},
{id:25,name:"Pomegranates (Anaar)",cat:"Fruits",price:160,old:190,unit:"1 kg",emoji:"🍎",img:"https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:28,desc:"Ruby-red, juicy pomegranate pearls packed with powerful antioxidants."},
{id:26,name:"Green Seedless Grapes",cat:"Fruits",price:95,old:120,unit:"500 g",emoji:"🍇",img:"https://images.unsplash.com/photo-1596363505729-4190a9506133?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:35,desc:"Sweet, crisp seedless green grapes freshly harvested from vineyards."},
{id:27,name:"Fresh Watermelon",cat:"Fruits",price:60,old:75,unit:"1 pc (approx 2.5 kg)",emoji:"🍉",img:"https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:20,desc:"Deep red, sweet and hydrating whole farm-fresh watermelon."},
{id:28,name:"Ripe Papaya",cat:"Fruits",price:50,old:65,unit:"1 pc (approx 1 kg)",emoji:"🍈",img:"https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=600&auto=format&fit=crop&q=80",rating:4.5,stock:25,desc:"Naturally ripened sweet papaya rich in vitamins A, C and digestive enzymes."},
{id:29,name:"Fresh Strawberries",cat:"Fruits",price:110,old:140,unit:"200 g pack",emoji:"🍓",img:"https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:30,desc:"Plump, sweet and aromatic hill-station strawberries handpicked with care."},
{id:30,name:"Fresh Pineapple",cat:"Fruits",price:85,old:105,unit:"1 pc",emoji:"🍍",img:"https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:22,desc:"Golden ripe, tangy-sweet tropical pineapple with vibrant flavor."},
{id:31,name:"Fresh Guava (Amrood)",cat:"Fruits",price:65,old:80,unit:"1 kg",emoji:"🍐",img:"https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:30,desc:"Crisp and fragrant green farm guavas with pinkish sweet pulp."},
{id:32,name:"Imported Kiwi",cat:"Fruits",price:120,old:150,unit:"3 pcs",emoji:"🥝",img:"https://images.unsplash.com/photo-1585059895524-72359e06133a?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:24,desc:"Zesty, nutrient-dense green kiwis packed with natural vitamin C."},
{id:33,name:"Tender Coconut (Nariyal Pani)",cat:"Fruits",price:55,old:65,unit:"1 pc",emoji:"🥥",img:"https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&auto=format&fit=crop&q=80",rating:4.9,stock:45,desc:"Fresh sweet natural electrolyte coconut water with soft coconut malai."},
{id:34,name:"Fresh Lemons (Nimbu)",cat:"Fruits",price:45,old:60,unit:"500 g",emoji:"🍋",img:"https://images.unsplash.com/photo-1590502593747-42a996133562?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:50,desc:"Juicy, aromatic yellow lemons ideal for refreshing drinks and seasonings."},
{id:47,name:"Exotic Dragon Fruit",cat:"Fruits",price:120,old:150,unit:"1 pc",emoji:"🐉",img:"https://images.unsplash.com/photo-1527325678964-54921661f888?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:20,desc:"Exotic magenta dragon fruit with mild refreshing sweet taste."},
{id:48,name:"Sweet Lime (Mosambi)",cat:"Fruits",price:75,old:95,unit:"1 kg",emoji:"🍈",img:"https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:35,desc:"Juicy, mildly sweet citrus mosambi direct from orchards, rich in immune-boosting vitamin C."},
{id:49,name:"Fresh Chikoo (Sapota)",cat:"Fruits",price:60,old:75,unit:"1 kg",emoji:"🥔",img:"https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:30,desc:"Soft, naturally granular and sweet farm chikoo with rich caramel-honey malt flavor."},
{id:50,name:"Sweet Muskmelon (Kharbuja)",cat:"Fruits",price:65,old:85,unit:"1 pc (approx 1.2 kg)",emoji:"🍈",img:"https://images.unsplash.com/photo-1571575179703-4bde44fb14b7?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:25,desc:"Fragrant, honey-sweet netted cantaloupe muskmelon for refreshing hydration."},
{id:51,name:"Black Seedless Grapes",cat:"Fruits",price:110,old:135,unit:"500 g",emoji:"🍇",img:"https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:28,desc:"Crisp, deep-purple seedless black grapes packed with natural antioxidants and resveratrol."},
{id:52,name:"Custard Apple (Sitaphal)",cat:"Fruits",price:140,old:170,unit:"1 kg",emoji:"🍏",img:"https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&auto=format&fit=crop&q=80",rating:4.9,stock:20,desc:"Velvety, creamy sweet pulp rich in magnesium and vitamin C with a luscious texture."},
{id:53,name:"Fresh Green Pears (Nashpati)",cat:"Fruits",price:130,old:160,unit:"1 kg",emoji:"🍐",img:"https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:25,desc:"Crisp, bell-shaped juicy green pears rich in dietary fiber and delicate natural sweetness."},
{id:54,name:"Fresh Hass Avocado",cat:"Fruits",price:150,old:190,unit:"2 pcs (approx 350 g)",emoji:"🥑",img:"https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:22,desc:"Buttery, nutrient-dense ripe avocados loaded with heart-healthy monounsaturated fats."},
{id:55,name:"Fresh Blueberries",cat:"Fruits",price:199,old:249,unit:"125 g pack",emoji:"🫐",img:"https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=600&auto=format&fit=crop&q=80",rating:4.9,stock:18,desc:"Plump antioxidant superfood berries bursting with sweet-tart natural goodness."},
{id:56,name:"Kashmiri Shimla Apples",cat:"Fruits",price:195,old:230,unit:"1 kg",emoji:"🍎",img:"https://images.unsplash.com/photo-1579613832125-5d34a13ffe0a?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:32,desc:"High-altitude mountain apples with blushed crimson skin and crisp, juicy honey sweetness."},
{id:57,name:"Sweet Red Plums (Alubukhara)",cat:"Fruits",price:110,old:140,unit:"500 g",emoji:"🍑",img:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:20,desc:"Juicy, sweet and slightly tart red plums harvested fresh from temperate orchards."},
{id:58,name:"Pink Guava (Thai Amrood)",cat:"Fruits",price:80,old:100,unit:"1 kg",emoji:"🍐",img:"https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:28,desc:"Sweet aromatic pink-pulp guavas with soft seeds and high dietary fiber."},
{id:59,name:"Medjool Farm Dates (Khajoor)",cat:"Fruits",price:180,old:220,unit:"500 g pack",emoji:"🌴",img:"https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:30,desc:"Naturally sweet, chewy farm-fresh dates providing instant wholesome energy."},
{id:17,name:"Potatoes",cat:"Vegetables",price:35,old:45,unit:"1 kg",emoji:"🥔",img:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:60,desc:"Everyday wholesome farm-harvested cooking potatoes."},
{id:18,name:"Onions",cat:"Vegetables",price:55,old:65,unit:"1 kg",emoji:"🧅",img:"https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:55,desc:"Crisp, pungent red onions harvested for Indian kitchens."},
{id:19,name:"Tomatoes",cat:"Vegetables",price:40,old:50,unit:"1 kg",emoji:"🍅",img:"https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:50,desc:"Fresh ripe red farm tomatoes perfect for curries and salads."},
{id:20,name:"Carrots",cat:"Vegetables",price:70,old:85,unit:"1 kg",emoji:"🥕",img:"https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?w=600&auto=format&fit=crop&q=80",rating:4.5,stock:35,desc:"Crunchy, naturally sweet vibrant orange farm carrots."},
{id:21,name:"Cauliflower",cat:"Vegetables",price:80,old:95,unit:"1 kg",emoji:"🥦",img:"https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=600&auto=format&fit=crop&q=80",rating:4.5,stock:30,desc:"Fresh, dense white cauliflower florets freshly picked."},
{id:22,name:"Green Capsicum",cat:"Vegetables",price:110,old:130,unit:"1 kg",emoji:"🫑",img:"https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:25,desc:"Crisp, glossy green bell peppers with authentic garden taste."},
{id:23,name:"Cucumber",cat:"Vegetables",price:50,old:60,unit:"1 kg",emoji:"🥒",img:"https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=600&auto=format&fit=crop&q=80",rating:4.5,stock:40,desc:"Cool, refreshing crisp green cucumbers for healthy meals."},
{id:24,name:"Fresh Spinach",cat:"Vegetables",price:45,old:55,unit:"500 g",emoji:"🥬",img:"https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:35,desc:"Farm-fresh tender dark green spinach rich in iron and nutrients."},
{id:35,name:"Lady Finger (Bhindi)",cat:"Vegetables",price:55,old:70,unit:"1 kg",emoji:"🌱",img:"https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:35,desc:"Tender, fresh green okra harvested daily for crispy stir-fries and curries."},
{id:36,name:"Fresh Garlic (Lehsun)",cat:"Vegetables",price:140,old:170,unit:"500 g",emoji:"🧄",img:"https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:40,desc:"Pungent, high-aroma whole garlic bulbs dried and cleaned for culinary flavor."},
{id:37,name:"Fresh Ginger (Adrak)",cat:"Vegetables",price:80,old:100,unit:"500 g",emoji:"🫚",img:"https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:35,desc:"Spicy, fibrous and fragrant freshly harvested ginger root."},
{id:38,name:"Green Chillies (Hari Mirch)",cat:"Vegetables",price:30,old:40,unit:"250 g",emoji:"🌶️",img:"https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:50,desc:"Crisp, spicy green farm chillies adding authentic heat to any recipe."},
{id:39,name:"Round Brinjal (Baingan)",cat:"Vegetables",price:50,old:65,unit:"1 kg",emoji:"🍆",img:"https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&auto=format&fit=crop&q=80",rating:4.5,stock:30,desc:"Glossy purple round eggplants perfect for bharta and traditional curries."},
{id:40,name:"Fresh Green Peas (Matar)",cat:"Vegetables",price:75,old:95,unit:"1 kg",emoji:"🫛",img:"https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:35,desc:"Sweet, tender whole pea pods freshly picked from winter harvests."},
{id:41,name:"Fresh Green Cabbage",cat:"Vegetables",price:40,old:50,unit:"1 pc (approx 800 g)",emoji:"🥬",img:"https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=80",rating:4.5,stock:40,desc:"Tight, crisp heads of light green cabbage ideal for salads and sabzis."},
{id:42,name:"Fresh Beetroot",cat:"Vegetables",price:55,old:70,unit:"1 kg",emoji:"🍠",img:"https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:30,desc:"Earthy, nutrient-rich vibrant red beetroots for healthy juices and salads."},
{id:43,name:"Button Mushrooms",cat:"Vegetables",price:65,old:80,unit:"200 g pack",emoji:"🍄",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:25,desc:"Plump, clean white button mushrooms packed in hygienic punnets."},
{id:44,name:"Fresh Coriander Leaves",cat:"Vegetables",price:25,old:35,unit:"250 g bunch",emoji:"🌿",img:"https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:60,desc:"Fragrant, dark green fresh coriander leaves for cooking garnishes and chutneys."},
{id:45,name:"Sweet American Corn",cat:"Vegetables",price:45,old:60,unit:"2 pcs",emoji:"🌽",img:"https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:30,desc:"Tender, juicy sweet yellow corn cobs ideal for boiling and roasting."},
{id:60,name:"Bottle Gourd (Lauki / Dudhi)",cat:"Vegetables",price:38,old:50,unit:"1 pc (approx 1 kg)",emoji:"🥒",img:"https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:35,desc:"Tender, water-rich pale green bottle gourd ideal for light curries, soups, and wellness juice."},
{id:61,name:"Bitter Gourd (Karela)",cat:"Vegetables",price:55,old:70,unit:"500 g",emoji:"🥒",img:"https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:28,desc:"Crisp, dark textured farm karela known for blood sugar balance and spicy stuffed roasts."},
{id:62,name:"Fresh Broccoli Crown",cat:"Vegetables",price:85,old:110,unit:"1 pc (approx 500 g)",emoji:"🥦",img:"https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:26,desc:"Dense, deep green broccoli crowns packed with vitamins K & C for healthy stir-fries and salads."},
{id:63,name:"Fresh Methi (Fenugreek Leaves)",cat:"Vegetables",price:30,old:45,unit:"250 g bunch",emoji:"🥬",img:"https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:40,desc:"Aromatic, tender dark green fenugreek leaves perfect for authentic methi theplas and curries."},
{id:64,name:"Fresh Mint Leaves (Pudina)",cat:"Vegetables",price:20,old:30,unit:"200 g bunch",emoji:"🌿",img:"https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=600&auto=format&fit=crop&q=80",rating:4.9,stock:45,desc:"Cooling, intensely fragrant green mint sprigs for biryanis, green chutneys, and lemonades."},
{id:65,name:"Tender French Beans",cat:"Vegetables",price:65,old:85,unit:"500 g",emoji:"🫛",img:"https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:30,desc:"Crisp, stringless slender green beans harvested tender for crunchy stir-fries and pulao."},
{id:66,name:"White Radish (Mooli)",cat:"Vegetables",price:40,old:55,unit:"1 kg",emoji:"🥕",img:"https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?w=600&auto=format&fit=crop&q=80",rating:4.5,stock:35,desc:"Crunchy, spicy-pungent white farm radish with fresh greens for salads and mooli parathas."},
{id:67,name:"Fresh Drumsticks (Moringa)",cat:"Vegetables",price:50,old:65,unit:"250 g pack (4-5 sticks)",emoji:"🥢",img:"https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:30,desc:"Tender moringa drumsticks packed with bio-available minerals for authentic aromatic sambar."},
{id:68,name:"Sweet Potato (Shakarkand)",cat:"Vegetables",price:55,old:70,unit:"1 kg",emoji:"🍠",img:"https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:30,desc:"Nutrient-rich, fiber-dense sweet potatoes delicious when roasted, boiled, or tossed in chaat."},
{id:69,name:"Coloured Bell Peppers (Red & Yellow)",cat:"Vegetables",price:120,old:150,unit:"2 pcs (approx 400 g)",emoji:"🫑",img:"https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:24,desc:"Crisp, vibrant sweet red and yellow capsicums loaded with antioxidants for gourmet cooking."},
{id:70,name:"Ridge Gourd (Turai / Tori)",cat:"Vegetables",price:48,old:60,unit:"500 g",emoji:"🥒",img:"https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=600&auto=format&fit=crop&q=80",rating:4.5,stock:25,desc:"Light and fibrous ridge gourd easily digestible, ideal for soothing everyday Indian sabzi."},
{id:71,name:"Spring Onions (Hara Pyaaz)",cat:"Vegetables",price:35,old:45,unit:"1 bunch (approx 250 g)",emoji:"🧅",img:"https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:35,desc:"Crunchy white scallion bulbs with vibrant aromatic green shoots for stir-fries and noodles."},
{id:72,name:"Fresh Curry Leaves (Kadi Patta)",cat:"Vegetables",price:15,old:25,unit:"100 g bunch",emoji:"🌿",img:"https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600&auto=format&fit=crop&q=80",rating:4.9,stock:50,desc:"Fragrant farm-picked dark green curry leaves essential for South Indian tadka seasoning."},
{id:73,name:"Raw Green Papaya (Kaccha Papita)",cat:"Vegetables",price:40,old:55,unit:"1 pc (approx 800 g)",emoji:"🍈",img:"https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:22,desc:"Firm green unripe papaya high in papain enzymes, perfect for salads, curries, and chutneys."},
{id:74,name:"Fresh Taro Root (Arbi)",cat:"Vegetables",price:60,old:75,unit:"500 g",emoji:"🥔",img:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:25,desc:"Dense, earthy taro roots delicious when boiled and crisped with ajwain and spices."},
{id:75,name:"Basmati Paddy Seeds (Pusa 1121)",cat:"Seeds",price:850,old:950,unit:"5 kg bag",emoji:"🌾",img:"https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:35,desc:"Certified high-yield Pusa 1121 aromatic Basmati rice paddy seeds for bumper kharif harvest."},
{id:76,name:"Hybrid Corn / Maize Seeds",cat:"Seeds",price:450,old:520,unit:"1 kg pack",emoji:"🌽",img:"https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:40,desc:"High-germination hybrid yellow corn seeds with robust disease resistance and high starch yield."},
{id:77,name:"Mustard / Sarson Seeds (Pusa Bold)",cat:"Seeds",price:280,old:330,unit:"1 kg pack",emoji:"🌼",img:"https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:50,desc:"High oil content Pusa Bold black mustard seeds suitable for rabi season sowing across India."},
{id:78,name:"Bt Cotton Hybrid Seeds",cat:"Seeds",price:820,old:920,unit:"450 g packet",emoji:"🌱",img:"https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:25,desc:"Bollgard-II certified hybrid cotton seeds engineered for bollworm resistance and high boll count."},
{id:79,name:"Sunflower Hybrid Seeds (Surajmukhi)",cat:"Seeds",price:380,old:440,unit:"1 kg pack",emoji:"🌻",img:"https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:30,desc:"Early maturing, drought-tolerant hybrid sunflower seeds rich in premium edible oil yield."},
{id:80,name:"Marigold Flower Seeds (Genda Phool)",cat:"Seeds",price:199,old:250,unit:"100 g pack",emoji:"🏵️",img:"https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:45,desc:"Heavy blooming African orange & golden yellow marigold seeds ideal for commercial garlands and natural pest deterrence."},
{id:81,name:"Coriander / Dhaniya Seeds for Sowing",cat:"Seeds",price:160,old:200,unit:"500 g pack",emoji:"🌿",img:"https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:50,desc:"Multi-cut split coriander seeds with fast regrowth, intense aroma, and broad lush green leaves."},
{id:82,name:"DAP (Di-Ammonium Phosphate 18-46-0)",cat:"Fertilizers",price:1350,old:1450,unit:"50 kg bag",emoji:"🧪",img:"https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:30,desc:"High-grade phosphorus and nitrogen fertilizer promoting vigorous root development and early plant vigor."},
{id:83,name:"Neem Coated Urea (46% N)",cat:"Fertilizers",price:320,old:360,unit:"45 kg bag",emoji:"🌾",img:"https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:40,desc:"Slow-release neem coated agricultural urea maximizing nitrogen absorption and crop yield."},
{id:84,name:"Muriate of Potash (MOP 60% K2O)",cat:"Fertilizers",price:950,old:1100,unit:"25 kg bag",emoji:"🧂",img:"https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:28,desc:"Essential potassium nutrient fertilizer enhancing grain weight, fruit sweetness, and pest resilience."},
{id:85,name:"Pure Vermicompost Manure",cat:"Fertilizers",price:299,old:380,unit:"10 kg bag",emoji:"🪱",img:"https://images.unsplash.com/photo-1592417817098-8f3d69102a5c?w=600&auto=format&fit=crop&q=80",rating:4.9,stock:50,desc:"100% pure organic earthworm castings rich in beneficial microbes, nitrogen, and soil conditioning humus."},
{id:86,name:"Seaweed Liquid Fertilizer (Bio-Stimulant)",cat:"Fertilizers",price:449,old:549,unit:"1 L bottle",emoji:"🌊",img:"https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:35,desc:"Cold-pressed natural marine kelp extract packed with micronutrients, auxins, and cytokinins."},
{id:87,name:"Steamed Bone Meal Powder",cat:"Fertilizers",price:350,old:420,unit:"5 kg pack",emoji:"🦴",img:"https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:25,desc:"Slow-releasing organic source of natural phosphorus and calcium for abundant flowering and root growth."},
{id:88,name:"Epsom Salt (Magnesium Sulphate)",cat:"Fertilizers",price:180,old:230,unit:"1 kg pouch",emoji:"✨",img:"https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:60,desc:"Water-soluble magnesium and sulphur booster for deep green foliage, chlorophyll production, and lush growth."},
{id:89,name:"Trichoderma Viride Bio-Fungicide",cat:"Pesticides",price:280,old:340,unit:"1 kg pack",emoji:"🍄",img:"https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:35,desc:"Eco-friendly biocontrol agent effective against root rot, collar rot, damping off, and wilt in all crops."},
{id:90,name:"Beauveria Bassiana Bio-Insecticide",cat:"Pesticides",price:320,old:390,unit:"1 L bottle",emoji:"🐛",img:"https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:30,desc:"Targeted entomopathogenic bio-spray controlling thrips, whiteflies, aphids, caterpillars, and borers."},
{id:91,name:"Copper Oxychloride 50% WP (Blitox)",cat:"Pesticides",price:420,old:490,unit:"500 g pack",emoji:"🛡️",img:"https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:40,desc:"Broad-spectrum protective contact fungicide controlling blights, downy mildew, and leaf spots."},
{id:92,name:"Yellow & Blue Sticky Insect Traps",cat:"Pesticides",price:249,old:320,unit:"Pack of 20 sheets",emoji:"🪤",img:"https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:50,desc:"Weatherproof non-toxic sticky sheets to monitor and trap whiteflies, winged aphids, thrips, and leaf miners."},
{id:93,name:"Chlorpyrifos 20% EC Termite & Pest Shield",cat:"Pesticides",price:390,old:460,unit:"1 L bottle",emoji:"🐜",img:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&auto=format&fit=crop&q=80",rating:4.5,stock:25,desc:"Reliable contact and stomach action pesticide protecting soil and crops against termites and stem borers."},
{id:94,name:"Herbal Spray Pest Repellent (Agniastra)",cat:"Pesticides",price:340,old:410,unit:"1 L bottle",emoji:"🌿",img:"https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:30,desc:"100% botanical plant extract repellent made from ginger, garlic, neem, and chilli to ward off sucking pests."},
{id:95,name:"Pseudomonas Fluorescens Bio-Protectant",cat:"Pesticides",price:260,old:310,unit:"1 kg pack",emoji:"🧪",img:"https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:30,desc:"Beneficial rhizobacterium that prevents bacterial leaf blight, sheath rot, and encourages root health."},
{id:96,name:"Battery-Operated Knapsack Sprayer 16L",cat:"Farming Tools",price:2499,old:2999,unit:"1 unit (12V Battery)",emoji:"🎒",img:"https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:18,desc:"Rechargeable 16-litre motorized knapsack tank with dual-nozzle lance for quick and effortless field spraying."},
{id:97,name:"Traditional Forged Steel Sickle (Daranti)",cat:"Farming Tools",price:249,old:320,unit:"1 pc",emoji:"🌾",img:"https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:45,desc:"Razor-sharp serrated high-carbon forged steel blade with ergonomic rosewood handle for grain harvesting."},
{id:98,name:"Heavy-Duty Farming Spade / Phawra",cat:"Farming Tools",price:549,old:650,unit:"1 pc with handle",emoji:"⛏️",img:"https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:30,desc:"Solid hardened steel digging hoe blade with polished hardwood handle for earth trenching and ridge making."},
{id:99,name:"Professional Bypass Pruning Shears",cat:"Farming Tools",price:420,old:520,unit:"1 pc",emoji:"✂️",img:"https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80",rating:4.9,stock:40,desc:"Ultra-sharp SK5 Japanese carbon steel bypass secateurs for orchard branch trimming and graft pruning."},
{id:100,name:"Ergonomic Manual Weeder & Cultivator",cat:"Farming Tools",price:299,old:370,unit:"1 pc",emoji:"🛠️",img:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:35,desc:"Tri-prong forged carbon steel cultivator claw with rubberized grip for uprooting persistent farm weeds."},
{id:101,name:"14-Teeth Heavy Garden Soil Rake",cat:"Farming Tools",price:480,old:580,unit:"1 pc with steel handle",emoji:"🧹",img:"https://images.unsplash.com/photo-1592417817098-8f3d69102a5c?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:22,desc:"Sturdy steel curved-teeth rake for leveling seedbeds, clearing debris, and loosening hard soil crusts."},
{id:102,name:"Heavy Duty PVC Agricultural Gum Boots",cat:"Farming Tools",price:699,old:850,unit:"1 pair (Size 8-10)",emoji:"🥾",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:35,desc:"Waterproof anti-skid tall farm boots protecting feet from mud, chemicals, and reptile bites in paddy fields."},
{id:103,name:"Compressed Cocopeat Block (5 kg / 75L Yield)",cat:"Gardening",price:249,old:320,unit:"5 kg block",emoji:"🥥",img:"https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:55,desc:"Low-EC washed coconut coir peat block expanding into 75 litres of moisture-retaining potting medium."},
{id:104,name:"Heavy Duty HDPE Grow Bags (Pack of 5)",cat:"Gardening",price:399,old:499,unit:"Pack of 5 (12x12 inch)",emoji:"🪴",img:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:45,desc:"UV-stabilized 220 GSM green grow bags with drainage holes, ideal for terrace vegetables and flowering plants."},
{id:105,name:"5-Litre Garden Watering Can with Brass Rose",cat:"Gardening",price:349,old:420,unit:"1 pc",emoji:"🚿",img:"https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:35,desc:"Durable ergonomic dual-handle plastic watering can providing gentle, rainfall-like shower for delicate seedlings."},
{id:106,name:"Seedling Germination Trays (Pack of 5, 50-Cavities)",cat:"Gardening",price:220,old:280,unit:"Pack of 5 trays",emoji:"🌱",img:"https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:40,desc:"Reusable flexible plastic nursery starter trays for propagating vegetable, herbal, and flower seedlings."},
{id:107,name:"Enriched Potting Soil Mix with Perlite",cat:"Gardening",price:360,old:450,unit:"10 kg bag",emoji:"🪴",img:"https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&auto=format&fit=crop&q=80",rating:4.9,stock:40,desc:"Ready-to-use nutrient-rich potting blend with red soil, vermicompost, perlite, and neem cake for indoor & balcony pots."},
{id:108,name:"Balcony Railing Hanging Planters (Pack of 4)",cat:"Gardening",price:499,old:650,unit:"Set of 4 pots",emoji:"🌸",img:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:30,desc:"Weatherproof oval balcony railing pots with adjustable metal hooks for vibrant vertical urban gardening."},
{id:109,name:"Neem Oil Organic Garden Spray (Cold Pressed)",cat:"Gardening",price:299,old:370,unit:"500 ml bottle",emoji:"🌿",img:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:50,desc:"10000 PPM azadirachtin water-soluble pure neem oil formulation keeping home garden plants pest-free."},
{id:110,name:"Automatic Digital Water Timer Controller",cat:"Irrigation",price:1499,old:1899,unit:"1 unit (Battery Operated)",emoji:"⏱️",img:"https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:20,desc:"Programmable electronic water faucet timer for scheduled automatic garden and greenhouse watering cycles."},
{id:111,name:"360° Rotating Brass Lawn Sprinkler",cat:"Irrigation",price:499,old:620,unit:"1 pc with spike base",emoji:"💦",img:"https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:35,desc:"Heavy-duty full or partial circle pulse sprinkler with heavy zinc alloy base covering up to 40 feet diameter."},
{id:112,name:"Braided Garden Hose Pipe 30m with Spray Nozzle",cat:"Irrigation",price:899,old:1199,unit:"30 metre roll",emoji:"🚰",img:"https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:30,desc:"Kink-resistant 3-layer braided PVC flexible water hose with multi-pattern adjustable brass spray gun."},
{id:113,name:"Adjustable Drip Irrigation Emitters (Pack of 50)",cat:"Irrigation",price:299,old:380,unit:"Pack of 50 pcs",emoji:"💧",img:"https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:60,desc:"0-70 LPH 8-stream micro drippers with barbed connection for pinpoint root hydration without water waste."},
{id:114,name:"Agricultural Layflat Delivery Hose 50m",cat:"Irrigation",price:1750,old:2100,unit:"50 metre coil (2.5 inch)",emoji:"🌊",img:"https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:15,desc:"Reinforced blue PVC flat hose pipe for high-volume agricultural pump flood irrigation and water transfer."},
{id:115,name:"2-Inch Y-Type Disc Irrigation Filter",cat:"Irrigation",price:650,old:780,unit:"1 pc (120 Mesh)",emoji:"🛡️",img:"https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:25,desc:"High-flow 120-mesh disc filter preventing sand, algae, and sediment from clogging drip emitters and sprinklers."},
{id:116,name:"Solar Powered Submersible Water Pump 12V",cat:"Irrigation",price:2899,old:3499,unit:"1 unit (DC Motor)",emoji:"☀️",img:"https://images.unsplash.com/photo-1508873696983-2df5293cb32b?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:12,desc:"Brushless solar DC submersible pump ideal for farm ponds, wells, and off-grid micro-irrigation systems."},
{id:117,name:"Panchagavya Organic Bio-Booster",cat:"Organic Products",price:399,old:480,unit:"1 L bottle",emoji:"🐄",img:"https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&auto=format&fit=crop&q=80",rating:4.9,stock:35,desc:"Traditional Vedic fermented organic elixir from desi cow milk, ghee, curd, and dung for extraordinary crop vitality."},
{id:118,name:"Cold Pressed Mustard Seed Cake Powder (Sarson Khali)",cat:"Organic Products",price:260,old:320,unit:"5 kg pack",emoji:"🌼",img:"https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:45,desc:"Unadulterated mustard cake meal providing organic NPK and sulphur, serving as a natural root nematode deterrent."},
{id:119,name:"Liquid Humic & Fulvic Acid 98%",cat:"Organic Products",price:380,old:460,unit:"1 L bottle",emoji:"🧪",img:"https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:40,desc:"Concentrated potassium humate liquid enhancing soil cation exchange capacity and unlocking micro-nutrients."},
{id:120,name:"Desi Cow Dung Manure Cakes (Pack of 15)",cat:"Organic Products",price:199,old:260,unit:"Pack of 15 pieces",emoji:"🪵",img:"https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:50,desc:"Sun-dried natural organic cakes made from indigenous Indian cow dung for agnihotra, compost tea, and potting."},
{id:121,name:"Concentrated Jeevamrut Microbial Tonic",cat:"Organic Products",price:349,old:420,unit:"1 L bottle",emoji:"🌿",img:"https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80",rating:4.9,stock:30,desc:"Fermented live bio-culture restoring dead soil biology, multiplying beneficial soil fungi, and accelerating root uptake."},
{id:122,name:"Organic Wood Ash Soil Conditioner",cat:"Organic Products",price:210,old:270,unit:"3 kg pack",emoji:"🔥",img:"https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600&auto=format&fit=crop&q=80",rating:4.6,stock:35,desc:"Natural potassium and calcium-rich hardwood ash for neutralising acidic soil and repelling slugs and beetles."},
{id:123,name:"Bio-NPK Liquid Consortia Culture",cat:"Organic Products",price:375,old:450,unit:"1 L bottle",emoji:"🦠",img:"https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:30,desc:"Triple blend of Azotobacter, PSB, and KMB bacteria fixing atmospheric nitrogen and solubilising phosphate and potash."},
{id:124,name:"High-Yield Cattle Feed Pellets (Milk Booster 22% Protein)",cat:"Animal Feed",price:1450,old:1650,unit:"50 kg bag",emoji:"🐄",img:"https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:25,desc:"Enriched bypassed protein pellet feed formulated for dairy cows and buffaloes to boost fat SNF and milk yield."},
{id:125,name:"Chelated Mineral Mixture for Cattle",cat:"Animal Feed",price:420,old:500,unit:"5 kg pack",emoji:"💊",img:"https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600&auto=format&fit=crop&q=80",rating:4.9,stock:40,desc:"Fortified with copper, zinc, selenium, calcium, and phosphorus for reproductive health and strong immunity."},
{id:126,name:"Pure Wheat Bran (Choker) Livestock Feed",cat:"Animal Feed",price:680,old:780,unit:"25 kg bag",emoji:"🌾",img:"https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:30,desc:"Dietary fiber-rich natural wheat bran byproduct aiding rumen digestion and gut health for cattle and horses."},
{id:127,name:"Mustard Oil Cake Cattle Feed (Khalo)",cat:"Animal Feed",price:850,old:980,unit:"25 kg bag",emoji:"🟡",img:"https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:28,desc:"Protein-dense expeller pressed mustard cake providing energy, essential fatty acids, and glossy coats for dairy cattle."},
{id:128,name:"Calf Starter Grower Balanced Pellets",cat:"Animal Feed",price:799,old:920,unit:"20 kg bag",emoji:"🐮",img:"https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=600&auto=format&fit=crop&q=80",rating:4.8,stock:20,desc:"Easily digestible amino acid and vitamin enriched starter feed promoting early rumen papillae growth in calves."},
{id:129,name:"Liquid Calcium & Vitamin D3 Tonic for Cattle",cat:"Animal Feed",price:480,old:580,unit:"5 L can",emoji:"🥛",img:"https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&auto=format&fit=crop&q=80",rating:4.9,stock:35,desc:"High-bioavailability calcium phosphorus suspension preventing milk fever and bone demineralisation in high yielders."},
{id:130,name:"Goat & Sheep High-Energy Nutrition Pellets",cat:"Animal Feed",price:920,old:1080,unit:"25 kg bag",emoji:"🐐",img:"https://images.unsplash.com/photo-1524024973431-2ad916746881?w=600&auto=format&fit=crop&q=80",rating:4.7,stock:25,desc:"Balanced feed enriched with bypass fat, grains, and molasses for rapid weight gain and lean muscle development in goats."}
];
const categories=[
  {name:"Seeds", img:"https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&auto=format&fit=crop&q=80", count:"9+ Varieties", advantages:["High germination", "Better crop yield"]},
  {name:"Fertilizers", img:"https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=400&auto=format&fit=crop&q=80", count:"9+ Varieties", advantages:["Improves soil nutrients", "Supports strong growth"]},
  {name:"Pesticides", img:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&auto=format&fit=crop&q=80", count:"8+ Varieties", advantages:["Protects from pests", "Helps prevent crop loss"]},
  {name:"Farming Tools", img:"https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=400&auto=format&fit=crop&q=80", count:"9+ Tools", advantages:["Saves time and effort", "Built for farm work"]},
  {name:"Gardening", img:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&auto=format&fit=crop&q=80", count:"7+ Varieties", advantages:["Perfect for home gardens", "Encourages healthy plants"]},
  {name:"Irrigation", img:"https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=400&auto=format&fit=crop&q=80", count:"8+ Systems", advantages:["Reduces water waste", "Delivers even watering"]},
  {name:"Organic Products", img:"https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&auto=format&fit=crop&q=80", count:"8+ Varieties", advantages:["Natural farm care", "Improves soil health"]},
  {name:"Animal Feed", img:"https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&auto=format&fit=crop&q=80", count:"8+ Varieties", advantages:["Balanced animal nutrition", "Supports healthy growth"]},
  {name:"Fruits", img:"https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&auto=format&fit=crop&q=80", count:"27+ Varieties", advantages:["Fresh and nutritious", "Rich in natural flavor"]},
  {name:"Vegetables", img:"https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop&q=80", count:"34+ Varieties", advantages:["Fresh everyday produce", "Packed with vitamins"]}
];

// Load any custom added produce items from localStorage
try {
  const customProduce = JSON.parse(localStorage.getItem("agromartCustomProduce") || "[]");
  if (Array.isArray(customProduce) && customProduce.length > 0) {
    products.push(...customProduce);
  }
} catch (e) {
  console.warn("Could not load custom produce:", e);
}
let cart=JSON.parse(localStorage.getItem("agromartCart")||"[]");
let currentUser=JSON.parse(localStorage.getItem("agromartCurrentUser")||"null");
let pendingCheckout=false;
let activePromoCode="";

const promoCatalog = {
  AGRO10: { type: "percent", value: 10, min: 2000, max: 500, deliveryPercent: 20, deliveryCap: 40 },
  AGRO20: { type: "fixed", value: 200, min: 1200, delivery: 60, deliveryCap: 60 },
  FRIEND150: { type: "fixed", value: 150, min: 1000, delivery: 80, deliveryCap: 80 }
};

const money=n=>"₹"+Math.round(n).toLocaleString("en-IN");
const $=id=>document.getElementById(id);
function toast(msg){$("toast").textContent=msg;$("toast").classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>$("toast").classList.remove("show"),2600)}
function saveCart(){localStorage.setItem("agromartCart",JSON.stringify(cart))}
function applyPromoCode(code){
  const normalized = String(code || "").trim().toUpperCase();
  if(!normalized){
    activePromoCode = "";
    toast("Promo code cleared.");
    return true;
  }
  const offer = promoCatalog[normalized];
  if(!offer){
    activePromoCode = "";
    toast("Invalid promo code. Try AGRO10, AGRO20 or FRIEND150.");
    return false;
  }
  activePromoCode = normalized;
  const input = $("promoCodeInput");
  if(input) input.value = normalized;
  toast("Promo code applied: " + normalized);
  return true;
}
function getPromoDiscount(subtotal){
  if(!activePromoCode) return 0;
  const offer = promoCatalog[activePromoCode];
  if(!offer || subtotal < (offer.min || 0)) return 0;
  const discount = offer.type === "percent" ? subtotal * (offer.value / 100) : offer.value;
  return offer.max ? Math.min(discount, offer.max) : discount;
}
function getDeliveryDiscount(baseDelivery){
  if(!activePromoCode) return 0;
  const offer = promoCatalog[activePromoCode];
  if(!offer) return 0;
  if(typeof offer.deliveryPercent === "number"){
    return Math.min(baseDelivery * (offer.deliveryPercent / 100), offer.deliveryCap || baseDelivery);
  }
  if(typeof offer.delivery === "number"){
    return Math.min(baseDelivery, offer.deliveryCap || offer.delivery);
  }
  return 0;
}
function copyReferralCode(){
  const code = "FRIEND150";
  const copyText = async () => {
    try {
      if(navigator.clipboard && navigator.clipboard.writeText){
        await navigator.clipboard.writeText(code);
      } else {
        const temp = document.createElement("textarea");
        temp.value = code;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
      }
      toast("Referral code copied: " + code);
    } catch (e) {
      toast("Referral code: " + code);
    }
  };
  copyText();
}
function renderCategories(){
  $("categoryGrid").innerHTML=categories.map(c=>`
    <div class="category" data-cat="${c.name}">
      <div class="category-thumb">
        <img src="${c.img}" alt="${c.name}" class="category-real-img" loading="lazy">
      </div>
      <b>${c.name}</b>
      <small class="category-count">${c.count}</small>
      <ul class="category-advantages">
        ${c.advantages.map(advantage=>`<li>${advantage}</li>`).join("")}
      </ul>
    </div>
  `).join("");
  $("categoryFilter").innerHTML='<option value="all">All categories</option>'+categories.map(x=>`<option>${x.name}</option>`).join("");
}

const produceFilterState={value:"all"};

function renderFreshProduce(){
  const produce=products.filter(p=>p.cat==="Fruits"||p.cat==="Vegetables");
  const list=produceFilterState.value==="all"
    ? produce
    : produce.filter(p=>p.cat===produceFilterState.value);

  $("produceGrid").innerHTML=list.map(p=>`
    <article class="produce-card">
      <div class="produce-image" onclick="showProduct(${p.id})" style="cursor:pointer" title="View details">
        <img src="${p.img}" alt="${p.name}" class="product-real-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
        <div class="fallback-emoji" style="display:none;font-size:65px;height:100%;place-items:center;">${p.emoji}</div>
        <span class="produce-badge">${p.cat}</span>
      </div>
      <div class="produce-body">
        <span class="produce-type">${p.cat}</span>
        <h3 onclick="showProduct(${p.id})" style="cursor:pointer" title="View details">${p.name}</h3>
        <p class="item-description">${p.desc}</p>
        <div><span class="produce-price">${money(p.price)}</span> <span class="produce-unit">/ ${p.unit}</span></div>
        <div class="rating">★ ${p.rating}</div>
        <div style="display:flex;gap:8px;margin-top:12px">
          <button type="button" class="secondary-btn" style="flex:1;padding:8px 6px" onclick="showProduct(${p.id})">View</button>
          <button type="button" class="primary-btn" style="flex:2;margin-top:0" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderProducts(){
  let q=$("searchInput").value.toLowerCase(), cat=$("categoryFilter").value, sort=$("sortFilter").value;
  let list=products.filter(p=>(cat==="all"||p.cat===cat)&&(p.name.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q)));
  if(sort==="low")list.sort((a,b)=>a.price-b.price); if(sort==="high")list.sort((a,b)=>b.price-a.price); if(sort==="rating")list.sort((a,b)=>b.rating-a.rating);
  $("productGrid").innerHTML=list.map(p=>`
    <article class="product">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" class="product-real-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
        <div class="fallback-emoji" style="display:none;font-size:65px;height:100%;place-items:center;">${p.emoji}</div>
      </div>
      <div class="product-body">
        <span class="product-cat">${p.cat}</span>
        <h3>${p.name}</h3>
        <p class="item-description">${p.desc}</p>
        <div class="rating">★ ${p.rating}</div>
        <div class="price">${money(p.price)} <span class="old">${money(p.old)}</span></div>
        <small>${p.unit||"Pack"}</small>
        <div class="product-actions">
          <button class="secondary-btn" onclick="showProduct(${p.id})">View</button>
          <button class="primary-btn" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    </article>
  `).join("")||"<p>No products found.</p>";
}

function initAssistant(){
  const launcher=$("assistantLauncher"), dialog=$("assistantDialog"), close=$("assistantClose"), clear=$("assistantClear"), form=$("assistantForm"), input=$("assistantInput"), messages=$("assistantMessages"), suggestions=$("assistantSuggestions");
  if(!launcher||!dialog||!form)return;
  const assistantState={history:[]};
  const categoryNames=()=>categories.map(c=>c.name);
  const catalogSummary=()=>categoryNames().join(", ");
  const normalize=value=>String(value||"").toLowerCase().replace(/[^\w\s-]/g," ");
  const findCategory=(text)=>categories.find(c=>normalize(text).includes(normalize(c.name)));
  const findProducts=(text)=>{
    const q=normalize(text);
    return products.filter(p=>q.includes(normalize(p.name))||normalize(p.name).split(/\s+/).some(word=>word.length>3&&q.includes(word))).slice(0,4);
  };
  function addMessage(text,kind="assistant"){
    const el=document.createElement("div"); el.className=`assistant-message ${kind}`; el.textContent=text; messages.appendChild(el); messages.scrollTop=messages.scrollHeight;
  }
  function showCategory(category){
    if(category.name==="Fruits"||category.name==="Vegetables"){
      produceFilterState.value=category.name;
      document.querySelectorAll(".produce-tab").forEach(x=>x.classList.toggle("active",x.dataset.produceFilter===category.name));
      renderFreshProduce(); $("fresh-produce").scrollIntoView({behavior:"smooth"});
    }else{$("categoryFilter").value=category.name; renderProducts(); $("products").scrollIntoView({behavior:"smooth"});}
    closeAssistant();
  }
  function openProduct(product){window.showProduct(product.id);closeAssistant();}
  function setSuggestions(items){
    suggestions.innerHTML="";
    items.forEach(label=>{const button=document.createElement("button");button.type="button";button.className="assistant-suggestion";button.textContent=label;button.onclick=()=>{input.value=label;form.requestSubmit();};suggestions.appendChild(button);});
  }
  function answer(raw){
    const text=normalize(raw), category=findCategory(raw), matched=findProducts(raw);
    const exactProducts=products.filter(p=>text.includes(normalize(p.name)));
    if(exactProducts.length){
      return `I found ${exactProducts.slice(0,4).map(p=>`${p.name} (${money(p.price)} / ${p.unit||"pack"})`).join(", ")}. Use the product cards to view details or add an item to your cart.`;
    }
    if(category){
      const categoryProducts=products.filter(p=>p.cat===category.name);
      return `For ${category.name}: ${category.advantages.join(" and ")}. AgroMart currently has ${categoryProducts.length} listed item${categoryProducts.length===1?"":"s"} in this category. I can filter them for you below.`;
    }
    if(matched.length){
      return `I found ${matched.map(p=>`${p.name} (${money(p.price)} / ${p.unit||"pack"})`).join(", ")}. Use the product cards to view details or add an item to your cart.`;
    }
    if(/soil|prepare|preparation|land/.test(text))return "For soil preparation, test pH and nutrients first, remove weeds, loosen the topsoil, and mix in mature compost or well-rotted manure. Match amendments to your crop and avoid fresh manure near roots.";
    if(/crop|select|choose|season|weather|monsoon|winter|summer/.test(text))return "Choose crops suited to your soil, water supply, local season, and market. Stagger sowing, protect seedlings from heavy rain or heat, and check the crop’s expected maturity before planting.";
    if(/seed|sow|sowing|germinat/.test(text))return "Use clean, viable seed, follow the packet’s depth and spacing, keep the seedbed evenly moist, and thin crowded seedlings. AgroMart’s Seeds category includes the live catalog items currently available.";
    if(/fertil|manure|compost|nutrient|npk/.test(text))return "Use a soil test to guide fertilizer rates. Compost and well-rotted manure build organic matter; apply balanced nutrients in split doses and keep granular fertilizer away from stems. Never exceed the label rate.";
    if(/irrigat|water|drip|sprinkl/.test(text))return "Water deeply and at the root zone, preferably early morning. Drip irrigation reduces evaporation; check filters and emitters, avoid waterlogging, and adjust frequency for soil, crop stage, and weather.";
    if(/weed/.test(text))return "Control weeds early with shallow hoeing, mulch, hand removal, or approved methods. Prevent seed set and avoid damaging crop roots; keep tools clean between plots.";
    if(/pest|disease|fung|insect|neem/.test(text))return "Inspect leaf undersides and new growth regularly, isolate affected plants, improve airflow, and start with physical removal or approved neem/biological controls. Identify the pest or disease before using any product and follow its label.";
    if(/organic|natural|sustainab/.test(text))return "Organic care combines compost, crop rotation, mulch, beneficial insects, clean seed, and non-chemical controls. Keep records and use only inputs permitted by your local organic standard.";
    if(/harvest|storage|store|postharvest/.test(text))return "Harvest at the crop’s recommended maturity during cool, dry hours. Handle produce gently, remove damaged pieces, cool leafy crops quickly, and store each crop at its suitable temperature and humidity.";
    if(/tool|equipment|sprayer/.test(text))return "Choose tools for your crop and scale: hand tools for beds, sprayers for targeted applications, and irrigation equipment for consistent water delivery. Clean, dry, and safely store tools after use.";
    if(/produce|fruit|vegetable|fresh/.test(text))return "Fresh Fruits and Fresh Vegetables are available in the Produce section. Prices and units are shown on each live product card, and you can filter the produce tabs.";
    if(/search|browse|category|catalog|product|price|unit/.test(text))return `Search the Products section by name or category, then sort by price or rating. Current categories are: ${catalogSummary()}.`;
    if(/offer|coupon|promo|discount|referral/.test(text))return "At checkout, try AGRO10, AGRO20, or FRIEND150 in the discount box. The cart also applies its available order discount when eligible.";
    if(/cart|add|checkout|order|invoice|receipt/.test(text))return "Use Add to Cart on any product, open the cart button to adjust quantities, then Proceed to Checkout. After placing an order, the confirmation includes order and invoice details.";
    if(/deliver|track|rider|app/.test(text))return "AgroMart offers Standard or Express delivery. The delivery-app section links to the app and QR code, while Track Delivery in the order confirmation opens the built-in tracking view.";
    if(/pay|payment|upi|razorpay|card|cash|cod|bank|wallet/.test(text))return "Checkout supports Razorpay, UPI QR/apps/ID, cards, net banking, wallets, and cash on delivery. Select a method in the payment panel and follow its on-screen verification.";
    if(/account|login|register|profile/.test(text))return "Use Login in the header to create or access a browser-only AgroMart account. Account details and cart data stay in this browser for this demo site.";
    return "I’m AgroGuide, AgroMart’s built-in client-side assistant (not a live LLM). Ask about soil, crops, seeds, fertilizers, irrigation, pests, harvesting, products, cart, payment, or delivery.";
  }
  function respond(raw){
    const question=raw.trim(); if(!question)return;
    addMessage(question,"user"); assistantState.history.push({role:"user",text:question});
    const reply=answer(question);
    addMessage(reply); assistantState.history.push({role:"assistant",text:reply});
    const category=findCategory(question), matched=findProducts(question);
    setSuggestions(category?[`Show ${category.name} products`,"How do I prepare soil?","What fertilizer should I use?"]:matched.length?matched.slice(0,3).map(p=>`Show ${p.name}`):["What should I plant this season?","How do I control pests?","Help with delivery"]);
    if(category){const button=[...suggestions.children][0];button.onclick=()=>showCategory(category);}
    if(matched.length)[...suggestions.children].forEach((button,index)=>{if(button.textContent.startsWith("Show ")){const product=matched[index];if(product)button.onclick=()=>openProduct(product);}});
  }
  function openAssistant(){dialog.hidden=false;launcher.setAttribute("aria-expanded","true");input.focus();}
  function closeAssistant(){dialog.hidden=true;launcher.setAttribute("aria-expanded","false");launcher.focus();}
  function clearConversation(){messages.innerHTML="";assistantState.history=[];addMessage("Hi! I’m AgroGuide, a built-in client-side farming and shopping guide. What would you like to know?");setSuggestions(["How do I prepare soil?","Show Seeds products","Help with delivery"]);input.focus();}
  launcher.onclick=openAssistant; close.onclick=closeAssistant; clear.onclick=clearConversation;
  form.onsubmit=e=>{e.preventDefault();const value=input.value;input.value="";respond(value);};
  dialog.addEventListener("keydown",e=>{if(e.key==="Escape")closeAssistant();});
  clearConversation();
}
function addToCart(id){let p=products.find(x=>x.id===id), item=cart.find(x=>x.id===id);if(item)item.qty++;else cart.push({id,qty:1});saveCart();renderCart();toast(p.name+" added to cart.")}
function changeQty(id,d){let i=cart.find(x=>x.id===id);if(!i)return;i.qty+=d;if(i.qty<=0)cart=cart.filter(x=>x.id!==id);saveCart();renderCart()}
function totals(){
  let sub = cart.reduce((s,i)=>s + products.find(p=>p.id===i.id).price * i.qty, 0);
  const defaultDiscount = sub >= 2000 ? sub * 0.1 : 0;
  const promoDiscount = getPromoDiscount(sub);
  const discount = Math.max(defaultDiscount, promoDiscount);
  const delivery = Number($("deliverySelect")?.value || 50);
  const deliveryDiscount = getDeliveryDiscount(delivery);
  const finalDelivery = Math.max(0, delivery - deliveryDiscount);
  return { sub, discount, delivery: finalDelivery, total: Math.max(0, sub - discount + finalDelivery) };
}
function renderCart(){
  $("cartCount").textContent=cart.reduce((s,i)=>s+i.qty,0);
  $("cartItems").innerHTML=cart.length?cart.map(i=>{
    let p=products.find(x=>x.id===i.id);
    return `<div class="cart-row">
      <div class="cart-thumb">
        <img src="${p.img}" alt="${p.name}" class="cart-item-img" onerror="this.parentElement.innerHTML='${p.emoji}'">
      </div>
      <div>
        <b>${p.name}</b>
        <small>${money(p.price)} × ${i.qty}</small>
        <div class="qty">
          <button onclick="changeQty(${p.id},-1)">−</button>
          <span>${i.qty}</span>
          <button onclick="changeQty(${p.id},1)">+</button>
        </div>
      </div>
      <b>${money(p.price*i.qty)}</b>
    </div>`;
  }).join(""):"<p class='muted'>Your cart is empty.</p>";
  let t=totals();$("cartSubtotal").textContent=money(t.sub);$("cartDiscount").textContent="-"+money(t.discount);$("cartDelivery").textContent=money(t.delivery);$("cartTotal").textContent=money(t.total);
}
function openCart(){$("cartDrawer").classList.add("open");$("drawerBackdrop").classList.add("open")}
function closeCart(){$("cartDrawer").classList.remove("open");$("drawerBackdrop").classList.remove("open")}
function openModal(id){$(id).classList.add("open")} function closeModal(id){$(id).classList.remove("open")}
function showProduct(id){
  let p=products.find(x=>x.id===id);
  $("productDetails").innerHTML=`
    <div class="modal-product-img-wrap">
      <img src="${p.img}" alt="${p.name}" class="modal-product-img" onerror="this.parentElement.innerHTML='<div style=\\'font-size:80px;text-align:center\\'>${p.emoji}</div>'">
    </div>
    <span class="eyebrow">${p.cat}</span>
    <h2>${p.name}</h2>
    <div class="rating">★ ${p.rating}</div>
    <p>${p.desc}</p>
    <h2>${money(p.price)} <span class="old">${money(p.old)}</span></h2>
    <button class="primary-btn full-btn" onclick="addToCart(${p.id});closeModal('productModal')">Add to Cart</button>
  `;
  openModal("productModal");
}
function validGmail(e){return /^[a-z0-9._%+-]+@gmail\.com$/i.test(e)}
function updateAccount(){if(currentUser){$("accountLabel").textContent=currentUser.name.split(" ")[0];$("guestAuth").classList.add("hidden");$("userAuth").classList.remove("hidden");$("welcomeUser").textContent="Welcome back, "+currentUser.name+"!";$("profile").innerHTML=`<div><b>Name</b><span>${currentUser.name}</span></div><div><b>Age</b><span>${currentUser.age}</span></div><div><b>Gmail</b><span>${currentUser.email}</span></div><div><b>Mobile</b><span>${currentUser.mobile}</span></div><div><b>Address</b><span>${currentUser.address}</span></div>`}else{$("accountLabel").textContent="Login";$("guestAuth").classList.remove("hidden");$("userAuth").classList.add("hidden")}}
function fillCheckout(){
  if(!currentUser)return;
  ["checkoutName","checkoutMobile","checkoutEmail","checkoutAddress"].forEach((id,i)=>{
    const el=$(id);
    if(el) el.value=[currentUser.name,currentUser.mobile,currentUser.email,currentUser.address][i];
  });
  const cardNameEl=$("cardName");
  if(cardNameEl && !cardNameEl.value) {
    cardNameEl.value = currentUser.name;
    $("cardNameLive").textContent = currentUser.name.toUpperCase();
  }
  const upiMob=$("upiMobileInput");
  if(upiMob && !upiMob.value) upiMob.value = currentUser.mobile;
}

function requireLogin(){if(currentUser){fillCheckout();return true}pendingCheckout=true;openModal("authModal");switchTab("login");toast("Please login or create an account first.");return false}
function switchTab(tab){document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x.dataset.tab===tab));$("loginForm").classList.toggle("hidden",tab!=="login");$("registerForm").classList.toggle("hidden",tab!=="register")}

/* Payment Methods State & Logic */
let activePaymentMethod = "Razorpay";
let activeUpiMode = "qr";
let qrTimerInterval = null;
let currentCaptcha = "5839";
let activeRazorpayKey = "rzp_test_AgroMartDemo2026";
let trackingInterval = null;
let lastPlacedOrder = JSON.parse(localStorage.getItem("agromartLastOrder") || "null");

async function checkRazorpayServerStatus(){
  const dot = $("razorpayStatusDot");
  const title = $("razorpayStatusTitle");
  const sub = $("razorpayStatusSubtitle");
  const input = $("razorpayCustomKeyInput");

  try {
    const res = await fetch("/api/razorpay/status");
    if(res.ok){
      const data = await res.json();
      if(dot) dot.className = "status-indicator-dot online";
      if(title) title.textContent = "Razorpay Gateway Server Online";
      if(sub) sub.textContent = `${window.location.origin} • Server Key: ${data.keyId}`;
      if(data.keyId){
        activeRazorpayKey = data.keyId;
        if(input && !input.value) input.value = data.keyId;
      }
    } else {
      throw new Error("Server status error");
    }
  } catch(e){
    if(dot) dot.className = "status-indicator-dot offline";
    if(title) title.textContent = "Client Sandbox Mode (SDK Ready)";
    if(sub) sub.textContent = "Active with client-side Razorpay test key";
  }
}

async function initiateRazorpayCheckout(order){
  const amountPaise = Math.round(order.total * 100);
  let razorpayOrderId = null;

  try {
    const res = await fetch("/api/razorpay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: amountPaise,
        currency: "INR",
        receipt: "rcpt_" + order.id,
        notes: { customer_name: order.customer.name, order_id: order.id }
      })
    });
    if(res.ok){
      const data = await res.json();
      if(data.order && data.order.id){
        razorpayOrderId = data.order.id;
        if(data.key_id) activeRazorpayKey = data.key_id;
      }
    }
  } catch(err){
    console.warn("Notice: Razorpay server create-order:", err.message);
  }

  if(typeof window.Razorpay === "function"){
    const options = {
      key: activeRazorpayKey,
      amount: amountPaise,
      currency: "INR",
      name: "AgroMart",
      description: `Order #${order.id} • Fresh Farming Products`,
      image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=120&auto=format&fit=crop&q=80",
      order_id: razorpayOrderId || undefined,
      prefill: {
        name: order.customer.name,
        email: order.customer.email,
        contact: order.customer.mobile
      },
      notes: {
        delivery_city: order.customer.city,
        order_id: order.id
      },
      theme: {
        color: "#165a2c"
      },
      handler: async function(response){
        try {
          await fetch("/api/razorpay/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id || razorpayOrderId || ("order_" + Date.now()),
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature || "simulated_signature"
            })
          });
        } catch(e){
          console.warn("Signature verification:", e.message);
        }

        order.payment = {
          type: "Razorpay",
          title: "Razorpay Verified Gateway",
          summary: `Payment ID: ${response.razorpay_payment_id} (Order: ${response.razorpay_order_id || razorpayOrderId || "Direct"})`,
          txnId: response.razorpay_payment_id
        };

        closeModal("checkoutModal");
        renderOrderSuccess(order);
      },
      modal: {
        ondismiss: function(){
          toast("Razorpay checkout was dismissed.");
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function(resp){
      toast(`Payment Failed: ${resp.error.description || "Transaction declined"}`);
    });
    rzp.open();
  } else {
    toast("Opening simulated Razorpay authorization...");
    processAndConfirmOrder(order);
  }
}

function openDeliveryTracking(order){
  const targetOrder = order || lastPlacedOrder || JSON.parse(localStorage.getItem("agromartLastOrder") || "null");
  if(!targetOrder){
    toast("No active order found to track. Place an order first!");
    return;
  }

  $("trackOrderId").textContent = targetOrder.id;
  $("trackDestAddress").textContent = `${targetOrder.customer.city || "Pune"}, ${targetOrder.customer.state || "Maharashtra"}`;
  
  $("tStep1").className = "track-step done";
  $("tConn1").className = "step-connector done";
  $("tStep2").className = "track-step done";
  $("tConn2").className = "step-connector active";
  $("tStep3").className = "track-step active";
  $("tConn3").className = "step-connector";
  $("tStep4").className = "track-step";

  const distLabel = $("riderDistanceMap");
  let distanceKm = 2.4;
  let etaMins = 16;
  if(distLabel) distLabel.textContent = `${distanceKm.toFixed(1)} km away • ${etaMins} mins`;

  clearInterval(trackingInterval);
  trackingInterval = setInterval(()=>{
    distanceKm = Math.max(0.2, Number((distanceKm - 0.2).toFixed(1)));
    etaMins = Math.max(1, etaMins - 1);
    if(distLabel){
      distLabel.textContent = `${distanceKm.toFixed(1)} km away • ${etaMins} mins`;
    }
    if(distanceKm <= 0.4){
      $("tConn3").className = "step-connector active";
      $("tStep4").className = "track-step active";
      clearInterval(trackingInterval);
    }
  }, 3500);

  openModal("deliveryTrackModal");
}

function openDeliveryAppModal(){
  openModal("deliveryAppModal");
  const qrWrap = $("deliveryAppQrCode");
  if(qrWrap && !qrWrap.dataset.generated){
    qrWrap.innerHTML = "";
    const downloadUrl = "https://agromart.farm/app/download";
    if(typeof QRCode !== "undefined"){
      try {
        new QRCode(qrWrap, {
          text: downloadUrl,
          width: 140,
          height: 140,
          colorDark: "#0d3b1b",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M
        });
        qrWrap.dataset.generated = "true";
        return;
      } catch(e){}
    }
    qrWrap.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&color=15-66-33&data=${encodeURIComponent(downloadUrl)}" alt="Download App QR" style="width:100%;height:100%;">`;
    qrWrap.dataset.generated = "true";
  }
}

function generateCodCaptcha(){
  currentCaptcha = Math.floor(1000 + Math.random() * 9000).toString();
  const badge = $("codCaptchaBadge");
  if(badge) badge.textContent = currentCaptcha;
  const input = $("codCaptchaInput");
  if(input) input.value = "";
}

const AGROMART_UPI_VPA = "agromart.fresh@okhdfcbank";
const AGROMART_UPI_NAME = "AgroMart Fresh Produce";

function updateQrCode(amount){
  const t = totals();
  const amt = Math.round(typeof amount === "number" ? amount : t.total);
  const qrDisplay = $("qrTotalDisplay");
  if(qrDisplay) qrDisplay.textContent = money(amt);

  const container = $("upiRealQrCode");
  if(!container) return;

  const upiIntent = `upi://pay?pa=${AGROMART_UPI_VPA}&pn=${encodeURIComponent(AGROMART_UPI_NAME)}&am=${amt}&cu=INR&tn=AgroMart%20Fresh%20Order`;

  const appLink = $("qrOpenUpiApp");
  if(appLink) appLink.href = upiIntent;

  container.innerHTML = "";

  if(typeof QRCode !== "undefined"){
    try{
      new QRCode(container, {
        text: upiIntent,
        width: 140,
        height: 140,
        colorDark: "#154221",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
      });
      return;
    }catch(err){
      console.warn("QRCode.js error:", err);
    }
  }

  // High-res QR image fallback
  const img = document.createElement("img");
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=140x140&color=15-66-33&data=${encodeURIComponent(upiIntent)}`;
  img.alt = "Scan to Pay " + money(amt);
  img.loading = "eager";
  container.appendChild(img);
}

function startQrTimer(){
  clearInterval(qrTimerInterval);
  let timeLeft = 299;
  const timerEl = $("qrTimer");
  if(!timerEl) return;
  const formatTime = () => {
    const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const secs = String(timeLeft % 60).padStart(2, '0');
    timerEl.textContent = `${mins}:${secs}`;
  };
  formatTime();
  qrTimerInterval = setInterval(()=>{
    timeLeft--;
    if(timeLeft <= 0){
      timeLeft = 300;
      updateQrCode();
    }
    formatTime();
  }, 1000);
}

function selectPaymentMethod(method){
  activePaymentMethod = method;
  const methodInput = $("paymentMethod");
  if(methodInput) methodInput.value = method;

  document.querySelectorAll(".pay-tab").forEach(tab=>{
    tab.classList.toggle("active", tab.dataset.method === method);
  });

  document.querySelectorAll(".pay-panel").forEach(panel=>{
    panel.classList.toggle("hidden", panel.id !== `panel-${method}`);
  });

  const t = totals();
  if(method === "Razorpay"){
    const btnAmt = $("razorpayBtnAmount");
    if(btnAmt) btnAmt.textContent = money(t.total);
    checkRazorpayServerStatus();
  } else if(method === "UPI"){
    updateQrCode(t.total);
    if(activeUpiMode === "qr") startQrTimer();
  } else if(method === "COD"){
    generateCodCaptcha();
  } else if(method === "Card"){
    if(!$("cardName").value && currentUser){
      $("cardName").value = currentUser.name;
      $("cardNameLive").textContent = currentUser.name.toUpperCase();
    }
  }
}

function selectUpiSubtab(mode){
  activeUpiMode = mode;
  document.querySelectorAll(".upi-subtab").forEach(tab=>{
    tab.classList.toggle("active", tab.dataset.upimode === mode);
  });
  $("upiViewQr").classList.toggle("hidden", mode !== "qr");
  $("upiViewApps").classList.toggle("hidden", mode !== "apps");
  $("upiViewId").classList.toggle("hidden", mode !== "id");
  if(mode === "qr"){
    updateQrCode();
    startQrTimer();
  } else {
    clearInterval(qrTimerInterval);
  }
}

function detectCardBrand(number){
  const clean = number.replace(/\D/g, "");
  if(/^4/.test(clean)) return { name: "VISA", icon: "💳 Visa" };
  if(/^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)/.test(clean)) return { name: "MASTERCARD", icon: "💳 Master" };
  if(/^(60|65|81|82|508)/.test(clean)) return { name: "RUPAY", icon: "💳 RuPay" };
  if(/^3[47]/.test(clean)) return { name: "AMEX", icon: "💳 Amex" };
  return { name: "RUPAY / VISA", icon: "💳" };
}

function setupPaymentListeners(){
  // Payment Method Tabs
  document.querySelectorAll(".pay-tab").forEach(btn=>{
    btn.onclick = () => selectPaymentMethod(btn.dataset.method);
  });

  // UPI Subtabs
  document.querySelectorAll(".upi-subtab").forEach(btn=>{
    btn.onclick = () => selectUpiSubtab(btn.dataset.upimode);
  });

  // UPI Apps Selection
  document.querySelectorAll(".upi-app-card").forEach(card=>{
    card.onclick = () => {
      document.querySelectorAll(".upi-app-card").forEach(c=>c.classList.remove("active"));
      card.classList.add("active");
      const radio = card.querySelector('input[type="radio"]');
      if(radio) radio.checked = true;
    };
  });

  // UPI ID Verification & Quick Chips
  const verifyBtn = $("verifyUpiBtn");
  if(verifyBtn){
    verifyBtn.onclick = () => {
      const vpa = $("upiIdField").value.trim();
      const statusEl = $("vpaStatus");
      if(/^[\w.-]+@[\w.-]+$/.test(vpa)){
        statusEl.className = "vpa-status valid";
        statusEl.innerHTML = "✓ Verified: Linked Indian Bank Account ready for instant debit.";
      } else {
        statusEl.className = "vpa-status invalid";
        statusEl.innerHTML = "✗ Invalid UPI ID format. Example: yourname@okhdfcbank";
      }
    };
  }

  document.querySelectorAll(".vpa-chip").forEach(chip=>{
    chip.onclick = () => {
      const input = $("upiIdField");
      const base = input.value.split("@")[0] || (currentUser ? currentUser.mobile : "farmer");
      input.value = base + chip.dataset.vpa;
      input.focus();
    };
  });

  // Card Number Auto-formatting & Visual Preview
  const cardNumInput = $("cardNumber");
  if(cardNumInput){
    cardNumInput.oninput = e => {
      let val = e.target.value.replace(/\D/g, "").slice(0, 16);
      let formatted = val.match(/.{1,4}/g)?.join(" ") || "";
      e.target.value = formatted;

      const brand = detectCardBrand(val);
      $("cardNetworkBadge").textContent = brand.name;
      $("cardIndicator").textContent = brand.icon;

      let displayVal = formatted;
      if(val.length < 16){
        const remaining = 16 - val.length;
        const dots = "•".repeat(remaining);
        const combined = (val + dots).match(/.{1,4}/g)?.join(" ") || "";
        displayVal = combined;
      }
      $("cardNumLive").textContent = displayVal || "•••• •••• •••• ••••";
    };
  }

  const cardNameInput = $("cardName");
  if(cardNameInput){
    cardNameInput.oninput = e => {
      $("cardNameLive").textContent = e.target.value.toUpperCase() || "YOUR NAME";
    };
  }

  const cardExpInput = $("cardExpiry");
  if(cardExpInput){
    cardExpInput.oninput = e => {
      let val = e.target.value.replace(/\D/g, "").slice(0, 4);
      if(val.length >= 2){
        val = val.slice(0, 2) + "/" + val.slice(2);
      }
      e.target.value = val;
      $("cardExpLive").textContent = val || "MM/YY";
    };
  }

  // Net Banking selection
  document.querySelectorAll(".bank-card").forEach(card=>{
    card.onclick = () => {
      document.querySelectorAll(".bank-card").forEach(c=>c.classList.remove("active"));
      card.classList.add("active");
      const radio = card.querySelector('input[type="radio"]');
      if(radio) radio.checked = true;
      const otherSelect = $("otherBanksSelect");
      if(otherSelect) otherSelect.value = "";
    };
  });

  const otherBanks = $("otherBanksSelect");
  if(otherBanks){
    otherBanks.onchange = () => {
      if(otherBanks.value){
        document.querySelectorAll(".bank-card").forEach(c=>{
          c.classList.remove("active");
          const radio = c.querySelector('input[type="radio"]');
          if(radio) radio.checked = false;
        });
      }
    };
  }

  // Wallets selection
  document.querySelectorAll(".wallet-option").forEach(card=>{
    card.onclick = () => {
      document.querySelectorAll(".wallet-option").forEach(c=>c.classList.remove("active"));
      card.classList.add("active");
      const radio = card.querySelector('input[type="radio"]');
      if(radio) radio.checked = true;
    };
  });

  // COD Captcha Reload
  const reloadCaptcha = $("reloadCaptchaBtn");
  if(reloadCaptcha){
    reloadCaptcha.onclick = generateCodCaptcha;
  }

  // Copy UPI ID button
  const copyBtn = $("copyUpiBtn");
  if(copyBtn){
    copyBtn.onclick = () => {
      const vpa = $("agromartUpiId")?.textContent.trim() || AGROMART_UPI_VPA;
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(vpa).then(()=>toast("UPI ID copied: " + vpa)).catch(()=>fallbackCopy(vpa));
      } else {
        fallbackCopy(vpa);
      }
    };
  }

  function fallbackCopy(text){
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    toast("UPI ID copied: " + text);
  }

  // Direct "I Have Scanned & Paid" button inside QR view
  const qrConfirmPaid = $("qrConfirmPaidBtn");
  if(qrConfirmPaid){
    qrConfirmPaid.onclick = () => {
      const name = $("checkoutName").value.trim();
      const mobile = $("checkoutMobile").value.trim();
      const email = $("checkoutEmail").value.trim();
      const address = $("checkoutAddress").value.trim();
      const city = $("checkoutCity").value.trim();
      const state = $("checkoutState").value.trim();
      const pin = $("checkoutPin").value.trim();

      if(!name || !mobile || !email || !address || !city || !state || !pin){
        toast("Please fill in your delivery name, address and contact details.");
        $("checkoutName").focus();
        return;
      }

      const t = totals();
      const order = {
        id: "AM" + Date.now().toString().slice(-7),
        date: new Date().toISOString(),
        customer: { name, mobile, email, address, city, state, pin },
        deliverySpeed: $("deliverySelect").value,
        deliveryFee: t.delivery,
        subtotal: t.sub,
        discount: t.discount,
        total: t.total,
        payment: {
          type: "UPI",
          title: "UPI QR Payment",
          summary: `Scanned & Paid via UPI (${AGROMART_UPI_VPA})`,
          txnId: "TXN" + Math.random().toString(36).substring(2, 10).toUpperCase()
        },
        items: [...cart]
      };
      processAndConfirmOrder(order);
    };
  }

  // Print Receipt & Continue Shopping
  const printBtn = $("printReceiptBtn");
  if(printBtn){
    printBtn.onclick = () => window.print();
  }

  const contBtn = $("continueShoppingBtn");
  if(contBtn){
    contBtn.onclick = () => {
      closeModal("orderSuccessModal");
      const prodSec = $("products");
      if(prodSec) prodSec.scrollIntoView({ behavior: "smooth" });
    };
  }

  // Razorpay Config Toggle
  const toggleConfigBtn = $("toggleRazorpayConfigBtn");
  if(toggleConfigBtn){
    toggleConfigBtn.onclick = () => {
      const box = $("razorpayConfigBox");
      if(box) box.classList.toggle("hidden");
    };
  }

  // Razorpay Save Custom Key
  const saveKeyBtn = $("saveRazorpayKeyBtn");
  if(saveKeyBtn){
    saveKeyBtn.onclick = async () => {
      const input = $("razorpayCustomKeyInput");
      if(input && input.value.trim()){
        activeRazorpayKey = input.value.trim();
        try {
          await fetch("/api/razorpay/update-keys", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ keyId: activeRazorpayKey })
          });
          toast("Razorpay Key updated: " + activeRazorpayKey);
          checkRazorpayServerStatus();
        } catch(e) {
          toast("Key saved in client memory: " + activeRazorpayKey);
        }
      }
    };
  }

  // Razorpay Direct Button in Panel
  const razorpayDirectBtn = $("razorpayDirectBtn");
  if(razorpayDirectBtn){
    razorpayDirectBtn.onclick = () => {
      const form = $("checkoutForm");
      if(form){
        if(form.requestSubmit){
          form.requestSubmit();
        } else {
          form.dispatchEvent(new Event("submit", { cancelable: true }));
        }
      }
    };
  }

  // Track Delivery on Delivery App Button
  const trackBtn = $("trackDeliveryBtn");
  if(trackBtn){
    trackBtn.onclick = () => openDeliveryTracking();
  }

  // Rider Call & Chat buttons
  const callRider = $("callRiderBtn");
  if(callRider){
    callRider.onclick = () => toast("📞 Calling delivery partner Ramesh Kumar (+91 98765 43210)...");
  }

  const chatRider = $("chatRiderBtn");
  if(chatRider){
    chatRider.onclick = () => toast("💬 Message sent: 'Please ring the doorbell upon arrival.'");
  }

  // Delivery App Download Modals & Buttons
  const openAppQr = $("openAppQrModalBtn");
  if(openAppQr){
    openAppQr.onclick = openDeliveryAppModal;
  }

  const footerQr = $("footerQrBtn");
  if(footerQr){
    footerQr.onclick = openDeliveryAppModal;
  }

  const directApk = $("directApkDownloadBtn");
  if(directApk){
    directApk.onclick = () => toast("⬇️ Starting download: AgroDelivery_v2.4.0.apk (18MB)...");
  }

  const joinRider = $("joinRiderBtn");
  if(joinRider){
    joinRider.onclick = () => toast("🛵 Partner Program: Send your details to partner@agromart.farm");
  }
}

function openCheckout(){
  if(!cart.length){toast("Your cart is empty.");return}
  if(!requireLogin())return;
  fillCheckout();
  const t = totals();
  $("checkoutTotal").textContent = money(t.total);
  const qrTotal = $("qrTotalDisplay");
  if(qrTotal) qrTotal.textContent = money(t.total);
  selectPaymentMethod(activePaymentMethod);
  closeCart();
  openModal("checkoutModal");
}

function processAndConfirmOrder(orderData){
  const isDigital = activePaymentMethod !== "COD";

  if(isDigital){
    openModal("paymentProcessingModal");
    const title = $("processingTitle");
    const desc = $("processingDesc");
    const s1 = $("step1");
    const s2 = $("step2");
    const s3 = $("step3");

    s1.className = "proc-step done";
    s2.className = "proc-step active";
    s3.className = "proc-step";

    title.textContent = `Authorizing ₹${Math.round(orderData.total).toLocaleString("en-IN")}...`;
    desc.textContent = `Contacting secure gateway for ${orderData.payment.summary}. Please do not close or refresh.`;

    setTimeout(()=>{
      s2.className = "proc-step done";
      s3.className = "proc-step active";
      title.textContent = "Payment Authorized Successfully!";
      desc.textContent = "Finalizing your farm order details...";
    }, 900);

    setTimeout(()=>{
      closeModal("paymentProcessingModal");
      closeModal("checkoutModal");
      renderOrderSuccess(orderData);
    }, 1600);
  } else {
    closeModal("checkoutModal");
    renderOrderSuccess(orderData);
  }
}

function renderOrderSuccess(order){
  $("receiptOrderId").textContent = order.id;
  $("receiptDate").textContent = new Date().toLocaleDateString("en-IN", { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

  const statusBadge = $("receiptStatus");
  if(order.payment.type === "COD"){
    statusBadge.textContent = "PAY ON ARRIVAL";
    statusBadge.style.background = "#fef3c7";
    statusBadge.style.color = "#92400e";
  } else {
    statusBadge.textContent = "PAID (VERIFIED)";
    statusBadge.style.background = "#def7ec";
    statusBadge.style.color = "#03543f";
  }

  const cust = order.customer;
  $("receiptAddress").innerHTML = `<strong>${cust.name}</strong><br>${cust.address}<br>${cust.city}, ${cust.state} - ${cust.pin}<br>📱 +91 ${cust.mobile}`;

  const pay = order.payment;
  $("receiptPayment").innerHTML = `<strong>${pay.title}</strong><br>${pay.summary}<br><small class="muted">Transaction Ref: ${pay.txnId}</small>`;

  const est = new Date();
  est.setDate(est.getDate() + (order.deliverySpeed === "120" ? 1 : 2));
  $("receiptEstDelivery").textContent = `${est.toLocaleDateString("en-IN", { weekday:'short', day:'numeric', month:'short' })}, 9:00 AM – 2:00 PM`;

  const tbody = $("receiptItemsBody");
  tbody.innerHTML = order.items.map(item=>{
    const p = products.find(x=>x.id === item.id);
    const lineTotal = p.price * item.qty;
    return `<tr>
      <td>
        <div class="receipt-item-row">
          <img src="${p.img}" alt="${p.name}" class="receipt-thumb-img" onerror="this.style.display='none'">
          <div>
            <b>${p.name}</b>
            <small class="muted">(${p.unit || 'Pack'})</small>
          </div>
        </div>
      </td>
      <td style="text-align:center;">${item.qty}</td>
      <td style="text-align:right;">${money(p.price)}</td>
      <td style="text-align:right;"><b>${money(lineTotal)}</b></td>
    </tr>`;
  }).join("");

  $("receiptSubtotal").textContent = money(order.subtotal);
  $("receiptDiscount").textContent = order.discount > 0 ? "-" + money(order.discount) : "₹0";
  $("receiptDelivery").textContent = money(order.deliveryFee);
  $("receiptGrandTotal").textContent = money(order.total);

  // Store in LocalStorage
  const orders = JSON.parse(localStorage.getItem("agromartOrders") || "[]");
  orders.unshift(order);
  localStorage.setItem("agromartOrders", JSON.stringify(orders));
  localStorage.setItem("agromartLastOrder", JSON.stringify(order));
  lastPlacedOrder = order;

  // Reset Cart
  cart = [];
  saveCart();
  renderCart();

  openModal("orderSuccessModal");
  toast("🎉 Order " + order.id + " placed successfully!");
}

document.addEventListener("DOMContentLoaded",()=>{
  // Splash Screen reveal & auto-dismiss
  const splash = $("splashScreen");
  const skipBtn = $("splashSkipBtn");
  let splashDismissed = false;

  function dismissSplash() {
    if (splashDismissed || !splash) return;
    splashDismissed = true;
    splash.classList.add("fade-out");
    setTimeout(() => {
      splash.style.display = "none";
      if(splash.parentNode) splash.parentNode.removeChild(splash);
    }, 450);
  }

  if (splash) {
    setTimeout(dismissSplash, 1500);
    splash.addEventListener("click", dismissSplash);
    if (skipBtn) {
      skipBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        dismissSplash();
      });
    }
  }

  renderCategories();
  renderFreshProduce();
  renderProducts();
  renderCart();
  updateAccount();
  setupPaymentListeners();
  initAssistant();

  $("searchInput").oninput=renderProducts;
  $("categoryFilter").onchange=renderProducts;
  $("sortFilter").onchange=renderProducts;

  const promoInput = $("promoCodeInput");
  const applyPromoBtn = $("applyPromoBtn");
  if(applyPromoBtn){
    applyPromoBtn.onclick = () => {
      const entered = promoInput ? promoInput.value : "";
      applyPromoCode(entered);
      renderCart();
      const t = totals();
      if($("checkoutTotal")) $("checkoutTotal").textContent = money(t.total);
      if($("qrTotalDisplay")) $("qrTotalDisplay").textContent = money(t.total);
    };
  }
  if(promoInput){
    promoInput.onkeydown = e => {
      if(e.key === "Enter") {
        e.preventDefault();
        applyPromoBtn?.click();
      }
    };
  }

  const referralBtn = $("copyReferralBtn");
  if(referralBtn) referralBtn.onclick = copyReferralCode;
  
  $("categoryGrid").onclick=e=>{
    let c=e.target.closest(".category");
    if(!c)return;
    const cat=c.dataset.cat;
    if(cat==="Fruits"||cat==="Vegetables"){
      produceFilterState.value=cat;
      document.querySelectorAll(".produce-tab").forEach(x=>x.classList.toggle("active",x.dataset.produceFilter===cat));
      renderFreshProduce();
      $("fresh-produce").scrollIntoView({behavior:"smooth"});
    }else{
      $("categoryFilter").value=cat;
      renderProducts();
      $("products").scrollIntoView({behavior:"smooth"});
    }
  };

  document.querySelectorAll(".produce-tab").forEach(x=>x.onclick=()=>{
    produceFilterState.value=x.dataset.produceFilter;
    document.querySelectorAll(".produce-tab").forEach(t=>t.classList.toggle("active",t===x));
    renderFreshProduce();
  });

  $("cartOpen").onclick=openCart;
  $("drawerBackdrop").onclick=closeCart;
  $("checkoutBtn").onclick=openCheckout;

  const menuBtn = $("menuBtn");
  if(menuBtn){
    menuBtn.onclick = () => {
      const nav = $("mainNav");
      if(nav) nav.classList.toggle("mobile-open");
    };
  }
  document.querySelectorAll("#mainNav a").forEach(a => {
    a.addEventListener("click", () => {
      const nav = $("mainNav");
      if(nav) nav.classList.remove("mobile-open");
    });
  });
  
  $("deliverySelect").onchange=()=>{
    const t = totals();
    $("checkoutTotal").textContent=money(t.total);
    updateQrCode(t.total);
  };

  if(promoInput && !promoInput.value && activePromoCode){
    promoInput.value = activePromoCode;
  }

  $("accountOpen").onclick=()=>{updateAccount();openModal("authModal")};

  document.querySelectorAll("[data-close]").forEach(x=>x.addEventListener("click",()=>{
    const v=x.dataset.close;
    if(v==="cart"){ closeCart(); return; }
    if(v==="auth"){ closeModal("authModal"); return; }
    if(v==="product"){ closeModal("productModal"); return; }
    if(v==="checkout"){ closeModal("checkoutModal"); return; }
    if(v==="orderSuccess"){ closeModal("orderSuccessModal"); return; }
    if(v==="deliveryTrack"){ closeModal("deliveryTrackModal"); return; }
    if(v==="deliveryApp"){ closeModal("deliveryAppModal"); return; }
    if(v==="addProduce"){ closeModal("addProduceModal"); return; }
  }));

  const openAddProduceBtn = $("openAddProduceBtn");
  if(openAddProduceBtn){
    openAddProduceBtn.onclick = () => openModal("addProduceModal");
  }

  const addProduceForm = $("addProduceForm");
  if(addProduceForm){
    addProduceForm.onsubmit = e => {
      e.preventDefault();
      const name = $("addProduceName").value.trim();
      const cat = $("addProduceCat").value;
      const price = Number($("addProducePrice").value);
      const oldPrice = Number($("addProduceOldPrice").value) || Math.round(price * 1.25);
      const unit = $("addProduceUnit").value;
      const emoji = $("addProduceEmoji").value.trim() || (cat === "Fruits" ? "🍎" : "🥦");
      let img = $("addProduceImg").value.trim();
      const stock = Number($("addProduceStock").value) || 25;
      const rating = Number($("addProduceRating").value) || 4.8;
      const desc = $("addProduceDesc").value.trim();

      if(!name || price <= 0){
        toast("Please provide a valid item name and price.");
        return;
      }

      if(!img){
        img = cat === "Fruits"
          ? "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&auto=format&fit=crop&q=80"
          : "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80";
      }

      const nextId = Math.max(100, ...products.map(p => p.id)) + 1;
      const newItem = {
        id: nextId,
        name,
        cat,
        price,
        old: oldPrice,
        unit,
        emoji,
        img,
        rating,
        stock,
        desc
      };

      products.push(newItem);

      try {
        const customProduce = JSON.parse(localStorage.getItem("agromartCustomProduce") || "[]");
        customProduce.push(newItem);
        localStorage.setItem("agromartCustomProduce", JSON.stringify(customProduce));
      } catch(err) {
        console.warn("Could not save custom produce:", err);
      }

      renderFreshProduce();
      renderProducts();
      closeModal("addProduceModal");
      addProduceForm.reset();
      toast(`✅ "${name}" added to ${cat}!`);
    };
  }

  document.querySelectorAll(".tab").forEach(x=>x.onclick=()=>switchTab(x.dataset.tab));

  $("registerForm").onsubmit=e=>{
    e.preventDefault();
    let name=$("regName").value.trim(),age=Number($("regAge").value),email=$("regEmail").value.trim().toLowerCase(),mobile=$("regMobile").value.trim(),address=$("regAddress").value.trim(),password=$("regPassword").value;
    if(!validGmail(email)){toast("Please use a valid @gmail.com ID.");return}
    if(age<1||age>120||!/^\d{10}$/.test(mobile)||password.length<6){toast("Please check your details.");return}
    if(password!==$("regConfirm").value){toast("Passwords do not match.");return}
    let users=JSON.parse(localStorage.getItem("agromartUsers")||"[]");
    if(users.some(u=>u.email===email)){toast("Gmail already registered. Please login.");switchTab("login");return}
    currentUser={name,age,email,mobile,address,password};
    users.push(currentUser);
    localStorage.setItem("agromartUsers",JSON.stringify(users));
    localStorage.setItem("agromartCurrentUser",JSON.stringify(currentUser));
    updateAccount();
    toast("Account created successfully!");
    if(pendingCheckout){pendingCheckout=false;closeModal("authModal");setTimeout(openCheckout,150)}
  };

  $("loginForm").onsubmit=e=>{
    e.preventDefault();
    let email=$("loginEmail").value.trim().toLowerCase(),password=$("loginPassword").value,users=JSON.parse(localStorage.getItem("agromartUsers")||"[]"),u=users.find(x=>x.email===email&&x.password===password);
    if(!u){toast("Incorrect Gmail ID or password.");return}
    currentUser=u;
    localStorage.setItem("agromartCurrentUser",JSON.stringify(currentUser));
    updateAccount();
    closeModal("authModal");
    toast("Welcome back, "+u.name+"!");
    if(pendingCheckout){pendingCheckout=false;setTimeout(openCheckout,150)}
  };

  $("logoutBtn").onclick=()=>{currentUser=null;localStorage.removeItem("agromartCurrentUser");updateAccount();switchTab("login");toast("Logged out successfully.")};
  $("accountCheckout").onclick=()=>{closeModal("authModal");openCheckout()};

  // Checkout Form Submission with Method Validation
  $("checkoutForm").onsubmit=e=>{
    e.preventDefault();
    let t = totals();
    let paymentMeta = { type: activePaymentMethod, title: "", summary: "", txnId: "TXN" + Math.random().toString(36).substring(2, 10).toUpperCase() };

    if(activePaymentMethod === "Razorpay"){
      paymentMeta.title = "Razorpay Standard Checkout";
      paymentMeta.summary = "Official Razorpay Gateway (UPI / Cards / NetBanking / Wallets)";
      paymentMeta.txnId = "RZP" + Math.random().toString(36).substring(2, 10).toUpperCase();

      let order = {
        id: "AM" + Date.now().toString().slice(-7),
        date: new Date().toISOString(),
        customer: {
          name: $("checkoutName").value.trim(),
          mobile: $("checkoutMobile").value.trim(),
          email: $("checkoutEmail").value.trim(),
          address: $("checkoutAddress").value.trim(),
          city: $("checkoutCity").value.trim(),
          state: $("checkoutState").value.trim(),
          pin: $("checkoutPin").value.trim()
        },
        deliverySpeed: $("deliverySelect").value,
        deliveryFee: t.delivery,
        subtotal: t.sub,
        discount: t.discount,
        total: t.total,
        promoCode: activePromoCode,
        payment: paymentMeta,
        items: [...cart]
      };

      initiateRazorpayCheckout(order);
      return;
    }

    // Validation per Payment Method
    if(activePaymentMethod === "UPI"){
      if(activeUpiMode === "qr"){
        paymentMeta.title = "UPI QR Code";
        paymentMeta.summary = "Scanned & Authorized via UPI App";
      } else if(activeUpiMode === "apps"){
        const appChoice = document.querySelector('input[name="upiAppChoice"]:checked')?.value || "Google Pay";
        const mob = $("upiMobileInput").value.trim() || $("checkoutMobile").value;
        paymentMeta.title = `UPI App (${appChoice})`;
        paymentMeta.summary = `Authorized through ${appChoice} on +91 ${mob}`;
      } else {
        const vpa = $("upiIdField").value.trim();
        if(!vpa || !vpa.includes("@")){
          toast("Please enter a valid UPI Virtual Payment Address (e.g. name@upi).");
          $("upiIdField").focus();
          return;
        }
        paymentMeta.title = "UPI VPA Transfer";
        paymentMeta.summary = `VPA: ${vpa}`;
      }
    } else if(activePaymentMethod === "Card"){
      const cardNum = $("cardNumber").value.replace(/\s+/g, "");
      const cardName = $("cardName").value.trim();
      const cardExp = $("cardExpiry").value.trim();
      const cardCvv = $("cardCvv").value.trim();

      if(cardNum.length < 15){
        toast("Please enter a valid 15 or 16 digit card number.");
        $("cardNumber").focus();
        return;
      }
      if(!cardName){
        toast("Please enter cardholder name.");
        $("cardName").focus();
        return;
      }
      if(!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExp)){
        toast("Please enter a valid expiry date (MM/YY).");
        $("cardExpiry").focus();
        return;
      }
      if(cardCvv.length < 3){
        toast("Please enter a valid 3 or 4 digit CVV.");
        $("cardCvv").focus();
        return;
      }

      const brand = detectCardBrand(cardNum);
      paymentMeta.title = `${brand.name} Debit/Credit Card`;
      paymentMeta.summary = `${brand.name} ending in •••• ${cardNum.slice(-4)} (${cardName})`;
    } else if(activePaymentMethod === "NetBanking"){
      let bank = $("otherBanksSelect")?.value;
      if(!bank){
        bank = document.querySelector('input[name="bankSelection"]:checked')?.value || "State Bank of India";
      }
      paymentMeta.title = "Internet Banking";
      paymentMeta.summary = `${bank} Corporate/Retail Net Banking`;
    } else if(activePaymentMethod === "Wallet"){
      const wallet = document.querySelector('input[name="walletApp"]:checked')?.value || "Paytm Wallet";
      paymentMeta.title = "Digital Wallet";
      paymentMeta.summary = `Paid via ${wallet} (1-Click Debit)`;
    } else if(activePaymentMethod === "COD"){
      const enteredCode = $("codCaptchaInput").value.trim();
      if(enteredCode !== currentCaptcha){
        toast("Incorrect verification code. Please check and re-enter.");
        $("codCaptchaInput").focus();
        return;
      }
      paymentMeta.title = "Cash on Delivery (COD)";
      paymentMeta.summary = "Cash or doorstep UPI QR payment upon delivery";
      paymentMeta.txnId = "COD-PENDING";
    }

    let order = {
      id: "AM" + Date.now().toString().slice(-7),
      date: new Date().toISOString(),
      customer: {
        name: $("checkoutName").value.trim(),
        mobile: $("checkoutMobile").value.trim(),
        email: $("checkoutEmail").value.trim(),
        address: $("checkoutAddress").value.trim(),
        city: $("checkoutCity").value.trim(),
        state: $("checkoutState").value.trim(),
        pin: $("checkoutPin").value.trim()
      },
      deliverySpeed: $("deliverySelect").value,
      deliveryFee: t.delivery,
      subtotal: t.sub,
      discount: t.discount,
      total: t.total,
      promoCode: activePromoCode,
      payment: paymentMeta,
      items: [...cart]
    };

    processAndConfirmOrder(order);
  };

  $("contactForm").onsubmit=e=>{
    e.preventDefault();
    e.target.reset();
    toast("Thanks! Your message has been received.");
  };

  $("menuBtn").onclick=()=>{
    let n=$("mainNav");
    n.style.display=n.style.display==="flex"?"none":"flex";
    n.style.position="absolute";
    n.style.top="72px";
    n.style.left="0";
    n.style.right="0";
    n.style.padding="18px";
    n.style.background="#fff";
    n.style.flexDirection="column";
  };
});

document.addEventListener("keydown",e=>{
  if(e.key!=="Escape") return;
  const splash = $("splashScreen");
  if (splash && splash.style.display !== "none") {
    splash.classList.add("fade-out");
    setTimeout(() => { splash.style.display = "none"; }, 520);
  }
  closeCart();
  closeModal("authModal");
  closeModal("productModal");
  closeModal("checkoutModal");
  closeModal("paymentProcessingModal");
  closeModal("orderSuccessModal");
  closeModal("deliveryTrackModal");
  closeModal("deliveryAppModal");
});
