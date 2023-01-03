import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'Tentang Saya'} />
    <Header title="Tentang Saya">Hi, I'm Muhammad Agis</Header>
    <Container center={center}>
      <h3>
      Saya adalah Mahasiswa dari Kampus IT Terhebat yang Berada di Tangerang yaitu "Areta Informatics College". Kesibukan yang Saya geluti saat ini ialah Sharing/Berbagi Ilmu tentang Digital Marketing ke Teman-teman Mahasiswa dan Teman-teman SMK, khususnya seperti Copywriting dan SEO. || 
      jangan lupa Add Friends Facebook Saya {' '}
        <a href="https://www.facebook.com/agis3636/">klik here.</a>
      </h3>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
