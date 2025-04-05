import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {pagesConfig} from '@/config/pages.js';
import Home from "@/pages/Home/Home.jsx";
import '@/styles/styles.css';

const App = () => {
	return (
			<Router>
				<Routes>
					<Route path={pagesConfig.home.path} element={<Home/>}/>
				</Routes>
			</Router>
	);
};

export default App;