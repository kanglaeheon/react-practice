class Welcome extends React.Component {
    //  생성자
    constructor(props) {
        super(props);   //  부모 생성자 호출
        //  state : 객체 내부에서 정의되고 사용되는 데이터
        //  내부에서 변경 가능

        this.state = {
        color: "yellow"
        }
    console.log("Welcome props: ", props);
    //  state 조회: this.state로 접근
    //  state 변경: 반드시 this.setState() 함수로 변경
    console.log("Welcome state: ", this.state);
    console.log("Welcome 생성자 호출!");
    }

    //  LifeCycle
    //  Mount 단계: rendering 직전
    componentWillMount() {
        console.log("LifeCycle: componentWillMount Calls");
    }
    
    //  Mount 단계: rendering 직후
    componentDidMount() {
        console.log("LifeCycle: componentDidMount Calls");
    }

    componentWillUnmount() {
        console.log("LifeCycle: componentWillUnmount Calls");
    }

    //  Mount 단계: componentWillMount -> render -> componentDidMount
    //  Unmount 단계: componentWWillUnmount

    //  Old Updating 라이프 사이클:
    //  componentWillReceiveProps -> componentWillUpdate -> componentDidupdate
    componentWillReceiveProps() {
        console.log("LifeCycle: componentWillReceiveProps Calls");
    }

    componentWillUpdate() {
        console.log("LifeCycle: componentWillUpdate Calls");
    }

    componentDidUpdate() {
        console.log("LifeCycle: componentDidUpdate Calls");
    }

    render() {
        //  JSX를 리턴
        console.log("render props: ", this.props);
        console.log("LifeCycle: render");

        //  컴포넌트에 style 부여
        //  style 속성에 객체 전달
        const style = {
            color: this.state.color,
            backgroundColor: "black"
        }

        return (
            <div>
                <h3 style={style}>{ this.props.message }</h3>
                { this.props.children }
            </div>
        )
    }
}