@eyes @shifting
Feature: Shifting Content

  Scenario: Validate a page with a shifting image
    Given I am on the Heroku Internet Shifting Image page
    Then Check the "Shifting image page" screen with Eyes

  Scenario: Validate a page with shifting list items
    Given I am on the Heroku Internet Shifting List page
    Then Check the "Shifting list items page" screen with Eyes
