import Avatar from '@material-ui/core/Avatar';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { ICompany } from '../store/models';
import LetterAvatar from './LetterAvatar';

interface Props {
  company: ICompany;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const useStyles = makeStyles((theme) =>
  createStyles({
    sm: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    md: {
      width: theme.spacing(5),
      height: theme.spacing(5),
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

const CompanyLogo: React.FC<Props> = ({ company, size }) => {
  const classes = useStyles();
  const sizeClass = size && classes[size];

  return company && company.logo ? (
    <Avatar className={sizeClass} alt="companylogo" src={company.logo} />
  ) : (
    <LetterAvatar size={size} name={company.name} aria-label="company-logo" />
  );
};

export default CompanyLogo;
