import AboutusContainer from '../../modules/about-us/AboutusContainer';
import { aboutUsAPI } from '../../services/api/aboutUs';

export default AboutusContainer;

export async function getStaticProps() {
  const response = await aboutUsAPI.fetch({ locale: 'en' });
  // console.log('🤯🤯🤯🤯', response);
  return {
    props: {
      ...response,
    },
  };
}
