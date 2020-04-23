import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import './Main.scss';

class Main extends Component {
    render(){
        return(
            <div className='Main'>
                <div className='videoBox'>
                    <video src="https://content.rolex.com/dam/homepage/hss/watches/classic-watches/day-date/day-date-40/homepage-day-date-40-m228238-0042.mp4" type="video/mp4" autoPlay muted  playsinline loop preload="auto" class="sc-pRTZB jXSwJn"/>
                    <div className='videoTitle'>
                        <div>DAY-DATE</div>
                        <div>품격 있는 시계의 상징</div>
                    </div>
                    <div className='animeArrow'>
                        <span>
                            <svg aria-labelledby="" height="15" width="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" role="img">
                                <path d="m15 5.41-7.5 7.91-7.5-7.91 1.95-1.95 5.55 5.83 5.55-5.83z"></path>
                            </svg>
                        </span>
                    </div>
                </div>

                <div className='howItsMade'>
                    <div className='txtBox'>
                        <div className='mainTxt'>
                            롤렉스 시계는 꼼꼼하게 정성을 들여 조립됩니다.
                        </div>
                        <div className='subTxt'>
                            우수한 정확성을 지닌 품격있는 롤렉스 컬렉션에 대해 자세히 알아보시기 바랍니다. 롤렉스는 프로페셔널 워치부터 클래식 워치까지 어떤 상황에도 어울리는 다양한 모델을 선보입니다. 스타일과 기능이 완벽하게 어우러진 롤렉스 시계의 다양한 셀렉션을 만나보시기 바랍니다.
                        </div>
                        <div className='selectNSetBtn'>
                            <Link className='selectBtn'>
                                시계 골라보기
                            </Link>
                            <Link className='setBtn'>
                                시계 설정하기
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='showCollection'>
                    <div className='collectionTxtNSwipe'>
                        <div className='collectionTxt'>
                            롤렉스 컬렉션 - <Link>모두 보기</Link>
                        </div>
                        <div className='collectionSwipe'>

                        </div>

                    </div>
                </div>

                <div className='saveThePlanet' >
                    <video src="https://content.rolex.com/dam/homepage/video-banner/rolex-org/globe/homepage-dotcom-globe.mp4" type="video/mp4" autoPlay muted playsinline="" loop preload="auto" class="sc-pRTZB jXSwJn"></video>
                    
                    <a className='planetTxt' href="https://www.rolex.org/ko/environment" target="_blank">
                        <div>Rolex.org</div>
                        <div>지구를 지키기 위한 프로젝트</div>
                        <div>영감을 주는 이야기</div>
                        {/* <a src="https://www.rolex.org/ko/environment">
                            <span></span>
                        </a> */}
                    </a>

                </div>

                <div className='rolexIndepth'>
                    <div className='depthTxtImg'>
                        <div className='depthTxt'>롤렉스 자세히 보기</div>
                        <div className='depthImg'>
                            <ul>
                                <li>
                                    <div className='depthPic'></div>
                                    <figcaption></figcaption>
                                </li>
                                <li>
                                    <div className='depthPic'></div>
                                    <figcaption></figcaption>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <div className='depthPic'></div>
                                    <figcaption></figcaption>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='retailer'>
                    <div className='retailPic'>

                    </div>
                    <div className='retailTxt'>
                        <div className='buyOne'>롤렉스 시계 구입</div>
                        <div className='findRetail'>공식 판매점 찾기</div>
                        <button>공식 판매점 찾기</button>
                    </div>

                </div>
                
                <div className='pageShare'>
                    <div className='shareTxtNIcon'>
                        <div className='shareTxt'>
                            이 페이지 공유하기
                        </div>
                        <div className='shareIcon'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                </div>

                <div className='footer'>
                    Here comes footer
                </div>






            </div>
        )
    }
}

export default withRouter(Main);