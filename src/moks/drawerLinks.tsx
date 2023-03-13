interface IDrawerListItem {
  id: number;
  name: string;
}

const GetDrawerLinks = (): IDrawerListItem[] => {
  const drawerList: IDrawerListItem[] = [
    {
      id: 1,
      name: "Products",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "contact",
    },
  ];

  return drawerList;
};

export default GetDrawerLinks;