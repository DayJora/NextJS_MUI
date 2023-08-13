import { Box, Link, styled } from '@mui/material';
import { InnerContentWrapper } from '../shared/styles';

export const Wrapper = styled('footer')(() => ({
  width: '100%',
  height: 'auto',
  backgroundColor: '#23222a',
}));

export const InnerWrapper = styled(InnerContentWrapper)`
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const Rights = styled(Box)`
  width: 100%;
  color: #aba8b2;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  opacity: 0.5;
  height: auto;
  padding: 24px 0;
  border-top: 1px solid #373741;
  text-align: center;
  margin-top: 40px;
`;

export const LinksList = styled('ul')(({ theme }) => ({
  marginTop: 37,
  height: 100,
  columnCount: 4,
  width: '100%',

  [theme.breakpoints.down('lg')]: {
    columnCount: 3,
    height: 150,
  },

  [theme.breakpoints.down('md')]: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

export const ListElement = styled('li')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    '&:nth-child(3n)': {
      marginBottom: 38,
    },
  },
}));

export const StyledLink = styled(Link)`
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
`;

export const StyledNavUp = styled(Link)(({ theme }) => ({
  position: 'absolute',
  top: 17,
  right: 80,

  [theme.breakpoints.down('lg')]: {
    right: 40,
  },

  [theme.breakpoints.down('sm')]: {
    right: 10,
  },
}));
