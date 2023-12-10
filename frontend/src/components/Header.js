// Header.jsx
import React, { Component } from 'react';

class Header extends Component {
    // state={isLoggedin:false};
    constructor(props) {
        super(props);
        this.state = {
         isLoggedin: false,
        };
    }
    
      componentDidMount() {
        fetch('items/is_auth/')
          .then(response => response.json())
          .then(data => {
            if (data.is_logged_in) {
              this.setState({
                isLoggedin: true,
              });
            }
            console.log(isLoggedin);
          })
          .catch(error => {
            console.error('Error:', error);
          });
        }
  render() {
    
    return (
        
      <nav className="py-6 px-6 flex justify-between items-center border-b border-gray-200">
        <a href="/" className="text-xl font-semibold">Service Sage</a>
        <div className="space-x-6">
          {/* Replace the URLs with React Router links */}
          <a href="/items/new" className="text-lg font-semibold hover:text-gray-500">New item</a>
          <a href="/items" className="text-lg font-semibold hover:text-gray-500">Browse</a>
          {/* Add additional links as needed */}
          {this.state.isLoggedin ? (
          <>
            <a href="/inbox" className="px-6 py-3 text-lg font-semibold bg-cyan-500 text-black hover:bg-teal-700">Inbox</a>
            <a href="/dashboard/index" className="px-6 py-3 text-lg font-semibold bg-cyan-500 bg-cyan-500 text-black hover:bg-gray-700">Dashboard</a>
            <a href="/core/logout" className="px-6 py-3 text-lg font-semibold bg-cyan-500 bg-cyan-500 text-black hover:bg-gray-700">Logout</a>
          </>
        ) : (
          <>
            <a href="/core/signup" className="px-6 py-3 text-lg font-semibold bg-cyan-500 text-purple hover:bg-teal-700">Sign up</a>
            <a href="/core/login" className="px-6 py-3 text-lg font-semibold bg-cyan-500 text-purple hover:bg-gray-700">Log in</a>
          </>
        )}
        </div>
      </nav>
    );
  }
}
export default Header;

// import React, { Component } from 'react';

// class MyComponent extends Component {
//   render() {
//     // Replace the logic below with your authentication check
//     const isAuthenticated = true;

//     return (
//       <div>
//         {isAuthenticated ? (
//           <>
//             <a href="{% url 'conversation:inbox' %}" className="px-6 py-3 text-lg font-semibold bg-cyan-500 text-black hover:bg-teal-700">Inbox</a>
//             <a href="{% url 'dashboard:index' %}" className="px-6 py-3 text-lg font-semibold bg-cyan-500 bg-cyan-500 text-black hover:bg-gray-700">Dashboard</a>
//           </>
//         ) : (
//           <>
//             <a href="{% url 'core:signup' %}" className="px-6 py-3 text-lg font-semibold bg-cyan-500 text-purple hover:bg-teal-700">Sign up</a>
//             <a href="{% url 'core:login' %}" className="px-6 py-3 text-lg font-semibold bg-cyan-500 text-purple hover:bg-gray-700">Log in</a>
//           </>
//         )}
//       </div>
//     );
//   }
// }

// export default MyComponent;
