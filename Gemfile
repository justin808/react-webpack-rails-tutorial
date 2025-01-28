# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.3.4"

gem "react_on_rails", "14.1.0.rc.0"
gem "shakapacker", "8.0.0"

# Bundle edge Rails instead: gem "rails", github: "rails/rails"
gem "listen"
gem "rails", "~> 8.0"

gem "pg"

gem "puma"

# Use SCSS for stylesheets
gem "sass-rails"
# Use Uglifier as compressor for JavaScript assets
gem "uglifier"
# Use CoffeeScript for .js.coffee assets and views
gem "coffee-rails"

# Turbolinks makes following links in your web application faster.
# Read more: https://github.com/turbolinks/turbolinks
# Get turbolinks from npm!
# gem 'turbolinks', '>= 5.0.0.beta2'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem "jbuilder"
gem "redis", "~> 5.0"

# bundle exec rake doc:rails generates the API under doc/api.
gem "sdoc", group: :doc

# Use ActiveModel has_secure_password
# gem "bcrypt", "~> 3.1.7"

# Use Rails Html Sanitizer for HTML sanitization
gem "rails-html-sanitizer"

gem "autoprefixer-rails"

gem "awesome_print"

# Needed until Ruby 3.3.4 is released https://github.com/ruby/ruby/pull/11006
# Related issue: https://github.com/ruby/net-pop/issues/26
# TODO: When Ruby 3.3.4 is released, upgrade Ruby and remove this line
gem "net-pop", github: "ruby/net-pop"

gem "redcarpet"

# jquery as the JavaScript library has been moved under /client and managed by npm.
# It is critical to not include any of the jquery gems when following this pattern or
# else you might have multiple jQuery versions.

gem "devise"

gem "jwt"

group :development do
  # Access an IRB console on exceptions page and /console in development
  gem "web-console"
end

group :development, :test do
  ################################################################################
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem "spring"
  gem "spring-commands-rspec"

  ################################################################################
  # Manage application processes
  gem "factory_bot_rails"
  gem "foreman"

  ################################################################################
  # Linters and Security
  gem "rubocop", "1.69", require: false
  gem "rubocop-performance", "~> 1.13"
  gem "rubocop-rails"
  gem "rubocop-rspec", "~> 3.3"
  # Critical that require: false be set! https://github.com/brigade/scss-lint/issues/278
  gem "scss_lint", require: false

  ################################################################################
  # Favorite debugging gems
  gem "debug", ">= 1.0.0"

  gem "pry"
  gem "pry-byebug"
  gem "pry-doc"
  gem "pry-rails"
  gem "pry-rescue"
  gem "pry-stack_explorer"

  ################################################################################
  # Color console output
  gem "rainbow"
end

group :test do
  gem "capybara"
  gem "capybara-screenshot"
  gem "coveralls_reborn", "~> 0.25.0", require: false
  gem "database_cleaner"
  gem "generator_spec"
  gem "launchy"
  gem "rails_best_practices"
  gem "rspec-rails", "~> 6.0.0"
  gem "selenium-webdriver", "~> 4"
end

gem "stimulus-rails", "~> 1.3"
gem "turbo-rails", "~> 2.0"
