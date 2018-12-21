class Api::ListingsController < ApplicationController
  def show
    @listing = Listing.with_attached_images.find(params[:id])
    @user = @listing.host
    render 'api/listings/show'
  end

  def index
    @listings = bounds ? Listing.in_bounds(bounds) : Listing.all

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

end
