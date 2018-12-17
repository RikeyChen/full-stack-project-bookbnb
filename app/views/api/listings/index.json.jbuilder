@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing,
      :id,
      :name,
      :home_type,
      :host_id,
      :description,
      :price,
      :num_bedrooms,
      :max_guests,
      :num_beds,
      :num_bathrooms,
      :city,
      :zip_code,
      :country,
      :lat,
      :lng
    json.photoUrl url_for(listing.images[0])
  end
end

