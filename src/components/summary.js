import React, {Component} from 'react';


class Summary extends Component{
    render(){
        return(
            <div className="summary">
                <div className="summary_info">
                    <h3 className="summary_h3">PRESS RELEASE</h3>
                    <a href="/kakao/prChannel/pressReleasesView?boardIdx=10094" className="link_newsfeed">
                        <strong className="summary_strong">카카오톡 선물하기, 졸업 선물 기획전 운영</strong>
                        <p className ="summary_p">   
                        [2020-02-19] ‘카카오톡 선물하기’가 졸업의 달 2월을 맞아 특별한 졸업 선물을 선보인다.카카오커머스(대표 홍은택)는 지난 17일부터 졸업-입학 시즌 동안 ‘카카오톡 선물하기’ 홈과 상단 메...
                        </p>
                    </a>
                </div>
                <div className="summary_info">
                    <h3 className="summary_h3">STOCK</h3>
                    <div className="main_stock">
                    <strong className='summary_stock'>190,000</strong>
                    <span className='summary_ico'></span>
                    <span className='num_stock'>8,000</span>
                    </div>
                    <p className="stock_p">2020-02-19 18:35:01</p>
                </div>
                <div className="summary_info">
                    <h3 className="summary_h3">PRIVACY POLICY</h3>
                    <div className="privacy_main">
                    <strong className="summary_strong" >카카오는 데이터의 연결과 보호의 균형을 위해 언제나 최선을 다하겠습니다.</strong>
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;