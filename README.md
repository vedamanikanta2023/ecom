Hi I'm Vedamanikanta Vanga, React JS devloper with 2 years in-hand experience. 

******************************************************************************

You can find the functionality of the Todos Application  below. 

I have created the This applicatio using the create-react-app command.

I have added routing and redux for state management.
I have added simle authentication using redux.
If user is not logged in he can't see any other routes.

Initially user will be landed in the login page. There I've implemented simple login logic.
By clicking the login Button... You will be routed to the common page.
There are two buttons 1.Goto Dashboard 2. Goto Todo.

If you clicked on 2nd button you'll be redirected to the Todos appliction.
There You can see all the functionalities you have mentioned in the assignments.

Todo add a Todo, user have to select the priority (Initially the priority will be high).
Then user have to give todo name in the input field.

Then the user have to click on the Add Todo button.

After clicking the Add Todo button the todo will be added to the list you can see on the screen.
With todo there will be to icons 1.Edit 2Delete

if you clicked on the edit you can edit the perticular todo. If you clicked on the cancel button in the popup
then the todo will be added back to the list. If you edit and clicked to save the todo. It will be added to the
list by it's priority wise.

In the above scenarios adding, deleting editing whenver user does the editing the todos list
the todos will be added to the localStorage.

I have also implemented the to go back to the common page where we can go to dashboard(instead we can navbar later).

User can logout from any route. Whenever the user clicks on the logout button, the login value in the store will be changed then by the RequireAuth authentication user will be redirected to the login page.

Icons were separately stored in another fild named icon.js

For routing I've used react-router package
Redux as statemangement. 
Material UI and Tailwind Css were used to implement styling.
And Bootstrap Icons were used.

**Redux was just involved for routing and authentication. The todos will not be stored in the Redux store.
