class MainController < ApplicationController
    def index
        @user = params[:user]
        @testEnv = ENV['TEST_VAR']
    end
end