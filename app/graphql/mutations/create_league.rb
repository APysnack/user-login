module Mutations
    class CreateLeague < BaseMutation
        argument :user_id, Integer, required: false
        argument :league_name, String, required: true
        argument :league_url, String, required: true

        type Types::LeagueType

        def resolve(league_name: nil, league_url: nil)
            League.create!(
                league_name: league_name,
                league_url: league_url
            )
        end
    end
end





# class Mutations::CreateLeague < Mutations::BaseMutation
#     argument :user_id, Integer, required: false
#     argument :league_name, String, required: true
#     argument :league_url, String, required: true

#     type Types::LeagueType

#     def resolve(user_id: nil, league_name: nil, league_url: nil)
#        League.create!(
#            league_name: league_name,
#            league_url: league_url
#        )
#     end
# end