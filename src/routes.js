import Homepage from './pages/Homepage';
import UserAuth from './components/UserAuth';
import MentorAuth from './components/MentorAuth';
import Details from './pages/Details';
import ApproveMentors from './components/PendingMentors';
import MentorsList from './components/MentorsList';

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

  {
    path: 'admin/approve-mentors',
    title: 'Approve Mentors',
    exact: true,
    element: <ApproveMentors />,
  },

  {
    path: '/admin/approved-mentors',
    title: 'Approved Mentors',
    exact: true,
    element: <MentorsList />,
  },
];

export default routes;
