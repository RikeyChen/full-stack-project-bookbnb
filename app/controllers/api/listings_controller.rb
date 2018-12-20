class Api::ListingsController < ApplicationController
  def show
    @listing = Listing.with_attached_images.find(params[:id])
    @user = @listing.host
    render 'api/listings/show'
  end

  def index
    @listings = bounds ? Listing.in_bounds(bounds) : Listing.all
    @listings =
      @listings
        .where("max_guests >= ?", guests)
        .where("price >= ?", min_price)
        .where("price <= ?", max_price)

    render 'api/listings/index'
  end

  def bounds
    params[:bounds]
  end

  def guests
    params[:guests]
  end

  def min_price
    params[:min_price]
  end

  def max_price
    params[:max_price]
  end
end
