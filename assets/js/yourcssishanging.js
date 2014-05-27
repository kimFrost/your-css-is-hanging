;(function(window, document, undefined) {
	var yourcssishanging = new namespace("Nemrefusion");
	// Set default data
	yourcssishanging.data = {
		logCount: 0
	};
	yourcssishanging.log = function(msg) {
		try {
			if (this.data.logCount > 200) {
				console.clear();
				this.data.logCount = 0;
			}
			if (msg.toString().trim() === 'true') {
				console.log('%c' + msg,'background-color: green; color: #fff;');
			}
			else if (msg.toString().trim() === 'false') {
				console.log('%c' + msg,'background-color: red; color: #fff;');
			}
			else {
				console.log(msg);
			}
			this.data.logCount++;
		}
		catch(err) {
			//send error to developer platform
		}
	};
	yourcssishanging.resetScrollView = function() {
		// Reset scroll container(window)
		window.scrollTo(0, 0);
	};
	yourcssishanging.init = function() {
		//yourcssishanging.resetScrollView();
	};

	yourcssishanging.init();

	// Make sure that module is exposed to window
	window.yourcssishanging = yourcssishanging;
})(window, window.document);




// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,

	theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
	transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

	// Parallax scrolling
	// parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
	// parallaxBackgroundSize: '2100px 900px',

	// Optional libraries used to extend on reveal.js
	dependencies: [
		{ src: 'assets/js/libs/reveal/lib/js/classList.js', condition: function() { return !document.body.classList; } },
		{ src: 'assets/js/libs/reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'assets/js/libs/reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'assets/js/libs/reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: 'assets/js/libs/reveal/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
		{ src: 'assets/js/libs/reveal/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
	]
});