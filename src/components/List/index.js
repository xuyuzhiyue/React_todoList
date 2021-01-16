import React, { Component } from 'react'
import Item from "../Item/index";
import PropTypes from 'prop-types'

export default class List extends Component {
    static propTypes = {
        todos:PropTypes.array.isRequired,
        changeFuc:PropTypes.func.isRequired,
        deldeFuc:PropTypes.func.isRequired
    }

    render() {
        const {todos} = this.props
        return (
            <ul className="tod_list">
                {
                    todos.map((todo,index)=>{
                        return <Item key={todo.id} {...todo} changeFuc={this.props.changeFuc} deldeFuc={this.props.deldeFuc}/>
                    })
                }
            </ul>
        )
    }
}
