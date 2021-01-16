import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Item extends Component {

    static propTypes = {
        changeFuc:PropTypes.func.isRequired
    }
    
    state={
        mouse:false
    }
    handleMouse=(flag)=>{
       return ()=>{
         this.setState({
             mouse:flag
         })
       }
    }

    hanldeChange=(id)=>{
      return (event)=>{
          this.props.changeFuc(id,event.target.checked)
        // console.log(id,event.target.checked);
      }
    }

    handleDel=(id)=>{
        if(window.confirm('确定删除吗？')){
            this.props.deldeFuc(id)
        }
    }

    render() {
        const {name} = this.props
        return (
        <li style={{backgroundColor:this.state.mouse ? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <label>
                <input type="checkbox" checked={this.props.done} onChange={this.hanldeChange(this.props.id)}></input>
                <span>{name}</span>
            </label>
            <button onClick={()=> this.handleDel(this.props.id)} className="btn btn-danger" style={{display:this.state.mouse ?'block':'none'}}>删除</button>
        </li>
        )
    }
}
