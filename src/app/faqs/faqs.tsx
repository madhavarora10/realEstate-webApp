import FaqsContainer from '../../modules/faqs/FaqsContainer';
import { faqsAPI } from '../../services/api/faqs';

export default FaqsContainer;

export async function getStaticProps() {
  const response = await faqsAPI.fetch({ locale: 'en' });
  // console.log(response)
  return {
    props: {
      ...response,
    },
  };
}
