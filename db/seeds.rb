# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
  demo = User.create(
    email: 'DemoUser@gmail.com',
    first_name: 'DemoUser',
    last_name: 'RealPerson',
    password: 'password'
    )

  user1 = User.create(
    email: 'BStinson@jourrapide.com',
    first_name: 'Barney',
    last_name: 'Stinson',
    password: 'password'
    )

  user2 = User.create(
    email: 'JoDMitchell@teleworm.us',
    first_name: 'Ted',
    last_name: 'Mosby',
    password: 'password'
    )

  user3 = User.create(
    email: 'JoseSCartwright@rhyta.com',
    first_name: 'Marshall',
    last_name: 'Eriksen',
    password: 'password'
    )

  user4 = User.create(
    email: 'AlbertAHarrison@rhyta.com',
    first_name: 'Lily',
    last_name: 'Aldrin',
    password: 'password'
    )

  user5 = User.create(
    email: 'JesseJCroom@jourrapide.com',
    first_name: 'Robin',
    last_name: 'Scherbatsky',
    password: 'password'
    )

  user6 = User.create(
    email: 'ClarenceEDavis@jourrapide.com',
    first_name: 'Leslie',
    last_name: 'Knope',
    password: 'password'
    )

  user7 = User.create(
    email: 'VictorAWilkins@dayrep.com',
    first_name: 'Andy',
    last_name: 'Dwyer',
    password: 'password'
    )

  user8 = User.create(
    email: 'WillieSWeaver@jourrapide.com',
    first_name: 'Craig',
    last_name: 'Middlebrooks',
    password: 'password'
    )

  user9 = User.create(
    email: 'LuisNDodson@jourrapide.com',
    first_name: 'Anne',
    last_name: 'Perkins',
    password: 'password'
    )

  user10 = User.create(
    email: 'EliciaDFerri@teleworm.us',
    first_name: 'April',
    last_name: 'Ludgate',
    password: 'password'
    )

  user11 = User.create(
    email: 'KristenPKitson@teleworm.us',
    first_name: 'Tom',
    last_name: 'Haverford',
    password: 'password'
    )

  user12 = User.create(
    email: 'AnnRSeymour@rhyta.com',
    first_name: 'Donna',
    last_name: 'Meagle',
    password: 'password'
    )

  user13 = User.create(
    email: 'KeithAPridgen@dayrep.com',
    first_name: 'Je-Garry',
    last_name: 'Gergich',
    password: 'password'
    )

  user14 = User.create(
    email: 'DavidMAlexander@teleworm.us',
    first_name: 'Chris',
    last_name: 'Traegar',
    password: 'password'
    )

  user15 = User.create(
    email: 'EmilyRBang@rhyta.com',
    first_name: 'Ben',
    last_name: 'Wyatt',
    password: 'password'
    )

