@eyes @bank @regions
Feature: ACME Bank Login

  Scenario: Login to ACME Bank with valid username and password
    Given I am on the ACME Bank Login page
    And Check the Login page with Eyes and coded regions
    When I log in with a valid username and password
    Then I should see the ACME Bank Main page
    And Check the Main page with Eyes and coded regions
    And Check the Main page transaction table with Eyes
    And Check the Main page action buttons with Eyes
