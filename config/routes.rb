Rails.application.routes.draw do
  root 'application#index'

  resources :users, only: [:index, :create, :show]
  

  post 'login', to: 'users#login'
  
  delete 'logout', to: 'users#logout'
  resources :admins
  resources :contacts, only: [:index, :create]
  resources :packages
  resources :destinations
  resources :feedbacks, only: [:index, :create]
  resources :bookings, only: [:create]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
