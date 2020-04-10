import React, {Component} from 'react';

class Service extends Component{
    render(){
        return(
            <div className="service">
                <div className="service_info">
                    <a href="https://www.kakaocorp.com/service/KakaoTalk" className='service_news'>
                        <h3 className='service_h3'>SERVICE</h3>
                        <img src="https://t1.kakaocdn.net/kakaocorp/admin/co/main-content/4518.jpg" className='service_img' alt='news'></img>
                        <strong className='summary_strong'>언제 어디서나 무료로 간편하게! 사람과 세상, 그 이상을 연결하는 카카오톡</strong>
                    </a>
                    <p className='summary_p'>채팅은 물론 일정 관리, 송금, 검색 등 다양한 기능을 제공하는 카카오톡은 우리의 생활을 통해 세상의 정보와 즐길거리에 보다 가까이 ...</p>
                </div>
                <div className="service_info">
                    <a href="https://tech.kakao.com" className='service_news'>
                        <h3 className='service_white'>TECH</h3>
                        <img src="https://t1.kakaocdn.net/kakaocorp/admin/co/main-content/4540.jpg" className='service_img' alt='news'></img>
                        <strong className='summary_strong'>새로워진 kakao Tech를 소개합니다.</strong>
                    </a>
                    <p className='summary_p'>기술 행사와 오픈소스, 후원, 채용 등 카카오의 기술 관련 종합적인 정보를 제공할 수 있도록 개편했습니다....</p>   
                </div> 
                <div className="service_info">
                    <a href="http://blog.kakaocorp.co.kr/679" className='service_news'>
                        <h3 className='service_h3'>SOCIAL IMPACT</h3>
                        <img src="https://t1.kakaocdn.net/kakaocorp/operating/co/main-content/3254.png" className='service_img' alt='news'></img>
                        <strong className='summary_strong'>세계 행복의 날 기념, 같이가치 '안녕하세요' 캠페인을 소개합니다!</strong>
                    </a>
                    <p className='summary_p'>'세계 행복의 날'이라는 기념일을 들어보신 적 있나요? 2012년 국제연합(UN)이 모든 사람들이 행복하게 살 수 있도록 전 세계가 함께 노력하자는 취지로 매년 3월 20일을 '세계 ...</p>
                </div>
            </div>
        );
    }
}

export default Service