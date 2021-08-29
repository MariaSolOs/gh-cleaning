import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 90px;
`;

const PageContainer: React.FC = (props) => (
    <Container>{props.children}</Container>
);

export default PageContainer;