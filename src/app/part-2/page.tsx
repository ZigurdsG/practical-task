'use client';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Table from '@/components/table/Index';

export default function ComponentPage() {
  return (
    <main className='container min-h-screen mx-auto flex flex-col items-center justify-between bg-white sky'>
      <header className='layout flex justify-center py-4'>
        <ArrowLink href='/' direction='left'>
          Go to Part 1
        </ArrowLink>
      </header>

      <section className='layout text-black'>
        <Table />
      </section>

      <footer className='layout py-4 text-center'>
        <UnderlineLink
          className='text-lg'
          href='https://github.com/ZigurdsG/practical-task'
        >
          GitHub repo
        </UnderlineLink>
      </footer>
    </main>
  );
}
