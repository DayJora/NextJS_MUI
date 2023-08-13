import { Box, SwitchProps, Typography, styled } from '@mui/material';
import { Switch } from '@mui/material';
import { InnerContentWrapper } from '../shared/styles';

export const Wrapper = styled('main')(({ theme }) => ({
  width: '100%',
  backgroundColor: '#17171f',
  paddingBottom: 47,

  [theme.breakpoints.down('md')]: {
    paddingBottom: 17,
  },
}));

export const InnerWrapper = styled(InnerContentWrapper)`
  padding: 34px 80px 0;
  flex-direction: column;
  justify-content: space-between;
  height: inherit;
  color: white;
`;

export const ContentBox = styled(Box)(({ theme }) => ({
  borderRadius: 10,
  padding: '30px 38px',
  background: '#23222a',
  width: '100%',

  [theme.breakpoints.down('lg')]: {
    padding: '30px 20px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '30px 10px',
  },
}));

export const ProfilesList = styled('ul')(({ theme }) => ({
  display: 'flex',
  marginTop: 26,
  marginBottom: 110,
  gap: 40,
  flexWrap: 'wrap',

  [theme.breakpoints.down('sm')]: {
    gap: 10,
    marginBottom: 94,
  },
}));

export const EmptyProfileBox = styled('li')(({ theme }) => ({
  border: '1px solid rgba(255, 255, 255, 0.2)',
  width: 250,
  height: 280,
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  cursor: 'pointer',
  padding: 20,

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 210,
  },
}));

export const ProfileBox = styled(EmptyProfileBox)`
  border: none;
  background: #171721;
  cursor: default;
  justify-content: space-between;
`;

export const ActionBox = styled(Box)`
  width: 210px;
  height: 50px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserGender = styled(Box)<{ gender: number }>`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: ${({ gender }) => (gender === 0 ? '#0075FF' : '#9B51E0')};
`;

export const ProfileInformation = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
`;

export const UserName = styled(Typography)`
  font-size: 24px;
  color: #aba8b2;
  width: 100%;
  font-weight: 500;
`;

export const Settings = styled(Box)`
  margin-top: 37px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SettingLine = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'space-between',
  },
}));

export const SettingName = styled(Box)(({ theme }) => ({
  width: 380,
  fontSize: 18,
  fontWeight: 700,
  color: '#aba8b2',

  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
    width: 169,
    marginRight: 17,
  },
}));

export const SettingInputWrapper = styled(Box)(({ theme }) => ({
  fontWeight: 800,
  fontSize: 20,
  display: 'flex',
  gap: 8,
  width: 172,
  flexShrink: 0,

  [theme.breakpoints.down('md')]: {
    width: 150,
  },

  [theme.breakpoints.down('sm')]: {
    width: 150,
    justifyContent: 'flex-end',
  },
}));

export const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 60,
  height: 30,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 3,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(30px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#0075FF',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#0075FF',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 24,
    height: 24,
  },
  '& .MuiSwitch-track': {
    borderRadius: 15,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
