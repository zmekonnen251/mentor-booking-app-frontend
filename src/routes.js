import Homepage from './pages/Homepage';
import Reserve from './pages/Reserve';
import UserAuth from './components/UserAuth';
import MentorRequest from './components/MentorRequest';
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
    path: '/auth/signup',
    title: 'UserAuth',
    exact: true,
    element: <UserAuth type />,
  },
  {
    path: '/auth/signin',
    title: 'UserAuth',
    exact: true,
    element: <UserAuth type={false} />,
  },
  {
    path: '/mentor-request',
    title: 'MentorRequest',
    exact: true,
    element: <MentorRequest />,
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
