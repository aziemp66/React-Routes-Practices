import { Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";

function App() {
    return (
        <div>
            <Route path="/">
                <AllMeetupsPage />
            </Route>
            <Route path="/new-meetup">
                <NewMeetupsPage />
            </Route>
            <Route path="/favorites">
                <FavoritesPage />
            </Route>
        </div>
    );
}

export default App;
