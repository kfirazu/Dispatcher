import { NoDataContainer, NoDataImage, NoDataImageDiv, NoDataText } from "./no-data.style";
import noDataImg from '../../assets/img/no-data.svg'
import dashboardNoDataImg from '../../assets/img/dashboard-no-data.png'



export interface NoDataProps {
    type: 'search' | 'chart';
}

const NewNoData = ({ type }: NoDataProps) => {
    return (
        <NoDataContainer type={type} className="no-data-container">
            <NoDataImageDiv className="no-data-image-div">
                <NoDataImage className="no-data-image" src={type === 'search' ? noDataImg : dashboardNoDataImg} />
            </NoDataImageDiv>
            <NoDataText className="no-data-text">
                {type === 'search'
                    ? "We couldn't find any matches for your query"
                    : 'No data to display'}
            </NoDataText>
        </NoDataContainer>
    );
};

export default NewNoData;