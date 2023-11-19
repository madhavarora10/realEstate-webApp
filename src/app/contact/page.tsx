import ContactContainer from '../../modules/contact-us/ContactContainer';
import { contactAPI } from '../../services/api/contact';

export default ContactContainer;

export async function getStaticProps() {
  const response = await contactAPI.fetch({ locale: 'en' });
  // console.log(response);
  return {
    props: {
      ...response,
    },
  };
}
