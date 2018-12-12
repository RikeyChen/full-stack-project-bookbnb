class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?
  before_action :underscore_params!

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_login
    unless logged_in?
      render json: { base: ['Please log in or sign up to continue.'] }, status: 401
    end
  end

private
  def underscore_params!
    if params[:user]
      params[:user] = params[:user].transform_keys!(&:underscore)
    end
  end
end
