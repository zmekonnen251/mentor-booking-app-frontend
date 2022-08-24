import { Routes, Route,BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './routes';

function App() {
	return (
    <Router>
      <Navbar/>
		<Routes>
			{routes.map((route) => (
				<Route
					key={`key${route.path}`}
					path={route.path}
					element={route.element}
					exact={route.exact}
				/>
			))}
		</Routes>
    </Router>
	);
}

export default App;
