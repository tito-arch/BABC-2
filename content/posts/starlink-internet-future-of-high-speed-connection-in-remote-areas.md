+++
author = "M.I.Titus"
categories = "Device Reviews"
date = 2023-01-22T20:40:58Z
description = "Learn about the revolutionary satellite internet service from SpaceX that's bringing high-speed connectivity to remote and underserved areas"
image = ""
tags = ["starlink", "space x"]
title = "Starlink Internet: Future of High-Speed Connection in remote Areas"
[cover]
alt = "Starlink Internet: Future of High-Speed Connection in remote Areas"
caption = "image credits: Starlink.com"
image = "/uploads/image.webp"

+++
Founded by SpaceX founders **Elon & Kimbal Musk** and **Gwynne Shotwell _-(chief and operating officer at SpaceX)_**, Starlink Internet is engineered and maintained by the Aerospace company Space Explorations Technologies Incorporation **(SpaceX)**. Starlink Internet is a division of **SpaceX**, the first company on earth to launch a rocket into low earth orbit and recover the booster for reusing. The main goal of starting SpaceX was to make space travel cheaper. Having achieved this made it the most appropriate company to send thousands of satellites to orbit to provide affordable, uncensored satellite internet.

## Satellite Internet What is It?

Technologically, beaming the internet in a remote area from outer space is insane making it even crazier is that the satellites are actually moving at 27 to 28,000 km/h. Does the dish move to follow the satellite? come along with me to find out how Starlink internet "magically" works.

Traditionally, geostationary satellites were the technology that existed, and Starlink could be considered as their advancement. They have (and still exist) big dishes to receive data with a diameter of about 9 meters and the smallest up to 3 meters compared to **Starlink's portable pizza-sized dishes AKA _dishy_**.

Geostationary/geosynchronous satellite is where a satellite remains in a fixed position relative to a point on the Earth's surface. They may seem stationary but are actually moving at the same speed as the Earth.

Geostationary satellites had high latency (the time it takes to send and receive a signal) causing long loading times, lags, and other issues.

![](/uploads/screenshot-from-2023-01-25-09-59-13.png)

As illustrated, a Starlink satellite makes 70 roundtrips while a Geostationary satellite makes a single roundtrip at the same time making it 70 times slower, Easy!

### Latency vs Roundtrip (RTT)

Round-trip time (RTT) is the total time it takes for a packet of data to travel from its source to its destination and back, while Latency is the time it takes for the data to travel from its source to its destination.

## How do Starlink satellites work?

Starlink satellites are launched into outer space by SpaceX rockets, and there has been a need to send more of them leading to the development of the starship that can carry a payload of 400 compared to the 60 Starlink satellites Falcon 9 can deploy once (currently).

A possible 40,000 will be deployed to cover the earth. It will require about 100 Starship launches to satisfy the earth. It is essential that they are regularly serviced & tracked while in space and are burnt when they can't work anymore to reduce space trash. Imagine thousands of bodies over our heads, this would cause shadows -_A disadvantage of launching objects into space._

## More on Starlink Dishy design.

> **Editors Comment:**
>
> Anything with this much-advanced technology can get complicated and involve a tonne of physics computations. However, we will try to keep things easy on you. To become a physicist and an entrepreneur like Elon Musk and SpaceX Engineers I recommend you throw yourself into these challenges and try to understand as much as possible. Good luck!  "_SpaceX, you are go for launch_".

![](/uploads/tv-sat.jpeg)

This is a TV satellite dish, I am so sure you have come across one if not hundreds, these don't send data, they only receive they are a little complicated. A beam received from broadcasting satellites about 35,000 km away will hit the dish and concentrate it to the eye using the [parabolic reflector](https://en.wikipedia.org/wiki/Parabolic_reflector#:\~:text=Parabolic%20reflectors%20are%20used%20to,source%20into%20a%20parallel%20beam.). Starlink dishy on the other hand sends and receives data from space -550 km as earlier noted. It is important for the beam to be tight and have a high frequency and low latency of 20m/s to allow HD streaming and gaming. The wavelength of spaceX Starlink is about 2.5cm in a 550km distance. This means there are about  22 million wavelengths and it takes 2.2 milliseconds for a wave sent from Starlink or dishy to get to the other.

### The inside story of Starlink's dishy.

![](/uploads/screenshot-from-2023-03-02-09-45-23.png)

