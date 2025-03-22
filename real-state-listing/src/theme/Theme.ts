import { createTheme } from '@mui/material/styles';

const rootStyles = getComputedStyle(document.documentElement);
const darkBlue = rootStyles.getPropertyValue('--dark-blue').trim();
const darkGray = rootStyles.getPropertyValue('--dark-gray').trim();
const offWhite = rootStyles.getPropertyValue('--off-white').trim();

const muiTheme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        thumb: {
          color: darkBlue,
        },
        track: {
          color: offWhite,
        },
        rail: {
          color: darkGray,
        },
        mark: {
          color: darkBlue
        }
      },
    },
  },
});

export default muiTheme;
