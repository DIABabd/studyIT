import { Outlet, useParams } from 'react-router-dom';
import { Header } from './Header';
import { Breadcrumb } from './Breadcrumb';

export function Layout() {
  const params = useParams();
  const showBreadcrumb = params.examId !== undefined;

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-6">
        {showBreadcrumb && (
          <div className="mb-4">
            <Breadcrumb />
          </div>
        )}
        <Outlet />
      </main>
    </div>
  );
}
