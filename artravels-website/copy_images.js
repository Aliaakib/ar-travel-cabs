const fs = require('fs');
const path = require('path');

const src1 = "C:\\Users\\Bukhari Aliaakib\\.gemini\\antigravity-ide\\brain\\9a4f108c-6c81-4e3c-b023-51eafdc1842d\\indian_airport_transfer_1791365953501.jpg";
const dest1 = "C:\\Users\\Bukhari Aliaakib\\Desktop\\AR-TRAVEL-CABS\\artravels-website\\public\\images\\airport-transfer.jpg";

const src2 = "C:\\Users\\Bukhari Aliaakib\\.gemini\\antigravity-ide\\brain\\9a4f108c-6c81-4e3c-b023-51eafdc1842d\\indian_city_ride_1791365967086.jpg";
const dest2 = "C:\\Users\\Bukhari Aliaakib\\Desktop\\AR-TRAVEL-CABS\\artravels-website\\public\\images\\city-ride.jpg";

const src3 = "C:\\Users\\Bukhari Aliaakib\\.gemini\\antigravity-ide\\brain\\9a4f108c-6c81-4e3c-b023-51eafdc1842d\\indian_premium_transport_1791365979869.jpg";
const dest3 = "C:\\Users\\Bukhari Aliaakib\\Desktop\\AR-TRAVEL-CABS\\artravels-website\\public\\images\\premium-transport.jpg";

try {
  fs.copyFileSync(src1, dest1);
  fs.copyFileSync(src2, dest2);
  fs.copyFileSync(src3, dest3);
  console.log("Images copied successfully!");
} catch (e) {
  console.error("Error copying images:", e);
}
