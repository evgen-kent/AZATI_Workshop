import { Button, ButtonProps, styled } from '@mui/material';
import { THEME_COLOR_BLACK, lightGray, white } from '../../../theme';

interface SecondaryButtonProps extends ButtonProps {
  height: number;
  padding?: number[];
  width: number;
}

/**
 * Sample for such button "Latest" and for a group of buttons in sections "Choose Size" and "Pages".
 *
 * @param height
 * @param width
 * @param padding (not necessary). Default value: 10px, 20px. You can change it by writing padding={[vertical_padding, horizontal_padding]}
 */
const SecondaryButton = styled(Button)<SecondaryButtonProps>(
  ({ theme, width, height, padding }) => ({
    backgroundColor: lightGray,
    borderRadius: '62px',
    color: theme.palette.primary.light,
    height: height,
    padding: padding || [10, 20],
    textTransform: 'none',
    width: width,
    '&:active': {
      backgroundColor: theme.palette.primary.main,
      color: white,
    },
    '&:hover': {
      backgroundColor: THEME_COLOR_BLACK[20],
    },
  })
);

export default SecondaryButton;
