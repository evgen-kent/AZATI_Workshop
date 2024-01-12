import { styled, Typography } from '@mui/material'
import theme from './../../theme'

export const StyledBody2 = styled(Typography)(() => ({
  marginTop: '23px',
  marginBottom: '31px',
  fontSize: '16px',
  fontWeight: '300',
  letterSpacing: '-0.64px',
  lineHeight: '22px',

  [theme.breakpoints.down('md')]: {
    marginTop: '20px',
    marginBottom: '24px',
    fontSize: '14px',
    letterSpacing: '-0.56px',
    lineHeight: '20px'
  }
}))

export const StyledButtonText = styled(Typography)(() => ({
  fontWeight: '400',
  lineHeight: 'normal',

  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    fontWeight: '500',
    letterSpacing: '-0.64px',
    lineHeight: 'normal',
  }
}))

export const StyledStatisticsValueTypography = styled(Typography)(() => ({
  fontSize: '40px',
  fontWeight: '600',
  lineHeight: 'normal',
  letterSpacing: '-1.6px',

  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    lineHeight: 'normal',
    letterSpacing: '-0.96px'
  }
}))

export const StyledStatisticsValueDefinitionTypography = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: '300',
  lineHeight: '22px',
  letterSpacing: '-0.64px',

  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
    letterSpacing: '-0.48px'
  }
}))
