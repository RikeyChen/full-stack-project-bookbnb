json.extract! @listing,
  :id,
  :name,
  :host_id,
  :description,
  :price,
  :num_bedrooms,
  :max_guests,
  :num_beds,
  :num_bathrooms,
  :kitchen,
  :heating,
  :wifi,
  :pets,
  :parking,
  :tv,
  :city,
  :zip_code,
  :country,
  :lat,
  :lng

json.photoUrl @listing.images.map { |file| url_for(file) }