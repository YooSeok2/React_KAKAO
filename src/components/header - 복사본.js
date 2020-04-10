import React, {Component} from 'react';
import '../App.css';


class Header extends Component{
        header = null;

        // 헤더 리스트 ref값
        header_kakao = null;
        header_invest = null;
        header_service = null;
        header_social = null;
        header_customer = null;
        header_humanresource = null;

        // 해당 리스트 a ref값
        a_kakao = null;
        a_invest = null;
        a_social = null;
        a_service = null;
        a_customer = null;
        a_humanresource = null;

        // 해당 리스트 div ref값
        div_kakao = null;
        div_invest = null;
        div_social = null;
        div_service = null;
        div_customer = null;
        div_humanresource = null;

        //해당 리스트 ul ref값
        ul_kakao = null;
        
    constructor(props){
        super(props)
        this.state={
            lastScrollY : 0,
            ticking : false,
        }
    }

    componentDidMount(){
       this.setState({
            header : this.header,
            //헤더 리스트 ref 값 state값으로 저장
            header_kakao : this.header_kakao,
            header_invest : this.header_invest,
            header_customer : this.header_customer,
            header_humanresource : this.header_humanresource,
            header_service: this.header_service,
            header_social: this.header_social,
            //해당 리스트 a 값 ref
            a_kakao : this.a_kakao,
            a_invest : this.a_invest,
            a_customer : this.a_customer,
            a_humanresource : this.a_humanresource,
            a_service : this.a_service,
            a_social : this.a_social,
            //해당 리스트 div 값 ref
            div_kakao : this.div_kakao,
            div_invest : this.div_invest,
            div_customer : this.div_customer,
            div_humanresource : this.div_humanresource,
            div_service : this.div_service,
            div_social : this.div_social,

            //해당 리스트 ul 값 ref
            ul_kakao : this.ul_kakao,

            on : "on"
        });
     
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentDidUpdate(prevProps, prevState){
        
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('focus', this.headerListener);
    }
      
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

    headerListener=(e)=>{
        if(this.state.header){
            if(e.target === this.state.header_kakao || e.target === this.state.a_kakao || e.target ===this.state.div_kakao || e.target ===this.state.ul_kakao ){ 
                this.state.header_kakao.setAttribute("class", this.state.on);
                this.state.header_kakao.focus();
            }else{
                this.state.header_kakao.setAttribute('class', '');
            }

            if(e.target === this.state.header_invest || e.target === this.state.a_invest || e.target ===this.state.div_invest){
                this.state.header_invest.setAttribute('class', this.state.on);
            }else{
                this.state.header_invest.setAttribute('class', '');
            }

            if(e.target === this.state.header_service || e.target === this.state.a_service || e.target ===this.state.div_service){
                this.state.header_service.setAttribute('class', this.state.on);
            }else{
                this.state.header_service.setAttribute('class', '');
            }

            if(e.target === this.state.header_social || e.target === this.state.a_social || e.target ===this.state.div_social){
                this.state.header_social.setAttribute('class', this.state.on);
                this.state.header_social.focus();
            }else{
                this.state.header_social.setAttribute('class', '');
            }
            
            if(e.target === this.state.header_customer || e.target === this.state.a_customer || e.target ===this.state.div_customer){
                this.state.header_customer.setAttribute('class', this.state.on);
            }else{
                this.state.header_customer.setAttribute('class', '');
            }
            
            if(e.target === this.state.header_humanresource || e.target === this.state.a_humanresource || e.target ===this.state.div_humanresource){
                this.state.header_humanresource.setAttribute('class', this.state.on);
            }else{
                this.state.header_humanresource.setAttribute('class', '');
            }
            
        }
    }
    
    render(){
        if(this.state.header){
            this.state.header.addEventListener('focus', this.headerListener, true);
            this.state.header.addEventListener('mouseover', this.headerListener, true);
        }
        
        return(
            this.state.ticking === false ?
            [
            // this.props.index === 1 || this.props.index ===3 ?
            <nav ref={this.nav}>           
                <div className ="header" ref = {ref=>{this.header = ref}}>
                    <span className="headerlogo_1">kakao</span>
                    <ul className = 'headermenu_1'>
                        <li ref = {ref=>{this.header_kakao = ref}}>
                            <a href="#none" ref={ref=>{this.a_kakao = ref}}>카카오</a>
                            <div className="headerdiv" ref = {ref=>{this.div_kakao = ref}}>
                                <ul ref = {ref=>{this.ul_kakao = ref}}>
                                    <li>
                                        <strong>카카오 소개</strong>
                                        <a href="#none"><span>비전</span></a>
                                        <a href="#none"><span>카카오 문화</span></a>
                                        <a href="#none"><span>걸어온 길</span></a>
                                        <a href="#none"><span>CI</span></a>
                                        <a href="#none"><span>윤리규정</span></a>
                                    </li>
                                    <li>
                                        <strong>카카오 AI</strong>
                                        <a href="#none"><span>소개</span></a>
                                        <a href="#none"><span>알고리즘 윤리</span></a>
                                            
                                    </li>
                                    <li>
                                        <strong>자회사</strong>
                                    
                                    </li>
                                    <li>
                                        <strong>비즈니스</strong>
                                        <a href="#none"><span>광고 안내</span></a>
                                        <a href="#none"><span>제휴 안내</span></a>
                                        <a href="#none"><span>KaKa for Business</span></a>
                                       
                                    </li>
                                    <li>
                                        <strong>홍보 채널</strong>
                                        <a href="#none"><span>보도 자료</span></a>
                                        <a href="#none"><span>브랜드 영상</span></a>
                                        <a href="#none"><span>미디어 행사</span></a>
                                        <a href="#none"><span>KaKao Travel Day</span></a>
                                    </li>
                                    <li>
                                        <strong>오시는 길</strong>
                                      
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* 투자정보 */}
                        <li ref = {ref=>{this.header_invest = ref}}>
                        <a href="#none" ref={ref=>{this.a_invest=ref}} >투자정보</a>
                            <div className="headerdiv" ref = {ref=>{this.div_invest=ref}}>
                                <ul>
                                    <li>
                                        <strong>카카오 소개</strong>
                                        <a href="#none"><span>asdfadsfasdf</span></a>
                                        <a href="#none"><span>카카오 문화</span></a>
                                        <a href="#none"><span>걸어온 길</span></a>
                                        <a href="#none"><span>CI</span></a>
                                        <a href="#none"><span>윤리규정</span></a>
                                    </li>
                                    <li>
                                        <strong>카카오 AI</strong>
                                        <a href="#none"><span>소개</span></a>
                                        <a href="#none"><span>알고리즘 윤리</span></a>
                                            
                                    </li>
                                    <li>
                                        <strong>자회사</strong>
                                    
                                    </li>
                                    <li>
                                        <strong>비즈니스</strong>
                                        <a href="#none"><span>광고 안내</span></a>
                                        <a href="#none"><span>제휴 안내</span></a>
                                        <a href="#none"><span>KaKa for Business</span></a>
                                       
                                    </li>
                                    <li>
                                        <strong>홍보 채널</strong>
                                        <a href="#none"><span>보도 자료</span></a>
                                        <a href="#none"><span>브랜드 영상</span></a>
                                        <a href="#none"><span>미디어 행사</span></a>
                                        <a href="#none"><span>KaKao Travel Day</span></a>
                                    </li>
                                    <li>
                                        <strong>오시는 길</strong>
                                      
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* 서비스 */}
                        <li ref = {ref=>{this.header_service = ref}}>
                        <a href="#none" ref={ref=>{this.a_service = ref}} >서비스</a>
                            <div className="headerdiv" ref = {ref=>{this.div_service =ref}}>
                                <ul>
                                    <li>
                                        <strong>카카오 소개</strong>
                                        <a href="#none"><span>b</span></a>
                                        <a href="#none"><span>카카오 문화</span></a>
                                        <a href="#none"><span>걸어온 길</span></a>
                                        <a href="#none"><span>CI</span></a>
                                        <a href="#none"><span>윤리규정</span></a>
                                    </li>
                                    <li>
                                        <strong>카카오 AI</strong>
                                        <a href="#none"><span>소개</span></a>
                                        <a href="#none"><span>알고리즘 윤리</span></a>
                                            
                                    </li>
                                    <li>
                                        <strong>자회사</strong>
                                    
                                    </li>
                                    <li>
                                        <strong>비즈니스</strong>
                                        <a href="#none"><span>광고 안내</span></a>
                                        <a href="#none"><span>제휴 안내</span></a>
                                        <a href="#none"><span>KaKa for Business</span></a>
                                       
                                    </li>
                                    <li>
                                        <strong>홍보 채널</strong>
                                        <a href="#none"><span>보도 자료</span></a>
                                        <a href="#none"><span>브랜드 영상</span></a>
                                        <a href="#none"><span>미디어 행사</span></a>
                                        <a href="#none"><span>KaKao Travel Day</span></a>
                                    </li>
                                    <li>
                                        <strong>오시는 길</strong>
                                      
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* 소셜임팩트 */}
                        <li ref = {ref=>{this.header_social = ref}} >
                        <a href="#none" ref={ref=>{this.a_social = ref}} >소셜임팩트</a>
                            <div className="headerdiv" ref = {ref=>{this.div_social =ref}}>
                                <ul>
                                    <li>
                                        <strong>카카오 소개</strong>
                                        <a href="#none"><span>c</span></a>
                                        <a href="#none"><span>카카오 문화</span></a>
                                        <a href="#none"><span>걸어온 길</span></a>
                                        <a href="#none"><span>CI</span></a>
                                        <a href="#none"><span>윤리규정</span></a>
                                    </li>
                                    <li>
                                        <strong>카카오 AI</strong>
                                        <a href="#none"><span>소개</span></a>
                                        <a href="#none"><span>알고리즘 윤리</span></a>
                                            
                                    </li>
                                    <li>
                                        <strong>자회사</strong>
                                    
                                    </li>
                                    <li>
                                        <strong>비즈니스</strong>
                                        <a href="#none"><span>광고 안내</span></a>
                                        <a href="#none"><span>제휴 안내</span></a>
                                        <a href="#none"><span>KaKa for Business</span></a>
                                       
                                    </li>
                                    <li>
                                        <strong>홍보 채널</strong>
                                        <a href="#none"><span>보도 자료</span></a>
                                        <a href="#none"><span>브랜드 영상</span></a>
                                        <a href="#none"><span>미디어 행사</span></a>
                                        <a href="#none"><span>KaKao Travel Day</span></a>
                                    </li>
                                    <li>
                                        <strong>오시는 길</strong>
                                      
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* 고객지원 */}
                        <li ref = {ref=>{this.header_customer = ref;}} >
                        <a href="#none" ref={ref=>{this.a_customer=ref}}>고객지원</a>
                            <div className="headerdiv" ref = {ref=>{this.div_customer=ref}}>
                                <ul>
                                    <li>
                                        <strong>카카오 소개</strong>
                                        <a href="#none"><span>d</span></a>
                                        <a href="#none"><span>카카오 문화</span></a>
                                        <a href="#none"><span>걸어온 길</span></a>
                                        <a href="#none"><span>CI</span></a>
                                        <a href="#none"><span>윤리규정</span></a>
                                    </li>
                                    <li>
                                        <strong>카카오 AI</strong>
                                        <a href="#none"><span>소개</span></a>
                                        <a href="#none"><span>알고리즘 윤리</span></a>
                                            
