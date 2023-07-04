Rails.application.routes.draw do
  root 'application#index'

  resources :users, only: [:index, :create]
  resources :sessions, only: [:create]
  get '/current_user', to: 'users#show'
  delete '/logout', to: 'sessions#logout'
  
  
  
  

 
  
  
  resources :admins
  resources :contacts, only: [:index, :create]
  resources :packages
  resources :destinations
  resources :feedbacks, only: [:index, :create]

  resources :bookings, only: [:create]
  post '/login', to: 'sessions#cteate'

  

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
