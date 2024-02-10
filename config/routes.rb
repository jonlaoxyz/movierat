Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :programs, only: [:index, :show, :create, :update, :destroy] do
      # Define a custom route for updating the 'fav' attribute
      member do
        patch 'update_fav', to: 'programs#update_fav' # Add this line
      end
    end
    resources :user_programs
  end

  # Route all other requests to the fallback index HTML page
  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
