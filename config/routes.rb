# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => "/cable"

  root "pages#index"

  namespace :api do
    post "signup", to: "authentication#signup"
    post "login", to: "authentication#create"
  end

  get "simple", to: "pages#simple"
  get "rescript", to: "pages#rescript"
  get "no-router", to: "pages#no_router"

  # React Router needs a wildcard
  get "react-router(/*all)", to: "pages#index"

  get "stimulus", to: "comments#stimulus"
  get "horizontal-form", to: "comments#horizontal_form"
  get "stacked-form", to: "comments#stacked_form"
  get "inline-form", to: "comments#inline_form"
  get "comment-list", to: "comments#comment_list"
  resources :comments
  mount ActionCable.server => "/cable"
end
