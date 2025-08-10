
**How to Create an Autonomous YouTube Channel**  
—or in other words, how to **fetch** data and resources, **filter** and **enrich** them, then **publish** the result without any human intervention.

## Introduction

After seeing countless Twitch clip compilations on YouTube, I noticed that the editing style was often **highly repetitive**.

For context, Twitch clips are short excerpts taken from a longer live broadcast called a **stream**. These clips can be created by viewers or streamers themselves and are publicly available (unlike full VODs, which are often restricted to a streamer’s subscribers).

Having just started learning programming (**C** & **Python**)—meaning I could now write a recursive function or perform basic data structure manipulations—I decided to experiment by **creating a YouTube channel dedicated to daily compilations of the best Twitch clips**.

During this project, I learned and explored concepts such as:
- **Web scraping**
- **APIs**
- Video manipulation with **FFmpeg**
- Hosting on a **VPS** with **Docker**
    
I didn’t just want to compile clips, though—I wanted to add **a creative graphic touch to improve the viewing experience**.

## Clip Retrieval

Clips were retrieved using the Twitch API, which provides access to streamer, clip, and video data. However, the API only allows retrieval at a **specific moment in time**. Clips can only be fetched by category or streamer—not by popularity.  
To work around this, I built a system to track popular streamers over the last **24 hours**, then retrieve their clips afterward.

Since the scraper needed to run continuously, but the video generation script was initially launched manually on my computer, I was hesitant to set up a full database.  
My first _DIY_ solution was to store data in **Google Sheets**, which allowed for structured organization and easy retrieval via the Google Sheets API. The drawback was limited history, as I used a **48-hour sliding window** system. Later, I switched to **SQLite**.

When creating the video, I would retrieve as many clips as possible from the past **24 hours**, then filter them by popularity and other static criteria _(whitelists/blacklists of streamers or categories, clip duration, etc.)_.

Each clip’s resources—video, thumbnail, and metadata—were then downloaded and stored locally.

## Video Structure

Since the final video was a compilation, it consisted of Twitch clips, each lasting up to 60 seconds.  
For editing, I ended up splitting the process between two tools: a Python library (**MoviePy**) and raw **FFmpeg** CLI processing.  
Using MoviePy encouraged me to think of video processing in **atomic units**—in this case, a single clip—so as not to load all clips into the same instance and risk running out of RAM.

Inspired by Spi0n’s _Zaps_, I wanted to display an on-screen timeline of the content alongside a brief summary of the current clip.  
The layout was organized into four key areas:
- **Top left**: list of streamers appearing in the video, in order of appearance, with a cursor showing the current streamer.    
- **Bottom left**: thumbnail of the game or Twitch category for the clip.
- **Bottom right**: title of the clip, usually written by the viewer who created it.
- **Top right**: the Twitch clip itself, forming the main video content.
    

<video class="px-8" muted autoplay loop> <source src="/assets/auto_youtube_channel/video.mp4" type="video/mp4"> </video>
**Video Excerpt**

To achieve this kind of atomic composition, my first step was to standardize the format of the selected clips, since Twitch streams are replayed in various formats and codecs depending on the streamer. This was the purpose of the **Python library**, which handled a lot of preprocessing, making my workflow much simpler.

The **overlay** was then added using **FFmpeg**, with static images. Animations were applied to each element to make them smoothly appear and disappear, along with transitions between clips, to provide a pleasant visual experience. To do this, I used **FFmpeg filters**, combined into a single complex filter, allowing me to generate a complete, fully-edited clip segment with just one command.

This step was fairly complex because **FFmpeg** is not a video editing tool but a video processing tool. You have to think of the video composition as a sequence of operations to be applied to the video and audio streams in a single instruction, while managing timing through global variables.

Once each edited clip segment was output in the same format, the final step was to **concatenate** the clips together, adding a static **outro** at the end.

> **Note:** To make transitions smoother between clips, I would take the first frame of the next clip and display it as a background during the crossfade with the current clip, preventing any black frames in between.

Within the video, I also added **calls to action** for sharing and subscribing. These elements were created in Premiere Pro, allowing me to randomly overlay them on top of certain segments.

<video class="px-8" muted autoplay loop> <source src="/assets/auto_youtube_channel/call_to_action.mp4" type="video/mp4"> </video>

**Example of a Call to Action**

## Thumbnail Design

Each video’s **thumbnail** was designed to grab the viewer’s attention, using vibrant colors and bold graphical elements.  
To achieve this, I used a Python image manipulation library (**Pillow**).

From the selected clips, **the most popular streamers were highlighted** in the center with predefined graphics, while the profile pictures of other streamers were displayed inside side circles.

The episode number and stills from two viral clips were used as the background, with the option to vary the background, title, and number colors across **several random combinations**.

![Video thumbnail](/assets/auto_youtube_channel/thumbnail.jpg)

**Video Thumbnail**

## Automatically Generated Text

For title generation, just like for thumbnails, the selected clips determined which streamers were highlighted in the title, along with the episode number.

**Example Title:**

```
Mynthos, Sackzi, Wingobear, Terracid et LittleBigWhale... [Twitch FR Compilation #1]
```

The **description** was generated based on the final edit, providing a precise timeline for each clip to make navigation easier.

**Video Description:**

```
••► New compilation [#1] of the best French Twitch clips 🇫🇷 from the past 24 hours. 

••► 🔥 Today’s lineup: 🔥 

00:00 - Mynthos: "Emmanuel Maquerong has a message for Antoine Daniel!" 🔗 http://www.twitch.tv/mynthos 

00:20 - Sackzi: "Quad feed head shot" 🔗 http://www.twitch.tv/sackzi

[...]

••► See you tomorrow for 💥 a brand new compilation 💥!!

If you’re a streamer and don’t wish to appear in my compilations anymore, feel free to contact me at the following email address:
📧 example@mail.com 📧` 
```

## Publishing to YouTube

Video publishing was handled via the **YouTube API**, which allowed me to automatically upload the video along with its thumbnail, title, and description.  
The most challenging part here was obtaining the necessary credentials for my API to publish public content.

## Conclusion

The YouTube channel ran for about a year, gaining over **300 subscribers** and videos reaching up to **40,000 views**.  
Although I saw the project as a great way to archive Twitch clips, **copyright claims eventually forced me to shut it down**.

This project taught me a lot about key technical concepts.  
It also showed me that I could take a project from start to finish without prior knowledge of its feasibility, which gave me confidence in my ability to bring ideas to life no matter the challenge.

I had many ideas to improve the project, such as:
- Enhancing text content using Markov chains or the early LLMs of the time (**BLOOM**)
- Improving clip selection and orchestration algorithms with viewership stats and machine learning
- Adding a graphical user interface