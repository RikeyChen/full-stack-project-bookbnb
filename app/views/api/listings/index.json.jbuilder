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
      listing.bookings.each do |booking|
        json.set! booking.listing_id do
          json.extract! booking, :id, :unavailable_dates, :listing_id
        end
      end
    end
  end
end

