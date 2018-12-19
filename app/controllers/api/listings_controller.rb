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
end
