import React, { FC, memo } from 'react';
import css, { SerializedStyles } from '@emotion/css';
import styled from '@emotion/styled'

const StyledSpan = styled('span')<{unicodeChar: string}>`
  ${({unicodeChar}): SerializedStyles => {
    return css`
      &:before{
        font-family: 'iconic';
        display: block;
        content: '${unicodeChar}';
        font-size: 1em;
      }
    `;
  }}
`;

interface IconProps {
  unicodeChar: string;
  className?: string;
}

export const Icon: FC<IconProps> = memo(({unicodeChar, className}) => {
  return (<StyledSpan className={className} unicodeChar={unicodeChar}/>)
});

