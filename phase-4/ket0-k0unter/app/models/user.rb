class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :meals, through: :reviews

    validates :password, presence: true
end
