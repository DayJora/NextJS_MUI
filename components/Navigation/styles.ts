import { Box, Typography, styled } from '@mui/material';
import { InnerContentWrapper } from '../shared/styles';

export const Wrapper = styled('nav')(({ theme }) => ({
  width: '100%',
  height: 210,
  backgroundColor: '#17171f',

  [theme.breakpoints.down('lg')]: {
    height: 'auto',
    paddingBottom: 24,
  },

  [theme.breakpoints.down('md')]: {
    paddingBottom: 14,
  },
}));

export const InnerWrapper = styled(InnerContentWrapper)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & .MuiTabs-indicator {
    height: 4px;
  }
`;

export const Block = styled(Box)(({ theme }) => ({
  paddingTop: 34,
  marginBottom: 24,
  width: '100%',

  [theme.breakpoints.down('lg')]: {
    paddingTop: 11,
    marginBottom: 13,
  },
}));

export const TabsWrapper = styled(Box)`
  padding-top: 25px;

  .MuiTabs-indicator {
    height: 4px;
  }
`;

export const HelloWrapper = styled(Typography)(({ theme }) => ({
  fontSize: 32,
  fontWeight: 800,

  [theme.breakpoints.down('lg')]: {
    fontSize: 24,
  },
}));

export const Name = styled('span')`
  font-weight: 500;
  color: #aba8b2;
`;

export const Line = styled(Box)`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddProfile = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',

  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const ButtonName = styled('span')(({ theme }) => ({
  marginRight: '10px',

  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));
