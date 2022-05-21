# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# NOTE: rails db:seed to run this and add to the database

5.times do
    user_pw = Faker::Internet.password
    user = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: user_pw, password_confirmation: user_pw)
    5.times do
        user.posts.create(title: Faker::Lorem.sentence(word_count: 3), body: Faker::Lorem::paragraph(sentence_count: 3))
    end
end