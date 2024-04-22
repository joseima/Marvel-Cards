#####/////// MARVEL CARDS  ////######

======= Rect app with typescript, Rect Router, sass, consuming Marvel API ============

You can see a list of 50 Marvel Characters, and choose your favorite ones. Can see a detailed profile of the character and the comics where he appeared

//________________________________________________________________________////

Features:
- All the aplicattion are located in the src dir.
- Has 2 compoonents for views in the Pages dir and generic components in the Components dir.
- The aplication uses react-router-dom for the views, considering future extensions and new views. Also 404 an others posibilities
- the Context is handled separated so as the Marvel API service
- Using SASS from the SASS dir an statics files  from Statics.
- Typescript omplemented with a Characters interface declared in types.d.ts

Viable implementations:

- Is possible to implement a reducer to handle the context in a more modular way with a dispatcher.
- Is posible to implement local storage to handle the Favorites list state in order to don't lose the favorites from memory when the browser resets.

