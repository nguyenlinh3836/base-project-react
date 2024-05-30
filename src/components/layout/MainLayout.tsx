import {Outlet} from "react-router-dom";
export default function MainLayout(){
    return (
        <>
            <h1>navbar</h1>
        <main>
            <Outlet/>
        </main>
        </>
    );
}