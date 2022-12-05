import { Helmet } from "react-helmet";

import AppBanner from "../components/AppBanner/AppBanner";
import ComicsList from "../components/ComicsList/ComicsList";

const ComicsPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with list of our comics"
                />
                <title>Comics page</title>
            </Helmet>
            <AppBanner />
            <ComicsList />
        </>
    );
};

export default ComicsPage;
