import { get, URL } from './base';
export type Menu = {
  id: string;
  name: string;
  active: string;
  path: string;
};
export const getAllMenus = async () => {
  const response = await get(`${URL}menus`);
  return (await response.json()) as Menu[];
};
