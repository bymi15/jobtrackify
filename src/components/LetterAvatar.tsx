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
  firstName: string | null;
  lastName: string | null;
}

const LetterAvatar: React.FC<Props> = ({ firstName, lastName }) => {
  const avatarText: string =
    !!firstName && !!lastName ? firstName.charAt(0) + lastName.charAt(0) : '';
  const hex = stringToHexColor(`${firstName}${lastName}`);
  return <Avatar style={{ backgroundColor: hex }}>{avatarText}</Avatar>;
};

export default LetterAvatar;
