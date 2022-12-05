import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppHeader from "../AppHeader/AppHeader";
import Spinner from "../Spinner/Spinner";

// import SingleComicPage from "../../pages/SingleComicPage";
// import MainPage from "../../pages/MainPage";
// import ComicsPage from "../../pages/ComicsPage";
// import NotFound from "../../pages/NotFound";

const NotFound = lazy(() => import("../../pages/NotFound"));
const MainPage = lazy(() => import("../../pages/MainPage"));
const ComicsPage = lazy(() => import("../../pages/ComicsPage"));
const SingleComicLayout = lazy(() =>
    import("../../pages/SingleComicLayout/SingleComicLayout")
);
const SingleCharacterLayout = lazy(() =>
    import("../../pages/SingleCharacterLayout/SingleCharacterLayout")
);
const SinglePage = lazy(() => import("../../pages/SinglePage"));

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />

                            <Route path="/comics" element={<ComicsPage />} />

                            <Route
                                path="/comics/:id"
                                element={
                                    <SinglePage
                                        Component={SingleComicLayout}
                                        dataType="comic"
                                    />
                                }
                            />

                            <Route
                                path="/characters/:id"
                                element={
                                    <SinglePage
                                        Component={SingleCharacterLayout}
                                        dataType="character"
                                    />
                                }
                            />

                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
