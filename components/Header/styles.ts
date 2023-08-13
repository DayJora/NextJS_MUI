import { Box, styled } from '@mui/material';

export const Wrapper = styled('header')(({ theme }) => ({
  width: '100%',
  height: '100px',
  backgroundColor: '#35373d',

  [theme.breakpoints.down('lg')]: {
    backgroundColor: '#0A0A14',
    height: '60px',

    position: 'static',
    top: 0,
    zIndex: 10,
  },
}));

export const Search = styled(Box)(({ theme }) => ({
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',
  fontSize: '18px',
  fontWeight: 600,

  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const MobileSearch = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    alignItems: 'center',
  },
}));
