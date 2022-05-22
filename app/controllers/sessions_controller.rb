class SessionsController < ApplicationController
    def new
    end

    def create
        @user = User.new(login_params)
        @session_user = User.find_by(email: @user.email)
        respond_to do |format|
            if @session_user.present? && @session_user.authenticate(@user.password)
                session[:user_id] = @session_user.id
                msg = { :user => @session_user, :status => "ok", :message => "Success!", :html => "<b>...</b>" }
                format.json { render :json => msg } 
            else
                msg = { :user => nil, :status => "ok", :message => "Failed log in", :html => "<b>...</b>" }
                format.json { render :json => msg } 
            end
        end
    end

    def destroy
        session[:user_id] = nil
        redirect_to root_path
    end


    private
    def login_params
        params.require(:user).permit(:email, :password,)
    end
end