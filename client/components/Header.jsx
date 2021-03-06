import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
//link to react router dom to routers

function Header(props){
    // console.log(props)
    return (
        
        <div className="header-master">
            
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar0toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only"> Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="navBar-brand" href="#"> OCSHION</div>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="header">
                <h1> Welcome to KARL user: {props.name} ,<p></p> may the bids be ever in your favor</h1>
                <header> 
                <img 
                    src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                    alt="Problem?" />
                         </header>
                <Link to={`/viewListings`} className='btn btn-default'> View Bidding List</Link>
                <Link to={`/listitem`} className='btn btn-default'> List an Item for Auction</Link>
                <Login />
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        name:state.loggedIn.name
    
    }
}

export default connect(mapStateToProps)(Header)