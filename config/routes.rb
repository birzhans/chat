Rails.application.routes.draw do
  root to: 'channels#index'

  resources :channels do
    resources :channel_users
    resources :messages
  end

  devise_for :users

  resources :pages

end
