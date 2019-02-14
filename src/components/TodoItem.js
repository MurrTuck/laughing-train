import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#f4f4f4' }}>
                <p style={itemStyle}>{this.props.todo.title} </p>
                <p style={durationStyle}>Estimated @ {this.props.todo.timeEstimate} Mins.
                </p>
            </div>
        )
    }
}

export default TodoItem


const itemStyle = {
    backgroundColor: '#FFA07A'
}

const durationStyle = {
    backgroundColor: '#B0E0E6'
}