import * as S from './styles';
import Image from 'next/image';
import { ContentWrapper } from '../shared/styles';

const links = [
  { id: 0, value: 'О компании' },
  { id: 1, value: 'Способы оплаты' },
  { id: 2, value: 'Условия предоставления услуг' },
  { id: 3, value: 'Архив по каналам' },
  { id: 4, value: 'Прямой эфир' },
  { id: 5, value: 'Сериалы' },
  { id: 6, value: 'Факты о кино и ТВ' },
  { id: 7, value: 'Персоналии' },
  { id: 8, value: 'Радио' },
  { id: 9, value: 'Помощь' },
  { id: 10, value: 'Подключение к ТВ' },
];

export const Footer = () => {
  return (
    <S.Wrapper>
      <ContentWrapper>
        <S.InnerWrapper>
          <S.LinksList>
            {links.map((d) => (
              <S.ListElement key={d.id}>
                <S.StyledLink href="#">{d.value}</S.StyledLink>
              </S.ListElement>
            ))}
          </S.LinksList>
          <S.StyledNavUp href="#">
            <Image src="/up.svg" width={50} height={50} alt="add" />
          </S.StyledNavUp>
          <S.Rights>
            ©2005 - {new Date().getFullYear()} eTVnet.com Ethnic Television
            Network Matvil Corp.
          </S.Rights>
        </S.InnerWrapper>
      </ContentWrapper>
    </S.Wrapper>
  );
};
