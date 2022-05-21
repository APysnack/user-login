class SessionsController < ApplicationController
    def new
    end

    def create
        user = User.find_by(username: params[:username])

        respond_to do |format|
            if user.present? && user.authenticate(params[:password])
                session[:user_id] = user.id
                format.html { redirect_to root_path }
            else
                format.html { render :new, status: :unprocessable_entity }
            end
        end
    end

    def destroy
        session[:user_id] = nil
        redirect_to root_path
    end
end