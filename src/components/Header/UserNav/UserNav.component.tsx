import React, { FC } from "react";
import styled from "@emotion/styled/macro";
import { mediaMd, linkColor } from "../../../utils/css.utils";
import { UserNavData } from "../HeaderData";

// #region styled
const UserNavListStyled = styled.ul`
  list-style-type: none;
  display: none;
  justify-content: flex-end;

  & li:not(:first-child) {
    margin-left: 30px;
  }

  ${mediaMd} {
    display: flex;
  }
`; 

const LinkStyled = styled.a`
  ${linkColor('#000')}
  text-decoration: none;
  font-size: 14px;
`;
// #endregion

interface LinkProps {
  href: string;
  text: string;
  className?: string;
}

const Link: FC<LinkProps> = ({href, text, className}) => {
  return (
      <LinkStyled className={className} href={href}>{text}</LinkStyled>
  );
}

interface UserNavProps {
  className?: string;
}

export const UserNav: FC<UserNavProps> = ({className}) => {
  return (
    <nav className={className}>
      <UserNavListStyled>
        {UserNavData.map((el) => (<li key={el.link}>
            <Link href={el.link} text={el.text}/>
          </li>))}
      </UserNavListStyled>
    </nav>
  );
};