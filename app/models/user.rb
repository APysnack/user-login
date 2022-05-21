# email:string
# username:string
# password_digest:string
#
# **provided by bcrypt**
# password:string virtual
# password_confirmation:string virtual

class User < ApplicationRecord
    has_secure_password

    has_many :posts
    
    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :username, presence: true
end
