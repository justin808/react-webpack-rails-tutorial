# frozen_string_literal: true

module Api
  class AuthenticationController < ApplicationController
    def create
      user = User.find_by(email: params[:email].downcase.strip)

      if user&.valid_password?(params[:password])
        begin
          token = user.generate_jwt
          render json: {
            message: "Login successful",
            token: token
          }, status: :ok
        rescue JWT::EncodeError
          render json: { error: "Authentication failed" }, status: :internal_server_error
        end
      else
        render json: { error: "Invalid credentials" }, status: :unauthorized
      end
    end

    def signup
      return render json: { error: "Invalid email format" }, status: :unprocessable_entity unless
      params.dig(:user, :email)&.match?(URI::MailTo::EMAIL_REGEXP)

      return render json: { error: "Password must be at least 6 characters" }, status: :unprocessable_entity if
      params.dig(:user, :password)&.length.to_i < 6

      user = User.new(user_params)

      if user.save
        begin
          token = user.generate_jwt
          render json: {
            message: "Signup successful",
            token: token
          }, status: :created
        rescue JWT::EncodeError
          render json: { error: "Failed to generate authentication token" }, status: :internal_server_error
        end
      else
        render json: {
          errors: user.errors.full_messages
        }, status: :unprocessable_entity
      end
    end

    private

    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
  end
end
