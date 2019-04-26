import React from 'react'
import styled from 'styled-components'

const MainLayout = ({ children }) => (
    <StyledContainer>{children}</StyledContainer>
)

const StyledContainer = styled.div`
    background: linear-gradient(to top right, #cca355, pink);
`

export default MainLayout