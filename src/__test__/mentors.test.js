import mentors from '../redux/reducers/mentors';

describe('Testing getting mentors from store', () => {
  it('should return initial state an empty array', () => {
    const mentorsInitialData = [];

    expect(mentors(mentorsInitialData, { type: '' })).toEqual([]);
  });

  it('should return approved mentors state', () => {
    const approvedMentors = [
      {
        id: 10,
        name: "John Doe",
        email: "johndoe@gmail.com",
        bio: "johndoe@gmail.com",
        technologies: ["ruby", " rails", " javascript"],
        role: "mentor",
        approved: true,
        avatar_url: "https://mentorbooking.herokuapp.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBIQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--de119e9422f3dd42216f1079fd0bc95664467959/aded_image.png",
      },
      {
        id: 12,
        name: "Wuletaw Wonte",
        email: "wuletawwonte@gmail.com",
        bio: "wuletawwonte@gmail.com",
        technologies: ["Rails", "Cordova", "Javascript"],
        role: "mentor",
        approved: true,
        avatar_url: "https://mentorbooking.herokuapp.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBIQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--de119e9422f3dd42216f1079fd0bc95664467959/aded_image.png",
      },
    ];
    const action = {
      type: "FETCH_MENTORS",
      payload: approvedMentors,
    };

    expect(mentors(approvedMentors, action)).toEqual(approvedMentors);
  });
});
