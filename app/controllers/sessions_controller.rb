class SessionsController < ApplicationController
    
  
  def create
    username = params[:username]
    password = params[:password]

    if username.present? && password.present?
      user = User.find_by(username: username)

      if user&.authenticate(password)
        session[:user_id] = user.id
        render json: { success: "You are logged in" }
      else
        render json: { error: "Invalid credentials" }, status: :unauthorized
      end
    else
      render json: { error: "Please fill out all the fields" }, status: :not_acceptable
    end
  end
    

  def logout
      session.delete(:user_id)
      render json: { success: 'You are now logged out' }
  end

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
