class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception 

    #skip csrf protection
    skip_before_action :verify_authenticity_token

    
    before_action :set_session_expiry

  

   

  def set_session_expiry
    request.session_options[:expire_after] = 18000
  end

  def index
    render html: "<h1>Welcome to stop 'n shop backend</h1>".html_safe
  end
end
