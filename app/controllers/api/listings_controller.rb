class Api::ListingsController < ApplicationController
  def show
    @listing = Listing.with_attached_images.find(params[:id])
    @user = @listing.host
    render 'api/listings/show'
  end

  def index
    @listings = bounds ? Listing.in_bounds(bounds) : Listing.all
    # if start_date && end_date
    #   @listings = @listings.select do |listing|
    #     !unavailable_dates(listing).include?(start_date) ||
    #     !unavailable_dates(listing).include?(end_date)
    #   end
    # end

    # if start_date && end_date
    #   sql =
    #   "SELECT * from listings
    #   WHERE"
    #   @listings = @listings
    #     .where.not('checkin_date IN ')
    # end

    @listings =
      @listings
        .where("max_guests >= ?", guests)
        .where("price <= ?", max_price)

    render 'api/listings/index'
  end

  def bounds
    params[:bounds]
  end

  def guests
    params[:guests] || 1
  end

  def max_price
    params[:max_price] || 1000
  end

  # def start_date
  #   Date.parse(params[:dates][:start_date]) if params[:dates]
  # end

  # def end_date
  #   Date.parse(params[:dates][:end_date]) if params[:dates]
  # end

  # def unavailable_dates(listing)
  #   dates = []
  #   listing.bookings.each do |booking|
  #     dates += booking.unavailable_dates
  #   end
  #   dates
  # end

end
