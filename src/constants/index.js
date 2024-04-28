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
  headers: {},
};

export const dOptions = {
  headers: {},
};
