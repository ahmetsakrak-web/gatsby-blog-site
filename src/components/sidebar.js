import React from 'react'
import { Link } from 'gatsby'

const Sidebar = () => {

  return (
    <div className="kapsayici-1">

      <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Arama" />
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>





      <aside id="categories">
        <h2>Categories</h2>
        <ul className="list">
          <li><Link to='/tag/sac-bakim'><i className="fas fa-chevron-right" />Saç Bakım</Link></li>
          <li><Link to='/tag/sac-bakim'><i className="fas fa-chevron-right" />Saç Bakım</Link></li>
          <li><Link to='/tag/sac-bakim'><i className="fas fa-chevron-right" />Saç Bakım</Link></li>
          <li><Link to='/tag/sac-bakim'><i className="fas fa-chevron-right" />Saç Bakım</Link></li>
          <li><Link to='/tag/sac-bakim'><i className="fas fa-chevron-right" />Saç Bakım</Link></li>
        </ul>
      </aside>

      <aside className="card reklam">
        <h2>Reklamlar</h2>
        <img src="https://via.placeholder.com/320x200"
          alt="Advert"

        />
      </aside>

    </div>

  )
}


export default Sidebar