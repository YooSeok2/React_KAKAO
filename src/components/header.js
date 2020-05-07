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
   
        
        
        
    constructor(props){
        super(props)
        this.state={
            lastScrollY : 0,
            ticking : false,
            
        }
    }

    //header ul tag click event
    listFocusListener=(e)=>{
        e.target.focus()
        const target = e.target
        console.log(target)
        let target_parent = e.target.parentNode
        target_parent.setAttribute("class", this.state.on)
        target.addEventListener('blur', ()=>{
            target_parent.setAttribute("class", "")
        }, true)
        window.addEventListener('mousemove', (e)=>{
            let page_y = e.clientY
            if(target === this.a_kakao && (page_y >= this.div_kakao.clientHeight+68 || page_y <= 0)){
                target.blur();
               target_parent.setAttribute("class", "")
            }
            if(target === this.a_invest && (page_y >= this.div_invest.clientHeight+68|| page_y <= 0)){
                target.blur();
                target_parent.setAttribute("class", "")
            }
            if(target === this.a_service && (page_y >= this.div_service.clientHeight+68|| page_y <= 0)){
                target.blur();
                target_parent.setAttribute("class", "")
            }
            if(target === this.a_social &&(page_y >= this.div_social.clientHeight+68|| page_y <= 0)){
                target.blur();
                target_parent.setAttribute("class", "")
            }
      
        }, true)
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
            
            
            on : "on"
        });
       
        window.addEventListener('mouseover', this.headerListener, true);
        window.addEventListener('scroll', this.handleScroll, true);
    }



    componentDidUpdate(prevProps, prevState){
        window.addEventListener('mouseover', this.headerListener, true);
        window.addEventListener('scroll', this.handleScroll, true);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
       window.removeEventListener('mouseover', this.headerListener);
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
        if(e.target === this.state.a_kakao){
            // e.target.addEventListener('click', this.listFocusListener, true);
            e.target.click();
        }

        if(e.target === this.state.header_invest || e.target === this.state.a_invest){
            e.target.click();
        }

        if(e.target === this.state.header_service || e.target === this.state.a_service){
            e.target.click();
        }

        if(e.target === this.state.header_social || e.target === this.state.a_social){
            e.target.click();
        }

        if(e.target === this.state.header_customer || e.target === this.state.a_customer){
            e.target.click();
        }

        if(e.target === this.state.header_humanresource || e.target === this.state.a_humanresource){
            e.target.click();
        }
    }

    

    
    render(){
        // this.overMouseY();
        return(
            this.state.ticking === false ?
            [
            this.props.index === 1 || this.props.index ===3 ?
            <nav ref={this.nav}>           
                <div className ="header" ref = {ref=>{this.header = ref}}>
                    <span className="headerlogo_1">kakao</span>
                    <ul className = 'headermenu_1'> 
                        <li ref = {ref=>{this.header_kakao = ref}} >
                            <a href="#none" ref={ref=>{this.a_kakao = ref}} onClick={this.listFocusListener} >카카오</a>
                            <div className="headerdiv" ref = {ref=>{this.div_kakao = ref}}>
                                <ul>
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
                        <a href="#none" ref={ref=>{this.a_invest=ref}} onClick={this.listFocusListener} >투자정보</a>
                            <div className="headerdiv" ref = {ref=>{this.div_invest=ref}}>
                                <ul>
                                    <li>
                                        <strong>경영정보</strong>
                                        <a href="#none"><span>주주구성</span></a>
                                        <a href="#none"><span>이사회</span></a>
                                        <a href="#none"><span>정관</span></a>
                                        <a href="#none"><span>기업지배구조</span></a>
        
                                    </li>
                                    <li>
                                        <strong>재무정보</strong>
                                        <a href="#none"><span>연결재무제표</span></a>
                                        <a href="#none"><span>별도재무제표</span></a>
                                        <a href="#none"><span>신용등급</span></a>
                                            
                                    </li>
                                    <li>
                                        <strong>IR일정</strong>
                                        <a href="#none"><span>IR행사</span></a>
                                        <a href="#none"><span>주주총회</span></a>
                                        <a href="#none"><span>IR미팅예약</span></a>
                                    </li>
                                    <li>
                                        <strong>IR자료실</strong>
                                        <a href="#none"><span>실적발표</span></a>
                                        <a href="#none"><span>정기보고서</span></a>
                                        <a href="#none"><span>IR FAQ</span></a>
                                       
                                    </li>
                                    <li>
                                        <strong>공고</strong>
                                        <a href="#none"><span>배달정보</span></a>
                                        <a href="#none"><span>공고사항</span></a>
                                        <a href="#none"><span>주주제안권</span></a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </li>
                        {/* 서비스 */}
                        <li ref = {ref=>{this.header_service = ref}}>
                        <a href="#none" ref={ref=>{this.a_service = ref}} onClick={this.listFocusListener} >서비스</a>
                            <div className="headerdiv" ref = {ref=>{this.div_service =ref}}>
                                <ul>
                                    <li>
                                        <strong>포털</strong>
                                        <a href="#none"><span>Daum</span></a>
                                        <a href="#none"><span>Daum 뉴스</span></a>
                                        <a href="#none"><span>Daum 검색</span></a>
                                        
                                    </li>
                                    <li>
                                        <strong>커뮤니케이션</strong>
                                        <a href="#none"><span>카카오톡</span></a>
                                        <a href="#none"><span>카카오스토리</span></a>
                                        <a href="#none"><span>카카오톡 치즈</span></a>
                                        <a href="#none"><span>Daum 메일</span></a>
                                        <a href="#none"><span>Daum 카페</span></a>
                                        <a href="#none"><span>아지트</span></a>
                                        <a href="#none"><span>티스토리</span></a>
                                        <a href="#none"><span>브런치</span></a>
                                    </li>
                                    <li>
                                        <strong>콘텐츠</strong>
                                        <a href="#none"><span>카카오페이지</span></a>
                                        <a href="#none"><span>카카오TV</span></a>
                                        <a href="#none"><span>카카오뮤직</span></a>
                                        <a href="#none"><span>카카오프렌즈</span></a>
                                    </li>
                                    <li>
                                        <strong>Daum웹툰</strong>

                                    </li>
                                    <li>
                                        <strong>게임</strong>
                                        <a href="#none"><span>카카오게임즈</span></a>
                                        <a href="#none"><span>핀테크</span></a>
                                        <a href="#none"><span>카카오페이</span></a>
                                    </li>
                                    <li>
                                        <strong>모빌리티&라이프</strong>  
                                        <a href="#none"><span>카카오T</span></a>
                                        <a href="#none"><span>카카오T대리</span></a>
                                        <a href="#none"><span>카카오내비</span></a>    
                                        <a href="#none"><span>카카오맵</span></a>                                
                                        <a href="#none"><span>카카오버스</span></a>
                                        <a href="#none"><span>카카오지하철</span></a>
                                        <a href="#none"><span>카카오헤어샵</span></a>
                                    </li>
                                    <li>
                                        <strong>소셜임팩트</strong>   
                                        <a href="#none"><span>카카오같이가치</span></a>                                   
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* 소셜임팩트 */}
                        <li ref = {ref=>{this.header_social = ref}} >
                        <a href="#none" ref={ref=>{this.a_social = ref}} onClick={this.listFocusListener} >소셜임팩트</a>
                            <div className="headerdiv" ref = {ref=>{this.div_social =ref}}>
                                <ul>
                                    <li>
                                        <strong>소셜임팩트 서비스</strong>
                                        <a href="#none"><span>카카오같이가치</span></a>
                                        <a href="#none"><span>카카오메이커스</span></a>
                                        
                                    </li>
                                    <li>
                                        <strong>사회공헌</strong>
                                        <a href="#none"><span>Next</span></a>
                                        <a href="#none"><span>Connect</span></a>
                                        <a href="#none"><span>Kakao krew</span></a>
                                    </li>
                                    <li>
                                        <strong>상생</strong>
                                        <a href="#none"><span>상생센터</span></a>
                                        <a href="#none"><span>상생서포터즈</span></a>
                                        <a href="#none"><span>Kakao 클래스</span></a>
                                    </li>
                                    <li>
                                        <strong>제주지역협력</strong>
                                        <a href="#none"><span>교육 산학</span></a>
                                        <a href="#none"><span>지역 상생</span></a>
                                        <a href="#none"><span>문화 교류</span></a>
                                        <a href="#none"><span>제주창조경제혁신센터</span></a>
                                    </li>
                                    <li>
                                        <strong>제주창조경제혁신센터</strong>
                                        
                                    </li>
                            
                                </ul>
                            </div>
                        </li>
                        {/* 고객지원 */}
                        <li ref = {ref=>{this.header_customer = ref;}} >
                        <a href="#none" ref={ref=>{this.a_customer=ref}} onClick={this.listFocusListener}>고객지원</a>
                        </li>
                        {/* 인재영입 */}
                        <li ref = {ref=>{this.header_humanresource = ref;}} >
                        <a href="#none" ref={ref=>{this.a_humanresource = ref}} onClick={this.listFocusListener} >인재영입</a>
                        </li>
                    </ul>
                    <ul className="headerlang_1">
                        <li>KOR</li>
                        <li>ENG</li>
                    </ul>
                </div>
            </nav>
            :
            <nav ref={this.nav}>
                <div className ="header" ref = {ref=>{this.header = ref}}>
                    <span className="headerlogo_2">kakao</span>
                    <ul className = 'headermenu_2'>
                    <li ref = {ref=>{this.header_kakao = ref}} >
                            <a href="#none" ref={ref=>{this.a_kakao = ref}} onClick={this.listFocusListener} >카카오</a>
                            <div className="headerdiv" ref = {ref=>{this.div_kakao = ref}}>
                                <ul>
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
                        <a href="#none" ref={ref=>{this.a_invest=ref}} onClick={this.listFocusListener} >투자정보</a>
                            <div className="headerdiv" ref = {ref=>{this.div_invest=ref}}>
                                <ul>
                                    <li>
                                        <strong>경영정보</strong>
                                        <a href="#none"><span>주주구성</span></a>
                                        <a href="#none"><span>이사회</span></a>
                                        <a href="#none"><span>정관</span></a>
                                        <a href="#none"><span>기업지배구조</span></a>
        
                                    </li>
                                    <li>
                                        <strong>재무정보</strong>
                                        <a href="#none"><span>연결재무제표</span></a>
                                        <a href="#none"><span>별도재무제표</span></a>
                                        <a href="#none"><span>신용등급</span></a>
                                            
                                    </li>
                                    <li>
                                        <strong>IR일정</strong>
                                        <a href="#none"><span>IR행사</span></a>
                                        <a href="#none"><span>주주총회</span></a>
                                        <a href="#none"><span>IR미팅예약</span></a>
                                    </li>
                                    <li>
                                        <strong>IR자료실</strong>
                                        <a href="#none"><span>실적발표</span></a>
                                        <a href="#none"><span>정기보고서</span></a>
                                        <a href="#none"><span>IR FAQ</span></a>
                                       
                                    </li>
                                    <li>
                                        <strong>공고</strong>
                                        <a href="#none"><span>배달정보</span></a>
                                        <a href="#none"><span>공고사항</span></a>
                                        <a href="#none"><span>주주제안권</span></a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </li>
                        {/* 서비스 */}
                        <li ref = {ref=>{this.header_service = ref}}>
                        <a href="#none" ref={ref=>{this.a_service = ref}} onClick={this.listFocusListener} >서비스</a>
                            <div className="headerdiv" ref = {ref=>{this.div_service =ref}}>
                                <ul>
                                    <li>
                                        <strong>포털</strong>
                                        <a href="#none"><span>Daum</span></a>
                                        <a href="#none"><span>Daum 뉴스</span></a>
                                        <a href="#none"><span>Daum 검색</span></a>
                                        
                                    </li>
                                    <li>
                                        <strong>커뮤니케이션</strong>
                                        <a href="#none"><span>카카오톡</span></a>
                                        <a href="#none"><span>카카오스토리</span></a>
                                        <a href="#none"><span>카카오톡 치즈</span></a>
                                        <a href="#none"><span>Daum 메일</span></a>
                                        <a href="#none"><span>Daum 카페</span></a>
                                        <a href="#none"><span>아지트</span></a>
                                        <a href="#none"><span>티스토리</span></a>
                                        <a href="#none"><span>브런치</span></a>
                                    </li>
                                    <li>
                                        <strong>콘텐츠</strong>
                                        <a href="#none"><span>카카오페이지</span></a>
                                        <a href="#none"><span>카카오TV</span></a>
                                        <a href="#none"><span>카카오뮤직</span></a>
                                        <a href="#none"><span>카카오프렌즈</span></a>
                                    </li>
                                    <li>
                                        <strong>Daum웹툰</strong>

                                    </li>
                                    <li>
                                        <strong>게임</strong>
                                        <a href="#none"><span>카카오게임즈</span></a>
                                        <a href="#none"><span>핀테크</span></a>
                                        <a href="#none"><span>카카오페이</span></a>
                                    </li>
                                    <li>
                                        <strong>모빌리티&라이프</strong>  
                                        <a href="#none"><span>카카오T</span></a>
                                        <a href="#none"><span>카카오T대리</span></a>
                                        <a href="#none"><span>카카오내비</span></a>    
                                        <a href="#none"><span>카카오맵</span></a>                                
                                        <a href="#none"><span>카카오버스</span></a>
                                        <a href="#none"><span>카카오지하철</span></a>
                                        <a href="#none"><span>카카오헤어샵</span></a>
                                    </li>
                                    <li>
                                        <strong>소셜임팩트</strong>   
                                        <a href="#none"><span>카카오같이가치</span></a>                                   
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* 소셜임팩트 */}
                        <li ref = {ref=>{this.header_social = ref}} >
                        <a href="#none" ref={ref=>{this.a_social = ref}} onClick={this.listFocusListener} >소셜임팩트</a>
                            <div className="headerdiv" ref = {ref=>{this.div_social =ref}}>
                                <ul>
                                    <li>
                                        <strong>소셜임팩트 서비스</strong>
                                        <a href="#none"><span>카카오같이가치</span></a>
                                        <a href="#none"><span>카카오메이커스</span></a>
                                        
                                    </li>
                                    <li>
                                        <strong>사회공헌</strong>
                                        <a href="#none"><span>Next</span></a>
                                        <a href="#none"><span>Connect</span></a>
                                        <a href="#none"><span>Kakao krew</span></a>
                                    </li>
                                    <li>
                                        <strong>상생</strong>
                                        <a href="#none"><span>상생센터</span></a>
                                        <a href="#none"><span>상생서포터즈</span></a>
                                        <a href="#none"><span>Kakao 클래스</span></a>
                                    </li>
                                    <li>
                                        <strong>제주지역협력</strong>
                                        <a href="#none"><span>교육 산학</span></a>
                                        <a href="#none"><span>지역 상생</span></a>
                                        <a href="#none"><span>문화 교류</span></a>
                                        <a href="#none"><span>제주창조경제혁신센터</span></a>
                                    </li>
                                    <li>
                                        <strong>제주창조경제혁신센터</strong>
                                        
                                    </li>
                            
                                </ul>
                            </div>
                        </li>
                        {/* 고객지원 */}
                        <li ref = {ref=>{this.header_customer = ref;}} >
                        <a href="#none" ref={ref=>{this.a_customer=ref}} onClick={this.listFocusListener}>고객지원</a>
                        </li>
                        {/* 인재영입 */}
                        <li ref = {ref=>{this.header_humanresource = ref;}} >
                        <a href="#none" ref={ref=>{this.a_humanresource = ref}} onClick={this.listFocusListener} >인재영입</a>
                        </li>
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
                    <li ref = {ref=>{this.header_kakao = ref}} >
                            <a href="#none" ref={ref=>{this.a_kakao = ref}} onClick={this.listFocusListener} >카카오</a>
                            <div className="headerdiv" ref = {ref=>{this.div_kakao = ref}}>
                                <ul>
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
                        <a href="#none" ref={ref=>{this.a_invest=ref}} onClick={this.listFocusListener} >투자정보</a>
                            <div className="headerdiv" ref = {ref=>{this.div_invest=ref}}>
                                <ul>
                                    <li>
                                        <strong>경영정보</strong>
                                        <a href="#none"><span>주주구성</span></a>
                                        <a href="#none"><span>이사회</span></a>
                                        <a href="#none"><span>정관</span></a>
                                        <a href="#none"><span>기업지배구조</span></a>
        
                                    </li>
                                    <li>
                                        <strong>재무정보</strong>
                                        <a href="#none"><span>연결재무제표</span></a>
                                        <a href="#none"><span>별도재무제표</span></a>
                                        <a href="#none"><span>신용등급</span></a>
                                            
                                    </li>
                                    <li>
                                        <strong>IR일정</strong>
                                        <a href="#none"><span>IR행사</span></a>
                                        <a href="#none"><span>주주총회</span></a>
                                        <a href="#none"><span>IR미팅예약</span></a>
                                    </li>
                                    <li>
                                        <strong>IR자료실</strong>
                                        <a href="#none"><span>실적발표</span></a>
                                        <a href="#none"><span>정기보고서</span></a>
                                        <a href="#none"><span>IR FAQ</span></a>
                                       
                                    </li>
                                    <li>
                                        <strong>공고</strong>
                                        <a href="#none"><span>배달정보</span></a>
                                        <a href="#none"><span>공고사항</span></a>
                                        <a href="#none"><span>주주제안권</span></a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </li>
                        {/* 서비스 */}
                        <li ref = {ref=>{this.header_service = ref}}>
                        <a href="#none" ref={ref=>{this.a_service = ref}} onClick={this.listFocusListener} >서비스</a>
                            <div className="headerdiv" ref = {ref=>{this.div_service =ref}}>
                                <ul>
                                    <li>
                                        <strong>포털</strong>
                                        <a href="#none"><span>Daum</span></a>
                                        <a href="#none"><span>Daum 뉴스</span></a>
                                        <a href="#none"><span>Daum 검색</span></a>
                                        
                                    </li>
                                    <li>
                                        <strong>커뮤니케이션</strong>
                                        <a href="#none"><span>카카오톡</span></a>
                                        <a href="#none"><span>카카오스토리</span></a>
                                        <a href="#none"><span>카카오톡 치즈</span></a>
                                        <a href="#none"><span>Daum 메일</span></a>
                                        <a href="#none"><span>Daum 카페</span></a>
                                        <a href="#none"><span>아지트</span></a>
                                        <a href="#none"><span>티스토리</span></a>
                                        <a href="#none"><span>브런치</span></a>
                                    </li>
                                    <li>
                                        <strong>콘텐츠</strong>
                                        <a href="#none"><span>카카오페이지</span></a>
                                        <a href="#none"><span>카카오TV</span></a>
                                        <a href="#none"><span>카카오뮤직</span></a>
                                        <a href="#none"><span>카카오프렌즈</span></a>
                                    </li>
                                    <li>
                                        <strong>Daum웹툰</strong>

                                    </li>
                                    <li>
                                        <strong>게임</strong>
                                        <a href="#none"><span>카카오게임즈</span></a>
                                        <a href="#none"><span>핀테크</span></a>
                                        <a href="#none"><span>카카오페이</span></a>
                                    </li>
                                    <li>
                                        <strong>모빌리티&라이프</strong>  
                                        <a href="#none"><span>카카오T</span></a>
                                        <a href="#none"><span>카카오T대리</span></a>
                                        <a href="#none"><span>카카오내비</span></a>    
                                        <a href="#none"><span>카카오맵</span></a>                                
                                        <a href="#none"><span>카카오버스</span></a>
                                        <a href="#none"><span>카카오지하철</span></a>
                                        <a href="#none"><span>카카오헤어샵</span></a>
                                    </li>
                                    <li>
                                        <strong>소셜임팩트</strong>   
                                        <a href="#none"><span>카카오같이가치</span></a>                                   
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* 소셜임팩트 */}
                        <li ref = {ref=>{this.header_social = ref}} >
                        <a href="#none" ref={ref=>{this.a_social = ref}} onClick={this.listFocusListener} >소셜임팩트</a>
                            <div className="headerdiv" ref = {ref=>{this.div_social =ref}}>
                                <ul>
                                    <li>
                                        <strong>소셜임팩트 서비스</strong>
                                        <a href="#none"><span>카카오같이가치</span></a>
                                        <a href="#none"><span>카카오메이커스</span></a>
                                        
                                    </li>
                                    <li>
                                        <strong>사회공헌</strong>
                                        <a href="#none"><span>Next</span></a>
                                        <a href="#none"><span>Connect</span></a>
                                        <a href="#none"><span>Kakao krew</span></a>
                                    </li>
                                    <li>
                                        <strong>상생</strong>
                                        <a href="#none"><span>상생센터</span></a>
                                        <a href="#none"><span>상생서포터즈</span></a>
                                        <a href="#none"><span>Kakao 클래스</span></a>
                                    </li>
                                    <li>
                                        <strong>제주지역협력</strong>
                                        <a href="#none"><span>교육 산학</span></a>
                                        <a href="#none"><span>지역 상생</span></a>
                                        <a href="#none"><span>문화 교류</span></a>
                                        <a href="#none"><span>제주창조경제혁신센터</span></a>
                                    </li>
                                    <li>
                                        <strong>제주창조경제혁신센터</strong>
                                        
                                    </li>
                            
                                </ul>
                            </div>
                        </li>
                        {/* 고객지원 */}
                        <li ref = {ref=>{this.header_customer = ref;}} >
                        <a href="#none" ref={ref=>{this.a_customer=ref}} onClick={this.listFocusListener}>고객지원</a>
                        </li>
                        {/* 인재영입 */}
                        <li ref = {ref=>{this.header_humanresource = ref;}} >
                        <a href="#none" ref={ref=>{this.a_humanresource = ref}} onClick={this.listFocusListener} >인재영입</a>
                        </li>
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
