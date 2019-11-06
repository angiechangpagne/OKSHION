import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'


function Header(props){
    console.log(props)


    return (
        <div className="header-master">
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div clsasName="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar0toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only"> Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a clssName="navBar-brand" href="#"> OKSHION</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li clsasName="active"></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="header">
                <h1> Welcome to OKSHION, {props.name} , may the bids be ever in your favor</h1>
                <Link to="/viewListings/" className='btn btn-default'>View List</Link>
                <Link to={`/listitem`} className='btn btn-default'> List an Item</Link>
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