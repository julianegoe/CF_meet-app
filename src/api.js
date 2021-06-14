export const extractLocations = (events) => {
   let extractLocations =  events.map((event) => {
       return event.location
   });
  var locations = [...new Set(extractLocations)];
  return locations;
};

