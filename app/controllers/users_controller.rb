class UsersController < ApplicationController
    
    def index
      users = User.all
      render json: users
    end
  
    def create
      username = params[:username]
      email = params[:email]
      password = params[:password]
  
      if username.present? && email.present? && password.present?
        existing_user = User.find_by(username: username)
        existing_email = User.find_by(email: email)
  
        if existing_user
          render json: { error: "Username already exists" }, status: 406
        elsif existing_email
          render json: { error: "Email already exists" }, status: 406
        else
          user = User.create(username: username, email: email, password: password)
  
          if user.save
            render json: { success: "Account created successfully" }
          else
            render json: { error: "Error creating the account" }, status: 500
          end
        end
      else
        render json: { error: "Please fill out all the fields" }, status: 406
      end
    end

    def login
      user = User.find_by(username: params[:username])
      if user && user.authenticate(params[:password])
        session[:user_id] = user.id
        render json: { message: 'Login successful' }
      else
        render json: { error: 'Invalid email or password' }, status: :unauthorized
      end
    end
  
    def logout
      session.delete(:user_id)
      render json: { message: 'Logged out successfully' }
    end

end
  