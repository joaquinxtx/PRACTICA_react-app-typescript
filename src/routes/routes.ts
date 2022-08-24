
import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage,LazyPage2,LazyPage3 } from "../01-lazyload/pages";
type JSXComponents = ()=> JSX.Element
interface Route{
    to:string;
    path:string;
    Component:React.LazyExoticComponent<JSXComponents> | JSXComponents;
    name:string;

}

const LazyLayout= lazy(()=> import(/*webpackChunkName: "LazyLLayout"*/'../01-lazyload/layout/LazyLayout'))
const Lazy2= lazy(()=> import(/*webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'))
const Lazy3= lazy(()=> import(/*webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'))

export const routes : Route[]=[

    {
        path:'lazyload/*',
        to:'/lazyload/',
        Component:LazyLayout,
        name:'Lazy Layout - Dash'
    },
    {
        to:'/no-lazy',
        path:'no-lazy',
        Component:NoLazy,
        name:'No Lazy'
    },
    
]