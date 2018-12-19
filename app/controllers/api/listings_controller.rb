class Api::ListingsController < ApplicationController
  def show
    # @listing = Listing.find(params[:id])
    @listing = Listing.with_attached_images.find(params[:id])
    @user = @listing.host
    render 'api/listings/show'
  end

  def index
    @listings = Listing.in_bounds(params[:bounds])
    render 'api/listings/index'
  end
end
