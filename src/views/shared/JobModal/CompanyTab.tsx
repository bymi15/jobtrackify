import * as React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CompanyLogo from '../../../components/CompanyLogo';
import Typography from '@material-ui/core/Typography';
import { EditText, EditTextarea } from 'react-edit-text';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ICompany } from '../../../store/models';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editabletext: {
      fontSize: '16px',
      fontWeight: 400,
    },
    label: {
      paddingTop: '6px',
      fontSize: '16px',
      fontWeight: 600,
    },
    tabPanel: {
      maxHeight: '45vh',
      padding: '5px',
      paddingLeft: '25px',
      paddingRight: '25px',
      [theme.breakpoints.down('sm')]: {
        maxHeight: '50vh',
      },
    },
    scrollbar: {
      height: '45vh',
      ...theme.scrollbar,
    },
  })
);

interface Props {
  company: ICompany;
}

const CompanyTab: React.FC<Props> = ({ company }) => {
  const classes = useStyles();
  return (
    <div className={classes.scrollbar}>
      <Grid container spacing={1} className={classes.tabPanel}>
        <Grid container spacing={1}>
          <Box display="flex" flexDirection="row" mt={2} mb={1}>
            <CompanyLogo company={company} size="md" />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              pl={2}
            >
              <Typography color="textPrimary" variant="h5">
                {company.name}
              </Typography>
            </Box>
          </Box>
        </Grid>
        {company.description && (
          <Grid container spacing={1}>
            <Grid item sm={12}>
              <EditTextarea
                className={classes.editabletext}
                value={company.description}
                readonly
                rows={4}
              />
            </Grid>
          </Grid>
        )}
        {company.type && (
          <Grid container spacing={1}>
            <Grid item sm={4}>
              <Typography color="textPrimary" className={classes.label}>
                Type:
              </Typography>
            </Grid>
            <Grid item sm={8}>
              <EditText
                className={classes.editabletext}
                value={company.type}
                readonly
              />
            </Grid>
          </Grid>
        )}
        {company.website && (
          <Grid container spacing={1}>
            <Grid item sm={4}>
              <Typography color="textPrimary" className={classes.label}>
                Website:
              </Typography>
            </Grid>
            <Grid item sm={8}>
              <EditText
                className={classes.editabletext}
                value={company.website}
                readonly
              />
            </Grid>
          </Grid>
        )}
        {company.industry && (
          <Grid container spacing={1}>
            <Grid item sm={4}>
              <Typography color="textPrimary" className={classes.label}>
                Industry:
              </Typography>
            </Grid>
            <Grid item sm={8}>
              <EditText
                className={classes.editabletext}
                value={company.industry}
                readonly
              />
            </Grid>
          </Grid>
        )}
        {company.foundedYear && (
          <Grid container spacing={1}>
            <Grid item sm={4}>
              <Typography color="textPrimary" className={classes.label}>
                Founded:
              </Typography>
            </Grid>
            <Grid item sm={8}>
              <EditText
                className={classes.editabletext}
                value={company.foundedYear.toString()}
                readonly
              />
            </Grid>
          </Grid>
        )}
        {company.headquarters && (
          <Grid container spacing={1}>
            <Grid item sm={4}>
              <Typography color="textPrimary" className={classes.label}>
                Headquarters:
              </Typography>
            </Grid>
            <Grid item sm={8}>
              <EditText
                className={classes.editabletext}
                value={company.headquarters}
                readonly
              />
            </Grid>
          </Grid>
        )}
        {company.country && (
          <Grid container spacing={1}>
            <Grid item sm={4}>
              <Typography color="textPrimary" className={classes.label}>
                Country:
              </Typography>
            </Grid>
            <Grid item sm={8}>
              <EditText
                className={classes.editabletext}
                value={company.country}
                readonly
              />
            </Grid>
          </Grid>
        )}
        {company.sizeRange && (
          <Grid container spacing={1}>
            <Grid item sm={4}>
              <Typography color="textPrimary" className={classes.label}>
                Company size:
              </Typography>
            </Grid>
            <Grid item sm={8}>
              <EditText
                className={classes.editabletext}
                value={company.sizeRange + ' employees'}
                readonly
              />
            </Grid>
          </Grid>
        )}
        {company.currentEmployeeEstimate && (
          <Grid container spacing={1}>
            <Grid item sm={4}>
              <Typography color="textPrimary" className={classes.label}>
                Current employees:
              </Typography>
            </Grid>
            <Grid item sm={8}>
              <EditText
                className={classes.editabletext}
                value={company.currentEmployeeEstimate + ' employees est.'}
                readonly
              />
            </Grid>
          </Grid>
        )}
        {company.totalEmployeeEstimate && (
          <Grid container spacing={1}>
            <Grid item sm={4}>
              <Typography color="textPrimary" className={classes.label}>
                Total employees:
              </Typography>
            </Grid>
            <Grid item sm={8}>
              <EditText
                className={classes.editabletext}
                value={company.totalEmployeeEstimate + ' employees est.'}
                readonly
              />
            </Grid>
          </Grid>
        )}
        {company.linkedInUrl && (
          <Grid container spacing={1}>
            <Grid item sm={4}>
              <Typography color="textPrimary" className={classes.label}>
                LinkedIn Page:
              </Typography>
            </Grid>
            <Grid item sm={8}>
              <Typography
                className={classes.label}
                style={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                <Link
                  href={'https://' + company.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://{company.linkedInUrl}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default CompanyTab;
