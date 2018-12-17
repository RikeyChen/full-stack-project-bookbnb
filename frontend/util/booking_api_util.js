export default createBooking = (listingId, booking) => (
  $.ajax({
    method: 'POST',
    url: `api/listings/${listingId}/bookings`,
    data: { booking },
  })
);
