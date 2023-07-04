class SessionsController < ApplicationController
    
    def create 
        admin = Admin.find_by(name: params[:name])
        if admin && admin.authenticate(params[:password])
          session[:admin_id] = admin.id
          render json: { message: 'Login successful' }
        else
          render json: { error: 'Invalid email or password' }, status: :unauthorized
        end
      end
end
