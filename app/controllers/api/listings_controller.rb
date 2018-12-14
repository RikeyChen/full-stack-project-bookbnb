class Api::ListingsController < ApplicationController
  def show
    @listing = Listing.with_attached_photos.find(params[:id])
    render 'api/listings/show'
  end

  def index
    @listings = List.all
    render 'api/listings/index'
  end
end
