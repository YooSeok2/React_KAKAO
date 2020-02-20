import React, {Component} from 'react';
import '../App.css';


class Header extends Component{
    constructor(props){
        super(props)

        this.state={
            lastScrollY : 0,
            ticking : false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
        
      nav = React.createRef();
      
    handleScroll = async() => {
        await this.setState({
                lastScrollY : window.scrollY
              })
        
        if(this.state.lastScrollY>0){
            this.setState({
                ticking : true
            })
        }else{
            this.setState({
                ticking : false
            })
        }
    };
    
    render(){
        console.log(this.state.ticking, this.state.lastScrollY);
        return(
            this.state.ticking === false ?
            [
            this.props.index === 1 || this.props.index ===3 ?
            <nav ref={this.nav}>           
                <div className ="header">
                    <span className="headerlogo_1">kakao</span>
                    <ul className = 'headermenu_1'>
                        <li>카카오</li>
                        <li>투자정보</li>
                        <li>서비스</li>
                        <li>소셜임팩트</li>
                        <li>고객지원</li>
                        <li>인재영입</li>
                    </ul>
                    <ul className="headerlang_1">
                        <li>KOR</li>
                        <li>ENG</li>
                    </ul>
                </div>
            </nav>
            :
            <nav ref={this.nav}>
                <div className ="header">
                    <span className="headerlogo_2">kakao</span>
                    <ul className = 'headermenu_2'>
                        <li>카카오</li>
                        <li>투자정보</li>
                        <li>서비스</li>
                        <li>소셜임팩트</li>
                        <li>고객지원</li>
                        <li>인재영입</li>
                    </ul>
                    <ul className="headerlang_2">
                        <li>KOR</li>
                        <li>ENG</li>
                    </ul>
                </div>
            </nav>
            ]
            :
            <nav ref={this.nav}>
                <div className ="after_header">
                    <span className="headerlogo_1">kakao</span>
                    <ul className = 'headermenu_1'>
                        <li>카카오</li>
                        <li>투자정보</li>
                        <li>서비스</li>
                        <li>소셜임팩트</li>
                        <li>고객지원</li>
                        <li>인재영입</li>
                    </ul>
                    <ul className="headerlang_1">
                        <li>KOR</li>
                        <li>ENG</li>
                    </ul>
                </div>
            </nav> 

        );
    }
}

export default Header;
