function TabBody({ children, tab, tabValue }) {
  if (tab === tabValue) return children;
  return <></>;
}

export default TabBody;
