export const blurhash =
"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export const labels = ["All", "Popular", "Featured", "Liked"];

export const categoriesImg = [
  {
    title: "Beach",
    image: require("../assets/images/categories/beach.jpg")
  },
  {
    title: "Camp",
    image: require("../assets/images/categories/camp.jpg")
  },
  {
    title: "Cities",
    image: require("../assets/images/categories/cities.jpg")
  },
  {
    title: "Desert",
    image: require("../assets/images/categories/desert.jpg")
  },
  {
    title: "Diving",
    image: require("../assets/images/categories/diving.jpg")
  },
  {
    title: "Forest",
    image: require("../assets/images/categories/forest.jpg")
  },
  {
    title: "Hiking",
    image: require("../assets/images/categories/hiking.jpg")
  },
  {
    title: "Landscape",
    image: require("../assets/images/categories/landscape.jpg")
  },
];

export const destinations = [
  {
    id: 1,
    title: "Maldives",
    duration: "7 days",
    distance: 8700,
    weather: 28,
    price: 3000,
    shortDesc: "A tropical paradise with stunning white-sand beaches and crystal-clear waters.",
    longDesc: "Known for its overwater bungalows and vibrant coral reefs, the Maldives offers a luxurious escape with world-class diving, serene beaches, and enchanting marine life encounters.",
    image: require("../assets/images/destinations/maldives.jpg"),
    category: "Beach",
    label: "Popular"
  },
  {
    id: 2,
    title: "Banff National Park",
    duration: "10 days",
    distance: 3000,
    weather: 15,
    price: 1500,
    shortDesc: "A breathtaking national park surrounded by the Rocky Mountains in Canada.",
    longDesc: "Banff offers scenic mountain views, pristine lakes, and opportunities for hiking, canoeing, and wildlife watching, making it an ideal destination for nature lovers and adventure enthusiasts.",
    image: require("../assets/images/destinations/banff.jpg"),
    category: "Camp",
    label: "Featured"
  },
  {
    id: 3,
    title: "Tokyo",
    duration: "5 days",
    distance: 7000,
    weather: 18,
    price: 1800,
    shortDesc: "Japan's bustling capital, where tradition meets cutting-edge modernity.",
    longDesc: "Tokyo is renowned for its skyscrapers, historic temples, vibrant districts, and exceptional cuisine, providing an unparalleled cultural and urban experience.",
    image: require("../assets/images/destinations/tokyo.jpg"),
    category: "Cities",
    label: "Featured"
  },
  {
    id: 4,
    title: "Sahara Desert",
    duration: "8 days",
    distance: 5000,
    weather: 30,
    price: 1300,
    shortDesc: "Vast stretches of golden sand dunes under endless skies.",
    longDesc: "The Sahara Desert offers a unique adventure, with camel rides, desert camping under starlit skies, and an opportunity to connect with the ancient traditions of nomadic cultures.",
    image: require("../assets/images/destinations/sahara.jpg"),
    category: "Desert",
    label: "Popular"
  },
  {
    id: 5,
    title: "Great Barrier Reef",
    duration: "7 days",
    distance: 12000,
    weather: 26,
    price: 2500,
    shortDesc: "World's largest coral reef system, home to diverse marine life.",
    longDesc: "A UNESCO World Heritage Site, the Great Barrier Reef invites divers and snorkelers to explore vibrant underwater ecosystems, teeming with colorful fish, sea turtles, and mesmerizing coral formations.",
    image: require("../assets/images/destinations/great-barrier-reef.jpg"),
    category: "Beach",
    label: "Featured"
  },
  {
    id: 6,
    title: "Swiss Alps",
    duration: "9 days",
    distance: 6500,
    weather: 5,
    price: 2200,
    shortDesc: "Towering snow-capped peaks with charming villages and world-class skiing.",
    longDesc: "The Swiss Alps offer breathtaking scenery, from lush valleys to glacial peaks, as well as exhilarating outdoor activities like skiing, mountaineering, and serene alpine hiking trails.",
    image: require("../assets/images/destinations/swiss-alps.jpg"),
    category: "Hiking",
    label: "Popular"
  },
  {
    id: 7,
    title: "Santorini",
    duration: "6 days",
    distance: 8000,
    weather: 25,
    price: 1800,
    shortDesc: "A picturesque Greek island with iconic white-washed buildings.",
    longDesc: "Famous for its breathtaking sunsets, turquoise waters, and volcanic beaches, Santorini is a romantic escape with rich history, delightful cuisine, and unique landscapes shaped by volcanic activity.",
    image: require("../assets/images/destinations/santorini.jpg"),
    category: "Landscape",
    label: "Popular"
  },
  {
    id: 8,
    title: "Amazon Rainforest",
    duration: "12 days",
    distance: 4000,
    weather: 27,
    price: 1700,
    shortDesc: "A dense, biodiverse jungle in South America with rich flora and fauna.",
    longDesc: "The Amazon offers an unparalleled ecological experience with river cruises, jungle treks, and the chance to observe exotic wildlife such as pink dolphins, toucans, and jaguars in their natural habitat.",
    image: require("../assets/images/destinations/amazon.jpg"),
    category: "Forest",
    label: "Popular"
  },
  {
    id: 9,
    title: "Machu Picchu",
    duration: "7 days",
    distance: 3000,
    weather: 18,
    price: 2000,
    shortDesc: "A stunning Inca city perched high in the Peruvian Andes.",
    longDesc: "As a UNESCO World Heritage Site and one of the New Seven Wonders of the World, Machu Picchu offers visitors a mystical journey into the history of the Inca Empire, surrounded by breathtaking mountain landscapes.",
    image: require("../assets/images/destinations/machu-picchu.jpg"),
    category: "Landscape",
    label: "Popular"
  },
  {
    id: 10,
    title: "New York City",
    duration: "5 days",
    distance: 1500,
    weather: 12,
    price: 2500,
    shortDesc: "The city that never sleeps, filled with iconic landmarks and diverse cultures.",
    longDesc: "From Times Square to Central Park, NYC offers a vibrant urban adventure, with world-renowned art, architecture, theater, and dining that captivates visitors from around the globe.",
    image: require("../assets/images/destinations/nyc.jpg"),
    category: "Cities",
    label: "Popular"
  },
  {
    id: 11,
    title: "Yosemite National Park",
    duration: "6 days",
    distance: 1800,
    weather: 20,
    price: 1200,
    shortDesc: "A stunning park with towering granite cliffs and giant sequoia trees.",
    longDesc: "Yosemite's breathtaking landscapes include iconic landmarks like El Capitan and Half Dome, lush meadows, waterfalls, and abundant hiking trails for nature enthusiasts.",
    image: require("../assets/images/destinations/yosemite.jpg"),
    category: "Hiking",
    label: "Featured"
  },
  {
    id: 12,
    title: "Dubai",
    duration: "4 days",
    distance: 8000,
    weather: 35,
    price: 2000,
    shortDesc: "A futuristic city known for luxury shopping, skyscrapers, and vibrant nightlife.",
    longDesc: "Dubai offers a mix of modern marvels and Arabian heritage, with attractions ranging from the tallest building in the world, the Burj Khalifa, to traditional souks and desert safaris.",
    image: require("../assets/images/destinations/dubai.jpg"),
    category: "Cities",
    label: "Popular"
  },
  {
    id: 13,
    title: "Galapagos Islands",
    duration: "10 days",
    distance: 9000,
    weather: 22,
    price: 3000,
    shortDesc: "Isolated islands with unique wildlife and pristine landscapes.",
    longDesc: "Famed for its role in Charles Darwin's research, the Galapagos offers unique ecosystems where visitors can encounter giant tortoises, marine iguanas, and playful sea lions.",
    image: require("../assets/images/destinations/galapagos.jpg"),
    category: "Diving",
    label: "Featured"
  },
  {
    id: 14,
    title: "Cinque Terre",
    duration: "5 days",
    distance: 7000,
    weather: 20,
    price: 1500,
    shortDesc: "Five colorful seaside villages on the Italian Riviera.",
    longDesc: "Cinque Terre is a UNESCO World Heritage Site known for its dramatic coastal scenery, cliffside villages, hiking trails, and warm Mediterranean culture.",
    image: require("../assets/images/destinations/cinque-terre.jpg"),
    category: "Landscape",
    label: "Featured"
  },
  {
    id: 15,
    title: "Himalayas",
    duration: "15 days",
    distance: 9000,
    weather: 10,
    price: 2500,
    shortDesc: "The world's highest mountain range, offering breathtaking trekking routes.",
    longDesc: "The Himalayas are famed for Mount Everest and provide awe-inspiring scenery, challenging treks, and a unique cultural experience with monasteries and remote villages.",
    image: require("../assets/images/destinations/himalayas.jpg"),
    category: "Hiking",
    label: "Popular"
  },
  {
    id: 16,
    title: "Maui",
    duration: "8 days",
    distance: 8000,
    weather: 27,
    price: 2200,
    shortDesc: "A Hawaiian paradise with lush landscapes, beaches, and waterfalls.",
    longDesc: "Maui offers a mix of stunning beaches, vibrant marine life, and iconic locations such as Haleakalā National Park and the scenic Hana Highway.",
    image: require("../assets/images/destinations/maui.jpg"),
    category: "Beach",
    label: "Popular"
  },
  {
    id: 17,
    title: "Patagonia",
    duration: "12 days",
    distance: 7000,
    weather: 15,
    price: 2700,
    shortDesc: "A rugged, remote region with stunning glaciers and wild landscapes.",
    longDesc: "Patagonia, spanning Argentina and Chile, is a haven for adventurers, offering glacier hikes, dramatic mountain views, and the famous Torres del Paine National Park.",
    image: require("../assets/images/destinations/patagonia.jpg"),
    category: "Landscape",
    label: "Popular"
  },
  {
    id: 18,
    title: "Bora Bora",
    duration: "7 days",
    distance: 9500,
    weather: 28,
    price: 3200,
    shortDesc: "An idyllic island known for its turquoise lagoons and luxurious overwater bungalows.",
    longDesc: "Bora Bora is a tropical paradise with stunning coral reefs, breathtaking views of Mount Otemanu, and a tranquil setting ideal for relaxation and water activities.",
    image: require("../assets/images/destinations/bora-bora.jpg"),
    category: "Diving",
    label: "Popular"
  },
  {
    id: 19,
    title: "Kruger National Park",
    duration: "10 days",
    distance: 7500,
    weather: 30,
    price: 2000,
    shortDesc: "One of Africa's largest game reserves, home to the Big Five.",
    longDesc: "Kruger offers an authentic safari experience with guided tours and self-drive options, allowing visitors to see lions, elephants, rhinos, and more in their natural habitat.",
    image: require("../assets/images/destinations/kruger.jpg"),
    category: "Hiking",
    label: "Featured"
  },
  {
    id: 20,
    title: "Bali",
    duration: "10 days",
    distance: 10000,
    weather: 28,
    price: 2000,
    shortDesc: "An Indonesian island known for its stunning beaches, temples, and rich culture.",
    longDesc: "Bali offers something for everyone, from the vibrant beaches of Seminyak and Kuta to tranquil rice terraces in Ubud and spiritual experiences at ancient temples.",
    image: require("../assets/images/destinations/bali.jpg"),
    category: "Beach",
    label: "Popular"
  },
];
