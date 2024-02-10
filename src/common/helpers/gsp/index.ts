import { cookies } from 'next/headers';
import { getAllProperties } from '../../../../libs/getData';

export const getDatafor = async () => {
  const cookiesStore = cookies();
  if (cookiesStore.get('location').value) {
    const userInput = {
      location: cookiesStore.get('location').value,
      propertyType: cookiesStore.get('type').value,
      priceLte: cookiesStore.get('price').value,
    };
    const data = await getAllProperties(userInput);
    return data;
  }
  return null;
};
