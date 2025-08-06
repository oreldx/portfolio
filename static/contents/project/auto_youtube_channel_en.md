
This project involved crafting a YouTube channel dedicated to daily "best-of" compilations of top Twitch clips, enhanced with fancy overlays to enrich user experience. Utilizing Python for channel management, tasks encompassed data scrapping, resource acquisition, and content selection & creation.


## Introduction

This is **my first personal programming project**, and notably my learning of **Python, APIs, FFmpeg, Docker, and hosting on a VPS**.  
It involved developing a YouTube channel specializing in daily compilations of the **best Twitch clips**.  
The goal was to enrich the **user experience** with graphic assets.  
The project relies on Twitch's API for **scraping and storing** data, and also involves **resource acquisition**, **content selection**, and its **automatic publication**.


## Video Structure

<video class="px-8" muted autoplay loop >
  <source src="/assets/auto_youtube_channel/video.mp4" type="video/mp4">
</video>
**Video extract**

Each compiled video featured a **dynamic structure**:

-   Top left: a **summary** displaying the names of the streamers
    
-   Right: the selected **Twitch clip**
    
-   Bottom left: the **thumbnail of the game**
    
-   Bottom right: the **title of the clip**
    

**Calls to action for sharing and subscribing** (**Call to Action**) were integrated throughout the video, complemented by an outro at the end.


<video class="px-8" muted autoplay loop >
  <source src="/assets/auto_youtube_channel/call_to_action.mp4" type="video/mp4">
</video>
**Example of Call to Action**


## Thumbnail Design

The **thumbnails** of each video were designed to capture the viewers' attention, with bright colors and eye-catching graphic elements.  
The **most popular streamers were highlighted** in the center with predefined images, while the profile photos of other streamers appeared in side circles.  
The episode number and a screenshot of two viral clips formed the background, with the option to vary the colors of the background, title, and numbers according to **several combinations**.

![Video thumbnail](/assets/auto_youtube_channel/thumbnail.jpg)  
*Video thumbnail*


## Auto-generated Text

A **title** was automatically generated for each video, featuring the popular streamers present.  
**Example Title:**  
```
Mynthos, Sackzi, Wingobear, Terracid et LittleBigWhale... [Compil' Twitch FR #1]
```

A **description** created a precise timeline for each included clip, thus facilitating navigation through the video.

**Video Description:**
```
••► Nouvelle compilation [n°1] des meilleurs clips Twitch français 🇫🇷 des dernières 24 heures.

••► 🔥 Aujourd'hui au programme : 🔥
00:00 - Mynthos : " Emmanuel Maquerong a un message pour Antoine Daniel ! "
    🔗 http://www.twitch.tv/mynthos

00:20 - Sackzi : " Quad feed head shot "
    🔗 http://www.twitch.tv/sackzi

[...]

••► A demain pour 💥 une nouvelle compilation 💥 !!

Si jamais vous êtes un streamer ne souhaitant plus apparaitre dans mes compilations, n’hésitez pas à me contacter sous l’adresse mail suivante afin de me le notifier :
📧 exemple@mail.com 📧
```
