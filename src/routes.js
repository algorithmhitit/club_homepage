//routes.js
import Notice from "./components/Notice"
import Mainpage from "./components/Mainpage"

export default [
    {
        path: '/',
        name: 'main-page',
        component: Mainpage
    },
    {
        path: '/notice',
        name: 'notice-page',
        component: Notice
    },
    {
        path:'*',
        redirect: '/'
    }
]