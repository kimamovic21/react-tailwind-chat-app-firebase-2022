1. instaliramo aplikaciju npx create-react-app (ime aplikacije)
2. instaliramo u terminalu tailwind css
3. brisemo fajlove koji nam nece trebati
4. otvaramo i uredujemo App.js fajl
5. kreiramo src folderu kreiramo components folder
6. unutar components foldera kreiramo Navbar.jsx komponentu
7. otvaramo i uredujemo Navbar.jsx komponentu



Firebase 
1. otvaramo http://www.firebase.google.com web stranicu
2. dodajemo novi projekat (ime projekta)
3. iskljucimo google analitiku
4. kliknemo create project dugme
5. kliknemo </> dugme
6. kliknemo register app (ime aplikacije)
7. instaliramo firebase u terminalu
8. u src folderu kreiramo firebase.js fajl
9. kopiramo SDK u firebase.js fajl
10. u firebase konzoli kliknemo build dugme
11. build -> authentication
12. kliknemo dugme get started
13. odaberemo dugme za google postavke
14. kad kliknemo na google postavke, kliknemo enable
15. unesemo nas email i kliknemo save
16. kliknemo na dugme go to docs
17. kliknemo na build dugme
18. odaberemo authentication -> web
19. dodajemo import { getAuth } from "firebase/auth"; u firebase.js fajl
20. otvaramo i uredujemo App.js fajl
21. u terminalu instaliramo react firebase hook paket
npm install --save react-firebase-hooks
22. u components folderu kreiramo Signin.jsx komponentu
23. otvaramo i uredujemo Signin.jsx komponentu
24.  terminalu instaliramo google dugme paket
npm install react-google-button
25. u components folderu kreiramo Signout.jsx komponentu
26. u components folderu kreiramo Chat.jsx komponentu
27. otvaramo i uredujemo Chat.jsx komponentu
28. u components folderu kreiramo Message.jsx komponentu
29. otvaramo i uredujemo Message.jsx komponentu
30. otvaramo Firestore database
31. kliknemo dugme create database
32. odaberemo start in production mode i kliknemo next dugme
33. odaberemo clod firestore lokaciju i kliknemo enable
34. otvaramo i uredujemo firebase.js fajl
35. na cloud firestore odaberemo start a collection
36. unesemo messages kao document parent path 
37. generisemo auto-ID
38. odaberemo: field - text, type - string, value - I'm learing React
39. add field: field - timestamp, type - timestamp
40. kliknemo save dugme
41. dodajemo useState i useEffect React hooks Chat.jsx komponenti
42. otvaramo i uredujemo SendMessage.jsx komponentu
43. u components folderu kreiramo SendMessage.jsx komponentu
44. otvaramo i uredujemo SendMessage.jsx komponentu
 




Izmjeniti kod u cloud firestore rules : 

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}




Pitanja i odgovori:

https://stackoverflow.com/questions/56510745/firebaseerror-code-permission-denied-missing-or-insufficient-permissions




Github pages:
1. dodajemo homepage u package.json fajlu
    "https://kimamovic21.github.io/(ime projekta)"
2. u terminal kucamo npm i gh-pages --save-dev
3. u package.json fajlu dodajemo predeploy i deploy
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
4. u terminal kucamo npm run deploy