The dish components are two motors -used to autonomously position the dish at a specific angle in a clear Line of Sight (LoS), an ethernet cable, an aluminum back plate, and a circuit board with 640 small microchips and 20 bigger microchips also onboard is a GPS Module and the Main CPU on the other side of the PCB are copper-like structures this and other components make up 1280 antennas.

![](/uploads/screenshot-from-2023-03-02-10-29-12.png)

On the RHS is a single antenna made up of 6  smaller components this antenna is super complicated, it makes Starlink what we know today. 

#### Aperture-coupled patch antenna

![](/uploads/image-removebg-preview-3.png)

Each of these antennas is controlled by a chip below it on the circuit board. Two of the 6 components are where everything starts ie: to create an electromagnetic wave. 

* The feed line - This delivers a 1200GHZ (12 billion times in one second) voltage in a sine curve going from positive to negative every 83 Pico Second.
* The antenna patch - A copper coin-like with notches cut into it. This is located at the top level.

Well, since these two are not physically connected that is why we need a high-frequency current and DC power cannot be used.

 When the current gets to the end of the feed line (which ends abruptly) it's positively charged repelling all positive charges on the patch antenna making it negative and the other side (RHS) of the antenna patch is positively charged and vice versa when in the maximum negative voltage as illustrated below.

![](/uploads/screenshot-from-2023-03-02-20-10-51.png)

The fields illustrated are equal and opposite hence canceling each other. However, things on the top of the antenna patch are a little different. Since electrical fields are horizontal on the same plane and [are called fringing fields](https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electro-Optics/Book%3A_Electromagnetics_I_(Ellingson)/05%3A_Electrostatics/5.23%3A_The_Thin_Parallel_Plate_Capacitor#:\~:text=%E2%80%9CFringing%20field%E2%80%9D%20is%20simply%20a,significant%20effect%20in%20this%20region.). These fringing fields move in one direction and hence add up to one another but since we have current flowing, a magnetic field is created perpendicularly to the electric fields so that now there is an electric field and a magnetic field. When the current changes everything goes vice versa -both the electric and magnetic fields move in the opposite direction as they were previously moving (flipping). 

![](/uploads/screenshot-from-2023-03-02-20-39-29.png)

By this, forming an electromagnetic wave traveling perpendicularly to the magnetic and electric fields traveling outside in a balloon-like structure like a light bulb on the ceiling is achieved like so:

It is important to note that this dish can send and receive signals for internet transfer. To prevent other issues with signal interruption, the  Top and Bottom antenna patch are specifically designed to receive certain signals. The top antenna patch has a 1.28 cm diameter while the bottom antenna patch has a 1.15cm. This enables it to block out all other signals outside 13 and 11.7 GHZ. 

![](/uploads/screenshot-from-2023-03-02-20-46-13.png)

### How beam steering happens.

The beams shown above are from a single antenna you would imagine that adding more antennas would make the beam bigger and the power of the beam to equal 1 antenna x 1280. This assumption is wrong as adding more antennas would cause interference. This interference is destructive on the outer parts and constructive on the inside making the beam stronger enough to reach outer space.

#### Phased array beam steering

To be able to catch up with Starlink satellites moving 25,000km/h the dish has continuously keep track of the satellites. Did you just think about the motors beneath dishy? Well, that wouldn't work as it would be slow to keep up with the pace here and hence not accurate also they would wear out soon making the whole system fail.

To achieve this a technique that is also complex is used that is: **Phased array beam steering** this is done by phase shifting one signal sent to one antenna in respect to another signal sent to another antenna the peaks and troughs of these different antennas are different forming a constructive interference at the center and a destructive interference in all other parts all this is done by messing the amplitude of the different waves at a different time for different antennas.

![](/uploads/screenshot-from-2023-03-03-00-00-29.png)

Using the GPS the dish knows perfectly where each Starlink satellite is at a particular time to be able to determine where the constructive interference will be at every microsecond to steer the beam across a 100 degrees field of view. Every 4 minutes the satellite is swapped with another.

## See how the satellites get into their final operational orbits

{{< youtube VIQr1UyhwWk >}}

Starlink offers speeds of up to 50-500 mb/s ranging from $110 to $500 uncapped internet.

## Starlink in Kenya

![](/uploads/screenshot-from-2023-01-25-20-39-49.png)

Special thanks to:

[Branch Education](https://www.youtube.com/@BranchEducation)

Resources:

[Starlink Patent](https://patents.google.com/patent/US9647749B2/en),

[Starlink.com](starlink.com),

[Branch Education](https://www.youtube.com/@BranchEducation).