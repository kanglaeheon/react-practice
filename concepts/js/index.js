/*
//  React 컴포넌트 만들기
function HelloButton() {
    //  만들어진 컴포넌트 리턴
    return React.createElement("button", // HTML Element 반환
        {
            onClick: event => {
                alert(event.target.innerText);
            }
        },  //  React 컴포넌트 옵션
        "React Button"  //  children
    );
}

//  컨테이너 찾기
const container = document.getElementById("root");
//  리액트 컴포넌트를 붙이기
ReactDOM.render(React.createElement(HelloButton), container);
*/

//  with JSX
//  함수형 컴포넌트
function HelloButton(props) {
    console.log("HelloButton props: ", props);
    console.log("children: ", props.children);

    const click = event => {
        event.preventDefault();
        alert("Hello Button Clicked! (with JSX)");
    }
    return (
        <button onClick={click}>
            { props.children }
        </button>
    )
}

//  클래스형 컴포넌트
//  React.Component를 상속
class HelloButtonClass extends React.Component {
    //  생성자
    constructor(props) {
        super(props);
        console.log("HelloButtonClass props:", props);
        this.click = this.click.bind(this);
    }

    click = event => {
        event.preventDefault();
        alert("Hello Button Clicked! (클래스형 컴포넌트)");
    }
    //  반드시 render 메서드를 오버라이드 -> 렌더링
    render() {
        return (
            <button onClick={this.click}>
                { this.props.children }
            </button>
        )
    }
}

const container = document.getElementById("root");
ReactDOM.render(
    <div>
        <Welcome message="Custom Component">
            <p>이것은 사용자 정의 컴포넌트 입니다</p>
        </Welcome>
        <HelloButton>React Function Button</HelloButton>
        <HelloButtonClass>React Class Button</HelloButtonClass>
    </div>,
    container
)