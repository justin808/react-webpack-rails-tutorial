# frozen_string_literal: true

require File.expand_path("boot", __dir__)

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RailsReactTutorial
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.action_cable.allowed_request_origins = [Rails.application.secrets.action_cable_url]
  end
end
