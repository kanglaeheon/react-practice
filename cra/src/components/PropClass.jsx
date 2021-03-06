import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropClass extends Component {
    constructor(props) {
        super(props);   //  부모 생성자 호출
        console.log("PropClass: ", props);

        //  this 바인드
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage() {
        const { prop_func } = this.props;
        console.log(prop_func);
        if (typeof prop_func === "function") {
            prop_func("Message From PropClass");
        }
    }

    render() {
        console.log(this.props);
        //  구조 분해 할당
        let { prop_str, prop_num, prop_false, prop_true, prop_obj, prop_func } = this.props;

        return (
            <div>
                <h3>Props from Parent</h3>
                <ul>
                    <li>string: { prop_str }</li>
                    <li>number: { prop_num }</li>
                    <li>bool false: { !prop_false ? "false" : "not false" }</li>
                    <li>bool true: { prop_true ? "true" : "not ture" }</li>
                    <li>obj: { JSON.stringify(prop_obj) }</li>
                    { prop_func && 
                        <li>function: 
                            <button onClick={this.sendMessage}>부모에게 메시지 보내기</button>
                        </li>
                    }
                </ul>
                { this.props.children }
            </div>
        )
    }
}

//  객체로 props 전달할 때, 객체의 내부 필드 타입을 지정할 수 있다
PropClass.propTypes = {
    prop_obj: PropTypes.shape({
        name: PropTypes.string, //  name은 string
        age: PropTypes.number   //  age는 number
    })   //  내부 필드 타입을 지정할 수 있다.
}

export default PropClass;