import Home from './Component/Home/Home';
import About from './Component/About/About';
import Editoral from './Component/Editoral/Editoral';
import Submission from './Component/Submission/Submission';
import Archives from './Component/Archives/Archives';
import Contact from './Component/Contact/Contact';

export const routes = [
  { path: '/', component: <Home /> },
  { path: '/about', component: <About /> },
  { path: '/editoral', component: <Editoral /> },
  { path: '/submission', component: <Submission /> },
  { path: '/archives', component: <Archives /> },
  { path: '/contact', component: <Contact /> },
];