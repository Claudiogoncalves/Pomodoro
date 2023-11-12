import { Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { DefaultLayout } from './layouts/DefaultLayout';
import { History } from './screens/History';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}