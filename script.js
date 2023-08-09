let bd = "<header><h1>Random Quote Machine</h1></header><div id=\"quote-box\"><div id=\"text\"></div><div id=\"author\"></div><div class=\"row\"><div class=\"col\"><a id=\"tweet-quote\"></a></div><div class=\"col\"><button id=\"new-quote\"></button></div></div></div><footer><div id=\"f1\">Made by Maciej Browarski</div><div id=\"f2\"><a href=\"https://github.com/coder36459\" target=\"_blank\">GitHub</a> or <a href=\"https://www.linkedin.com/in/maciej-browarski\" target=\"_blank\">LinkedIn</a></div></footer>";
document.body.style.backgroundColor = "#003a74";
document.body.innerHTML = bd;

$(document).ready(function() {
	$("header").animate({opacity: "0"}, 9000);
	$("#quote-box").hide().fadeIn(3000);
	$("header").hover(
	function() {
		$(this).animate({opacity: "1"}, 3000);
		},
	function() {
		$(this).animate({opacity: "0"}, 3000);
		}
	);
	$("#quote-box").hover(
	function() {
		$(this).animate({opacity: "1"}, 3000);
		},
	function() {
		$(this).animate({opacity: "0"}, 3000);
		}
	);
	$("#f1").mouseover(function() {
		$("#f2").slideToggle("slow");
		}
	);
});

const a = [["\"The world is a dangerous place to live, not because of the people who are evil, but because of the people who don't do anything about it.\"","Albert Einstein"],["\"The only true wisdom is in knowing you know nothing.\"","Socrates"],["\"The less my hope, the hotter my love.\"","Terence"],["\"The more I read, the more I acquire, the more certain I am that I know nothing.\"","Voltaire "],["\"Appear weak when you are strong, and strong when you are weak.\"","Sun Tzu"],["\"Be the change that you wish to see in the world.\"","Mahatma Gandhi"],["\"Whoever is careless with the truth in small matters cannot be trusted with important matters.\"","Albert Einstein"],["\"Employ your time in improving yourself by other men's writings so that you shall come easily by what others have labored hard for.\"","Socrates"],["\"I am a human being, and thus nothing human is alien to me.\"","Terence"],["\"Love truth, but pardon error.\"","Voltaire"],["\"In the midst of chaos, there is also opportunity.\"","Sun Tzu"],["\"Live as if you were to die tomorrow. Learn as if you were to live forever.\"","Mahatma Gandhi"],["\"Peace cannot be kept by force; it can only be achieved by understanding.\"","Albert Einstein"],["\"The easiest and noblest way is not to be crushing others, but to be improving yourselves.\"","Socrates"],["\"There is a demand in these days for men who can make wrong appear right.\"","Terence"],["\"Dare to think for yourself.\"","Voltaire"],["\"Treat your men as you would your own beloved sons. And they will follow you into the deepest valley.\"","Sun Tzu"],["\"Happiness is when what you think, what you say, and what you do are in harmony.\"","Mahatma Gandhi"]];

let r = 0;
function random() {
	r = Math.floor(Math.random() * (a.length - 1));
	return r;
	};
	random();	
	document.getElementById("text").innerText = a[r][0];
	document.getElementById("author").innerText = "- " + a[r][1];
	document.getElementById("tweet-quote").innerText = "Tweet quote";
	document.getElementById("tweet-quote").href = "https://twitter.com/intent/tweet?text=" + a[r][0] + " - " + a[r][1];
	document.getElementById("new-quote").innerText = "New quote";
	document.getElementById("new-quote").onclick = function () {
		random();
		document.getElementById("text").innerText = a[r][0];
		document.getElementById("author").innerText = "- " + a[r][1];
		document.getElementById("tweet-quote").href = "https://twitter.com/intent/tweet?text=" + a[r][0] + " - " + a[r][1];
		};
