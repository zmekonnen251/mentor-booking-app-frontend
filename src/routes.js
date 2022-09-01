import Homepage from './pages/Homepage';
import Reserve from './pages/Reserve';
import UserAuth from './components/UserAuth';
import MentorAuth from './components/MentorAuth';
import Details from './pages/Details';
import MyReservations from './pages/MyReservations';
import Profile from './pages/Profile';
import PendingMentors from './components/PendingMentors';
import ListOfMentors from './components/ListOfMentors';

const routes = [
  {
    path: '/',
    title: 'Homepage',
    exact: true,
    element: <Homepage />,
  },
  {
    path: '/myreservations',
    title: 'My Reservations',
    exact: true,
    element: <MyReservations />,
  },
  {
    path: '/auth/user/signup',
    title: 'UserAuth',
    exact: true,
    element: <UserAuth type />,
  },
  {
    path: '/auth/user/signin',
    title: 'UserAuth',
    exact: true,
    element: <UserAuth type={false} />,
  },
  {
    path: '/auth/mentor/signup',
    title: 'MentorAuth',
    exact: true,
    element: <MentorAuth type />,
  },
  {
    path: '/auth/mentor/signin',
    title: 'MentorAuth',
    exact: true,
    element: <MentorAuth type={false} />,
  },
  {
    path: '/mentor/:id',
    title: 'Mentor Details',
    exact: true,
    element: <Details />,
  },
  {
    path: '/reserve',
    title: 'Reserve',
    exact: true,
    element: <Reserve />,
  },
  {
    path: '/profile',
    title: 'Profile Page',
    exact: true,
    element: <Profile />,
  },
  {
    path: 'pending-mentors',
    title: 'Pending Aprrovals',
    exact: true,
    element: <PendingMentors />,
  },
  {
    path: 'approved-mentors',
    title: 'Approved Mentors',
    exact: true,
    element: <ListOfMentors />,
  },
];

export default routes;
