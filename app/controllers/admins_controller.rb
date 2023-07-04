class AdminsController < ApplicationController
    before_action :authorize

  

  def create
    destination = Destination.create(admin_id: session[:admin_id])
    render json: destination, status: :created
  end

  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end
    
end
