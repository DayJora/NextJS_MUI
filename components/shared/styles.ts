import { Box, styled } from '@mui/material';

export const ContentWrapper = styled(Box)`
  max-width: 1440px;
  height: inherit;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InnerContentWrapper = styled('div')(({ theme }) => ({
  padding: '0 80px',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 'inherit',
  color: '#fff',

  [theme.breakpoints.down('lg')]: {
    padding: '0 40px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '0 11px',
  },
}));
