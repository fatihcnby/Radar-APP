export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "49.444160",
    bl_lng: "5.343958",
    tr_lat: "54.249107",
    tr_lng: "13.977810",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "da683f8aadmshb83e3536e5fba2dp183722jsn6923d600f7ae",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const dOptions = {
  headers: {
    "X-RapidAPI-Key": "da683f8aadmshb83e3536e5fba2dp183722jsn6923d600f7ae",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
