import { Button, ButtonProps, styled } from "@mui/material";
import { THEME_COLOR_BLACK, lightGray, white } from './../../theme'

interface StyledSizeButtonProps extends ButtonProps {
  displaySize: string
}

interface StylesSetCountButtonProps extends ButtonProps {
  setCountIconSize: number
}

/**
 * displaySize - 'sm' for mobile, 'lg' for desktop
 */
export const StyledInactiveSizeButton = styled(Button)(({ displaySize }: StyledSizeButtonProps) => ({
  padding: (displaySize === 'lg') ? '12px 24px' : '6px 15px',
  backgroundColor: lightGray,
  borderRadius: '62px',
  color: THEME_COLOR_BLACK[60],

}))

export const StyledActiveSizeButton = styled(Button)(({ displaySize }: StyledSizeButtonProps) => ({
  padding: (displaySize === 'lg') ? '12px 24px' : '6px 15px',
  backgroundColor: THEME_COLOR_BLACK[100],
  borderRadius: '62px',
  color: white,
  '&:hover': {
    backgroundColor: THEME_COLOR_BLACK[60],
  }
}))

export const StyledSetCountButton = styled(Button)(({ setCountIconSize }: StylesSetCountButtonProps) => ({
  border: 'none',
  padding: 0,
  minWidth: setCountIconSize,
  width: setCountIconSize,
  height: setCountIconSize,
  borderRadius: '1rem',
  '&:hover': {
    border: 'none'
  }
}))