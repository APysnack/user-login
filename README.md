Setup (extra dependencies made need to be installed):

1. Clone the git repository
\$ `git clone git@github.com:APysnack/user-login.git`

2. Change directory into the user login folder
\$ `cd user-login`

3. Generate a secret hash (be sure to copy the output)
\$ `rake secret`

4. Open rails credentials in a text editor (I use vim in this example, use whatever editor you're comfortable with)
\$`EDITOR=vim rails credentials:edit`

Paste the secret as the value for `jwt_secret_key:` as shown (note that this is indented by exactly 2 spaces)
![Screen Shot 2022-05-26 at 8 00 58 AM](https://user-images.githubusercontent.com/60242065/170485214-06045ad6-0ec4-4ab7-aa7d-24ab0174d120.png)

5. Be sure to create a `.env` file in the project's `root` directory to save the master key that is shown after you save and completed the last step
Add `RAILS_MASTER_KEY=PASTEMASTERKEYHERE`

6. Install rails gems
$`bundle install`

7. Run the rails migrations
$`bundle exec rake db:migrate`

8. You should now be able to run $`rails s` and see a blank page at `localhost:3000` with the word "main" on it. Keep the server terminal open. 

9. Open a new terminal, cd to the `user-login/client` folder

10. Add Port=8000 in the client's environment. 
$`echo PORT=8000 > .env`

11. Install yarn dependencies
$`yarn install`

12. Start the client
$`yarn start`

This should start up the client on `localhost:8000`


** As of now, there is still some unhandled behavior, such as trying to log in with a user that does not exist. You should be able to register a user, then it will automatically log you in as that user. You should also be able to log out and log back in with no issues and you should remain logged in as a user unless you've logged yourself out. **
