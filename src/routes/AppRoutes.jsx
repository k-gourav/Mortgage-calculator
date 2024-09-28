import React, { Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RepaymentCalculatorPage = React.lazy(() => import('../pages/RepaymentCalculatorPage'));

const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<RepaymentCalculatorPage />} />
            </Routes>
            </Suspense>
        </Router>
    )
};

export default AppRoutes;