import React from "react"
import {
  RiHome4Line,
  RiProfileLine,
  RiSettings2Line,
  RiShoppingCartLine,
  RiExchangeDollarLine,
} from "react-icons/ri"
import { FaBloggerB, FaComments } from "react-icons/fa"

export default [
  {
    path: "/",
    title: "Home",
    icon: <RiHome4Line />,
  },
  {
    path: "/about",
    title: "About",
    icon: <RiProfileLine />,
  },
  {
    path: "/",
    title: "Services",
    icon: <RiSettings2Line />,
    subMenu: [
      {
        path: "/website-design-and-development",
        title: "Website Design & Development",
      },
      {
        path: "/mobile-app-development",
        title: "Mobile App Development",
      },
      {
        path: "/software-development",
        title: "Software Development",
      },
      {
        path: "/automation-software",
        title: "Automation Software",
      },
      {
        path: "/digital-marketing",
        title: "Digital Marketing",
      },
      {
        path: "/search-engine-optimization",
        title: "Search Engine Optimization",
      },
      {
        path: "/graphics-design",
        title: "Graphics Design",
      },
      {
        path: "/data-manipulation",
        title: "Data Scraping & Manipulation",
      },
      {
        path: "/website-and-software-maintenance",
        title: "Website & Software Maintenance",
      },
      {
        path: "/bulk-email-service",
        title: "Bulk Email Service",
      },
    ],
  },
  {
    path: "",
    title: "Products",
    icon: <RiShoppingCartLine />,
    megaMenu: [
      {
        title: "Module-1",
        menu: [
          {
            path: "/portfolio",
            title: "portfolio",
          },
          {
            path: "/pricing",
            title: "pricing",
          },
          {
            path: "/blog",
            title: "blog",
          },
          {
            path: "/contact",
            title: "contact us",
          },
        ],
      },
      {
        title: "Module-2",
        menu: [
          {
            path: "/portfolio",
            title: "portfolio",
          },
          {
            path: "/pricing",
            title: "pricing",
          },
          {
            path: "/blog",
            title: "blog",
          },
          {
            path: "/contact",
            title: "contact us",
          },
        ],
      },
      {
        title: "Module-3",
        menu: [
          {
            path: "/portfolio",
            title: "portfolio",
          },
          {
            path: "/pricing",
            title: "pricing",
          },
          {
            path: "/blog",
            title: "blog",
          },
          {
            path: "/contact",
            title: "contact us",
          },
        ],
      },
      {
        title: "Module-4",
        menu: [
          {
            path: "/portfolio",
            title: "portfolio",
          },
          {
            path: "/pricing",
            title: "pricing",
          },
          {
            path: "/blog",
            title: "blog",
          },
          {
            path: "/contact",
            title: "contact us",
          },
        ],
      },
    ],
  },
  // {
  //     path:'/portfolio',
  //     title:'portfolio'
  // },
  {
    path: "/pricing",
    title: "Pricing",
    icon: <RiExchangeDollarLine />,
  },
  {
    path: "/blogs",
    title: "Blogs",
    icon: <FaBloggerB />,
  },
  {
    path: "/contact",
    title: "Contact Us",
    icon: <FaComments />,
  },
]
