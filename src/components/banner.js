import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../bootstrap.min.css';
import '../App.css';
import Header from './header';

class Banner extends Component{
    constructor(props){
        super(props);
        this.state={
            index : 0,
            direction : null
        }
    }

    handleSelect = (selectedIndex, e)=>{
        this.setState({
            index : selectedIndex,
            direction : e.direction
        });
    }

    render(){
        
        return(
            <>
            <Header index = {this.state.index}/>
            <div className='banner'>
                <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                    <Carousel.Item>
                        <div className='bannerslide_1'>
                            <p>일상에 필요한 모든 것들을 연결해주는 <br/>
                            당신과 가장 가까운 인공지능을 만나보세요. 
                            </p>
                            <a className='btn_with btn_step' href="https://brunch.co.kr/@partnerswkakao">
                                자세히 보기
                                <span className="ico_arr ico_corp"></span>
                            </a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='bannerslide_2'>
                            <p>카카오는 새로운 연결을 통해 <br/>
                            더 편리하고 즐거운 세상을 꿈꿉니다. 
                            </p>
                            <a className='btn_with btn_step' href="https://brunch.co.kr/@partnerswkakao">
                                자세히 보기
                                <span className="ico_arr ico_corp"></span>
                            </a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='bannerslide_3'>
                            <p>끊임없이 이동하는 우리의 삶 속 카카오는 어떤 모습일까요? <br/>
                            이동에 대한 카카오의 모든 이야기들을 담았습니다.
                            </p>
                            <a className='btn_with btn_step' href="https://brunch.co.kr/@partnerswkakao">
                                자세히 보기
                                <span className="ico_arr ico_corp"></span>
                            </a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='bannerslide_4'>
                            <p>카카오로 연결된 수많은 파트너들과, <br/>
                              그들과 함께 더 나은 세상을 만들어나가고자 하는 <br/>
                              카카오의 진심을 전합니다.
                            </p>
                            <a className='btn_with btn_step' href="https://brunch.co.kr/@partnerswkakao">
                                자세히 보기
                                <span className="ico_arr ico_corp"></span>
                            </a>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            </>
        );
    }
}

export default Banner