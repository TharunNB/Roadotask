export const menu = [
  {
    id: 1,
    title: "DASHBOARD",
    icon: "home.svg",
    listItems: [
      {
        id: 1,
        title: "Analytics",
        url: "/",
      },
      {
        id: 2,
        title: "Finance",
        url: "/users/1",
      },
      {
        id: 3,
        title: "JobBoard",
        url: "/users/1",
      },
    ],
  },
  {
    id: 2,
    title: "Messages",
    icon: "note.svg",
    listItems: [
    ],
  },
  {
    id: 3,
    title: "Friends",
    icon: "user.svg",
    listItems: [
    ],
  },
  {
    id: 4,
    title: "Apps",
    icon: "app.svg",
    listItems: [
    ],
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Revenue",
  number: "$56,945",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Users",
  number: "76.8%",
  dataKey: "products",
  percentage: -1.7,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Retention",
  number: "12.67%",
  dataKey: "revenue",
  percentage: 0.6,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "New Signups",
  number: "116",
  dataKey: "ratio",
  percentage: 0.00,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};
