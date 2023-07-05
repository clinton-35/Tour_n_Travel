Rails.application.routes.draw do
  root 'application#index'

  resources :users, only: [:index]
  resources :sessions, only: [:create]
  resources :admins
  
  # users route
  post'/users', to: 'users#create'
  get '/current_user', to: 'users#show'
  delete '/logout', to: 'sessions#logout'
  post "/login", to: 'sessions#create'
  
  #admin routes
  post '/loginadmin', to: 'sessions#login'
  delete '/logout', to: 'sessions#destroy'
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  
  

 
  
  
  
  resources :contacts, only: [:index, :create]
  resources :packages
  resources :destinations
  resources :feedbacks, only: [:index, :create]

  resources :bookings, only: [:create]
  

  

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
