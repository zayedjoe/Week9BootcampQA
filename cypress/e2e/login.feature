Feature: Login

  Scenario Outline: User logs in with valid credentials
    Given user is on the login page
    When user logs in using "<userKey>" credentials from fixture
    Then user should see the dashboard page

    Examples:
      | userKey |
      | admin   |

  Scenario Outline: User fails to login with invalid credentials
    Given user is on the login page
    When user logs in using "<userKey>" credentials from fixture
    Then user should see error message "<message>"

    Examples:
      | userKey | message             |
      | invalid | Invalid credentials |