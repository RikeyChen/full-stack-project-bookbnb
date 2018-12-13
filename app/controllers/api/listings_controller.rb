class Api::ListingsController < ApplicationController
  def show
    @listing = Listing.find(params[:id])
    render 'api/listings/show'
  end

  def index
    @listings = List.all
    render 'api/listings/index'
  end

end
