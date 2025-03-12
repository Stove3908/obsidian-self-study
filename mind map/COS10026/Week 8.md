# Week 8
## Lecture 8. PHP Includes and Managing State
### 1. PHP Includes
   - **Purpose**: Code reuse at file level
     - Facilitates reusing PHP code across multiple files
     - Useful for including recurring functionality or content (e.g., menus, headers, footers)
     - Helps maintain consistency across web pages
     - Reduces code duplication and maintenance effort
   - **include_once vs require**
     - include_once: Includes and evaluates a specified file during execution
       - If the file is already included, it won't be included again
       - Produces a warning but doesn't stop script execution if file is missing
     - require: Same as include but produces a fatal error if file is missing
       - Script execution stops immediately if file isn't found
       - Use when the included file is essential for the script to run
   - **Examples of usage**
     - Including HTML templates
     - Reusing PHP functions
     - Sharing configuration settings
     - Creating modular code structure
   - **File naming conventions**
     - Common extensions: .html, .php, .inc
     - Best practices:
       - Use descriptive names
       - Indicate the purpose of the file
       - Consider using a consistent naming convention
       - Separate reusable components into logical files
   - **Considerations**
     - File path resolution
     - Security implications of including files
     - Performance impact of excessive includes
     - Scope of variables within included files
### 2. Managing State between Client and Server
   - **Understanding State Information**
     - HTTP was designed to be stateless
     - Web browsers don't store persistent data about visits by default
     - Need to maintain state for various web applications
     - State information must be passed between client and server
   - **Reasons for Maintaining State**
     - Multi-page form navigation
     - User preferences customization
     - Shopping cart functionality
     - User authentication and sessions
     - Visit tracking and analytics
     - Bookmarking capabilities

   - **Techniques for Maintaining State**
     - **Hidden Form Fields**
        - Store data in form fields that aren't visible to users
        - Use `<input type="hidden">` in HTML forms
        - Data is sent to server when form is submitted
        - Example: Passing calculation results between pages
        - Considerations: Data is visible in page source, not secure for sensitive information
     - **Query Strings**
        - Append name-value pairs to URLs
        - Format: `url?name1=value1&name2=value2`
        - Automatically used with GET method forms
        - Example: Passing user information between pages
        - Considerations: Data is visible in URL, length limitations, security concerns
     - **Sessions**
        - Server-side storage of state information
        - Unique session ID identifies each user's session
        - Started with `session_start()`
        - Data stored in `$_SESSION` superglobal
        - Example: User authentication and personalized content
        - Considerations: Session management, security, timeout settings
   - **Comparison of Techniques**
     - Visibility: Hidden fields and query strings are client-side visible; sessions are server-side
     - Security: Sessions generally more secure for sensitive data
     - Persistence: Sessions can maintain state across multiple page requests
     - Implementation Complexity: Sessions require more setup than hidden fields or query strings
   - **Best Practices**
     - Use sessions for sensitive or important state information
     - Combine techniques when appropriate
     - Consider security implications of each method
     - Validate and sanitize all incoming state information
     - Handle session expiration and cleanup appropriately
<center></center>

## HTTP Methods 


| <center>HTTP Method</center> | Purpose                                          | <center>Safe</center> | <center>Idempotent</center> | Examples                                                                               |
| ---------------------------- | ------------------------------------------------ | --------------------- | --------------------------- | -------------------------------------------------------------------------------------- |
| <center>GET</center>         | Retrieve data from the server                    | <center>Yes</center>  | <center>Yes</center>        | - Fetching a web page,<br>- Retrieving user information<br>- Querying data from an API |
| <center>POST</center>        | Submit data to be processed by the server        | <center>No</center>   | <center>No</center>         | - Submitting a form<br>- Creating a new user account<br>- Adding data to a database    |
| <center>PUT</center>         | Update or replace an existing resource           | <center>No</center>   | <center>Yes</center>        | - Updating a user's profile<br>- Replacing a file on a server                          |
| <center>PATCH</center>       | Partially update an existing resource            | <center>No</center>   | <center>Yes</center>        | - Changing a password<br>- Updating specific fields of an entity                       |
| <center>DELETE</center>      | Remove a resource from the server                | <center>No</center>   | <center>Yes</center>        | - Deleting a user account<br>- Removing a file from a server                           |
| <center>OPTIONS</center>     | Retrieve information about communication options | <center>Yes</center>  | <center>Yes</center>        | - Checking CORS policies<br>- Determining allowed methods and headers                  |
| <center>HEAD</center>        | Retrieve metadata about a resource               | <center>Yes</center>  | <center>Yes</center>        | - Checking if a resource has been modified without fetching content                    |

## Maintaining Session Information

### Technology Stack Options
   - **Cookies**
     - Small text files stored in the user's browser
     - Sent with every HTTP request to the server
     - Can be persistent (with expiration date) or session-based
     - Limited to about 4KB per cookie
     - Accessible via JavaScript and server-side code
     - Commonly used for authentication tokens and user preferences
     - Security considerations: Vulnerable to XSS and CSRF attacks if not properly secured
     - Can be marked as HTTP-only to prevent JavaScript access
     - Supports domain and path specifications

   - **Session Storage**
     - Part of the Web Storage API
     - Stores data only for the duration of a page session
     - Isolated to a single tab/window
     - Data is not automatically sent to the server
     - Larger storage capacity than cookies (typically 5-10MB)
     - Accessed via JavaScript
     - Best for temporary data needed during a single session
     - Automatically cleared when the tab/window is closed
     - Simpler to use in client-side scripts

   - **Local Storage**
     - Also part of the Web Storage API
     - Stores data with no expiration date
     - Data persists across sessions and browser restarts
     - Larger storage capacity (typically 5-10MB)
     - Accessed via JavaScript
     - Suitable for storing user preferences, application state, etc.
     - Data is not automatically sent to the server
     - More secure than cookies for certain use cases
     - Example implementation in JavaScript

   - **Server-side Sessions**
     - Data stored on the server
     - Associated with a unique session ID sent to the client
     - Typically managed by server frameworks/libraries
     - More secure for sensitive data
     - Can be combined with cookies to store the session ID
     - Requires server resources to maintain session data
     - Commonly used for user authentication and personalized content
     - Session data is stored in memory or databases
     - Example: PHP sessions using `session_start()`

   - **Databases**
     - Persistent storage for session data
     - Can be relational (e.g., MySQL) or NoSQL (e.g., MongoDB)
     - Requires server-side implementation
     - Suitable for complex data structures and long-term storage
     - Often used in conjunction with server-side sessions
     - Provides durability and data integrity
     - Can be scaled for high-traffic applications
     - Example: Storing session data in a MySQL database table

### Cookies vs Session Storage
   - [As previously detailed]

### Server-Side Sessions
   - [As previously detailed]

### Local Storage
   - [As previously detailed]

### Databases
   - [As previously detailed]

### Example of Local Session Storage using JavaScript
   - [As previously detailed]