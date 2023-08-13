import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Link,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import * as S from './styles';
import { useState } from 'react';
import { ContentWrapper, InnerContentWrapper } from '../shared/styles';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import LoginIcon from '@mui/icons-material/Login';

const headerTabs = [
  { id: 0, value: 'Настройки и профили' },
  { id: 1, value: 'Тарифный план' },
  { id: 2, value: 'Персональные данные' },
  { id: 3, value: 'Платежные данные' },
  { id: 4, value: 'История просмотров' },
];

export const Navigation = () => {
  const [tab, setTab] = useState<number>(0);
  const theme = useTheme();
  const isLowerThanLG = useMediaQuery(theme.breakpoints.down('lg'));
  const isLowerThanMD = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (tab: number) => setTab(tab);

  return (
    <S.Wrapper>
      <ContentWrapper>
        <S.InnerWrapper>
          <S.Block>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/main">
                Личный кабинет /
              </Link>
            </Breadcrumbs>
            <S.Line>
              <Box display={'flex'} gap={'198px'}>
                <S.HelloWrapper>
                  Привет, <S.Name>Вася П.</S.Name>
                </S.HelloWrapper>
                <S.AddProfile>
                  <AddCircleOutlineRoundedIcon sx={{ height: 32, width: 32 }} />
                  Добавить профиль
                </S.AddProfile>
              </Box>
              <Button
                variant="outlined"
                sx={{
                  textTransform: 'none',
                  fontSize: 18,
                  minWidth: 0,
                  width: { md: 50, lg: 125 },
                  height: 50,
                  padding: { sx: 0 },
                }}
              >
                <S.ButtonName>Выйти</S.ButtonName>
                <LoginIcon sx={{ width: 19 }} />
              </Button>
            </S.Line>
          </S.Block>
          <Divider />

          <Tabs
            component={'nav'}
            sx={{
              height: isLowerThanLG ? 41 : 51,
              marginTop: isLowerThanLG ? '12px' : '24px',
              maxWidth: '100%',
            }}
            value={tab}
            onChange={(_, newValue) => handleChange(newValue)}
            variant="scrollable"
            scrollButtons={false}
          >
            {headerTabs.map((d) => (
              <Tab
                sx={{
                  fontSize: isLowerThanLG ? 16 : 18,
                  fontWeight: 700,
                  padding: 0,
                }}
                value={d.id}
                label={d.value}
                key={d.id}
              />
            ))}
          </Tabs>
        </S.InnerWrapper>
      </ContentWrapper>
    </S.Wrapper>
  );
};
