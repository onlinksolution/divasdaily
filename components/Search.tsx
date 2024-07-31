'use client';

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search() {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <input type="text"
        className='border-none outline-none py-4 px-8 w-2/3 rounded-3xl'
        placeholder="Search"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  )
}
