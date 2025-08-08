'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
const [query, setQuery] = useState('');

const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (!query.trim()) {
    toast.error('Please enter a search term.');
    return;
  }
  onSubmit(query);
  setQuery('');
};

  return (
     <header className={css.header}>
      <div className={css.container}>
        <a
          className={css.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
    
    <form onSubmit={handleSearch} className={css.form}>
      <input
        type="text"
        name="search"
        className={css.input}
        placeholder="Search movies..."
        autoComplete="off"
            autoFocus
            value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
        </form>
        </div>
        </header>
  );
}
