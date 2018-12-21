class Api::ListingsController < ApplicationController
  def show
    @listing = Listing.with_attached_images.find(params[:id])
    @user = @listing.host
    render 'api/listings/show'
  end

  def index
    @listings = bounds ? Listing.in_bounds(bounds) : Listing.all

    if start_date && end_date
      @listings = @listings.select { |listing| !listing.unavailable_dates.includes(start_date) && !listing.unavailable_dates.includes(end_date) }
    else
      @listings = @listings
    end

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

  def start_date
    params[:dates][:start_date] if params[:dates]
  end

  def end_date
    params[:dates][:end_date] if params[:dates]
  end
end
