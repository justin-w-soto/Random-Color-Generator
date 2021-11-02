import React, { Component } from 'react'
import ColorSquare from './ColorSquare'

const oneSecond = 1000;

class RandomColor extends Component {
    state = { 
        color: ['#6C9A8B', '#E8998D', '#EED2CC', '#FBF7F4', '#A1683A', '#5B8677'], 
        currentColor: '#5B8677',
        lastColor: '' }
        
        handleColor = () => {
            const randomNum = math.ceil(math.random() * 6)
            setTimeout(() => {
                this.setState({ currentColor: this.state.color[randomNum] })
            }, oneSecond);
        }
        
        render() {
            return (
                
                <>
        {this.handleColor()}

        <h1>Color</h1>
            <ColorSquare color = {this.state.currentColor} />
        
        
        </>

        )
    }

}
export default RandomColor;
