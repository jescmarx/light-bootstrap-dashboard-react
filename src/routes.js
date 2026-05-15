/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import SourceManagement from "views/SourceManagement.js";
import ArticleDatabase from "views/ArticleDatabase.js";
import Maps from "views/Maps.js";
import Timeline from "views/Timeline.js";
import Profiles from "views/Profiles.js";
import BriefBuilder from "views/BriefBuilder.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Monitor Home",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/sources",
    name: "Sources",
    icon: "nc-icon nc-paper-2",
    component: SourceManagement,
    layout: "/admin"
  },
  {
    path: "/articles",
    name: "Database",
    icon: "nc-icon nc-notes",
    component: ArticleDatabase,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Map View",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/timeline",
    name: "Timeline",
    icon: "nc-icon nc-time-alarm",
    component: Timeline,
    layout: "/admin"
  },
  {
    path: "/profiles",
    name: "Profiles",
    icon: "nc-icon nc-bank",
    component: Profiles,
    layout: "/admin"
  },
  {
    path: "/brief-builder",
    name: "Brief Builder",
    icon: "nc-icon nc-single-copy-04",
    component: BriefBuilder,
    layout: "/admin"
  }
];

export default dashboardRoutes;
