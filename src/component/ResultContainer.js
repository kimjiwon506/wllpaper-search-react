import styled from 'styled-components';
import { useState, useEffect } from 'react';
import DummyData from '../asset/dummyData';
import ImageCard from './ImageCard';
import ImageModal from './ImageModal';
import Pagination from './Pagination';
import EmptyResult from './EmptyResult';
import getWallPapers from '../api/getWallPapers';

const Container = styled.div`
    max-width: 1830px;
    margin: 8px auto;
    padding-right: 8px;
`;

const ResultsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

const ResultContainer = () => {
    // const data = DummyData;
    const [data, setData] = useState({});

    useEffect(() => {
        const fetch = async () => {
            const data = await getWallPapers();
            setData(data);
        };
        fetch();
    }, []);

    return (
        <Container>
            {/* ImgCard 클릭 시 해당 이미지의 정보로 ImageModal이 나타나야 합니다. */}
            {/* <ImageModal /> */}
            <Pagination />
            <ResultsWrapper>
                {data.hits?.map((imgData) => (
                    <ImageCard key={imgData.id} imgData={imgData} />
                ))}
                {/* 검색 결과가 없을 시 페이지네이션과 ImgCard 목록 대신 EmptyResult가 렌더되어야 합니다. */}
                {/* <EmptyResult /> */}
            </ResultsWrapper>
        </Container>
    );
};

export default ResultContainer;
