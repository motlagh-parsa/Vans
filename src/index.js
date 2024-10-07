import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AboutPage from "./van/AboutPage";
import Vans, {loader as vansLoader} from "./van/Vans";
import VanInfo, {loader as vanInfoLoader} from "./van/VanInfo";
import Header from "./routeLinks/Header";
import App, {loader as homePageLoader} from "./App";
import Host, {HostLoader} from "./host/Host";
import {Income} from "./host/Income";
import {Reviews} from "./host/Reviews";
import {Dashboard} from "./host/Dashboard";
import Layout from "./routeLinks/Layout";
import VansList, {loader as vansListLoader} from "./host/VansList";
import {VanIntroduction} from "./vanIntroduction/VanIntroduction";
import {Details, loader as DetailsLoader} from "./vanIntroduction/Details";
import {Pricing} from "./vanIntroduction/Pricing";
import {Photos} from "./vanIntroduction/Photos";
import {HostVanInfo} from "./vanIntroduction/HostVanInfo";
import {NotFound} from "./routeLinks/NotFound";
import {
    BrowserRouter,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Routes,
    Route, redirect, Navigate, useNavigate, useNavigation
} from 'react-router-dom'
import VanError from "./error/VanError";
import {LogIn, loginLoader, action as logInAction} from "./logIn/LogIn";
import {RequireAuth} from "./utils";

const root = ReactDOM.createRoot(document.getElementById('root'));

const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
        <Route index element={<App/>} loader={homePageLoader}/>

        <Route path={'vans'} element={<Vans/>} errorElement={<VanError/>} loader={vansLoader}/>
        <Route path={'vans/:id'} element={<VanInfo/>} loader={vanInfoLoader}/>

        <Route path={'about'} element={<AboutPage/>}/>

        {/*<Route path={'vans'}>*/}
        {/*    <Route index element={<Vans/>}/>*/}
        {/*    <Route path={':id'} element={<VanInfo/>}/>*/}
        {/*</Route>*/}

        <Route path={'host'} element={<Host/>}
               loader={HostLoader}
            // errorElement={<Navigate to={'/login'}/>}
        >
            <Route index element={<Dashboard/>}/>
            <Route path={'income'} element={<Income/>}/>
            <Route path={'reviews'} element={<Reviews/>}/>
            <Route path={'vansList'} element={<VansList/>} loader={vansListLoader}/>
            <Route path={'vansList/:id'} element={<Details/>} loader={DetailsLoader}>
                <Route index element={<HostVanInfo/>}/>
                <Route path={'pricing'} element={<Pricing/>}/>
                <Route path={'photos'} element={<Photos/>}/>
            </Route>
        </Route>

        <Route path={'*'} element={<NotFound/>}/>
        <Route path={'login'} element={<LogIn/>} loader={loginLoader} action={logInAction}/>
    </Route>
))

root.render(
    <RouterProvider router={myRoute}/>

    // <React.StrictMode>
    //     <BrowserRouter>
    //         <Routes>
    //             <Route element={<Header/>}>
    //                 <Route index element={<App/>}/>
    //
    //                 <Route path={'vans'} element={<Vans/>}/>
    //                 <Route path={'vans/:id'} element={<VanInfo/>}/>
    //
    //                 <Route path={'about'} element={<AboutPage/>}/>
    //
    //                 <Route path={'vans'}>
    //                     <Route index element={<Vans/>}/>
    //                     <Route path={':id'} element={<VanInfo/>}/>
    //                 </Route>
    //
    //                 <Route path={'host'} element={<Host/>}>
    //                     <Route index element={<Dashboard/>}/>
    //                     <Route path={'vansList'} element={<VansList/>}/>
    //                     <Route path={'vansList/:id'} element={<Details/>}>
    //                         <Route index element={<HostVanInfo/>}/>
    //                         <Route path={'pricing'} element={<Pricing/>}/>
    //                         <Route path={'photos'} element={<Photos/>}/>
    //                     </Route>
    //                     <Route path={'income'} element={<Income/>}/>
    //                     <Route path={'reviews'} element={<Reviews/>}/>
    //                 </Route>
    //                 <Route path={'*'} element={<NotFound/>}/>
    //             </Route>
    //         </Routes>
    //     </BrowserRouter>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
