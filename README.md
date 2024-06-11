#####/////// MARVEL CARDS  ////######

======= Rect app with typescript, Rect Router, sass, consuming Marvel API ============

You can see a list of 50 Marvel Characters, and choose your favorite ones. Can see a detailed profile of the character and the comics where he appeared

Deploy in Netlify
https://main--marvel-characters-cards.netlify.app/

//________________________________________________________________________////

Features:

- All the aplicattion are located in the src dir.
- Has 2 compoonents for views in the Pages dir and generic components in the Components dir.
- The aplication uses react-router-dom for the views, considering future extensions and new views. Also 404 an others posibilities
- the Context is handled separated so as the Marvel API service
- Using SASS from the SASS dir an statics files  from Statics.
- Typescript implemented (almost all), interfaces declared in types.d.ts

- <b>Testing with Jest and Rect Test domrenderer.</b> 
    - Unit test on Card nd Header components
    - E2e test on App 

Viable onwards implementations:

- <b>IMPORTANT: Implement integrations testing with mockings</b>
- <b>IMPORTANT: Refactorisation, for good practices is important to separate some useEffects and Context logics in custom Hooks for salability and re-use of components in case the App is extended</b>

- Manage loading with State an no with conditionals
- add loading frames to loading renders
- Fine-tune context-props typing, removing "any" which is not good practice
- Is possible to implement a reducer to handle the context in a more modular way with a dispatcher.
- Is posible to implement local storage to handle the Favorites list state in order to don't lose the favorites from memory when the browser resets.
- Implement the Comics carrousell in a generic component separated from the Character view
