   [![Code Climate](https://codeclimate.com/github/shakacode/react-webpack-rails-tutorial/badges/gpa.svg)](https://codeclimate.com/github/shakacode/react-webpack-rails-tutorial) [![Coverage Status](https://coveralls.io/repos/shakacode/react-webpack-rails-tutorial/badge.svg?branch=master&service=github)](https://coveralls.io/github/shakacode/react-webpack-rails-tutorial?branch=master)

# React, Redux, Tailwind CSS, ES7, Webpack, Ruby on Rails Demo

* Server-Side Rendering of React via the [react_on_rails gem](https://github.com/shakacode/react_on_rails)
* Live at [www.reactrails.com](http://www.reactrails.com/)

## Control Plane Deployment Example

[Control Plane](https://shakacode.controlplane.com) offers a viable, cost-saving alternative to Heroku, especially when using the [cpflow gem](https://rubygems.org/gems/cpflow) to deploy to Control Plane.

ShakaCode recently migrated [HiChee.com](https://hichee.com) to Control Plane, resulting in a two-thirds reduction in server hosting costs!

See doc in [./.controlplane/readme.md](./.controlplane/readme.md) for how to easily deploy this app to Control Plane.

The instructions leverage the `cpflow` CLI, with source code and many more tips on how to migrate from Heroku to Control Plane
in https://github.com/shakacode/heroku-to-control-plane.

----

## React on Rails Pro and ShakaCode Pro Support

React on Rails Pro provides Node server rendering and other performance enhancements for React on Rails.

[![2018-09-11_10-31-11](https://user-images.githubusercontent.com/1118459/45467845-5bcc7400-b6bd-11e8-91e1-e0cf806d4ea4.png)](https://blog.shakacode.com/hvmns-90-reduction-in-server-response-time-from-react-on-rails-pro-eb08226687db)

* [HVMN Testimonial, Written by Paul Benigeri, October 12, 2018](https://github.com/shakacode/react_on_rails/blob/master/docs/testimonials/hvmn.md)
* [HVMN’s 90% Reduction in Server Response Time from React on Rails Pro](https://blog.shakacode.com/hvmns-90-reduction-in-server-response-time-from-react-on-rails-pro-eb08226687db)
* [Egghead React on Rails Pro Deployment Highlights](https://github.com/shakacode/react_on_rails/wiki/Egghead-React-on-Rails-Pro-Deployment-Highlights)

For more information, see the [React on Rails Pro Docs](https://www.shakacode.com/react-on-rails-pro/).

* Optimizing your front end setup with Webpack v5+ and Shakapacker for React on Rails including code splitting with loadable-components.
* Upgrading your app to use the current Webpack setup that skips the Sprockets asset pipeline.
* Better performance client and server side.

ShakaCode can also help you with your custom software development needs. We specialize in marketplace and e-commerce applications that utilize both Rails and React. We can even leverage our code for [HiChee.com](https://hichee.com) for your app!

See the [ShakaCode Client Engagement Model](https://www.shakacode.com/blog/client-engagement-model/) article to learn how we can work together.

------

## Community

* **[forum.shakacode.com](https://forum.shakacode.com)**: Post your questions
* **[@railsonmaui on Twitter](https://twitter.com/railsonmaui)**
* For a live, example of the code in this repo, see [www.reactrails.com](http://www.reactrails.com).

------

## Testimonials
From Joel Hooks, Co-Founder, Chief Nerd at [egghead.io](https://egghead.io/), January 30, 2017:

![2017-01-30_11-33-59](https://cloud.githubusercontent.com/assets/1118459/22443635/b3549fb4-e6e3-11e6-8ea2-6f589dc93ed3.png)

For more testimonials, see [Live Projects](https://github.com/shakacode/react_on_rails/blob/master/PROJECTS.md) and [Kudos](https://github.com/shakacode/react_on_rails/blob/master/KUDOS.md).

-------

## Videos

### [React On Rails Tutorial Series](https://www.youtube.com/playlist?list=PL5VAKH-U1M6dj84BApfUtvBjvF-0-JfEU)

1. [History and Motivation](https://youtu.be/F4oymbUHvoY)
2. [Basic Tutorial Walkthrough](https://youtu.be/_bjScw60FBk)
3. [Code Walkthrough](https://youtu.be/McQ9UM-_ocQ)

## NEWS

* 2022-01-11: Added example of deployment [to the ControlPlane](.controlplane/readme.md).

You can see this tutorial live here: [http://reactrails.com/](http://reactrails.com/)

## Table of Contents

+ [Demoed Functionality](#demoed-functionality)
  + [Technologies Involved](#technologies-involved)
+ [Basic Demo Setup](#basic-demo-setup)
  + [Basic Command Line](#basic-command-line)
+ [Javascript Development without Rails](#javascript-development-without-rails-using-the-webpack-dev-server)
+ [Rails Integration](#rails-integration)
+ [Webpack](#webpack)
  + [Configuration Files](#configuration-files)
  + [Additional Resources](#additional-resources)
+ [Sass, CSS Modules, and Tailwind CSS integration](#sass-css-modules-and-tailwind-css-integration)
  + [Fonts with SASS](#fonts-with-sass)
+ [Process Management during Development](#process-management-during-development)
+ [Rendering with Express Server](#rendering-with-express-server)
  + [Setup](#setup)
+ [Contributors](#contributors)
  + [About ShakaCode](#about-shakacode)
  + [RubyMine and WebStorm](#rubymine-and-webstorm)
+ [Open Code of Conduct](#open-code-of-conduct)

## Demoed Functionality

- Example of using the [react_on_rails gem](https://github.com/shakacode/react_on_rails) for easy react/webpack integration with Rails.
- Example of React with [CSS Modules](http://glenmaddern.com/articles/css-modules) inside of Rails using Webpack as described in [Smarter CSS builds with Webpack](http://bensmithett.com/smarter-css-builds-with-webpack/).
- Example of enabling hot reloading of both JS and CSS (modules) from your Rails app in development mode. Change your code. Save. Browser updates without a refresh!
- Example of React/Redux with Rails Action Cable.
- Example of Rails 7 with ReactJs/Redux/React-Router with Webpack and ES7.
- Enabling development of a JS client independently from Rails using the [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/). You can see this by starting the app and visiting http://localhost:4000
- Enabling the use of npm modules and [Babel](https://babeljs.io/) with a Rails application using [Webpack](https://webpack.github.io/).
- Easily enable retrofitting such a JS framework into an existing Rails app. You don't need a brand new single page app!
- Example setting up Ruby and JavaScript linting in a real project, with corresponding CI rake tasks.
- Enabling the i18n functionality with [react-intl](https://github.com/yahoo/react-intl).

### Technologies involved

See package.json and Gemfile for versions

1. [react_on_rails gem](https://github.com/shakacode/react_on_rails/)
1. [React](http://facebook.github.io/react/)
1. [Redux](https://github.com/reactjs/redux)
1. [react-router](https://github.com/reactjs/react-router)
1. [react-router-redux](https://github.com/reactjs/react-router-redux)
1. [Webpack with hot-reload](https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack) (for local dev)
1. [Babel transpiler](https://github.com/babel/babel)
1. [Ruby on Rails 7](http://rubyonrails.org/) for backend app and comparison with plain HTML
1. [Heroku for Rails 7 deployment](https://devcenter.heroku.com/articles/getting-started-with-rails7)
1. [Deployment to the ControlPlane](.controlplane/readme.md)
1. [Turbolinks 5](https://github.com/turbolinks/turbolinks)
1. [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)

## Basic Demo Setup

### Prerequisites
- Node `v22.3.0` or above. Be sure that you have Node installed! We suggest using [nvm](https://github.com/creationix/nvm) and running `nvm list` to check the active Node version. See this article [Updating and using nvm](http://forum.shakacode.com/t/updating-and-using-nvm/293).
- Ruby 3.3.3 or above
- Postgres v9.2 or above
- Redis. Check that you have Redis installed by running `which redis-server`. If missing and on MacOS, install with Homebrew (`brew install redis`)
- [Yarn](https://yarnpkg.com/).

### Setup
1. `git clone git@github.com:shakacode/react-webpack-rails-tutorial.git`
1. `cd react-webpack-rails-tutorial`
1. `bundle install`
1. `yarn`
1. `rake db:setup`
1. `rails start`
    - Open a browser tab to http://localhost:3000 for the Rails app example

### Basic Command Line
- Run all linters and tests: `rake`
- See all npm commands: `yarn run`
- To start all development processes: `foreman start -f Procfile.dev`
- To start only all Rails development processes: `foreman start -f Procfile.hot`

## Rails Integration
**We're now using Webpack for all Sass and JavaScript assets so we can do CSS Modules within Rails!**

+ **Production Deployment**: [heroku-deployment.md](https://github.com/shakacode/react_on_rails/blob/master/docs/additional-reading/heroku-deployment.md).
   + Configure Buildpacks
      ```
      heroku buildpacks:set heroku/ruby --app your-app
      heroku buildpacks:add --index 1 heroku/nodejs --app your-app
      heroku buildpacks:set --index 3 https://github.com/sreid/heroku-buildpack-sourceversion.git --app your-app
      ```

## Testing
+ See [Yak Shaving Failing Integration Tests with React and Rails](https://blog.shakacode.com/yak-shaving-failing-integration-tests-with-react-a93444886c8c#.io9464uvz)

+ Be sure to see [Integration Test Notes](./docs/integration-test-notes.md) for advice on running your integration tests.

+ **Testing Mode**: When running tests, it is useful to run `foreman start -f Procfile.spec` in order to have webpack automatically recompile the static bundles. Rspec is configured to automatically check whether or not this process is running. If it is not, it will automatically rebuild the webpack bundle to ensure you are not running tests on stale client code. This is achieved via the `ReactOnRails::TestHelper.configure_rspec_to_compile_assets(config)`
line in the `rails_helper.rb` file. If you are using this project as an example and are not using RSpec, you may want to implement similar logic in your own project.

## Webpack

_Converted to use Shakapacker webpack configuration_.


### Additional Resources
- [Webpack Docs](https://webpack.js.org/)
- [Webpack Cookbook](https://christianalfoni.github.io/react-webpack-cookbook/)
- Good overview: [Pete Hunt's Webpack Howto](https://github.com/petehunt/webpack-howto)

## Sass, CSS Modules, and Tailwind CSS Integration
This example project uses mainly Tailwind CSS for styling.
Besides this, it also demonstrates Sass and CSS modules, particularly for some CSS transitions.

We're using Webpack to handle Sass assets so that we can use CSS modules. The best way to understand how we're handling assets is to close follow this example. We'll be working on more docs soon. If you'd like to give us a hand, that's a great way to learn about this!

For example in [client/app/bundles/comments/components/CommentBox/CommentBox.jsx](client/app/bundles/comments/components/CommentBox/CommentBox.jsx), see how we use standard JavaScript import syntax to refer to class names that come from CSS modules:

```javascript
import css from './CommentBox.module.scss';

export default class CommentBox extends React.Component {
  render() {
    const { actions, data } = this.props;
    const cssTransitionGroupClassNames = {
      enter: css.elementEnter,
      enterActive: css.elementEnterActive,
      exit: css.elementLeave,
      exitActive: css.elementLeaveActive,
    };
  }
}
```

### Fonts with SASS
The tutorial makes use of a custom font OpenSans-Light. We're doing this to show how to add assets for the CSS processing. The font files are located under [client/app/assets/fonts](client/app/assets/fonts) and are loaded by both the Rails asset pipeline and the Webpack HMR server.

## Process management during development
```
bundle exec foreman start -f <Procfile>
```

1. [`Procfile.dev`](Procfile.dev): Starts the Webpack Dev Server and Rails with Hot Reloading.
1. [`Procfile.static`](Procfile.dev-static): Starts the Rails server and generates static assets that are used for tests.

## Contributors
[The Shaka Code team!](http://www.shakacode.com/about/), led by [Justin Gordon](https://github.com/justin808/), along with with many others. See [contributors.md](docs/contributors.md)

### RubyMine and WebStorm
Special thanks to [JetBrains](https://www.jetbrains.com) for their great tools: [RubyMine](https://www.jetbrains.com/ruby/) and [WebStorm](https://www.jetbrains.com/webstorm/). Some developers of this project use RubyMine at the top level, mostly for Ruby work, and we use WebStorm opened up to the `client` directory to focus on JSX and Sass files.

### Hiring

We're looking for great developers that want to work with Rails + React (and react-native!) with a remote-first, distributed, worldwide team, for our own products, client work, and open source. [More info here](http://www.shakacode.com/about/index.html#work-with-us).

---

## Thank you from Justin Gordon and [ShakaCode](http://www.shakacode.com)

Thank you for considering using [React on Rails](https://github.com/shakacode/react_on_rails).

Aloha and best wishes from the ShakaCode team!

[Test referer](https://justin-app-qyf21fmx4q3tm.cpln.app)
