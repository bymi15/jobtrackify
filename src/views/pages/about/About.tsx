import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(5),
      flexGrow: 1,
    },
    marginTop: {
      marginTop: theme.spacing(5),
    },
    paddingBottom: {
      paddingBottom: theme.spacing(5),
    },
    mainTextWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start',
      height: '70vh',
    },
    mainText: {
      color: '#3f51b5',
      fontSize: '3.3rem',
      '& span': {
        color: '#f50057',
      },
      marginBottom: theme.spacing(1),
    },
    subText: {
      color: '#747474',
      fontSize: '1.3rem',
      marginBottom: theme.spacing(2),
    },
    media: {
      height: 260,
    },
  })
);

interface Props {}

const About: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.paddingBottom}>
      <Grid container alignItems="center">
        <Grid item sm={12} md={6} className={classes.mainTextWrapper}>
          <h1 className={classes.mainText}>
            Organise your job applications with <br />
            <span>Job Trackify</span>
          </h1>
          <div className={classes.subText}>Simple, easy, and free to use.</div>
        </Grid>
        <Hidden smDown>
          <Grid item sm={12} md={6}>
            <Paper variant="outlined">
              <img
                src={require('../../../assets/images/about/about1.png')}
                alt="about1.png"
                width="100%"
              />
            </Paper>
          </Grid>
        </Hidden>
      </Grid>
      <Divider />
      <Grid
        container
        spacing={4}
        alignItems="center"
        className={classes.marginTop}
      >
        <Grid item sm={6} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require('../../../assets/images/about/about1.png')}
                title="Drag and drop dashboard"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Drag-and-Drop Kanban Board
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  View all your job applications in an organised Kanban board
                  with drag and drop interactions
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={6} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require('../../../assets/images/about/about2.png')}
                title="Drag and drop dashboard"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Job Details
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Track and record every detail about your job application with
                  Job Trackify
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={6} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require('../../../assets/images/about/about3.png')}
                title="Drag and drop dashboard"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Company Search Box
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Can't find your company? Email us at{' '}
                  <Link href="mailto:contact@jobtrackify.com">
                    contact@jobtrackify.com
                  </Link>{' '}
                  so we can add it in
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={6} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require('../../../assets/images/about/about4.png')}
                title="Drag and drop dashboard"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Multiple boards
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Organise and group your job applications in different boards
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
