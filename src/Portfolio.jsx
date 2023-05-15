import styled from "styled-components"

const Container = styled.div`
width : 100% ;
background : rgba(0, 0, 0, 0.2);
display:flex ;
justify-content : center;
padding : 64px 0;
`;

const InnerContainer = styled.div`
width : 100% ;
background : rgba(0, 0, 0, 0.2);
display:flex ;
flex-wrap : wrap;
padding : 64px 30px;
`

const BoxTitle = styled.div`
    font-size : 64px;
    width : 100%;
`

const BoxSubTitle = styled.div`
    font-size : 32px;
    line-height: 64px;
`

const BackgroundImages = styled.img`
    width : cover
`

const ImageContents = styled.div`
    margin : 10px;
    padding : 64px 64px;
    display : flex;
    justify-content : space-between;
    width : 100%;
    height : 350px;
    border-radius : 20px;
    background : rgba(20,20,20,0.2);    
    background-image : url(header.jpg);
`
const ContentsText = styled.div`
    display : flex ;
    flex-direction : column;
    justify-content : flex-start;

`
const ButtonContainer = styled.div`
    display : flex;
    background : green;
    flex-direction : column;
    justify-content : flex-end;    
    
`

const ContentsButton = styled.div`
    width : 200px;
    height : 40px;
    background : red;
    color : white;
    border-radius : 20px;
    div {
        line-height : 40px;
        text-align : center;
    }
`


export default function Portfolio() {
    return (
        <Container>
            <InnerContainer>

                <BoxTitle>
                    온 · 오프라인 어디에서든
                </BoxTitle>
                <BoxSubTitle>
                    간편하고 빠르게 매매/임대차 투자 인사이트를 확인하세요
                </BoxSubTitle>
                {
                    Array(3).fill("").map((_, i) => <ImageContents>
                        <BackgroundImages
                            src="haeder/jpg"
                            alt="메인이미지"
                        />
                        <ContentsText>
                            <div>카카오 비즈 체널</div>
                            <div>선별된 스마트한 핵심 투자 정보를</div>
                            <div>
                                <div>리스트</div>
                                <div>리스트</div>
                                <div>리스트</div>
                            </div>
                        </ContentsText>
                        <ContentsButton>
                            <div>채널 바로가기</div>
                        </ContentsButton>
                    </ImageContents>)
                }

            </InnerContainer>
        </Container>


    )

}
