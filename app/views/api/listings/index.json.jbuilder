@listings.each do |listing|
  json.listings do
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
      json.photo_url url_for(listing.images[0])
    end
  end

  json.bookings do
    if listing.bookings.length > 0
      unavailable_dates = []
      listing.bookings.each do |booking|
        unavailable_dates += booking.unavailable_dates
      end
      json.set! listing.id do
        json.unavailable_dates unavailable_dates
      end
    end
  end
end

