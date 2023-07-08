export default function handler(request, response) {
  console.log("requested time");
  var dateObj = new Date();
  return response.status(200).json(dateObj);
}
