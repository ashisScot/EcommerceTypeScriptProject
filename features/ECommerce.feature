Feature: Ecommerce Application

#cucumber can only run scenarios in parallel but not the feature files
@Regression
Scenario: User Places the order
Given User login to ecommerce Application
And User add product "ADIDAS ORIGINAL" to cart
When user places the order with valid details
Then verify order is listed in the order history page
#When user navigates to orderSummary page
Then verify order displayed in order summary Page
And Verify order is reflecting in db correctly
