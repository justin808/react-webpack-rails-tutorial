# frozen_string_literal: true

require "rails_helper"

shared_examples "Git Commit SHA" do
  before { visit root_path }

  it "displays the current git commit" do
    el = find("#git-commit-sha")
    expect(el.text).to eq expected_text
  end
end

describe "Git Commit SHA" do
  before do
    # sha gets cached as an instance variable, so need to start fresh
    GitCommitSha.reset_current_sha
  end

  context "when GIT_COMMIT_SHA env var exists" do
    let(:sha) { "94d92356828a56db25fccff9d50f41c525eead5z" }
    let(:expected_text) { "94d9235" }

    before do
      ENV["GIT_COMMIT_SHA"] = sha
    end

    after do
      ENV.delete("GIT_COMMIT_SHA")
    end

    it_behaves_like "Git Commit SHA"
  end

  context "when .source_version file exists" do
    let(:sha) { "94d92356828a56db25fccff9d50f41c525eead5y" }
    let(:expected_text) { "94d9235" }

    before { `cd #{Rails.root} && echo #{sha} > .source_version` }

    after { `cd #{Rails.root} && rm .source_version` }

    it_behaves_like "Git Commit SHA"
  end

  context "when falling back to git command" do
    let(:sha) { "94d92356828a56db25fccff9d50f41c525eead5x" }
    let(:expected_text) { "94d9235" }

    before do
      # stub this method since we need to control what the sha actually is
      allow(GitCommitSha).to receive(:retrieve_sha_from_git) { sha }
    end

    it_behaves_like "Git Commit SHA"
  end
end
