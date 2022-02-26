import styled from 'styled-components';
import {CircularProgress,Box} from '@mui/material';


export const Container = styled(Box)`
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
     margin-top: 10em;
`

export const ProgressText = styled.h4 `
    font-weight: 800;
    color: #fff;
`

export const Spinner = styled(CircularProgress)`
     color: #fff;
`