import React, { Component } from 'react'
import ColorSquare from './ColorSquare'
class RandomColor extends Component {
    state = {
        colors: 'green'
    };

    handleColor() {
        const colorList = ['#6C9A8B', '#E8998D', '#EED2CC', '#FBF7F4', '#A1683A', '#5B8677', '#94E8B4', '#72BDA3', '#5E8C61', '#4E6151', '#FFEDE1', '#F9FBF2', '#D7F9FF', '#AFCBFF', '#0E1C36' ];
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