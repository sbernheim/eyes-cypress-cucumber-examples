@eyes @bank @simple
Feature: ACME Bank Login

  Scenario: Login to ACME Bank with valid username and password
    Given I am on the ACME Bank Login page
    And Check the "Login page" screen with Eyes
    When I log in with a valid username and password
    Then I should see the ACME Bank Main page
    And Check the "Main page" screen with Eyes
