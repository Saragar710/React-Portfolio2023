import { useEffect } from 'react';
import PageLayout from './PageLayout';

import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
    currentPage = currentPage.substring(1);

    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]);
    return (
        <section>
            <h2>{currentPage}</h2>
            <PageLayout>
                <Outlet />
            </PageLayout>
        </section>
    );
}

export default Page;