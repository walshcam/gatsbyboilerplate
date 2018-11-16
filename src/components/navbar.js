import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
    <div>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/blog">Blog</Link></li>
      </ul>
    </div>
)

export default Navbar;