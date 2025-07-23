import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import InterviewTranslation from './pages/services/InterviewTranslation';
import InterviewCoaching from './pages/services/InterviewCoaching';
import ArticleDetail from './pages/services/ArticleDetail';
import ArticleGreenCardProcess from './pages/articles/ArticleGreenCardProcess';
import ArticleCitizenshipInterview from './pages/articles/ArticleCitizenshipInterview';
import ArticleCommonQuestions from './pages/articles/ArticleCommonQuestions';
import ArticleRednoteGallery from './pages/articles/ArticleRednoteGallery';
import ArticleInterviewProcessSummary from './pages/articles/ArticleInterviewProcessSummary';
import ArticleMarriageGreenCardInterview from './pages/articles/ArticleMarriageGreenCardInterview';
import ArticleMarriageGreenCardInterview2 from './pages/articles/ArticleMarriageGreenCardInterview2';
import DS160FoiaTips from './pages/articles/ArticleDS160FoiaTips';
import AsylumInterviewDetailed from './pages/articles/ArticleAsylumInterviewDetailed';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/interview-translation" element={<InterviewTranslation />} />
      <Route path="/services/interview-coaching" element={<InterviewCoaching />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:articleId" element={<ArticleDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/articles/green-card-process" element={<ArticleGreenCardProcess />} />
      <Route path="/articles/citizenship-interview" element={<ArticleCitizenshipInterview />} />
      <Route path="/articles/common-questions" element={<ArticleCommonQuestions />} />
      <Route path="/articles/rednote-gallery" element={<ArticleRednoteGallery />} />
      <Route path="/articles/interview-process-summary" element={<ArticleInterviewProcessSummary />} />
      <Route path="/articles/marriage-green-card-interview" element={<ArticleMarriageGreenCardInterview />} />
      <Route path="/articles/marriage-green-card-interview-2" element={<ArticleMarriageGreenCardInterview2 />} />
      <Route path="/articles/ds160-foia-tips" element={<DS160FoiaTips />} />
      <Route path="/articles/asylum-interview-detailed" element={<AsylumInterviewDetailed />} />
    </Routes>
  );
};

export default App;
