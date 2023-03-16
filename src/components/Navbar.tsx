import { getAllMenus, Menu } from '@/services/menuService';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { errorApi } from './errors/errorApi';

const Navbar = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAllMenus();
        setLoading(false);
        setMenus(data);
      } catch (error) {
        setLoading(false);
        errorApi(error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <nav>
        <ul>
          {menus.map(({ name, path }, idx) => {
            return (
              <li key={idx}>
                <Link href={`${path}`}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
