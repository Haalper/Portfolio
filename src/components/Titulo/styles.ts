import styled from 'styled-components'

import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: #282a36;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
