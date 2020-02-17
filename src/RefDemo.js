import React, { Component } from 'react';
import './RefDemo.css';

class RefDemo extends Component {

    state = {
        password: '',
        clicked: false,
        validated: false
    }
    render() {
        const { password, clicked, validated } = this.state;
        return (
            <div>
                <input
                    type="password"
                    //ref: dom 객체의 참조를 변수에 저장 -> react 시스템이 호출
                    ref={ (ref) => this.passwd = ref }
                    className={ clicked ? ( validated ? 'success' : 'failure' ) : '' }
                    value={ password } 
                    onChange={ 
                        (e) => {
                            this.setState({ password: e.target.value });
                        } 
                    } />
                <button
                    onClick={
                        (e) => {
                            this.setState({
                                clicked: true,
                                validated: password === '9922'
                            });
                            //document.querySelector('input[type=password]').focus();
                            this.passwd.focus(); // dom 객체를 직접 접근
                        }
                    }>유효성 검증</button>
            </div>
        );
    }

}

export default RefDemo;