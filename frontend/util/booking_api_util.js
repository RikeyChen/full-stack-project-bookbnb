export const createBooking = (listingId, booking) => (
  $.ajax({
    method: 'POST',
    url: `api/listings/${listingId}/bookings`,
    data: { booking },
  })
);

export const test = 'test';
