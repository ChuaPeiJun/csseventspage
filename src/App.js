import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Academic from './pages/Academic';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Route for academic year */}
          <Route path="/events/:academicyear" element={<Academic />} />
          {/* Route for event details */}
          <Route path="/events/:academicyear/:eventId" element={<EventDetail />} />
          {/* Route for paginated events - only if the page parameter is a number */}
          <Route path="/events/page/:page" element={<Events />} />
          {/* Default route for events */}
          <Route path="/events" element={<Events />} />
          {/* Default route if no specific route matches */}
          <Route index element={<Events />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
