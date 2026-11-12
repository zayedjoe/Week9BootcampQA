Feature: Add Multiple Admins

  Scenario Outline: Add new admin user
    Given user is logged in as "<userKey>" from fixture
    And user navigates to Admin page
    When user adds a new admin "<newUsername>" with role "<role>"
    Then the admin "<newUsername>" should appear in the user list

    Examples:
      | userKey | newUsername  | role  |
      | admin   | cypressuser1 | ESS   |
      | admin   | cypressuser2 | Admin |