import Avatar from '@material-ui/core/Avatar';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import * as React from 'react';

const stringToHexColor = (str: string | null): string => {
  if (!str) {
    return '#1976d2';
  }
  // https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Convert to 32 bit integer
  }
  return 'hsl(' + (hash % 360) + ', 85%, 43%)';
};

const useStyles = makeStyles((theme) =>
  createStyles({
    sm: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      fontSize: '0.875rem',
    },
    md: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      fontSize: '1rem',
    },
    lg: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      fontSize: '1.4rem',
    },
    xl: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      fontSize: '1.7rem',
    },
  })
);

interface Props {
  name: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const LetterAvatar: React.FC<Props> = ({ name, color, size }) => {
  const classes = useStyles();
  const sizeClass = size && classes[size];
  if (name.length <= 0) return null;

  let avatarText: string = name.charAt(0);
  const names = name.split(' ');
  if (names.length > 1) {
    let i = 0,
      j = 1;
    while (i < names.length && j < names.length && i < j) {
      const a = names[i].charAt(0);
      const b = names[j].charAt(0);
      if (!/^[a-zA-Z]+$/.test(a)) {
        i++;
        j++;
        continue;
      }
      if (!/^[a-zA-Z]+$/.test(b)) {
        j++;
        continue;
      }
      avatarText = a + b;
      break;
    }
  }
  const hex = color || stringToHexColor(name);
  return (
    <Avatar className={sizeClass} style={{ backgroundColor: hex }}>
      {avatarText.toUpperCase()}
    </Avatar>
  );
};

export default LetterAvatar;
