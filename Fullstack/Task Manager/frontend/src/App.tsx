import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { SignUp } from "./components/Signup";
import { SignIn } from "./components/SignIn";
import { Landingpage } from "./components/Landingpage";

function App() {
	return (
		<Router>
			<Routes>
        {/* http://localhost:5000 */}
        {/* http://localhost:5000/ */}
				<Route path="/" element={<Landingpage />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SignIn />} />
			</Routes>
		</Router>
	);
}

export default App;
