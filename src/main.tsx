import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contact } from './components/Contact/Contact.tsx';
import { Empty } from './components/Empty/Empty.tsx';
import { MainPage } from './components/MainPage/MainPage.tsx';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Empty />} />
        <Route path="/projects" element={<Empty />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
