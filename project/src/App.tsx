import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CalculatorsHubPage from './pages/CalculatorsHubPage';
import SipCalculatorPage from './pages/calculators/SipCalculatorPage';
import StepUpSipCalculatorPage from './pages/calculators/StepUpSipCalculatorPage';
import HomeLoanCalculatorPage, {
  PersonalLoanCalculatorPage,
} from './pages/calculators/LoanCalculatorPage';
import FdCalculatorPage from './pages/calculators/FdCalculatorPage';
import {
  PostOfficeRdPage,
  PostOfficeFdPage,
  PostOfficePpfPage,
  PostOfficeNscPage,
  PostOfficeSsyPage,
  PostOfficeScssPage,
  PostOfficeMisPage,
  PostOfficeKvpPage,
} from './pages/calculators/PostOfficeCalculators';

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <BrowserRouter basename={basename || undefined}>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculators" element={<CalculatorsHubPage />} />
          <Route path="/calculators/sip" element={<SipCalculatorPage />} />
          <Route path="/calculators/step-up-sip" element={<StepUpSipCalculatorPage />} />
          <Route path="/calculators/home-loan" element={<HomeLoanCalculatorPage />} />
          <Route path="/calculators/personal-loan" element={<PersonalLoanCalculatorPage />} />
          <Route path="/calculators/fd" element={<FdCalculatorPage />} />
          <Route path="/calculators/post-office/rd" element={<PostOfficeRdPage />} />
          <Route path="/calculators/post-office/fd" element={<PostOfficeFdPage />} />
          <Route path="/calculators/post-office/ppf" element={<PostOfficePpfPage />} />
          <Route path="/calculators/post-office/nsc" element={<PostOfficeNscPage />} />
          <Route path="/calculators/post-office/ssy" element={<PostOfficeSsyPage />} />
          <Route path="/calculators/post-office/scss" element={<PostOfficeScssPage />} />
          <Route path="/calculators/post-office/mis" element={<PostOfficeMisPage />} />
          <Route path="/calculators/post-office/kvp" element={<PostOfficeKvpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
