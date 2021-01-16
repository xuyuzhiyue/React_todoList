import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'

export default class Header extends Component {
    static propTypes = {
        addFuc:PropTypes.func.isRequired
    }
    
    handeKeyup=(event) =>{
       if(event.keyCode !== 13) return
       if(event.target.value.trim() === ''){
           alert('输入不能为空')
           return
       }
    //    console.log(event.target.value);
    const todoObj = {id:nanoid(),name:event.target.value,done:false}
    this.props.addFuc(todoObj)
     event.target.value = ''
    }
    
    render() {
        return (
            <div className="todo_header">
                <input onKeyUp={this.handeKeyup} type="text" placeholder="请输入你任务名称，会策划确认"></input>
            </div>
        )
    }
}
