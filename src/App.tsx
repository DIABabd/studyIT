import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ExamPage } from './pages/ExamPage';
import { PartPage } from './pages/PartPage';
import { TopicPage } from './pages/TopicPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="exam/:examId" element={<ExamPage />} />
          <Route path="exam/:examId/part/:partId" element={<PartPage />} />
          <Route path="exam/:examId/part/:partId/topic/:topicId" element={<TopicPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
