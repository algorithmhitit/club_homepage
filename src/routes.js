//routes.js
import Notice from "./components/Notice"
import Mainpage from "./components/Mainpage"
import Write from "./components/Write"

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
        path: '/wirte',
        name: 'wirte-page',
        component: Write
    },
    {
        path:'*',
        redirect: '/'
    }
]