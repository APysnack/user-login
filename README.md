Setup (still a work in progress):

git clone https://github.com/APysnack/live-rap-center.git

cd live-rap-center

bundle install

create a .env file in the root directory

rake secret

copy the generated secret. In your .env file add

DEVISE_JWT_SECRET_KEY=PASTEYOURGENERATEDSECRETHERE

bundle exec rake db:migrate

cd client

create another .env file

in this .env file enter

PORT=8000

yarn install

yarn start
