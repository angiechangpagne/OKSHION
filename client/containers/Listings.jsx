import React from 'react'
import {connect} from 'react-redux'

function Listings (props){
    constructor(){
        super()
        this.state={

        }
        this.onClick=this.onClick.bind(this);
    }



    console.log("in Listings.js line 5"+props)
    return(
        <div> 
            <button onClick={() => {test(props)}}> test </button>
        </div>
    )
}

function test (props){
    props.history.push({pathname: `{/viewListings}`})
}

const mapStateToProps= (state) => {
    return {
        words:state.words
    }
}

export default Listings