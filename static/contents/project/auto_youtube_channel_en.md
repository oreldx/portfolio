While watching Twitch clip compilations on YouTube, I noticed how repetitive the editing was. I wanted to create a channel that would fetch clips, filter them, add a graphic layout and publish a compilation every day without human intervention.

I had just started learning C and Python. At that point, I could write a recursive function and handle some basic data structures. The project introduced me to web scraping, APIs, video processing with FFmpeg and hosting on a VPS with Docker.

Twitch clips are short excerpts from a live stream, created by viewers or streamers. They are publicly accessible, while full replays are often restricted to subscribers.

## Fetching and selecting clips

I used the Twitch API to retrieve streamer, clip and video data. It gave me a snapshot at a particular moment, with clips accessible by category or streamer, but without a search by popularity. I recorded a history of popular streamers over the previous 24 hours so I could fetch their clips afterward.

The scraper had to run continuously, while I was still launching the video script by hand on my computer. I was a little afraid of setting up a database, so my first homemade solution was Google Sheets. It let me structure the data and retrieve it through the API, with history limited to a 48-hour sliding window. I later moved to SQLite.

For each video, I retrieved as many clips as possible from the past 24 hours. I filtered them by popularity and fixed criteria, including lists of allowed or excluded streamers and categories, and clip duration. Each clip's video, thumbnail and metadata were then downloaded locally.

## Editing the compilations

The compilations contained clips of up to 60 seconds. Editing used MoviePy in Python and FFmpeg commands. I processed clips one at a time to avoid loading them all into memory and running out of RAM.

Inspired by Spi0n's Zaps, I designed a layout that showed the compilation's timeline and information about the current clip:

- Top left, the streamers in order of appearance, with a cursor on the one currently on screen.
- Bottom left, the thumbnail of the game or Twitch category.
- Bottom right, the clip title, usually written by its creator.
- Top right, the clip itself, occupying the main area.

<video class="px-8" controls muted loop> <source src="/assets/auto_youtube_channel/video.mp4" type="video/mp4"> </video>

Video excerpt.

I first used MoviePy to standardize formats and codecs, which varied between clips. I then added the graphic overlay with FFmpeg, using static images. A complex filter combined the elements' entrance and exit animations with transitions to generate each segment in a single command.

This step took a lot of work. With FFmpeg, I had to describe the edit as a sequence of operations on audio and video streams in one instruction, managing timing with global variables.

Once all segments shared the same format, I concatenated them and added a static outro. To avoid black frames during crossfades, I used the first frame of the next clip as the background.

I also created sharing and subscription animations in Premiere Pro, then overlaid them on randomly selected segments.

<video class="px-8" controls muted loop> <source src="/assets/auto_youtube_channel/call_to_action.mp4" type="video/mp4"> </video>

Example of a sharing and subscription animation.

## Generating thumbnails

I created thumbnails with Pillow, using bright colors and graphics intended to catch viewers' attention. The most popular streamers in the selection appeared in the center with predefined images. Other streamers' profile pictures sat in circles at the sides.

The background combined the episode number with stills from two viral clips. Background, title and number colors varied across several random combinations.

![Video thumbnail](/assets/auto_youtube_channel/thumbnail.jpg)

## Generating titles and descriptions

The title included the names of the featured streamers and the episode number.

Example title:

```
Mynthos, Sackzi, Wingobear, Terracid et LittleBigWhale... [Twitch FR Compilation #1]
```

The description was generated from the final edit, with precise timestamps for each clip to make navigation easier.

Example description:

```
••► New compilation [#1] of the best French Twitch clips 🇫🇷 from the past 24 hours. 

••► 🔥 Today's lineup: 🔥 

00:00 - Mynthos: "Emmanuel Maquerong has a message for Antoine Daniel!" 🔗 http://www.twitch.tv/mynthos 

00:20 - Sackzi: "Quad feed head shot" 🔗 http://www.twitch.tv/sackzi

[...]

••► See you tomorrow for 💥 a brand new compilation 💥!!

If you're a streamer and don't wish to appear in my compilations anymore, feel free to contact me at the following email address:
📧 example@mail.com 📧` 
```

## Publishing on YouTube

The YouTube API handled automatic publishing of the video with its thumbnail, title and description. Obtaining the credentials needed to publish publicly was the hardest part of this integration.

## After a year of publishing

The channel passed 300 subscribers, with videos reaching up to 40,000 views. I liked the idea of keeping an archive of these clips, but copyright claims forced me to stop.

I learned a lot of technical skills. Taking the project from start to finish without knowing whether it was feasible also gave me confidence to try other ideas.

I still had several directions to explore: improving the text with Markov chains or BLOOM, one of the early LLMs I was considering at the time; using viewership statistics and machine learning to select and order clips; and adding a graphical interface.
