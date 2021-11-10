import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import config from '../../../config';

interface Props {}

const Terms: React.FC<Props> = () => {
  return (
    <Box pl={50} pr={50} pt={5} pb={5}>
      <Typography variant="h3" style={{ textAlign: 'center' }}>
        Terms of Service
      </Typography>
      <Divider style={{ marginTop: '15px', marginBottom: '20px' }} />
      <h3>1. Terms</h3>
      <p>
        By accessing the website at{' '}
        <a href={config.HOME_URL}>{config.HOME_URL}</a>, you are agreeing to be
        bound by these terms of service, all applicable laws and regulations,
        and agree that you are responsible for compliance with any applicable
        local laws. If you do not agree with any of these terms, you are
        prohibited from using or accessing this site. The materials contained in
        this website are protected by applicable copyright and trademark law.
      </p>
      <h3>2. Use Licence</h3>
      <ol type="a">
        <li>
          Permission is granted to temporarily download one copy of the
          materials (information or software) on Job Trackify's website for
          personal, non-commercial transitory viewing only. This is the grant of
          a licence, not a transfer of title, and under this licence you may
          not:
          <ol type="i">
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </li>
            <li>
              attempt to decompile or reverse engineer any software contained on
              Job Trackify's website;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              transfer the materials to another person or "mirror" the materials
              on any other server.
            </li>
          </ol>
        </li>
        <li>
          This licence shall automatically terminate if you violate any of these
          restrictions and may be terminated by Job Trackify at any time. Upon
          terminating your viewing of these materials or upon the termination of
          this licence, you must destroy any downloaded materials in your
          possession whether in electronic or printed format.
        </li>
      </ol>
      <h3>3. Disclaimer</h3>
      <ol type="a">
        <li>
          The materials on Job Trackify's website are provided on an 'as is'
          basis. Job Trackify makes no warranties, expressed or implied, and
          hereby disclaims and negates all other warranties including, without
          limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual
          property or other violation of rights.
        </li>
        <li>
          Further, Job Trackify does not warrant or make any representations
          concerning the accuracy, likely results, or reliability of the use of
          the materials on its website or otherwise relating to such materials
          or on any sites linked to this site.
        </li>
      </ol>
      <h3>4. Limitations</h3>
      <p>
        In no event shall Job Trackify or its suppliers be liable for any
        damages (including, without limitation, damages for loss of data or
        profit, or due to business interruption) arising out of the use or
        inability to use the materials on Job Trackify's website, even if Job
        Trackify or a Job Trackify authorised representative has been notified
        orally or in writing of the possibility of such damage. Because some
        jurisdictions do not allow limitations on implied warranties, or
        limitations of liability for consequential or incidental damages, these
        limitations may not apply to you.
      </p>
      <h3>5. Accuracy of materials</h3>
      <p>
        The materials appearing on Job Trackify's website could include
        technical, typographical, or photographic errors. Job Trackify does not
        warrant that any of the materials on its website are accurate, complete
        or current. Job Trackify may make changes to the materials contained on
        its website at any time without notice. However Job Trackify does not
        make any commitment to update the materials.
      </p>
      <h3>6. Links</h3>
      <p>
        Job Trackify has not reviewed all of the sites linked to its website and
        is not responsible for the contents of any such linked site. The
        inclusion of any link does not imply endorsement by Job Trackify of the
        site. Use of any such linked website is at the user's own risk.
      </p>
      <h3>7. Modifications</h3>
      <p>
        Job Trackify may revise these terms of service for its website at any
        time without notice. By using this website you are agreeing to be bound
        by the then current version of these terms of service.
      </p>
      <h3>8. Governing Law</h3>
      <p>
        These terms and conditions are governed by and construed in accordance
        with the laws of London and you irrevocably submit to the exclusive
        jurisdiction of the courts in that State or location.
      </p>
    </Box>
  );
};

export default Terms;
