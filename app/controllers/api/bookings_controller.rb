class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)
    @booking.guest_id = current_user.id
    @booking.listing_id = params[:listing_id]

    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def booking_params
    params.require(:booking).permit(:checkin_date, :checkout_date, :num_guests)
  end
end
