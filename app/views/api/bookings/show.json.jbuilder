json.extract! @booking :id, :guest_id, :listing_id, :checkin_date, :checkout_date

json.unavailable_dates @booking.unavailable_dates