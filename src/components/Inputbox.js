import React from 'react';
import { Inputfield } from './Inputfield'

export class Inputbox extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            textarea: "",
            password:"",
            type:"password",
            placeholder:"Password",
            btn:"Log In"
        }
    }

    submitForm = (event) => {
        event.preventDefault();
    }

    handleChange = (event) =>{
        this.setState({
          [event.target.name]:event.target.value 
        })
    }

    toggleComment =() =>{
        this.setState({
            type: this.state.type === "password" ? "textarea" : "password",
            placeholder: this.state.placeholder === "Password" ? "Your comment here" : "Password",
            btn: this.state.btn === "Log In" ? "Comment" : "Log In"
        })
    }

    render() {
        return (
            <div id='inputbox'>
                <form onSubmit={this.submitForm}>
                    <Inputfield
                        type={'text'}
                        placeholder={'Username'}
                        name={'username'}
                        onChange={this.handleChange}
                        a={"asd"}
                    />

                    <Inputfield
                        type={this.state.type}
                        placeholder={this.state.placeholder}
                        name={this.state.type}
                        onChange={this.handleChange}
                        toggle={this.togglePassword}
                        a={"asd"}
                    />
                    <div id='buttons'>
                    <button className="action-button">{this.state.btn}</button> <span>or</span>
                    <button className="comment-button" onClick={this.toggleComment}>
                    <i className={(this.state.type === "password" ? "fa fa-comments" : "fas fa-user-plust")}></i>            
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}