# Listings
   lst1 = Listing.create(name: "Explore San Francisco from a Cozy Loft-Style Studio", host_id: 4, description: "Unwind on the balcony of a 130-year-old building in San Francisco. Enjoy open-plan, loft-style living with neutral decor, open shelving, rustic exposed-beam ceilings. Apartment is on the 4th floor without elevator", price: 139, num_bedrooms: 1, max_guests: 3, num_beds: 1, num_bathrooms: 1, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "1300 Jackson St", city: "San Francisco", zip_code: "94109", country: "United States", lat: 37.794579, lng: -122.416847)

   lst2 = Listing.create(name: "Amazing apartment perfect situation - metro & WIFI", host_id: 2, description: "SAFE City Center Apartment: WiFi, SILENT-CALM-NOISELESS, COSY, 1 minute from METRO. Private Owner. 2 minutes from Sagrada Familia.", price: 169, num_bedrooms: 3, max_guests: 6, num_beds: 3, num_bathrooms: 2, kitchen: true, heating: false, wifi: false, pets: true, parking: false, tv: true, street_address: "3897 25th St", city: "San Francisco", zip_code: "94114", country: "United States", lat: 37.750049, lng: -122.426052)

   lst3 = Listing.create(name: "A Charming Space in San Francisco", host_id: 3, description: "Welcome to this wide apartment, fully equipped and decorated for creating a warm, cozy, special surely perfect for San Francisco fun and enjoy all the amenities.", price: 199, num_bedrooms: 2, max_guests: 5, num_beds: 2, num_bathrooms: 1.5, kitchen: true, heating: false, wifi: true, pets: false, parking: true, tv: false, street_address: "299 Dorland St", city: "San Francisco", zip_code: "94114", country: "United States", lat: 37.761967, lng: -122.429494)

   lst4 = Listing.create(name: "Perfectly located Castro", host_id: 4, description: "1895 Victorian flat w/ 12 ft ceilings. (No Long Term Rentals or couples) Close to Mission, & 2.5 blocks from Castro theater. MUNI is 3 blocks away. Room is small and cosy, and great value for one of the most expensive neighborhoods in the US!", price: 159, num_bedrooms: 1, max_guests: 2, num_beds: 1, num_bathrooms: 1, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "99-1 Beaver St", city: "San Francisco", zip_code: "94114", country: "United States", lat: 37.765031, lng: -122.435221)

   lst5 = Listing.create(name: "Grand and Cozy 1920's SF Studio", host_id: 5, description: "Come enjoy our large studio in San Francisco's charming and convenient Bernal Heights! You'll enjoy your own cozy and private lodging with a romantic gas fireplace, wood and stone floors and artistic decor. You will be close to world class views of San Francisco and it's beautiful bay. Bus lines are close by and and parking is very easy!", price: 189, num_bedrooms: 2, max_guests: 5, num_beds: 2, num_bathrooms: 1.5, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "827 Duboce Ave", city: "San Francisco", zip_code: "94117", country: "United States", lat: 37.768792, lng: -122.437041)

   lst6 = Listing.create(name: "Sunny Room 5 Queen Size Bed, sleep up to 4 person", host_id: 6, description: "Relax with an evening drink on the rooftop terrace of this quiet apartment with majestic skyline views. Let the light in from two bay windows, admire monochrome art, and savor the modern charm of mirrors and metallic accents throughout.", price: 259, num_bedrooms: 3, max_guests: 7, num_beds: 3, num_bathrooms: 3, kitchen: true, heating: true, wifi: true, pets: false, parking: true, tv: true, street_address: "827 Haight St", city: "San Francisco", zip_code: "94117", country: "United States", lat: 37.771031, lng: -122.435807)

   lst7 = Listing.create(name: "Bright Cozy Bedroom in Inner Sunset", host_id: 7, description: "A cozy bedroom with natural sunlight located in Inner Sunset next to the N-Judah. Perfect for young professional who is looking for a place to stay.", price: 199, num_bedrooms: 3, max_guests: 6, num_beds: 3, num_bathrooms: 2, kitchen: true, heating: true, wifi: true, pets: false, parking: true, tv: true, street_address: "640 Hayes St", city: "San Francisco", zip_code: "94102", country: "United States", lat: 37.776596, lng: -122.426965)

   lst8 = Listing.create(name: "Modern Fully Renovated 3 bed 1808", host_id: 8, description: "This bright and open space apartment will both inspire and relax...situated in a great central location close to downtown and a 7 minute drive from the hip Silverlake golden triangle. Great for dancers, attorneys and professionals of all types.", price: 139, num_bedrooms: 1, max_guests: 3, num_beds: 1, num_bathrooms: 1, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "1201 Boylston Ave", city: "Seattle", zip_code: "98101", country: "United States", lat: 47.611944, lng: -122.324027)

   lst9 = Listing.create(name: "Cottage in the Heart of the City", host_id: 9, description: "New cottage, cabin-like, in the heart of Seattle. Close to bus line, cruise ships, shops, restaurants, waterfront, parks, bike paths, stadiums, Space Needle. Our cottage offers a kitchen, w/d and queen bed among other amenities. Built green.", price: 179, num_bedrooms: 2, max_guests: 4, num_beds: 2, num_bathrooms: 2, kitchen: true, heating: true, wifi: true, pets: true, parking: false, tv: false, street_address: "1711B 27th Ave E", city: "Seattle", zip_code: "98122", country: "United States", lat: 47.616921, lng: -122.297770)

   lst10 = Listing.create(name: "Cottage in the Heart of Ballard", host_id: 10, description: "A cozy cottage behind a lovely Victorian house. It has a 3/4 bath (shower). The cottage has a brick patio and a large trellis covered with roses and grape vines set in an English Garden.", price: 149, num_bedrooms: 1, max_guests: 3, num_beds: 1, num_bathrooms: 1, kitchen: true, heating: true, wifi: true, pets: true, parking: true, tv: true, street_address: "310 23rd Ave", city: "Seattle", zip_code: "98112", country: "United States", lat: 47.621702, lng: -122.302126)

   lst11 = Listing.create(name: "Seattle Mini Home with Hot Tub and Private Deck", host_id: 11, description: "A private mini home just for you! Enjoy your own private deck and hot tub while staying in trendy Ballard. Way better than a hotel...you’ll feel right at home!", price: 249, num_bedrooms: 3, max_guests: 6, num_beds: 3, num_bathrooms: 2, kitchen: true, heating: true, wifi: true, pets: true, parking: true, tv: true, street_address: "300 19th Ave E", city: "Seattle", zip_code: "98112", country: "United States", lat: 47.621304, lng: -122.307597)

   lst12 = Listing.create(name: "Tiny House in Seattle", host_id: 12, description: "Tipsy is a 180 sqft (including loft) tiny house located in the heart of West Seattle, minutes from restaurants, bars, coffee shops, boutiques, grocery stores, Sunday Farmer’s Market, etc. The tiny house is also located to the famous Alki Beach & Lincoln Park. Downtown Seattle is a quick drive/bus/water taxi away..", price: 199, num_bedrooms: 2, max_guests: 5, num_beds: 2, num_bathrooms: 2, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "715 9th Ave", city: "Seattle", zip_code: "98104", country: "United States", lat: 47.606242, lng: -122.325561)

   lst13 = Listing.create(name: "Cozy Private Space North Seattle Private Parking", host_id: 13, description: "In the heart of Seattle and right next to the Space Needle. Perfect location within walking distance to Space Needle, Chihuly Glass Museum, EMP Museum, Pike Place and many more sites. Great restaurants and bars close by! Full kitchen, bathroom, wifi, queen bed, sofa bed, queen air mattress, and essential supplies for up to 6 people. Although the unit can sleep 6 people, it does get a little tight with that many people so please keep that in mind. There is a portable AC in the unit as well.", price: 169, num_bedrooms: 2, max_guests: 5, num_beds: 2, num_bathrooms: 2, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: false, street_address: "2124 4th Ave", city: "Seattle", zip_code: "98121", country: "United States", lat: 47.614627, lng: -122.342149)

   lst14 = Listing.create(name: "Modern Townhouse w/pvt Rooftop Deck", host_id: 14, description: "New Construction - Stylish Townhouse w/ Designer Finishes, Open Chefs Kitchen, & Private Garden Rooftop (City/Water Views)! Located in the Beautiful Ballard Neighborhood, Steps From Dining, Shopping, Beaches, Nightlife, and RapidRide Access Downtown.", price: 139, num_bedrooms: 1, max_guests: 3, num_beds: 1, num_bathrooms: 1, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "201 Garfield St", city: "Seattle", zip_code: "98109", country: "United States", lat: 47.632558, lng: -122.353131)

   lst15 = Listing.create(name: "Tiny Texas Urban House!", host_id: 15, description: "This tiny house packs it all in 110 square feet! A tiny bath, tiny kitchenette and a full-sized comfy loft-bed. Perfect for a single traveler and good for a very intimate couple. This clever space is super close to downtown! There's also a twin foldout mat if requested!", price: 139, num_bedrooms: 3, max_guests: 6, num_beds: 3, num_bathrooms: 3, kitchen: true, heating: true, wifi: true, pets: false, parking: true, tv: true, street_address: "1949-1901 W McKinney St", city: "Houston", zip_code: "77019", country: "United States", lat: 29.758614, lng: -95.387647)

   lst16 = Listing.create(name: "Beautiful Downtown Loft -Walk to GRB!", host_id: 3, description: "This comfortable loft is amazingly situated to enjoy the best that Houston has to offer. It is walking distance to the BBVA Compass Stadium (Go Dynamo!), Minute Maid Park, George R. Brown Convention Center, and Discovery Green.", price: 139, num_bedrooms: 1, max_guests: 3, num_beds: 1, num_bathrooms: 1, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "905 Peden St", city: "Houston", zip_code: "77006", country: "United States", lat: 29.752308, lng: -95.390122)

   lst17 = Listing.create(name: "WONDERFUL DEAL! Close to Downtown Galleria!", host_id: 2, description: "Entire house is a very tranquil environment. Located 7 minutes from Galleria and very close to the heights and downtown it is the perfect centralized place to live. Government ID must be on file to book.", price: 99, num_bedrooms: 2, max_guests: 5, num_beds: 2, num_bathrooms: 2, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "1520 Fairview St", city: "Houston", zip_code: "77006", country: "United States", lat: 29.747096, lng: -95.397656)

   lst18 = Listing.create(name: "Galleria Private room and bath", host_id: 3, description: "Private bedroom and bathroom in townhome with full shared kitchen. The bedroom has a queen size bed and futon full couch. It has a coffee pot in room and mini fridge. big flatscreen tv in common room and bedroom. Close to Houston med center for long term patients.", price: 89, num_bedrooms: 1, max_guests: 3, num_beds: 1, num_bathrooms: 1, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "1638 Harold St", city: "Houston", zip_code: "77006", country: "United States", lat: 29.741537, lng: -95.401045)

   lst19 = Listing.create(name: "Cute Apartment in HOUSTON HEIGHTS", host_id: 4, description: "Very Cozy Well decorated Houston Heights apartment. Inside the loop in the the Heights area close to great nightlife but secluded enough to get a great night sleep. Short commute to downtown or to Medical Center area. 5-10 min from Galleria area.", price: 129, num_bedrooms: 2, max_guests: 5, num_beds: 2, num_bathrooms: 2, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "1405 Vassar St", city: "Houston", zip_code: "77006", country: "United States", lat: 29.730155, lng: -95.396985)

   lst20 = Listing.create(name: "Modern Gem - Close to Everything", host_id: 5, description: "This completely redone house in the Historic East End is spacious and accommodating. It conveniently located and offers multiple amenities and finishes.", price: 149, num_bedrooms: 2, max_guests: 5, num_beds: 2, num_bathrooms: 2, kitchen: true, heating: true, wifi: false, pets: false, parking: false, tv: true, street_address: "1916 Calumet St", city: "Houston", zip_code: "77004", country: "United States", lat: 29.721483, lng: -95.380995)

   lst21 = Listing.create(name: "Explore Houston from a Cozy Loft-Style Condo", host_id: 6, description: "This spacous and secure 1BR condo is centrally located to access Houston's top attractions - Museum District, Houston Zoo, NRG Stadium, Houston Galleria, Hermann Park, and much more. You'll find shopping, dining, and night life all a short drive, bike ride, or even walk away from this cozy place nestled in the heart of Houston. ", price: 69, num_bedrooms: 1, max_guests: 2, num_beds: 1, num_bathrooms: 1, kitchen: true, heating: false, wifi: false, pets: false, parking: false, tv: false, street_address: "1523-1501 Isabella St", city: "Houston", zip_code: "77004", country: "United States", lat: 29.733748, lng: -95.376407)

   lst22 = Listing.create(name: "Modern Midtown Space - Private BR + Office!", host_id: 7, description: "Cozy bedroom in unique townhouse located in the Midtown district in the heart of the city! Convenient location less than 1 mile from downtown, 2 miles from the Museum District, and 3 miles from the Med Center.", price: 139, num_bedrooms: 1, max_guests: 3, num_beds: 1, num_bathrooms: 1, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "8 Spruce Street", city: "New York", zip_code: "10038", country: "United States", lat: 40.711061, lng: -74.005900)

   lst23 = Listing.create(name: "East Downtown Modern Cabin", host_id: 8, description: "This space was designed with the short term guest in mind. A log cabin feel with modern finishes this space will make you feel welcome and comfortable. The location is convenient to anywhere within inner loop, 2 miles from downtown.", price: 199, num_bedrooms: 1, max_guests: 2, num_beds: 1, num_bathrooms: 1, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "110 Pearl St", city: "New York", zip_code: "10005", country: "United States", lat: 40.704634, lng: -74.008922)

   lst24 = Listing.create(name: "Spacious 1BR Upper Kirby Condo With Pool", host_id: 9, description: "Enjoy open-plan, loft-style living with neutral decor, open shelving, rustic exposed-beam ceilings. This condo has a full kitchen with a granite counter tops. It also has a washer/dryer in the bathroom available for guests to use. Cable TV is provided for our guests. Wifi is provided.", price: 149, num_bedrooms: 1, max_guests: 2, num_beds: 1, num_bathrooms: 1, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "175 Broadway", city: "New York", zip_code: "10002", country: "United States", lat: 40.710162, lng: -74.010018)

   lst25 = Listing.create(name: "Penthouse Studio East 50s Terrace", host_id: 10, description: "The photo taken on the roof is during the summer when all the plants are in full bloom. The plantings will change during seasons so please don't expect the plants to be as full during the late fall, winter, or early spring!", price: 299, num_bedrooms: 2, max_guests: 4, num_beds: 2, num_bathrooms: 1.5, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "94-102 Nassau St", city: "New York", zip_code: "10038", country: "United States", lat: 40.710545, lng: -74.007666)

   lst26 = Listing.create(name: "ENTIRE Floor,PRIVATE Bath&Entrance! SUPERHOST :))", host_id: 11, description: "If you’re looking to get the true NYC experience but don’t want to pay Manhattan prices, but still want to stay close to Manhattan, you’ve found the perfect (Website hidden by Airbnb) only 3 min walking from subway :).", price: 169, num_bedrooms: 1, max_guests: 2, num_beds: 1, num_bathrooms: 1, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "156 William St", city: "New York", zip_code: "10038", country: "United States", lat: 40.709728, lng: -74.005282)

   lst27 = Listing.create(name: "Cute, comfortable room in Gramercy", host_id: 12, description: "We have a room available to rent in our colorful 2 bedroom apt. (my husband and I have the other room). Our building was built in 1910, and renovated in 1980; it has retained its character, its older design, and historical look.", price: 139, num_bedrooms: 1, max_guests: 3, num_beds: 1, num_bathrooms: 1, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: false, street_address: "90 Church St", city: "New York", zip_code: "10007", country: "United States", lat: 40.712674, lng: -74.010820)

   lst28 = Listing.create(name: "Cozy and quiet with secret garden", host_id: 13, description: "A floor in our charming Harlem townhouse apartment, restored to its former glory, in historic Hamilton Hieghts. Totally private with own entrance, bathroom and kitchen. Free Wifi is available.", price: 299, num_bedrooms: 3, max_guests: 3, num_beds: 3, num_bathrooms: 2.5, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "72 Warren St", city: "New York", zip_code: "10007", country: "United States", lat: 40.715293, lng: -74.009822)

   lst29 = Listing.create(name: "Cozy Bedroom near Columbus Circle R", host_id: 14, description: "The Apartment is in a convenient location in downtown LA. We are young designers enjoying our life in this beloved City, we invite you to spend your vacation in our lovely home!", price: 139, num_bedrooms: 1, max_guests: 3, num_beds: 1, num_bathrooms: 1, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "1131 Mohawk St", city: "Los Angeles", zip_code: "90026", country: "United States", lat: 34.078524, lng: -118.265698)

   lst30 = Listing.create(name: "Private Pool House with Amazing Views!", host_id: 15, description: "Spacious, private pool house. Centrally located in LA, close to Downtown LA, Hollywood and our neighboring cities of Glendale and Pasadena. Private compound with breathtaking views and access to pool and spa with free gated parking!", price: 149, num_bedrooms: 2, max_guests: 4, num_beds: 2, num_bathrooms: 1.5, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "2216 Reservoir St", city: "Los Angeles", zip_code: "90026", country: "United States", lat: 34.079845, lng: -118.265240)

   lst31 = Listing.create(name: "Burbank near Studios - quiet, safe neighborhood", host_id: 4, description: "We're close to In-N-Out Burger, Universal Studios, Disney Studios, Warner Bros. Studios, Hollywood, Rose Bowl, and Hollywood Bowl. Downtown Burbank features: sushi, steakhouse, burgers, frozen yogurt, movie theaters, and wonderful nightlife. ", price: 199, num_bedrooms: 3, max_guests: 6, num_beds: 3, num_bathrooms: 2, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "1470 Angelus Ave", city: "Los Angeles", zip_code: "90026", country: "United States", lat: 34.085125, lng: -118.268230)

   lst32 = Listing.create(name: "Great location on a budget, POOL", host_id: 5, description: "Welcome to our house! Centrally located in historic Hancock Park, we just short drive away from Hollywood Attractions, Beverly Hills, Grove Shopping Center, Universal Studio, Downtown LA!", price: 139, num_bedrooms: 2, max_guests: 6, num_beds: 2, num_bathrooms: 2, kitchen: true, heating: true, wifi: true, pets: true, parking: true, tv: true, street_address: "1346 Westerly Terrace", city: "Los Angeles", zip_code: "90026", country: "United States", lat: 34.084534, lng: -118.272152)

   lst33 = Listing.create(name: "Private unit with kitchen and good location", host_id: 6, description: "A two story unit attached to our main house,
    it has a full kitchen, private entrance and is close to the 101 and 405 freeways and public transportation.", price: 139, num_bedrooms: 1, max_guests: 3, num_beds: 1, num_bathrooms: 1, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "3128 1/2 Berkeley Cir", city: "Los Angeles", zip_code: "90026", country: "United States", lat: 34.088719, lng: 118.272653)

   lst34 = Listing.create(name: "Zen Garden by Universal & Hollywood", host_id: 7, description: "I've used AirBnB many many times as a guest and love meeting the people I meet along the way. 6 years ago now I decided to open my home to you, and it's been one of the best decisions I've ever made :)", price: 199, num_bedrooms: 2, max_guests: 6, num_beds: 2, num_bathrooms: 1.5, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "1747 N Dillon St", city: "Los Angeles", zip_code: "90026", country: "United States", lat: 34.092113, lng: -118.270836)

   lst35 = Listing.create(name: "Explore Los Angeles from a Quirky, Hip Bungalow with a Porch", host_id: 8, description: "Leaf through the pages of a good book in a wicker sofa on the porch of this quaint remodled bungalow. Inside, a glass breakfast table, carved wood furnishings, and muted accents mingle beneath a pitched white plank ceiling with exposed beams.", price: 179, num_bedrooms: 2, max_guests: 6, num_beds: 2, num_bathrooms: 2, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "3636 Crestmont Ave", city: "Los Angeles", zip_code: "90026", country: "United States", lat: 34.093162, lng: -118.276224)

  USERS = [demo, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15]

  USERS.each.with_index do |user, idx|
    file = File.open("app/assets/images/users/host#{idx}.jpeg")
    user.image.attach(io: file, filename: "host#{idx}.jpeg")
  end

  LISTINGS = [lst1, lst2,lst3,lst4,lst5,lst6,lst7,lst8,lst9,lst10,lst11,lst12,lst13,lst14,lst15,lst16,lst17,lst18,lst19,lst20,lst21,lst22,lst23,lst24,lst25,lst26,lst27,lst28,lst29,lst30,lst31,lst32,lst33,lst34,lst35]

  LISTINGS.each.with_index do |lst, idx1|
    (1..5).each do |idx2|
      file = File.open("app/assets/images/lst#{idx1 + 1}/lst#{idx1+ 1}-#{idx2}.jpeg")
      lst.images.attach(io: file, filename: "lst#{idx1 + 1}-#{idx2}.jpeg")
    end
  end
