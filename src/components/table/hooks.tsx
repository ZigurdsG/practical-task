import { useEffect, useState } from 'react';

interface CurrencyData {
  amount: string;
  updatedAt: string;
  currencyId: string;
}

export type CurrencyDataType = CurrencyData[];

export const useCurrencyFetch = (endPoint: string) => {
  const [currencyData, setCurrencyData] = useState<[] | CurrencyDataType>([]);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const response = await fetch(endPoint);
        if (!response.ok) {
          throw new Error('Failed to fetch currency data');
        }
        const data = await response.json();
        setCurrencyData(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
          // console.log('Failed to fetch currency data:', error.message);
        } else {
          setError('An unexpected error occurred');
          // console.log('An unexpected error occurred:', error);
        }
      }
    };

    fetchCurrency();
  }, [endPoint]);

  return { currencyData, error };
};
