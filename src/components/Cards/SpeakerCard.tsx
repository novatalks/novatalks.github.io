import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { ISpeaker } from '../../helpers/interfaces';
import { LinkResolver } from '../../helpers/prismic';

const OuterWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: end;
  height: ${({ theme }) => theme.speakerDivHeight};
  border-bottom: ${({ theme }) => theme.defaultBorderLight} solid
    ${({ theme }) => theme.text};
  box-sizing: border-box;
  box-shadow: inset 0 -7px 0px -5px ${({ theme }) => theme.body};
  > :first-child {
    filter: grayscale(100%);
    z-index: -1;
    max-width: ${({ theme }) => {
      return (
        parseInt(theme.speakerDivHeight) -
        2 * parseInt(theme.defaultBorderLight) +
        'px'
      );
    }};
    min-width: ${({ theme }) => {
      return (
        parseInt(theme.speakerDivHeight) -
        2 * parseInt(theme.defaultBorderLight) +
        'px'
      );
    }};
    max-height: ${({ theme }) => {
      return (
        parseInt(theme.speakerDivHeight) -
        2 * parseInt(theme.defaultBorderLight) +
        'px'
      );
    }};
    min-height: ${({ theme }) => {
      return (
        parseInt(theme.speakerDivHeight) -
        2 * parseInt(theme.defaultBorderLight) +
        'px'
      );
    }};
  }

  > :nth-child(2) {
    display: flex;
    margin: 0 10px;
    height: 1.5rem;
    transition: height ${({ theme }) => theme.transitionSpeed} ease;
    p {
      font: 300 1.2rem 'Raleway', sans-serif;
      text-align: center;
    }
  }
  &:hover {
    > :first-child {
      filter: unset;
    }
    > :nth-child(2) {
      height: 65%;
    }
  }
`;

const PosDiv = styled.div`
  position: absolute;
`;

interface Props {
  speaker: ISpeaker;
}

export default function SpeakerCard({ speaker }: Props) {
  return (
    <LinkResolver page={speaker}>
      <OuterWrapper key={speaker.page.uid}>
        <div>
          <Image
            src={speaker.image.url}
            alt={speaker.name + ' profile picture'}
            height={85}
            width={85}
            objectFit={'cover'}
          />
        </div>
        <div>
          <PosDiv></PosDiv>
          <p>{speaker.name}</p>
        </div>
      </OuterWrapper>
    </LinkResolver>
  );
}
