
Hi, I'm Vedamanikanta Vanga, a React JS developer with 2 years of hands-on experience.

Below is the functionality of the Todos Application:

* Setup: The application was created using the create-react-app command.
* Routing and State Management: Implemented routing and state management using React Router and Redux.
* Authentication: Added simple authentication with Redux. Unauthenticated users cannot access other routes.

* Login Page:
    * Users land on the login page initially.
    * Simple login logic is implemented here.
    * Upon clicking the login button, users are routed to the main page.

* Main Page:

    * Features two buttons: "Goto Dashboard" and "Goto Todo".
    * Clicking "Goto Todo" redirects to the Todos application where all assignment functionalities are visible.


* Todos Application:

* Add Todo:

    * Users must select a priority (default is high) and enter the todo name.
    * Clicking "Add Todo" adds the item to the list.


* Edit Todo:

    * Clicking the edit icon allows editing the todo.
    * The user can either cancel (reverting changes) or save (updating the list by priority).

* Delete Todo: Allows users to delete a specific todo.
* Local Storage: All changes (adding, editing, deleting) are saved to localStorage.

* Navigation:

    * Users can return to the commonpage from any route.
    * Logout is available from any route, which changes the login state in the store and redirects the user to the login page.


Additional Details:

* Icons are stored in a separate file named icon.js.
* Used react-router for routing and Redux for state management.
* Styled the application using Material UI, Tailwind CSS, and Bootstrap Icons.
* Redux is used primarily for routing and authentication, not for storing todos.