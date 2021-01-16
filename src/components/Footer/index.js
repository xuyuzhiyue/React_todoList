import React, { Component } from 'react'

export default class Footer extends Component {

    handleAll=(event)=>{
      this.props.checkedFu(event.target.checked)
    }
    hanldeClearAll=()=>{
        this.props.clearFuc()
    }
    render() {
        const {todos} = this.props
        // 已完成个数
        const doneCount = todos.reduce((pre,todo)=> pre + (todo.done ?1:0),0)
        // 总数
        const total = todos.length
        return (
            <div className="todo_footer">
                <label>
                    <input type="checkbox" checked={doneCount === total && total !== 0 ? true:false} onChange={this.handleAll}></input>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.hanldeClearAll} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
