import { get, URL } from './base';
export type Subcategory = {
  id: string;
  name: string;
};
export type Category = {
  id: string;
  name: string;
  subcategories:Subcategory [];
};
export type queryCategories = {

}
export const getAllMCategories = async (queryString: queryCategories) => {
  const response = await get(`${URL}categories`, queryString);
  return (await response.json()) as Category[];
};