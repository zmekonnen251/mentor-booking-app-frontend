import Homepage from './pages/Homepage';
import UserAuth from './components/UserAuth';
import MentorAuth from './components/MentorAuth';
import Details from './pages/Details';

const routes = [
  {
    path: '/',
    title: 'Homepage',
    exact: true,
    element: <Homepage />,
  },

  {
    path: '/auth/user',
    title: 'UserAuth',
    exact: true,
    element: <UserAuth />,
  },
  {
    path: '/auth/mentor',
    title: 'MentorAuth',
    exact: true,
    element: <MentorAuth />,
  },
  {
    path: '/mentor/:id',
    title: 'Mentor Details',
    exact: true,
    element: <Details />,
  },
];

export default routes;
