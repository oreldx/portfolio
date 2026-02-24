## Automated Interactive YouTube Channel — End-to-End Generated Educational Content

**How to design** a **YouTube channel for children** capable of **automatically generating interactive videos** structured like mini-games?

## Introduction

Children’s video formats such as _[Hero Quiz](https://www.youtube.com/@heroquiz_)_ rely on a simple yet effective mechanic:  
**simulated interaction**, a fast pace, clear rules, and **strong visual cues** (emojis, colors, animations).

Behind this apparent simplicity, however, lies **repetitive editing** that is time-consuming and poorly scalable.

The goal of this project was to **reproduce this type of content in a fully automated way**, by building a channel capable of:
- Generating mini-game scenarios  
- Producing voices, visuals, and animations  
- Editing the sequences into a complete, coherent video  

All of this was designed from the outset for a child audience, with particular attention paid to **pacing**, **readability**, and **clarity of interactions**.

## Video concept

Each video is designed as a **sequence of mini-games**, primarily relying on **emojis** as the visual medium:
- Choice-based games (find the correct emoji)  
- Observation games  
- Speed or simple logic games  

Emojis serve simultaneously as:
- A **universal language** easily understood by children  
- **Standardized graphic building blocks**  
- An ideal foundation for procedural generation  

A complete video is therefore an **orchestration of sequences**, each with its own rules, timing, and interactive elements.

## Back office and content creation

To enable content creation and management, a **dedicated back office** was developed.

### Administration interface

- Developed in **Vue.js**  
- UX designed for rapid content creation  
- Management of mini-game types, parameters, and rules  
- Logical preview of sequences  

### Application backend

The back office communicates with a **Flask** application, which centralizes:
- Business logic  
- Data validation  
- Generation of the videos’ narrative structure  

## Automated video generation

Once the content is validated, the Flask application takes over to **orchestrate the entire generation pipeline**.

### Scenario generation

Based on the parameters defined in the back office:
- An **LLM** is used to generate the overall structure of the video  
- Ordering of mini-games  
- Generation of text (instructions, transitions, feedback)  

The scenario thus becomes a **structured description** of the video, usable by subsequent steps.

### Asset generation

From this scenario:
- Voices are generated via **Text-to-Speech** systems  
- Graphic assets (emojis, backgrounds, UI elements) are automatically prepared  

All resources are produced in a deterministic manner to ensure final consistency.

## Automated video editing

Final formatting is handled by a service based on **Remotion.js**.

This service allows:
- Assembly of video sequences  
- Animation of emojis and UI elements  
- Synchronization of voices, animations, and transitions  
- Automatic generation of:
  - The **final video**  
  - The associated **thumbnail**  

Editing is therefore entirely **code-driven**, with no manual timeline.

## Publishing and scalability

Once generated, the video can be:
- Stored  
- Automatically published on YouTube  
- Replicated at scale with content variations  

The architecture was designed to enable:
- High-volume production  
- Rapid evolution of formats  
- Addition of new mini-game types without a full redesign  

## Conclusion

This project allowed me to explore:
- **Procedural generation of video content**  
- Design of **complex automated pipelines**  
- Interconnection between UX, backend, AI, and video rendering  
- Adapting technical constraints to a **child audience**  

It demonstrates that a highly codified format, such as interactive children’s videos, can become a **fully automated production system** that is reliable and scalable.

However, the need for a back office to structure content stems from the current inability to delegate creation entirely to AI (within a reasonable cost range to achieve satisfactory quality).
