import Avatar from '@material-ui/core/Avatar';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import * as React from 'react';

const stringToHexColor = (str: string | null): string => {
  if (!str) {
    return '#1976d2';
  }

  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00ffffff).toString(16).toUpperCase();
  return '#' + '00000'.substring(0, 6 - c.length) + c;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    sm: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    lg: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    xl: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  })
);

interface Props {
  name: string;
  color?: string;
  size?: 'sm' | 'lg' | 'xl';
}

const LetterAvatar: React.FC<Props> = ({ name, color, size }) => {
  const classes = useStyles();
  const sizeClass = size && classes[size];
  if (name.length <= 0) return null;

  let avatarText: string = name.charAt(0);
  const names = name.split(' ');
  if (names.length > 1) {
    avatarText = names[0].charAt(0) + names[1].charAt(0);
  }
  const hex = color || stringToHexColor(name);
  return (
    <Avatar className={sizeClass} style={{ backgroundColor: hex }}>
      {avatarText}
    </Avatar>
  );
};

export default LetterAvatar;
