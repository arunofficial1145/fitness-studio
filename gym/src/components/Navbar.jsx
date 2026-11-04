import React from "react";

import { Link } from "react-router-dom";
function Navbar() {
  return (

    <div >

      <nav className="alert alert-dark" style={{ width: '150%', position: 'fixed', marginTop: '-0px' }}  >
        <div style={{ marginTop: '-20px' }}>
          <img src="img/stay  strong.webp" alt="" style={{ width: '80px', hight: '50px' }} />
          <Link className="tran" style={{ textDecoration: 'none', paddingLeft: '15%' }} to="/">Home</Link>
          <Link className="tran" style={{ textDecoration: 'none', paddingLeft: '15px' }} to="/Store">Store</Link>
          <Link className="tran" style={{ textDecoration: 'none', paddingLeft: '15px' }} to="/Exercise">Exercise</Link>
          <Link className="tran" style={{ textDecoration: 'none', paddingLeft: '15px' }} to="/DietPlans">Diet Plans</Link>
          <Link className="tran" style={{ textDecoration: 'none', paddingLeft: '15px' }} to="/Article">Article</Link>
          <Link type="button" class="btn btn-info" style={{ marginLeft: '6%' }} to="/Login"> <i class="fa-slab-press fa-regular fa-user"></i>Login</Link>
          <form className="d-flex" style={{ paddingLeft: '1000px', marginTop: '-60px' }}>
            <input className="form-control me-2" type="text" placeholder="Search" style={{ width: '250px' }} />
            <button type="button" className="btn btn-outline-info">Search</button>
            <div style={{paddingLeft:'20px'}}>
            <Link to="/Cart" class="btn btn-warning position-relative" >
              <i class="fa fa-shopping-cart"></i>
              <span id="cart-count"
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </Link></div>
          </form>
        </div>
      </nav>
    </div >

  );
}

export default Navbar;