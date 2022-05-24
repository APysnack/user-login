Rails.application.routes.draw do
  devise_for :users, 
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  get "about", to: "about#index"
  get "/member-data", to: "members#show"

  root "main#index"
end
