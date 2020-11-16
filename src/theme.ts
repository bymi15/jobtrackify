import { createMuiTheme } from '@material-ui/core/styles';

// Example:
// const theme = createMuiTheme({
//   palette: {
//     secondary: {
//       main: orange[500],
//     },
//   },
// });

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    scrollbar: {
      scrollbarWidth: 'auto' | 'thin' | 'none' | 'inherit';
      overflowX: 'auto' | 'hidden' | 'scroll';
      overflowY: 'auto' | 'hidden' | 'scroll';
      '&::-webkit-scrollbar': unknown;
      '&::-webkit-scrollbar-track': unknown;
      '&::-webkit-scrollbar-thumb': unknown;
      '&::-webkit-scrollbar-thumb:hover': unknown;
      '&::-webkit-scrollbar-thumb:active': unknown;
    };
  }

  interface ThemeOptions {
    scrollbar?: {
      scrollbarWidth?: 'auto' | 'thin' | 'none' | 'inherit';
      overflowX?: 'auto' | 'hidden' | 'scroll';
      overflowY?: 'auto' | 'hidden' | 'scroll';
      '&::-webkit-scrollbar'?: unknown;
      '&::-webkit-scrollbar-track'?: unknown;
      '&::-webkit-scrollbar-thumb'?: unknown;
      '&::-webkit-scrollbar-thumb:hover'?: unknown;
      '&::-webkit-scrollbar-thumb:active'?: unknown;
    };
  }
}

const theme = createMuiTheme({
  scrollbar: {
    scrollbarWidth: 'thin',
    overflowX: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#CCC',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#AAA',
    },
    '&::-webkit-scrollbar-thumb:active': {
      background: '#666',
    },
  },
});

export default theme;
