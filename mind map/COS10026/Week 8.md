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
#### **Cookies**
 - Small text files stored in the user's browser
 - Sent with every HTTP request to the server
 - Can be persistent (with expiration date) or session-based
 - Limited to about 4KB per cookie
 - Accessible via JavaScript and server-side code
 - Commonly used for authentication tokens and user preferences
 - Security considerations: Vulnerable to XSS and CSRF attacks if not properly secured
 - Can be marked as HTTP-only to prevent JavaScript access
 - Supports domain and path specifications

#### **Session Storage**
 - Part of the Web Storage API
 - Stores data only for the duration of a page session
 - Isolated to a single tab/window
 - Data is not automatically sent to the server
 - Larger storage capacity than cookies (typically 5-10MB)
 - Accessed via JavaScript
 - Best for temporary data needed during a single session
 - Automatically cleared when the tab/window is closed
 - Simpler to use in client-side scripts

#### **Local Storage**
##### Local Storage. Info
 - Also part of the Web Storage API
 - Stores data with no expiration date
 - Data persists across sessions and browser restarts
 - Larger storage capacity (typically 5-10MB)
 - Accessed via JavaScript
 - Suitable for storing user preferences, application state, etc.
 - Data is not automatically sent to the server
 - More secure than cookies for certain use cases
 - Example implementation in JavaScript
 
##### Local Storage. Example
```
sessionStorage.setItem("username", "John");  
const username = sessionStorage.getItem("username");
```

#### **Server-side Sessions**
##### Server-side Sessions. Info
 - Data stored on the server
 - Associated with a unique session ID sent to the client
 - Typically managed by server frameworks/libraries
 - More secure for sensitive data
 - Can be combined with cookies to store the session ID
 - Requires server resources to maintain session data
 - Commonly used for user authentication and personalized content
 - Session data is stored in memory or databases
##### Server-side Sessions. Example
```js
// Simulate a login (for demonstration purposes)
if (isset($_GET['login'])) {
	$userId = 123; // Replace with your user authentication logic
	$_SESSION['user_id'] = $userId;
	echo "You are now logged in as User ID: $userId";
}

// Simulate a logout (for demonstration purposes)
if (isset($_GET['logout'])) {
	session_unset(); // Unset all session variables
	session destroy(); // Destroy the session
	echo "You are now logged out.";
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Server-side Sessions Example</title>
</head>
<body>
	<a href="login">Log In</a> | <a href="?logout">Log Out</a>
</body>
</html>
```

#### **Databases**
 - Persistent storage for session data
 - Can be relational (e.g., MySQL) or NoSQL (e.g., MongoDB)
 - Requires server-side implementation
 - Suitable for complex data structures and long-term storage
 - Often used in conjunction with server-side sessions
 - Provides durability and data integrity
 - Can be scaled for high-traffic applications

 ##### Example
 - Storing session data in a MySQL database table

### Cookies vs Session Storage

| Aspect               | Cookies                                                                 | Session Storage                                                                 |
|----------------------|-------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| **Scope of Data**    | Sent with every HTTP request to same domain; accessible client/server-side; can specify domain/path | Isolated to single tab/window; not sent with HTTP requests; restricted to same origin/tab |
| **Storage Limitations** | ~4KB per cookie; total cookies per domain limited                      | ~5-10MB total; no per-item limitations                                          |
| **Lifetime**         | Can persist beyond session with expiration date; session cookies last until browser closes | Data cleared when tab/window closes; only available during page session         |
| **Use Cases**        | Authentication tokens, tracking, preferences across sessions/tabs       | Temporary data during single session; form data; short-term application state   |
| **Access and Manipulation** | Accessed via JavaScript (document.cookie) and server-side HTTP headers; built-in security options | Accessed via JavaScript (sessionStorage object); simpler API; no server-side access |
| **Security**         | Vulnerable to XSS/CSRF; can be marked HTTP-only; secure flag prevents HTTP transmission | More secure; data not sent to server; isolated to origin/tab; not vulnerable to CSRF |

### Server-Side Sessions


- **Definition**: Storing session data on the server rather than on the client's browser
    
- **How They Work**:
    
    - Server generates a unique session ID for each user
        
    - Session ID is typically stored in a cookie, URL parameter, or form field
        
    - Server associates the session ID with session data stored in memory or a database
        
    - Each subsequent request from the client includes the session ID, allowing the server to retrieve the associated session data
        
- **Implementation**:
    
    - Most server-side frameworks provide built-in session management (e.g., PHP sessions, Express.js session middleware)
        
    - Requires configuring session storage (memory, file system, database)
        
    - Session data is typically serialized and stored
        
    - Example PHP implementation using `session_start()`
        
- **Advantages**:
    
    - More secure for sensitive data as it's never exposed to the client
        
    - Larger storage capacity compared to cookies
        
    - Better control over session expiration and security
        
    - Data is not transmitted with every request (only the session ID)
        
- **Considerations**:
    
    - Server resources required to maintain session data
        
    - Session management for scalability and fault tolerance
        
    - Session persistence across server restarts
        
    - Security measures to prevent session hijacking
        
- **Use Cases**:
    
    - User authentication and personalized content
        
    - Shopping cart implementation
        
    - Multi-step form processing
        
    - Storing temporary user-specific data
        
- **Security Best Practices**:
    
    - Use secure cookies to transmit session IDs
        
    - Implement session timeout
        
    - Regenerate session IDs after privilege changes (e.g., login)
        
    - Store minimal sensitive information
        
    - Implement proper session cleanup

### Local Storage
   - [As previously detailed]

### Databases
   - [As previously detailed]

### Example of Local Session Storage using JavaScript
   - [As previously detailed]