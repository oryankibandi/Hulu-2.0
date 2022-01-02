function HeaderItem({ title, Icon }) {
  return (
    <div className='group flex flex-col items-center cursor-pointer w-12 sm:w-20 md:w-30 hover:text-white'>
      <Icon className='w-8 h-8 mb-1 group-hover:animate-bounce' />
      <p className='tracking-widest opacity-0 group-hover:opacity-90'>
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
