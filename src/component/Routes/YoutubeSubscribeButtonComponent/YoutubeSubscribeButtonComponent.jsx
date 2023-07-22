import React, { Component } from 'react'
import './YoutubeSubscribeButtonComponent.css'

export class YoutubeSubscribeButtonComponent extends Component {
    constructor(){
        super()
        this.state = {
            // count:0,
            Message: 'welcome to this channel',
            subscribeBtn: 'Subscribe'
        }
    }

    subscribeEventHandler = () =>
    {
        this.state.subscribeBtn === 'Subscribe' ?(
            this.setState({
                Message: 'Thanks for subscribing',
                subscribeBtn: 'Unsubscribe'
                        })
        ): (
            this.setState({
                Message: "You're now unsubscribed, you can now subscribe",
                subscribeBtn : 'Subscribe'
            })
        )
    }

  render() {
    return (
        <div className='container'>
            <h1>{this.state.Message}</h1>
            <button onClick={this.subscribeEventHandler}>{this.state.subscribeBtn}</button>
        </div>    )
  }
}

export default YoutubeSubscribeButtonComponent