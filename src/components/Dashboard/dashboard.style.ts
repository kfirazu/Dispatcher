import styled from "styled-components";

enum DashboardStyleDictonary {
    TITLE_COLOR = '#14142B',
    BG_COLOR = '#FFFFFF',
    MONTH_NAME_COLOR = '#5A5A89'
}

export const StyledDashboardWrapper = styled.div`
max-width: 412px;
width: 100%;
display: flex;
flex-direction: column;
gap: 24px;
max-height: 100%;
padding-left: 1rem;
`

export const StyledChartWrapper = styled.div<{ noArticles: boolean }>`
background-color:${DashboardStyleDictonary.BG_COLOR};
width: 100%;
max-height: 378px;
min-height: 378px;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
border: 1px solid #D9DBE9;
box-shadow: 0px 32px 64px 0px #0000000D;
padding:25px 25px 25px 25px;
border-radius: 20px;
${({ noArticles }) => noArticles && 'justify-content: space-between'};

`

export const StyledHeadingWrapper = styled.div`
width: 89px;
height: 45px;
align-self: start;
`

export const StyledChartHeading = styled.h3`
font-size: 24px;
font-weight: 700;
line-height: 32px;
color: ${DashboardStyleDictonary.TITLE_COLOR};
position: relative;
margin-top: 0;

&::after{
    content: "";
    position: absolute;
    top: 40px;
    left: 0;
    width: 25px;
    border: 2px solid #5A5A89;
    border-radius: 7px;

}

`

export const StyledMonthListWrapper = styled.div`
display: flex;
gap: 40px;
justify-content: center;
`

export const StyledMonthName = styled.div`
color: ${DashboardStyleDictonary.MONTH_NAME_COLOR};
font-weight: 700;
font-size: 13px;
line-height: 18px;
text-transform: uppercase;
&:hover{
    cursor: pointer;
}
`

export const StyledSourceListWrapper = styled.div`
max-width: 372px;
width: 100%;
max-height: 143px;
display: flex;
flex-direction: column;
align-items: center;
overflow-y : auto;
overflow-x: hidden;
gap: 11px;
`

export const StyledDoughnutWrapper = styled.div`
height: 160px;
width:160px;
display: flex;
align-items: center;
justify-content: center;
`

export const StyledLineChartWrapper = styled.div`
height: 150px;
width: 382px;
display: flex;
flex-grow: 1;
justify-content: center;
`

