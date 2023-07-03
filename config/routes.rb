Rails.application.routes.draw do
  resources :admins
  resources :contacts, only: [:index, :create]
  resources :packages
  resources :destinations
  resources :feedbacks, only: [:index, :create]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
