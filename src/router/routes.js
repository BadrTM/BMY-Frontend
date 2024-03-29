import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Patients = () => import(/* webpackChunkName: "common" */ "@/pages/Patients.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");
const PatientMain = () => import(/* webpackChunkName: "common" */ "@/pages/PatientMain.vue");
const NurseView = () => import(/* webpackChunkName: "common" */ "@/pages/NurseView.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/patients",
    children: [
      {
        path: "patients",
        name: "patients",
        component: Patients
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      },
      {
        path: "patient-main",
        name: "Home",
        component: PatientMain
      },
      {
        path: "nurse-view",
        name: "nurse-view",
        component: NurseView
      },

    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
