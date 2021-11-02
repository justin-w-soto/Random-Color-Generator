import React, { Component } from 'react'
import ColorSquare from './ColorSquare'
class RandomColor extends Component {
    state = {
        colors: 'green'
    };

    handleColor() {
        const colorList = ['#6C9A8B', '#E8998D', '#EED2CC', '#FBF7F4', '#A1683A', '#5B8677'];
        const randomNum = Math.ceil(Math.random() * colorList.length);
      

        return colorList[randomNum];
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ colors: this.handleColor() })
        }, 1000)
    }

    render() { 
        const { colors } = this.state;
        return (

        <div>
            <ColorSquare colors = { colors }/>
        </div>

        )
    }

}
 
export default RandomColor;