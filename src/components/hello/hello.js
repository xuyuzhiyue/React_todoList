import React,{Component} from 'react'
import Welcome from '../Welcome/welcome';
import './hello.css'

export default class Hello extends Component {
    render(){
        return (
            <div>   
              <h2 className="title">hello React</h2>
              <Welcome />
            </div>
        )
    }
}