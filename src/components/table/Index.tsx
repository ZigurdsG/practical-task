import { ImSpinner2 } from 'react-icons/im';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';

import '@/styles/table.css';

import { useCurrencyFetch } from '@/components/table/hooks';

import { currencyMap } from '@/constant';

const apiUrl = 'https://653fb0ea9e8bd3be29e10cd4.mockapi.io/api/v1';
const apiUrlCurrencies = `${apiUrl}/currencies`;

export default function ResponsiveTable(): React.JSX.Element {
  const { currencyData /* , error */ } = useCurrencyFetch(apiUrlCurrencies);

  return (
    <>
      <h3 className='text-center mb-4'>
        I ran out of time, so the table isn't finished.
      </h3>
      <Table className='border border-separate border-slate-300'>
        <Thead>
          <Tr className='bg-slate-200 text-slate-500'>
            <Th>Name</Th>
            <Th>Balance</Th>
          </Tr>
        </Thead>
        <Tbody className='text-center'>
          {currencyData?.length < 1 ? (
            <Tr>
              <Td colspan={2} className='py-4'>
                <div className='flex h-10 place-content-center text-5xl leading-none   text-neutral-400'>
                  <ImSpinner2 className='animate-spin' />
                </div>
              </Td>
            </Tr>
          ) : (
            currencyData?.map((currency) => (
              <Tr key={currency.currencyId}>
                <Td className='font-bold'>
                  {currencyMap[currency.currencyId] || currency.currencyId}
                </Td>
                <Td>{currency.amount}</Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </>
  );
}
