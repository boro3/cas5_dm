import React from 'react';

export class Inputfield extends React.Component {

    render() {

        return (
            <div id='inputfield'>
              {this.props.type==='textarea'   

                ?  <textarea rows="5" cols="20"
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    onChange={this.props.onChange}
                    />
              
              
                :  <input
                type={this.props.type}
                placeholder={this.props.placeholder}
                name={this.props.name}
                onChange={this.props.onChange}
                />
                
              }    
            </div>
        )
    }
}