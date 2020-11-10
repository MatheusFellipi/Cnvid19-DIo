import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card as CardUI } from '../../../components'
import {
  LabelStyled,
  ValueStyled,
  CardContentStyled
} from './style'

function Card({ valeu, label, color }) {
  return (
    <CardUI>
      <CardContentStyled valeu={color}>
        <ValueStyled>{valeu}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  )
}
export default memo(Card)