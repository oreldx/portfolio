After [my automated YouTube channel project](/project/auto_youtube_channel), I wanted to try a similar experiment on another platform. Instagram and TikTok interested me, so I started working on automating several accounts.

This time, I chose to create original content with generative AI. I already had experience editing videos through code, so most of the work involved generating the content and improving my editing tools.

## Starting with a poetry account

I wanted each account to have its own identity while sharing a similar production workflow. To focus on the technical work first, I started with a simple idea: publish one poetry reading a day, with a video background, accompanying audio and the poem's text scrolling on screen.

## Generating the content

I separated script generation from preparation of the video assets.

For the text, I used OpenAI's GPT-3.5. After adjusting the prompts, I was getting reliable, consistent scripts. The same prompt let the model choose a background from a list of royalty-free videos sourced from Pexels. This resembled Retrieval-Augmented Generation (RAG), without embeddings or vector storage, which I did not need for such a small dataset.

The ElevenLabs API then generated the voice from the poem.

I still needed to synchronize the subtitles with the audio. I first used an open-source model that accepted the original text and aligned it with the voice. This avoided errors that a transcription tool such as Whisper might have introduced by working out the words itself. Later, I found another ElevenLabs API endpoint that provided text-to-voice alignment directly, simplifying this step.

## Building my editing tool

In the previous project, I used MoviePy and FFmpeg. This time, I built my own Python editing SDK around FFmpeg, taking inspiration from Adobe Premiere Pro.

I used layers and filters to handle images, videos and audio tracks. Among other things, the tool let me animate subtitles.

Text was still difficult to manipulate with this approach. I used Pillow to generate an image for each state of the text, then added those images to the video with FFmpeg.

<div align="center"> <video src="/assets/social_network_account/video.mp4" loop controls style="max-height: 50vh; padding: 0 2rem;"></video> </div>

Example video.

## Publishing on Instagram

I used Meta's API to publish on Instagram. In this integration, the video and thumbnail had to be accessible on a server: I could not upload the files directly from the client. I had to add this step to the publishing workflow.

## Managing several accounts

Once the first account was running, I refactored a substantial part of the code to share tools across accounts while keeping the freedom to develop each one separately.

I added a task queue with Redis and Celery to run generation and publishing asynchronously. The architecture was intended to support more hosting resources if the number of accounts grew.

In practice, I always kept a single queue with one worker for video rendering. My hosting did not have the resources to run several renders in parallel.

I also built a Vue.js interface to track each account's progress through the steps in real time and view its publishing history.

## Why I stopped

I ran the project for several months. The few accounts I created struggled to find an audience among the other content. I started developing more original concepts, then gave up because I found Instagram's rules for managing multiple accounts unclear and sometimes unfairly restrictive. I could not continue on TikTok, whose API was almost inaccessible to me.

The project helped me separate responsibilities in my code and understand how asynchronous processing supports more tasks. The limits of my editing tool also led me to explore Remotion, which looked promising to me.
