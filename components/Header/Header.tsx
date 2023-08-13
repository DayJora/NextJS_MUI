import {
  Box,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import * as S from './styles';
import Image from 'next/image';
import { useState } from 'react';
import { ContentWrapper, InnerContentWrapper } from '../shared/styles';
import { MobileNavMenu } from './nav';

export const headerTabs = [
  { id: 0, value: 'О компании' },
  { id: 1, value: 'Личный кабинет' },
  { id: 2, value: 'Сериалы' },
  { id: 3, value: 'Фильмы' },
  { id: 4, value: 'Передачи' },
  { id: 5, value: 'Детям' },
  { id: 6, value: 'Архив' },
];

export const Header = () => {
  const [tab, setTab] = useState<number>(0);
  const theme = useTheme();
  const isLowerThanLG = useMediaQuery(theme.breakpoints.down('lg'));

  const handleChange = (tab: number) => setTab(tab);

  return (
    <S.Wrapper>
      <ContentWrapper>
        <InnerContentWrapper>
          <Box sx={{ display: 'flex', gap: '70px' }}>
            <Image
              src="/logo.svg"
              width={isLowerThanLG ? 131 : 167}
              height={isLowerThanLG ? 31 : 40}
              alt="logo"
            />
            <Tabs
              component={'nav'}
              sx={{
                height: 34,
                display: { xs: 'none', lg: 'flex' },
              }}
              value={tab}
              onChange={(_, newValue) => handleChange(newValue)}
            >
              {headerTabs.map((d) => (
                <Tab
                  sx={{ fontSize: 18, fontWeight: 600, padding: 0 }}
                  value={d.id}
                  label={d.value}
                  key={d.id}
                />
              ))}
            </Tabs>
          </Box>
          <S.Search>
            <Image
              src="/search_small.svg"
              width={25}
              height={25}
              alt="search"
            />
            <Typography>Поиск</Typography>
          </S.Search>
          <S.MobileSearch>
            <Image src="/search.svg" width={40} height={40} alt="search" />
            <MobileNavMenu />
          </S.MobileSearch>
        </InnerContentWrapper>
      </ContentWrapper>
    </S.Wrapper>
  );
};
