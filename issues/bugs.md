## Issues and bugs found

- Update API does not return anything. No response body is retrieved. Expectation is that there should be a successful
  update message.

- Delete API does not work. It needs a authorisation key which does not get generated while creating the user.

- When I try to update score of a user that does not even exist then there is not error thrown and user gets created
