import Head from 'next/head';
import { useEffect, useState } from 'react';
import { fetchData } from 'server/apiService';

interface Element {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
}

const Listado = async () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [loading, setLoading] = useState(true);
  var data = await fetchData();
  useEffect(() => {
        setElements(data);
        setLoading(false);
    }, []);
  return (
    <div>
      <Head>
        <title>Listado de elementos</title>
      </Head>
      {loading? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {elements.map(element => (
            <li key={element.id}>
              <img src={element.avatar} alt={element.name} />
              <span>{element.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Listado;