import Avatar from '@material-ui/core/Avatar';
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

interface Props {
  name: string;
  color?: string;
}

const LetterAvatar: React.FC<Props> = ({ name, color }) => {
  if (name.length <= 0) return null;

  let avatarText: string = name.charAt(0);
  const names = name.split(' ');
  if (names.length > 1) {
    avatarText = names[0].charAt(0) + names[1].charAt(0);
  }
  const hex = color || stringToHexColor(name);
  return <Avatar style={{ backgroundColor: hex }}>{avatarText}</Avatar>;
};

export default LetterAvatar;
