
# Distracted Driver

## Inspiration
The automotive industry has spent years trying to improve driver safety by enabling features that simplify operation and take responsibility from the driver. This, combined with the growing amount of distractions due to mobile tech is arguably creating inferior drivers and a hazardous environment for others.

We think that by providing metrics for driver awareness and mood, we can inspire positive changes in driving habit and an added appreciation for driving smart and safe.

## What it does
Utilizes vision enabled by the Kinect to track face movement (particularly eyes). By following eye and mouth movements, we can record metrics to track distraction and mood. In particular, we analyze smiling, head angle and eye focus. In addition we synchronize this data with map and speed information to develop driving trends and point out hazardous patterns or reward improvements.

In particular, the tracked metrics are distractedness, happiness and fidgetiness, but more could be added such as hand position and center of gravity.

The metrics are logged on web app accessible from browsers and mobile devices. It is designed to be simple and easy to understand. An overall score is determined every drive, as well as specific categories  for more detail. A user can look at a timeline map that displays markers on the coordinates of significant distraction events. Ideally patterns may emerge and habits may change.

## How we built it
The Kinect is processed with he supplied api. We process various face information and print it on the stream and send it out to our flask server. We used python for post processing, analysis and integrating the server. Node and React were used on the mobile phone side to pull Google maps data and draw event markers on a map. The front end is a combination React, jQuery and Google material design.

## Challenges we ran into
Many of our early struggles were on the vision side. It was tough to find example of advanced facial recognition on the Kinect, and working with Visual studio. The python processing was also difficult since we wanted to simplify all the data in to something any user could understand. We struggled with React and cloud web services and spent much of our time bouncing around between services. In general our team put emphasis on learning new things (React, Python Flask, Visual Studio, ect) rather than staying in our comfort zone. This inherently made things difficult.

## Accomplishments that we proud of
* Accurate, reliable face tracking
* Creative metrics
* Google maps
* React
* Hardware
* Simple design
* Making something that has potentiial to improve safety


## What I learned
Expect anything. This project spawned after a team member was hit by a car driven by a distracted driver. Many roadblocks emerged along the project's development, but we we continued to move forward!

## What's next for distractedness
Implement it in an actual vehicle, add a social media aspect


#### Steps
* `npm install -g gulp`
* `npm install`
* `gulp app`

#### Outline

- Visuals
  - timelines
    - Stop Signs / Stop Lights
    - Google Maps
    - Scrubable timelapse of face
  - Scores
    - Not looking
    - Happiness
    - Figeting
  - simplified timeseries graph of distraction
- Driving Events
  - Missing the green light at a stop light (and getting honked at)
  - Making a jerky correction after being distracted
- Edge Cases
  - MPH from GPS / Timestamp
- Detection for being distracted
  - Visual computing pupil tracker (webcam)
- Webcam Tech
  - RGB
  - Infared
