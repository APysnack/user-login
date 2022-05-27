Setup (extra dependencies made need to be installed):

---------------------------
1. Clone the git repository

$ `git clone git@github.com:APysnack/user-login.git`

---------------------------
2. Change directory into the user login folder

$ `cd user-login`

---------------------------

4. Generate rails credentials in a text editor (I use vim in this example, use whatever editor you're comfortable with)

run $`rake secret` to generate a secret hash and copy the output. Then 

$`EDITOR=vim rails credentials:edit`

paste the secret as shown below. Note there are exactly 2 spaces of indentation:

![Screen Shot 2022-05-26 at 8 00 58 AM](https://user-images.githubusercontent.com/60242065/170687927-87f2d102-315d-4dfa-afe2-f1cad53e7261.png)

---------------------------
5. Be sure to create a `.env` file in the project's `root` directory to save the master key that is shown after you save and completed the last step

In the .env file Add `RAILS_MASTER_KEY=PASTEMASTERKEYHERE`

---------------------------
6. Install rails gems

$`bundle install`

---------------------------
7. Run the rails migrations

$`bundle exec rake db:migrate`

---------------------------
8. You should now be able to run $`rails s` and see a blank page at `localhost:3001` with the word "main" on it. Keep the server terminal open. 

---------------------------
9. Open a new terminal, cd to the `user-login/client` folder

---------------------------
11. Install yarn dependencies

$`yarn install`

---------------------------
12. Start the client

$`yarn start`

This should start up the client on `localhost:8000`


** As of now, there is still some unhandled behavior, such as trying to log in with a user that does not exist. You should be able to register a user, then it will automatically log you in as that user. You should also be able to log out and log back in with no issues and you should remain logged in as a user unless you've logged yourself out. **
