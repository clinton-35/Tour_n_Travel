class AdminsController < ApplicationController
   ##def create
  #  destination= Destination.create(admin_id: session[:admin_id])
   ###private

  #def authorize
 #   return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
 # end

 def login
  name = params[:name]
  email = params[:email]
  password = params[:password]

  if name.present? && email.present? && password.present?
    admin = Admin.find_by(name: name)

    if admin&.authenticate(password)
      session[:admin_id] = admin.id
      render json: { success: "You are logged in" }
    else
      render json: { error: "Invalid credentials" }, status: :unauthorized
    end
  else
    render json: { error: "Please fill out all the fields" }, status: :not_acceptable
  end
end
    
end
