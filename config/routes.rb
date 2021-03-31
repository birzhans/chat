Rails.application.routes.draw do
  resources :channels
  devise_for :users
  root to: 'pages#index'
end
