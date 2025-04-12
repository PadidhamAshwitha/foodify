# Namastey React🚀🚀

# parcel
-Dev Build
-Local Server 
-HMR = Hot Module Replacement
-File Watching Algorithm - Written in C++
-Caching - Faster Builds
-Image Optimization
-Minification 
-Bundling
-Compress
-Consistent Hashing
-Code Splitting
-Differential Bundling - support older browsers
-Diagnostics
-Error Handling
-also give a way to host on HTTPs
-Tree Shaking
-Different Development and Production Bundles

two imports and exports 
- default 
  - export default Component;
  - import Component from "path";

- Named
 - export const Component;
 - import {Component} from "path";


# React Hooks
 - Normal Js Utility functions written by facebook developers
  - useState() - used to create superpowerful state variables in React
  - useEffect()

  # Mounting
  - Constructor (dummy)
  - Render (dummy)
  -   <html Dummy>
  -Component Did mount
  -     <api call>
  -     this.setState ->state variable is updated
  -UPDATE 

  - render(Api data)
  - <html (new api data)>
  COMPONENT DID UPDATE
  COMPONENT WILL UNMOUNT
  

  # Redux Toolkit
  - install @reduxjs/toolkit and react-redux
  - Build our store
  - connect our store to app
  - slice(cart slice)
  - dispatch(action)
  - selector 


  # vennela redux - DONT MUTATE THE STATE AND RETURN MANDATORY
  # ReduxToolKit - HAVE TO MUTATE THE STATE OR RETURN NEW STATE

  # Types of testing (according to developer)
  - unit testing
  - integration testing 
  - system testing (end to end testing e2e)

  # Setting up our application for testing
  - install React Testing Libraby
  - install jest
  - install babel dependencies
  - confugure bable
  - configure parcel configuration file to disable the default bable configuration transpilation
  - jest configuration (npx jest init)
  - install test-environment-jsdom