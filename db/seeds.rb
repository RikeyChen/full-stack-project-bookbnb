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

# Listing.new(name: "Explore San Francisco form a Cozy Lofy-Style Studio", host_id: 1, description: "Unwind on the balcony of a 130-year-old building in San Francisco. Enjoy open-plan, loft-style living with neutral decor, open shelving, rustic exposed-beam ceilings. Apartment is on the 4th floor without elevator", price: 139, num_bedrooms: 1, max_guests: 3, num_beds: 1, num_bathrooms: 1, kitchen: true, heating: true, wifi: true, pets: false, parking: false, tv: true, street_address: "1300 Jackson St", city: "San Francisco", zip_code: "94109", country: "United States", lat: 37.794579, lng: 122.416847)