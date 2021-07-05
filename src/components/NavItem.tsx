interface NavItemProps {
  label: string;
}

function NavItem(props: NavItemProps): JSX.Element {
  return (
    <>
      <span>-- </span>
      <a href="#">~{props.label.toUpperCase()}</a>
    </>
  );
}

export default NavItem;
