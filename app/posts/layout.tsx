import TopNav from "../ui/topNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen flex-col'>
      <div className='w-full p-2 h-12 border-dashed border-2 border-indigo-600 justify-end'>
        <TopNav />
      </div>
      <div className='w-full border-dashed border-2 border-indigo-600'>
        {children}
      </div>
    </div>
  );
}
