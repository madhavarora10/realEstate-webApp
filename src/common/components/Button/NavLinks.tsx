const NavLinks = (props: any) => {
  const {
    children,
  } = props;
  return (
    <div className="hover:text-primary text-8E8E8E transition-colors  px-4 py-1 rounded-[40px] leading-10 m-0 text-fs-1 font-wt-500 font-primaryRegular break-normal cursor-pointer">
      {children}
    </div>
  );
};

export default NavLinks;
