# All other controllers inherit from this controller
class ApplicationController < ActionController::Base

    # tries to set user logged in before doing anything else
    before_action :set_current_user

    # checks to see if the user has a session cookie
    # sets the Current.user to the correct user if so
    def set_current_user
        if session[:user_id]
            Current.user = User.find_by(id: session[:user_id])
        end
    end
end
