'use client';

import '@/lib/env';

import LoginForm from '@/components/form/Login';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';

export default function HomePage() {
  return (
    <main className='container min-h-screen mx-auto flex flex-col items-center justify-between bg-white sky'>
      <header className='layout flex justify-center py-4'>
        <ArrowLink href='/part-2' direction='right'>
          Go to Part 2
        </ArrowLink>
      </header>

      <section className='layout text-black'>
        <LoginForm />
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
