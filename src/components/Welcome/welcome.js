import React,{ Component} from "react";
import welcome from "./welcome.module.css";

export default class Welcome extends Component{
    render(){
        return <h3 className={welcome.demo}>欢迎</h3>
    }
}
