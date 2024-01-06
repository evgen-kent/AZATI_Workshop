import { Button, ButtonProps, styled } from '@mui/material';
import { white } from '../../../theme';

interface PrimaryButtonProps extends ButtonProps {
  height: number;
  padding?: number[];
  width: number;
}

/**
 * Sample for such buttons "Shop Now", "Add to Cart", "Write a Review", "Apply Filter", "Apply", "Go to Checkout".
 *
 * @param width
 * @param height
 * @param padding (not necessary). Default value: 16px, 54px. You can change it by writing padding={[vertical_padding, horizontal_padding]}
 */
const PrimaryButton = styled(Button)<PrimaryButtonProps>(
  ({ theme, width, height, padding }) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: '62px',
    color: white,
    height: height,
    padding: padding || [16, 54],
    textTransform: 'none',
    width: width,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  })
);

export default PrimaryButton;
