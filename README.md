# Can of Books Lab 11-14


## Labs

**Author**: Xin Deng, Johnny Backus

### Lab 11 - Custom Servers with Node and Express

**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

### Lab 12

**Version**: 1.0.1 (updated to post to MongoDB)

### Lab 13

**Version**: 1.0.2 (increment the patch/fix version number if you make more commits past your first submission)

### Lab 14

**Version**: 1.0.3 (increment the patch/fix version number if you make more commits past your first submission)





## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

Books are life-changing. They have the power to enlighten, educate, entertain, heal, and help us grow. Build out this code base to create an web app to track what books have impacted you, and what's recommended to read next.


## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->




## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
REACT, JavaScript, APIs, Axios, MONGODB. 

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

### Lab 11

- 12-05-2023 11:32pm - Application now has backend getting right data
- 12-06-2023 06:30am - Application now has forecast rendered from API

### Lab 12

- 12-12-2023 - Back end can now post to MongoDB

### Lab 13

- 12-08-2023 04:30am - Application now has server side refactored

### Lab 14

- 12-09-2023 04:30pm - Application now has live forecast and movies rendered from API inside cache.




## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

[Johns In Class Demo Lab 11](https://github.com/codefellows/seattle-code-301d110/tree/main/class-11/demo)

ChatGPT/Tammy, John, Brandon

Tuesday: 
[Johns In Class Demo Lab 12](https://github.com/codefellows/seattle-code-301d110/blob/main/class-12/demo/back-end/server.js)

ChatGPT(https://chat.openai.com/share/5e83ccaa-f50d-4505-b49e-149e9bddfe53)
TA's: Brandon, Ike

Wednesday: 
![Whiteboard Img](assets/whiteboard3.png)

Thursday: 
![Whiteboard Img](assets/whiteboard4.png)

Friday:
![Whiteboard Img](assets/whiteboard5.png)


## Time Estimates 

### Lab 11

1. Number and name of feature: Feature #1: Set up server repo
    - Estimate of time needed to complete: 2 hrs
    - Start time: 1:40pm
    - Finish time: 2:30pm
    - Actual time needed to complete: 1 hr

1. Number and name of feature: Feature #2: Weather (placeholder): As a user of City Explorer, I want to see weather info for the city I searched, so that I know how to pack for an upcoming trip.longitude of that location.
    - Estimate of time needed to complete: 3 hrs
    - Start time: 2:30pm
    - Finish time: 11:32pm
    - Actual time needed to complete: 8 hrs and still not done

1. Number and name of feature: Feature 3: Errors (revisited): As a user, I want clear messages if something goes wrong so I know if I need to make any changes or try again in a different manner.
    - Estimate of time needed to complete: 3 hrs
    - Start time: NA
    - Finish time: NA
    - Actual time needed to complete: NA

### Lab 12

1. Number and name of feature: Feature #1: Weather (live): As a user of City Explorer, I want to see weather info for the city I searched, so that I know how to pack for an upcoming trip.
    - Estimate of time needed to complete: 3 hrs
    - Start time: 2:30pm
    - Finish time: 7:00pm
    - Actual time needed to complete: 5 hr 30 min

1. Number and name of feature: Feature #2: Movies: As a user of City Explorer, I want to see info about movies related to the city I searched, so that I can learn more about the destination. how to pack for an upcoming trip.longitude of that location.
    - Estimate of time needed to complete: 3 hrs
    - Start time: 7:00pm
    - Finish time: NA
    - Actual time needed to complete: 9 hrs and still not done

1. Number and name of feature: Feature #3:Publish: Deploy your server. As a user, I want to access the City Explorer application on the web, so that anyone can explore from anywhere.
    - Estimate of time needed to complete: 3 hrs
    - Start time: NA
    - Finish time: NA
    - Actual time needed to complete: NA

### Lab 13

1. Number and name of feature: Feature #1: Refactor: Modularize the back-end codebase.
    - Estimate of time needed to complete: 3 hrs
    - Start time: 4:30pm
    - Finish time: 8:00pm
    - Actual time needed to complete: 4 hr 30 min

1. Number and name of feature: Feature #2: Refactor: Componentize the front-end codebase.
    - Estimate of time needed to complete: 3 hrs
    - Start time: 10:00pm
    - Finish time: NA
    - Actual time needed to complete: 8 hrs and still not done

### Lab 14

1. Number and name of feature: Feature #1: Performance: As a user, I want the application to work with recent results, so that I can see info without the app doing unnecessary API calls.
    - Estimate of time needed to complete: 3 hrs
    - Start time: 3:00pm
    - Finish time: 7:00pm
    - Actual time needed to complete: 4 hrs





## Lighthouse Accessibility Report Score

![Lighthouse report for Lab 7](assets/lighthouse2.png)

![Lighthouse report for Lab 8](assets/lighthouse3.png)

![Lighthouse report for Lab 9](assets/lighthouse4.png)

![Lighthouse report for Lab 10](assets/lighthouse4.png)



  <!-- 
  local host issue fixes
  lsof -i :3000 = error address already in use
  kill -9 <PID>
  npx kill-port 3000 -->