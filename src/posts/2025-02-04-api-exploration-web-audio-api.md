---
surtitle: 'API Exploration: Web Audio API'
title: Episode 1. Splendor and decay (and splendor again) of the <audio> tag
subtitle: Among standard APIs, none is more playful than the Web Audio API - at least in my opinion. Let's drop some CSS rainbow in your music!
date: 04-02-2025
published: false
categories:
  - 'Web APIs'
  - 'JavaScript'
  - 'Audio'
---

<script>
  import AudioPlayer from '$lib/AudioPlayer.svelte';
  import Cube from '$lib/Cube.svelte';
</script>

> ### Note
>
> You don't need to master or use any specific library or framework here.
> Everything can be done in an **.html** file, with `<style>` and `<script>` tags (even if it will probably not be the most comfortable dev environment possible).
> Well, in a nutshell: **do what you normally do**.

## Basic implementation

First things first, we need a sound file and an audio player.

The sound file is quite easy to find: you can get thousands free of charge (and legal) sounds on [Pixabay](https://pixabay.com/en/music/search/) for instance.

Now the audio player:

<AudioPlayer src="/audio/example.mp3" className="content-audio-1" />

```html
<audio src="example.mp3" controls />
```

Style does not matter for now. I just applied a few properties to be sure that it's easy enough to see the player on this page:

```css
audio {
	margin: 1rem 0;
	width: 100%;
	border: 1px solid #e0e0e0;
}
```

We could talk for hours about the `<audio>` element, introduced with HTML5. Yes, it's amazing, yes, it's perfectly standard, yes, it will look different depending on your browser because it is not styled by default. You can learn [all of that and more on MDN](https://developer.mozilla.org/en/docs/Web/HTML/Element/audio), so we'll keep it short.

A few interesting attributes for us:

- <Cube className="content-li" /> `autoplay` allows you to autoplay your file ;
- <Cube className="content-li" /> `loop` activates loop playing ;
- <Cube className="content-li" /> `muted` to mute the sound ;
- <Cube className="content-li" /> and, of course, `controls`, which allows us to display an embryo of audio player with our browser's defaults (play, pause, volume, duration / reading status).

There's plenty more there that could be useful, but those are the main that will allow us to directly control our sound, or provide us with an interface to do it.

From there, we have access to some CSS styling... But not the background of our `<audio>` tag, because its appearance is controlled by the browser.

One solution here: wrap it into a div and style the div.

```css
.audio-wrapper {
	--unicorn: linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb, #a18cd1, #8ec5fc, #a6c1ee);
	background: var(--unicorn);
	margin: 1rem 0;
	width: 100%;
	border: 1px solid #e0e0e0;
}
```

<div class="audio-wrapper-2">
  <AudioPlayer src="/audio/example.mp3" className="content-audio-2" />
</div>

And iiiiiiiiiit's... not going well.

Our problem is the controls, that are browser dependant. So not only our audio player looks awful, but it accepts different shades of awfulness depending on the browser.

On Firefox:

![A very bad-looking audio player on Firefox](/imgs/audioplayer-firefox.jpg)

On Chrome:

![A very bad-looking audio player on Chrome](/imgs/audioplayer-chrome.jpg)

On Safari:
![A very bad-looking audio player on Safari](/imgs/audioplayer-safari.jpg)

Nice, huh?

## Enter javascript

This is why it's more than usual to just call the audio element without any controls, and deal with everything else with "fake" elements:

```html
<audio src="example.mp3" />
```

And... voilàààààààààà !

<AudioPlayer src="/audio/example.mp3" hasControls={false} />

Yes, it's here. It's here, look, just above! Oh... OK, but believe me, it's here. Here's a screenshot of the DOM Inspector for the element above this text:

![Even if it's not visible, the audio player is in the DOM](/imgs/audioplayer-invisible.jpg)

The good news is: it's here. The bad news is: we can't see it anymore. But that's actually a good news. At least that's what we wanted to achieve. Why? Because now, at least, we can implement a player ourselves.

OK, so, let's say we need a box, this box should be clearly separated from the rest of our App (ideally, it'll be reusable in the end, so we can put it anywhere in our app). In that div, we'll need our invisible player, a play / pause button and that's basically it for now.

```html
<div class="audio-player">
	<audio src="example.mp3" />
	<button class="play-pause">Play / pause</button>
</div>
```

<div class="audio-player">
	<audio src="example.mp3" />
	<button>Play / pause</button>
</div>

I know what you're going to say: it's not working. Nope, it's not. Which is kind of evident if you think about it: we have a button, but it's not supposed to do anything. We are going to have to:

- <Cube className="content-li" /> Reference the button
- <Cube className="content-li" /> Listen to the click
- <Cube className="content-li" /> Get the `<audio>` tag
- <Cube className="content-li" /> Give the instruction to the `<audio>` tag: "Play the file"
- <Cube className="content-li" /> If we click again on the button, it's supposed to pause... Which means that we'll actually have to do some programming here. If the status is "paused", it should play. If it's "playing", is should be paused.
- <Cube className="content-li" /> And... Probably something else, you figure. Well, you're perfectly right. But let's dive later here, and start simple.

```javascript
// Assign our button and our audio elements to variables
const button = document.querySelector('.play-pause');
const audioPlayer = document.querySelector('audio');

// Listen to the click
if (button) {
	button.addEventListener('click', (event) => {
		if (audioPlayer) {
			// Errrrrrrrrh, now what?
		}
	});
}
```

Now, what? I mean, we could go further. We haven't done all of our pseudo-code list above. So we could still create some sort of local state, assign it to `playing`, initialize it to `false` and so on. But if we want to do it "as in real life", it's definitely not in that order that we'd do it.

We'd start with the simplest task: play the file. Add tests, avoid regression, move to the next, etc. So we're stuck, and what do we do in these cases?

**We use [HOWLER.JS](https://github.com/goldfire/howler.js#)!!!!!!!!!!**

Nah, kidding, of course. We'll dive into the Web Audio API. That's for the next episode, and frankly, that might just be the right time to acknowledge how Howler.js and other libs are amazing. Check it, read the philosophy of it, try to get some implementation design. Then we'll get back to our Web Audio API in **"Episode 2. These waves are moving, bro"**.

For Episode 1, I'll leave you with some CSS, so you don't get the wrong impression that we did all of this in vain:

<AudioPlayer src="/audio/example.mp3" className="with-wrapper-1" wrapperClassName="wrapper-1" hasControls={false} buttonText="Play / pause" />

```html
<div class="audio-player">
	<audio src="example.mp3" />
	<button>Play / pause</button>
</div>
```

```css
.audio-player {
	align-items: center;
	aspect-ratio: 3/2;
	background: var(--unicorn);
	border: none;
	border-radius: 3rem;
	display: flex;
	justify-content: center;
	margin: 1rem 0;
	transition:
		transform 0.2s ease-in-out,
		box-shadow 0.3s ease-in-out;
	width: 200px;
}

.audio-player:hover {
	box-shadow:
		10px 10px 15px rgba(255, 154, 158, 0.4),
		20px 20px 25px rgba(168, 140, 209, 0.3),
		30px 30px 35px rgba(142, 197, 252, 0.2);
	transform: rotate3d(1, -1, 0, 25deg) scale(1.05);
	transition:
		transform 0.2s ease-in-out,
		box-shadow 0.3s ease-in-out;
}

.audio-player button {
	cursor: pointer;
	transition: transform 0.2s ease-in-out;
}

.audio-player:hover button {
	transform: scale(1.25);
	transition: transform 0.2s ease-in-out;
}
```

That's all, folks!
