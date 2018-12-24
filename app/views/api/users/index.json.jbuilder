json.user do
  json.extract! @user, :id, :email, :first_name

  if @user.image.attached?
    json.photo_url url_for(@user.image)
  end
end

json.bookings do
  if @bookings.length > 0
    @bookings.each do |booking|
      json.set! booking.id do
        json.extract! booking, :id, :listing_id, :checkin_date, :checkout_date, :num_guests
      end
    end
  end
end

json.listings do
  if @getaways.length > 0
    @getaways.each do |listing|
      json.set! listing.id do
        json.extract! listing, :id, :name, :host_id, :city
        json.listing_photo_url url_for(listing.images[0])
        json.extract! listing.host, :first_name
        json.host_photo_url url_for(listing.host.image)
      end
    end
  end
end