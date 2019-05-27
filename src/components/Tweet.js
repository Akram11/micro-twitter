import React,{Component} from 'react' 
import {connect} from 'react-redux'
import {formatTweet} from '../utils/helpers'
import { TiArrowBackOutline,TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti';


class Tweet extends Component{

    render(){
        const {tweet} = this.props
        if (tweet ===null) {
            return <p>this tweet doesn't exist</p>
        }
        console.log(this.props)
        return(
            <div className = 'tweet'>

            </div>
        )
    }
}

function mapStateToProps({tweets, users, authedUser}, {id}){
    const tweet = tweets[id]
    const parentTweet = tweet ? tweets[tweet.replyinTo] : null
    return{
        authedUser,
        tweet: tweet ? formatTweet(tweet,users[tweet.author], authedUser, parentTweet) : null
    }
}

export default connect(mapStateToProps)(Tweet)
