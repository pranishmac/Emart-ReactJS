// Footer.jsx
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="py-6 px-6 flex justify-between bg-gray-800">
        <div className="w-2/3 pr-10">
          <h3 className="mb-5 font-semibold text-gray-400">About</h3>
          <p className="text-lg text-gray-500">This is a college-based final semester project</p>
        </div>
        <div className="w-1/3">
          <h3 className="mb-5 font-semibold text-gray-400">Menu</h3>
          <ul className="space-y-2">
            {/* Replace the URLs with React Router links */}
            <li><a href="#" className="text-lg text-teal-500 hover:text-teal-700">About</a></li>
            <li><a href="/contact" className="text-lg text-teal-500 hover:text-teal-700">Contact</a></li>
            <li><a href="#" className="text-lg text-teal-500 hover:text-teal-700">Privacy policy</a></li>
            <li><a href="#" className="text-lg text-teal-500 hover:text-teal-700">Term of use</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
