import {
  Box,
  Button,
  Divider,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import * as S from './styles';
import Image from 'next/image';
import { FC, useState } from 'react';
import { ContentWrapper } from '../shared/styles';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

interface IProfile {
  id: number;
  gender: number;
  name: string;
  type: 'main' | 'extra';
}

const profiles: IProfile[] = [
  { id: 0, gender: 0, name: 'Вася П.', type: 'main' },
  { id: 1, gender: 1, name: 'Полина Г.', type: 'extra' },
];

export const Profiles = () => {
  const [archiveQ, setArchiveQ] = useState(0);
  const [onlineQ, setOnlineQ] = useState(0);

  const handleChangeArchiveQ = (event: SelectChangeEvent<number>) =>
    setArchiveQ(+event.target.value);

  const handleChangeOnlineQ = (event: SelectChangeEvent<number>) =>
    setOnlineQ(+event.target.value);

  return (
    <S.Wrapper>
      <ContentWrapper>
        <S.InnerWrapper>
          <S.ContentBox>
            <Typography
              sx={{
                fontSize: { xs: 24, md: 24, lg: 32 },
                fontWeight: 'bold',
                marginBottom: { xs: '27px', sm: '27px', md: 0 },
              }}
            >
              Профили
            </Typography>
            <Divider sx={{ display: { sm: 'block', md: 'none' } }} />
            <S.ProfilesList>
              {profiles.map((d) => (
                <Profile key={d.id} {...d} />
              ))}
              <AddProfile />
            </S.ProfilesList>
            <Typography
              sx={{
                fontSize: { xs: 24, md: 24, lg: 32 },
                fontWeight: 'bold',
                marginBottom: '26px',
              }}
            >
              Настройки
            </Typography>
            <Divider />
            <S.Settings>
              <S.SettingLine>
                <S.SettingName>Запускать видео в новом окне</S.SettingName>
                <S.SettingInputWrapper
                  sx={{ marginLeft: { xs: 0, sm: 0, md: '15px' } }}
                >
                  Да <S.IOSSwitch defaultChecked />
                </S.SettingInputWrapper>
              </S.SettingLine>
              <S.SettingLine>
                <S.SettingName>Качество вещания для архива</S.SettingName>
                <S.SettingInputWrapper>
                  <Select
                    id="archive-select"
                    value={archiveQ}
                    color="primary"
                    variant="outlined"
                    sx={{
                      width: '100%',
                      height: 50,
                      backgroundColor: '#fff',
                      fontSize: 18,
                      fontWeight: 500,
                    }}
                    onChange={handleChangeArchiveQ}
                  >
                    <MenuItem value={0}>HD</MenuItem>
                    <MenuItem value={1}>HDR</MenuItem>
                    <MenuItem value={2}>4k</MenuItem>
                  </Select>
                </S.SettingInputWrapper>
              </S.SettingLine>
              <S.SettingLine>
                <S.SettingName>
                  Качество вещания для прямого эфира
                </S.SettingName>
                <S.SettingInputWrapper>
                  <Select
                    id="online-select"
                    value={onlineQ}
                    sx={{
                      width: '100%',
                      height: 50,
                      backgroundColor: '#fff',
                      fontSize: 18,
                      fontWeight: 500,
                    }}
                    onChange={handleChangeOnlineQ}
                  >
                    <MenuItem value={0}>Высокое</MenuItem>
                    <MenuItem value={1}>Среднее</MenuItem>
                    <MenuItem value={2}>Низкое</MenuItem>
                  </Select>
                </S.SettingInputWrapper>
              </S.SettingLine>
            </S.Settings>
          </S.ContentBox>
        </S.InnerWrapper>
      </ContentWrapper>
    </S.Wrapper>
  );
};

const AddProfile = () => {
  return (
    <S.EmptyProfileBox>
      <Image
        style={{ marginBottom: 57 }}
        src="/add.svg"
        width={50}
        height={50}
        alt="add"
      />
      <S.ActionBox>Добавить профиль</S.ActionBox>
    </S.EmptyProfileBox>
  );
};

const Profile: FC<IProfile> = ({ type, gender, name }) => {
  return (
    <S.ProfileBox>
      <S.ProfileInformation>
        <S.UserGender gender={gender}>
          <Image src="/user.svg" width={32} height={32} alt="user" />
        </S.UserGender>
        <S.UserName>{name}</S.UserName>
      </S.ProfileInformation>
      <S.ActionBox>
        {type === 'extra' ? (
          <Button
            color={'error'}
            variant={'outlined'}
            sx={{
              textTransform: 'none',
              fontSize: 18,
              fontWeight: 700,
              padding: 0,
              height: 50,
              width: 210,
            }}
          >
            Удалить профиль <CloseOutlinedIcon />
          </Button>
        ) : (
          <Box sx={{ color: '#0075FF', fontWeight: 700 }}>Основной профиль</Box>
        )}
      </S.ActionBox>
    </S.ProfileBox>
  );
};
