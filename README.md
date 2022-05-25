Setup (extra dependencies made need to be installed):


$`git clone git@github.com:APysnack/live-rap-center.git`

$`cd user-login`

$`bundle install`

run the command $`rake secret` and copy the secret generated in the terminal's output

create a .env file in the user-login's `root` directory. In your .env file add

DEVISE_JWT_SECRET_KEY=PASTEYOURGENERATEDSECRETHERE

$`bundle exec rake db:migrate`

You should be able to run $`rails s` and see a blank page at `localhost:3000` with the word "main" on it

$`cd client`

$`echo PORT=8000 > .env`

$`yarn install`

$`yarn start`

This should start up the client on `localhost:8000`
