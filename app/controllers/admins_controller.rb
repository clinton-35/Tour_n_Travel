class AdminsController < ApplicationController

  def create 
    admin = Admin.create(user_params)
        if admin.valid?
            session[:admin_id] = admin.id 
            render json: admin, status: :created
        else
            render json: { error: "admin.errors.full_message" }, status: :unprocessable_entity   
        end
end

def show 
    admin = Admin.find_by(id: session[:user_id])
    if admin
        render json: admin
    else
       render json: { error: "admin.errors.full_message" }, status: :unauthorized
    end
end

private
def user_params
    params.permit(:name, :password, :email)
end
    
end