                                    </li>
                                    <li>
                                        <strong>자회사</strong>
                                    
                                    </li>
                                    <li>
                                        <strong>비즈니스</strong>
                                        <a href="#none"><span>광고 안내</span></a>
                                        <a href="#none"><span>제휴 안내</span></a>
                                        <a href="#none"><span>KaKa for Business</span></a>
                                       
                                    </li>
                                    <li>
                                        <strong>홍보 채널</strong>
                                        <a href="#none"><span>보도 자료</span></a>
                                        <a href="#none"><span>브랜드 영상</span></a>
                                        <a href="#none"><span>미디어 행사</span></a>
                                        <a href="#none"><span>KaKao Travel Day</span></a>
                                    </li>
                                    <li>
                                        <strong>오시는 길</strong>
                                      
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* 인재영입 */}
                        <li ref = {ref=>{this.header_humanresource = ref;}} >
                        <a href="#none" ref={ref=>{this.a_humanresource = ref}} >인재영입</a>
                            <div className="headerdiv" ref = {ref=>{this.div_humanresource=ref}}>
                                <ul>
                                    <li>
                                        <strong>카카오 소개</strong>
                                        <a href="#none"><span>f</span></a>
                                        <a href="#none"><span>카카오 문화</span></a>
                                        <a href="#none"><span>걸어온 길</span></a>
                                        <a href="#none"><span>CI</span></a>
                                        <a href="#none"><span>윤리규정</span></a>
                                    </li>
                                    <li>
                                        <strong>카카오 AI</strong>
                                        <a href="#none"><span>소개</span></a>
                                        <a href="#none"><span>알고리즘 윤리</span></a>
                                            
                                    </li>
                                    <li>
                                        <strong>자회사</strong>
                                    
                                    </li>
                                    <li>
                                        <strong>비즈니스</strong>
                                        <a href="#none"><span>광고 안내</span></a>
                                        <a href="#none"><span>제휴 안내</span></a>
                                        <a href="#none"><span>KaKa for Business</span></a>
                                       
                                    </li>
                                    <li>
                                        <strong>홍보 채널</strong>
                                        <a href="#none"><span>보도 자료</span></a>
                                        <a href="#none"><span>브랜드 영상</span></a>
                                        <a href="#none"><span>미디어 행사</span></a>
                                        <a href="#none"><span>KaKao Travel Day</span></a>
                                    </li>
                                    <li>
                                        <strong>오시는 길</strong>
                                      
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <ul className="headerlang_1">
                        <li>KOR</li>
                        <li>ENG</li>
                    </ul>
                </div>
            </nav>
            // :
            // <nav ref={this.nav}>
            //     <div className ="header" ref = {ref=>{this.header = ref}}>
            //         <span className="headerlogo_2">kakao</span>
            //         <ul className = 'headermenu_2'>
            //             <li>
            //                 <a href="#none" ref = {ref=>{this.header_kakao = ref}}>카카오</a>
            //                 <div className="headerdiv">
            //                     <ul>
            //                         <li>
            //                             <strong>카카오 소개</strong>
            //                             <a href="#none"><span>비전</span></a>
            //                             <a href="#none"><span>카카오 문화</span></a>
            //                             <a href="#none"><span>걸어온 길</span></a>
            //                             <a href="#none"><span>CI</span></a>
            //                             <a href="#none"><span>윤리규정</span></a>
            //                         </li>
            //                     </ul>
            //                 </div>
            //             </li>
            //             <li>투자정보</li>
            //             <li>서비스</li>
            //             <li>소셜임팩트</li>
            //             <li>고객지원</li>
            //             <li>인재영입</li>
            //         </ul>
            //         <ul className="headerlang_2">
            //             <li>KOR</li>
            //             <li>ENG</li>
            //         </ul>
            //     </div>
            // </nav>
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
