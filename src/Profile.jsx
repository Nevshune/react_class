import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
width : 100% ;
height : 100vh;
background : rgba(0, 0, 0, 0.2);
display:flex ;
justify-content : center;
padding : 64px 0;
`;

const InnerContainer = styled.div`
width : 1000px;
height : 200px;
background : rgba(0, 0, 0, 0.3);
`;
const GridContainer = styled.div`
display : grid;
gap : 10px;
grid-template-columns: 1fr 1fr 1fr;
`
const MainBox = styled.div`
background : white;
padding : 30px;
border-radius : 40px 0 40px 40px;
div {
    width : 50px;
    height: 50px;
    background : green;
};

h4 {
    font-size : 1.5em;
    margin : 50px 0;

};

h2 {
    font-size : 2em;
    font-weight : bold;
    margin-bottom : 50px;
};

.Text_01 {
    font-size : 1.25em;
    line-height : 1.5em;
};

a {
    display : block;
    margin-top : 100px;
    text-decoration: none;
    color : black;
};

&:hover {
    background : #c81212;
    color :white;
    a {
        color :white;
    };
    
}







`;



export default function Profile() {
    return (
        <Container>{/* 100px 중앙정렬용 컨테이너 */}
            <InnerContainer>{/* 그리드 */}
                <GridContainer>

                    <MainBox>{/* 내부박스 */}
                        <div><FontAwesomeIcon icon="fa-regular fa-house" /></div>
                        <h4>임차인입니다</h4>
                        <h2>허위매물 제로!</h2>
                        <p class="Text_01">전수조사 기반 압도적</p>
                        <p class="Text_01">질과 양의 매물을 제공합니다</p>
                        <a href="#">사무실 구매하기 &nbsp;&nbsp; &gt;</a>
                    </MainBox>

                    <MainBox>{/* 내부박스 */}
                        <div>img2</div>
                        <h4>임차인입니다</h4>
                        <h2>허위매물 제로!</h2>
                        <p class="Text_01">전수조사 기반 압도적</p>
                        <p class="Text_01">질과 양의 매물을 제공합니다</p>
                        <a href="#">사무실 구매하기 &nbsp;&nbsp; &gt;</a>
                    </MainBox>

                    <MainBox>{/* 내부박스 */}
                        <div>img3</div>
                        <h4>임차인입니다</h4>
                        <h2>허위매물 제로!</h2>
                        <p class="Text_01">전수조사 기반 압도적</p>
                        <p class="Text_01">질과 양의 매물을 제공합니다</p>
                        <a href="#">사무실 구매하기 &nbsp;&nbsp; &gt;</a>
                    </MainBox>




                </GridContainer>
            </InnerContainer>
        </Container>
    )
}