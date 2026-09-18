import {Route, Routes} from 'react-router';
import Enter from '../components/Enter';
import Dashboard from '../components/Dashboard';
import Search from '../components/Search';
import CityDetails from '../components/CityDetails';
import Compare from '../components/Compare';
import NotFound from '../components/NotFound';
import Favorites from '../components/Favorites';
import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
export default function App(){
    return (
        <Routes>
            <Route path='/' element={<Enter />} />
            <Route element={<Layout />}>
                <Route element={<ProtectedRoute />} >
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/search' element= {<Search />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/city details/:id/:latitude/:longitude' element={<CityDetails />} />
                    <Route path='/compareCity/:lat1/:lon1/:lat2/:lon2' element= {<Compare />} />
                    <Route path='*' element= {<NotFound />} />
            </Route>
        </Route>
    </Routes>
    )
}
