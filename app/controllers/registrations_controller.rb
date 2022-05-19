class RegistrationsController < ApplicationController
    def new
        @user = User.new()
    end

    # when a POST request is made to sign_up path, user is received by the controller as an object
    # this object can be accessed using params[:user]. However, for security purposes, we need
    # to define the user_params function and return the specific parameters for this object
    def create
        @user = User.new(user_params)

        respond_to do |format|
            if @user.save
                # redirects to home if successful, need to be able to pass user
                format.html { redirect_to root_path user: { username: @user.username } }
            else
                # re-render registrations/new.html.erb if signup failed
                format.html { render :new, status: :unprocessable_entity }
            end
        end
    end 

    private
    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end