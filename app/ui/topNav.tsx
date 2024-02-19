import Link from "next/link";

export default function TopNav() {
  return (
    <div className='flex justify-end'>
      <ul className='flex p-2'>
        <li className='p-1'>
          <Link href='/'>Home</Link>
        </li>
        <li className='p-1'>
          <Link href='/posts'>Posts</Link>
        </li>
      </ul>
    </div>
  );
}
