import { Route, Routes } from "react-router-dom";


const AppRoutes = ({user}) => {
    return (
            <Routes>
                <Route path="/" element={<About/>}/>
            </Routes>
        )
}