import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { IconType } from 'react-icons';

type SearchProps = {
  Icon: IconType;
  placeholder: string;
  backgroundColor: string;
  width: string;
};

const Search = styled('div')(
  ({ backgroundColor, width }: { backgroundColor: string; width: string }) => ({
    marginLeft: '30px',
    borderRadius: '30px',
    backgroundColor: backgroundColor,
    position: 'relative',
    width: width,
    height: '40px',
    color: 'black',
    marginTop: '10px',
    '&:hover': {
      backgroundColor: alpha(backgroundColor, 0.85),
    },
  })
);

const SearchIconWrapper = styled('div')(() => ({
  height: '100%',
  position: 'absolute',
  padding: '0 15px',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: 'inherit',
  width: '100%',
  paddingLeft: '40px',
  paddingRight: '40px',
  paddingTop: '3px',
  height: '100%',
  fontFamily: 'Satoshi-Medium',
}));

const InputBar = ({
  Icon,
  placeholder,
  backgroundColor,
  width,
}: SearchProps) => {
  return (
    <>
      <Search
        key={'SearchBarComponent-root'}
        style={{ width: width, height: '40px' }}
        className={`SearchBarComponent-root}`}
        backgroundColor={backgroundColor}
        width={width}
      >
        <SearchIconWrapper>
          <Icon />
        </SearchIconWrapper>
        <StyledInputBase placeholder={placeholder} />
      </Search>
    </>
  );
};

export default InputBar;
