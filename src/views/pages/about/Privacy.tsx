import * as React from 'react';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

interface Props {}

const Privacy: React.FC<Props> = () => {
  const fontSize = '16px';
  return (
    <Box pl={50} pr={50} pt={5} pb={5}>
      <Typography variant="h3" style={{ textAlign: 'center' }}>
        Privacy Policy
      </Typography>
      <Divider style={{ marginTop: '15px', marginBottom: '20px' }} />
      <p style={{ fontSize }}>
        Your privacy is important to us. It is Job Trackify's policy to respect
        your privacy regarding any information we may collect from you across
        our website,{' '}
        <a href="http://www.jobtrackify.com">http://www.jobtrackify.com</a>, and
        other sites we own and operate.
      </p>
      <p style={{ fontSize }}>
        We only ask for personal information when we truly need it to provide a
        service to you. We collect it by fair and lawful means, with your
        knowledge and consent. We also let you know why we’re collecting it and
        how it will be used.
      </p>
      <p style={{ fontSize }}>
        We only retain collected information for as long as necessary to provide
        you with your requested service. What data we store, we’ll protect
        within commercially acceptable means to prevent loss and theft, as well
        as unauthorised access, disclosure, copying, use or modification.
      </p>
      <p style={{ fontSize }}>
        We don’t share any personally identifying information publicly or with
        third-parties, except when required to by law.
      </p>
      <p style={{ fontSize }}>
        Our website may link to external sites that are not operated by us.
        Please be aware that we have no control over the content and practices
        of these sites, and cannot accept responsibility or liability for their
        respective privacy policies.
      </p>
      <p style={{ fontSize }}>
        You are free to refuse our request for your personal information, with
        the understanding that we may be unable to provide you with some of your
        desired services.
      </p>
      <p style={{ fontSize }}>
        Your continued use of our website will be regarded as acceptance of our
        practices around privacy and personal information. If you have any
        questions about how we handle user data and personal information, feel
        free to contact us.
      </p>
      <p style={{ fontSize }}>
        <strong>This policy is effective as of 11 November 2020.</strong>
      </p>
    </Box>
  );
};

export default Privacy;
