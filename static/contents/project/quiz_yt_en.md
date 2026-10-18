I built a tool to produce quiz videos for children, made up of mini-games. Editing this kind of content is repetitive, so I wanted to automate production from the script through to publishing on YouTube.

Videos from channels such as [Hero Quiz](https://www.youtube.com/@heroquiz_) served as a reference. They simulate interaction with children through a fast pace, clear rules and visual cues such as emojis, colors and animations. I kept pacing and readability in mind from the start.

## Emoji-based mini-games

Each video combines choice-based games with observation, speed or simple logic games. Emojis are easy for children to understand and provide standardized graphic elements for procedural generation.

Each sequence has its own rules, timing and interactive elements.

## Preparing the content

I built a Vue.js admin interface to manage mini-game types, parameters and rules. It lets me prepare content quickly and preview the logic of each sequence.

The interface communicates with a Flask application that handles business logic, validates data and builds the videos' narrative structure. Once the content is validated, Flask runs the generation steps.

## Generating the script and assets

Using the parameters entered in the interface, an LLM generates the video structure, orders the mini-games and writes instructions, transitions and feedback for the viewer. The result is a structured script that the next services can use.

Text-to-speech systems produce the voices. Graphic assets, including emojis, backgrounds and interface elements, are prepared automatically. This preparation is deterministic to keep the result consistent.

## Editing the video

A service built with Remotion.js assembles the sequences, animates emojis and interface elements, and synchronizes voices with animations and transitions. It generates the final video and its thumbnail.

Editing is handled entirely through code, without manually arranging a timeline.

## Publishing and changing formats

Generated videos can be stored and published automatically on YouTube. The architecture supports high-volume production with content variations, changes to formats and new mini-game types without rebuilding the whole system.

This project involved procedural video generation and the design of a complex automated production workflow. It also meant connecting the creation interface, backend, AI and video rendering while keeping a child audience in mind.

Content creation remains semi-automated. I needed the back office to structure it because I could not delegate the entire process to AI at a reasonable cost while getting satisfactory quality.
