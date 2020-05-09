import { Link } from "gatsby"
import React from "react"

const Navbar = () => (




  <div id="navbar" className="navbar">
    <h1 className="logo">
      <span className="text-primary">
        <i className="fas fa-book-open"></i> Sultan</span> Şakrak
    </h1>
    <nav>
      <ul>
        <li><Link to="/">Anasayfa</Link> </li>
        <li><Link to="/blog">Blog</Link> </li>
        <li><Link className="etiket" to="/#hakkimda">Hakkımda</Link></li>
        <li><Link className="etiket" to="/#contact">iletişim</Link></li>
        <li><Link to="/tags">Tag</Link></li>


      </ul>
    </nav>
  </div>






)


export default Navbar
