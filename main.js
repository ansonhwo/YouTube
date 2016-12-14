class Video {
  constructor([title, channel, channelicon, description, views, categories, thumbnail, embed]) {
    this.title = title || '';
    this.channel = channel || '';
    this.channelicon = channelicon || '';
    this.description = description || '';
    this.views = views || '';
    this.categories = categories || '';
    this.comments = [];
    this.thumbnail = thumbnail || '';
    this.embed = embed || '';
  }
  addComment(index, comment) {
    this.comments.unshift(comment);
  }
  addCategory(category) {
    if (!this.categories.includes(category)) {
      this.categories.push(category);
    }
  }
}

class User {
  constructor([name, icon]) {
    this.name = name || '';
    this.icon = icon || '';
    this.subscribed = [];
  }
  addSubscribed(channel) {
    if (!this.subscribed.includes(channel)) {
      this.subscribed.push(channel);
    }
  }
  removeSubscribed(channel) {
    if (this.subscribed.includes(channel)) {
      this.subscribed.splice(channel, 1);
    }
  }
}

const videos = [];
const users = [];
const CE = createElement;
var currentUser = 1;
var query = '';

videos.push(new Video([
  'A Message from President-Elect Donald J. Trump',
  'Transition 2017',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "The President-elect shares an update on the Presidential Transition," +
    " an outline of some of his policy plans for the first 100 days, and his day one executive actions.",
  '1,341,158',
  ['election', 'trump'],
  'https://i.ytimg.com/vi/7xX_KaStFT8/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=sSuKCtqF5viHrZPjm2RfTsPvqNs',
  'https://www.youtube.com/embed/7xX_KaStFT8?autoplay=1'
]));
videos.push(new Video([
  'Cars 3 Official US Teaser Trailer',
  'Disney-Pixar',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "From this moment, everything will change.\n\nDisney/Pixar's Cars 3 opens in US theatres" +
    " in 3D June 16, 2017.\n\nBlindsided by a new generation of blazing-fast races, the legendary Lightning McQueen (voice of Owen" +
    " Wilson) is suddenly pushed out of the sport he loves. To get back in the game, he will need the help of" +
    " an eager young race technician, Cruz Ramirez, with her own plan to win, plus inspiration from the late Fabulous" +
    " Hudson Hornet and a few unexpected turns.",
  '3,258,307',
  ['disney', 'cars', 'trailer'],
  'https://i.ytimg.com/vi/E4K7JgPJ8-s/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=DEWWRQJ38bHkSaBCT19c7Xeimnw',
  'https://www.youtube.com/embed/E4K7JgPJ8-s?autoplay=1'
]));
videos.push(new Video([
  'Flip Edition | Dude Perfect',
  'Dude Perfect',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "It's time to flip some stuff!\nThanks to Fantasitc Gymnastics by Hasbro Gaming for sponsoring" +
    " this video! Go to http://bit.ly/FantasticGymnasticsDP to get Fantastic Gymnastics for yourself!",
  '4,460,870',
  ['flip', 'cool', 'action'],
  'https://i.ytimg.com/vi/8YydogFXCPM/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=MzABtab1-7LFj6m97B5xOS-lCgk',
  'https://www.youtube.com/embed/8YydogFXCPM?autoplay=1'
]));
videos.push(new Video([
  'Billy on the Street: DEATH ROGEN! With Seth Rogen',
  'billyonthestreettv',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "New from Billy on the Street! Watch Billy hit the street with SETH ROGEN in disguise, tell" +
    " people that Seth has died and get their reactions! We call this DEATH ROGEN. Watch full episodes of Billy on the Street Tuesdays at 10:30/9:30c on @TruTV!",
  '364,533',
  ['comedy'],
  'https://i.ytimg.com/vi/A2R2iBc8udc/hqdefault.jpg?custom=true&w=168&h=94&stc=true&jpg444=true&jpgq=90&sp=68&sigh=j7ivnsDvrCl-ucJWKLoscivhtrs',
  'https://www.youtube.com/embed/diN92St7FA8?autoplay=1'
]));
videos.push(new Video([
  'Bullets vs Propeller in Slow Motion - The Slow Mo Guys',
  'The Slow Mo Guys',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "Gary and Dan venture out to the desert to film some bullets. Make sure you watch in HD for maximum bullet" +
    " shockwave action!\nCheers to EA for sponsoring this video. Check out the game at http://www.battlefield.com\n" +
    "Follow Gav on Twitter - https://twitter.com/GavinFree\nFollow Dan on Twitter - https://twitter.com/DanielGruchy",
  '1,466,322',
  ['cool', 'action'],
  'https://i.ytimg.com/vi/ysB-SH19WRQ/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=9OEQLS6JSWBMQ8sCrd0yZt58lJ8',
  'https://www.youtube.com/embed/ysB-SH19WRQ?autoplay=1'
]));
videos.push(new Video([
  'The Voice 2016 Billy Gilman - Top 11: "All I Ask"',
  'The Voice',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "Billy Gilman showcases his vocal talent with a powerful rendition of 'All I Ask' by Adele.\n\n" +
    "NBC's The Voice follows the strongest vocalists from across the country and invites them to compete in" +
    " this season's blockbuster vocal competition.",
  '213,615',
  ['cool', 'singing'],
  'https://i.ytimg.com/vi/RswuJVHVw_0/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=6lmdPt82bEpmKOw202Zi67Iwk7U',
  'https://www.youtube.com/embed/RswuJVHVw_0?autoplay=1'
]));
videos.push(new Video([
  'The iPhone 8 Will Be Incredible!',
  'EverythingApplePro',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "iPhone 8 & 8 Plus Rumors & Leaks Have Begun! New Features To Expect & Rumor Roundup With Sources!",
  '693,167',
  ['technology', 'tech', 'apple', 'iphone'],
  'https://i.ytimg.com/vi/MZqyfeUi7As/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=HDgDRvuiwhCcMHXVT0Gm9eukqU8',
  'https://www.youtube.com/embed/MZqyfeUi7As?autoplay=1'
]));
videos.push(new Video([
  '10 Disney Crossover Easter Eggs That You\'ve Never Seen',
  'Screen Rant',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "Animated movies are a right of passage for most children, and nobody does them better than Disney. Every child remembers watching Snow White and" +
    " The Little Mermaid for the first time, and most of us are still heading to theatres whenever a new Pixar film comes out. But we don't always catch the Easter" +
    " eggs left there by mischievious animators, or the cameos that some Disney characters make in movies that aren't their own.",
  '260,853',
  ['disney', 'cool'],
  'https://i.ytimg.com/vi/KBTwUOsO4d0/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=Ue_RmuQ0uggRmpbxvxQAiC-w060',
  'https://www.youtube.com/embed/KBTwUOsO4d0?autoplay=1'
]));
videos.push(new Video([
  'Disney Pixar Cars | The Die-cast Series Ep. 2 | Takes on the Washroom',
  'Disney-Pixar',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "Get ready to watch your favorite Disney Pixar Cars die-cast vehicles race to the finish in awesome real world environments. Tune " +
    "in each week to see your favorite die-cast vehicles speed, drift and jump through new locations and crazy obstacles on their way to the finish line.",
  '282,667',
  ['disney', 'short', 'cars'],
  'https://i.ytimg.com/vi/-6rCTa9DBx0/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=OFObaw7I2mU4ost9g3mmfN_Amd8',
  'https://www.youtube.com/embed/-6rCTa9DBx0?autoplay=1'
]));
videos.push(new Video([
  'Apple - Introducing iPhone 7',
  'Apple',
  'https://yt3.ggpht.com/-CmoaPOAkgk8/AAAAAAAAAAI/AAAAAAAAAAA/RCGcK9m4sHo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
  "With new camera systems, stereo speakers, and the most powerful chip ever in a smartphone, iPhone 7 and iPhone 7 Plus make " +
    "the things you do most even better. Two new finishes highlight the seamless design.",
  '22,191,734',
  ['technology', 'tech', 'apple', 'iphone'],
  'https://i1.ytimg.com/vi/Q6dsRpVyyWs/hqdefault.jpg',
  'https://www.youtube.com/embed/Q6dsRpVyyWs?autoplay=1'
]));

users.push(new User([
  'User1',
  'http://simpleicon.com/wp-content/uploads/user1.png'
]));
users.push(new User([
  'User2',
  'https://cdn0.iconfinder.com/data/icons/PRACTIKA/256/user.png'
]));
users.push(new User([
  'User3',
  'http://downloadicons.net/sites/default/files/women-business-user-icon-44928.png'
]));
users.push(new User([
  'User4',
  'https://cdn0.iconfinder.com/data/icons/PRACTIKA/256/user.png'
]));

buildFeatured();

// Builds the featured videos area
function buildFeatured() {
  let featuredList = [];
  let $featured = document.getElementById('featured');

  let $featureBlock =
    CE('div', {'id': 'featureblock'}, [
      CE('div', {'class': 'feature-top'}, [
        CE('div', {'class': 'header'}, ['Featured'])
      ])
    ]);

  let $featureBottom = CE('div', {'class': 'feature-bottom'}, []);
  let $featureList = CE('ul', {'class': 'feature-list'}, []);

  while (featuredList.length < 4) {
    let random = Math.floor(Math.random() * videos.length);

    if (!featuredList.includes(random)) featuredList.push(random);
  }

  for (let index = 0; index < featuredList.length; index++) {
    let $featureCol =
      CE('li', {'class': 'col'}, [
        CE('div', {'class': 'col-wrap'}, [
          CE('a', {'href': '#'}, [
            CE('img', {'class': 'videoimg', 'src': videos[featuredList[index]].thumbnail, 'data-embed': videos[featuredList[index]].embed}, [])
          ]),
          CE('a', {'href': '#'}, [
            CE('p', {'class': 'videotitle', 'data-embed': videos[featuredList[index]].embed}, [videos[featuredList[index]].title])
          ]),
          CE('div', {'class': 'videochannel'}, [videos[featuredList[index]].channel]),
          CE('div', {'class': 'videoviews'}, [videos[featuredList[index]].views + ' views'])
        ])
      ]);

    $featureList.appendChild($featureCol);
  }
  $featureBottom.appendChild($featureList);
  $featureBlock.appendChild($featureBottom);
  $featured.appendChild($featureBlock);
}

// Deletes all of the children associated with the provided element ID.
function deleteChild(element) {
  while (element.hasChildNodes()) {
    element.removeChild(element.lastChild);
  }
}

// Create elements with the given attributes & child nodes
function createElement(tagName, attributes, children) {
  let element = document.createElement(tagName);

  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  for (let index = 0; index < children.length; index++) {
    let child = children[index];

    if (child instanceof Element) {
      element.appendChild(child);
    }
    else {
      element.appendChild(document.createTextNode(child));
    }
  }
  return element;
}

// Set a hidden object to active
function show($element) {
  $element.classList.add('active');
  $element.classList.remove('hidden');
}

// Set an active object to hidden
function hide($element) {
  $element.classList.add('hidden');
  $element.classList.remove('active');
}

// Filter videos based on the filter provided by the user
function filterVideos(filter) {
  let $videos = document.getElementById('videos');
  let $filter = document.getElementById('filter');
  let $invalid = document.getElementById('invalidsearch');
  let $videoBlock = document.querySelector('#videos #videoblock');

  if ($invalid) hide($invalid);

  if (query) {
    let videoList = findMatch();

    if ($videoBlock) deleteChild($videoBlock);
    if (videoList.length <= 0) {
      if (!$invalid) {
        let $invalidSearch = CE('h2', {'id': 'invalidsearch'}, ['No results found for: ' + query + '.']);

        $filter.appendChild($invalidSearch);
      }
      else {
        $invalid.textContent = 'No results found for: ' + query + '.';
        show($invalid);
      }
      let $filterResults = document.querySelector('#filterblock .filter-results');

      hide($videos);
      $filterResults.textContent = 'About 0 results';
    }
    else {
      show($videos);
      if (filter === '0') {
        buildVideoList(videoList);
      }
      else if (filter === '1') {
        let sorted =
          videoList.map((_, index) => {
            let video = findVideo(videoList[index].embed);
            let views = parseInt(videoList[index].views.replace(/,/g, ''));
            return [video, views];
          })
          .sort((video1, video2) => {
            if (video1[1] < video2[1]) return 1;
            else return 0;
          });

        let mostViews = sorted.map((_, index) => videos[sorted[index][0]]);

        buildVideoList(mostViews);
      }
      else if (filter === '2') {
        let sorted =
          videoList.filter((_, index) => {
            let sub = videoList[index].channel;
            return users[currentUser].subscribed.includes(sub);
          });

        buildVideoList(sorted);
      }
    }
  }
}

// Return an array of matched video objects based on user query.
function findMatch() {
  var videoList = [], videoScores = [];
  var searchWords = query.split(' ');
  var channel, title, description, subscribed, category, score = 0;

  for (let index = 0; index < searchWords.length; index++) {
    var search = searchWords[index].toLowerCase().replace(/[^A-Za-z0-9\s]/g,'');

    if (search) {
      for (let video = 0; video < videos.length; video++) {
        subscribed = false;
        channel = videos[video].channel.toLowerCase().replace(/[^A-Za-z0-9\s]/g,'').includes(search);
        title = videos[video].title.toLowerCase().replace(/[^A-Za-z0-9\s]/g,'').includes(search);
        description = videos[video].description.toLowerCase().replace(/[^A-Za-z0-9\s]/g,'').includes(search);
        category = videos[video].categories.indexOf(search) > -1;

        if (channel || title || description || category) {
          score = getScore(videoScores, video);

          if (score < 0) {
            videoScores.push([video, 0]);
            score = 0;
          }
          for (let sub = 0; sub < users[currentUser].subscribed.length; sub++) {
            if (users[currentUser].subscribed[sub] === videos[video].channel) {
              subscribed = true;
              break;
            }
          }
          if (subscribed) {
            if (channel) score += 1000;
            if (title) score += 200;
            if (category) score += 50;
            if (description) score += 0.5;
          }
          else {
            if (channel) score += 30;
            if (title) score += 2;
            if (category) score += 1;
            if (description) score += 0.1;
          }
          setScore(videoScores, video, score);
        }
      }
    }
  }
  videoScores.sort(function (video1, video2) {
    if (video1[1] < video2[1]) return 1;
    else return 0;
  });

  for (let index = 0; index < videoScores.length; index++) {
    videoList.push(videos[videoScores[index][0]]);
  }
  return videoList;
}

// Finds if a score already exists for a matched video
function getScore(list, video) {
  var score = -1;

  for (var index = 0; index < list.length; index++) {
    if (list[index][0] === video) {
      score = list[index][1];
      break;
    }
  }
  return score;
}


// Updates the score for the specified video
function setScore(list, video, score) {
  for (var index = 0; index < list.length; index++) {
    if (list[index][0] === video) {
      list[index][1] = score;
      break;
    }
  }
}


// Builds video list with videos that match the user's search query
function buildVideoList(elements) {
  var $videoList = document.getElementById('videos');
  var $filterResults = document.querySelector ('#filterblock .filter-results');
  var $exists = document.getElementById('videoblock');
  var $videoBlock;

  if (!$exists) {
    $videoBlock = CE('div', {'id': 'videoblock'}, []);
  }
  else {
    $videoBlock = $exists;
  }

  $filterResults.textContent = 'About ' + elements.length + ' results';
  $videoList.appendChild($videoBlock);

  for (var index = 0; index < elements.length; index++) {
    var $videoDetails =
      CE('div', {'class': 'videodetails', 'data-embed': elements[index].embed}, [
        CE('a', {'href': '#'}, [
          CE('img', {'class': 'videoimg', 'src': elements[index].thumbnail, 'data-embed': elements[index].embed}, [])
        ]),
        CE('a', {'href': '#'}, [
          CE('h4', {'class': 'videotitle', 'data-embed': elements[index].embed}, [elements[index].title])
        ]),
        CE('p', {'class': 'videochannel'}, [elements[index].channel]),
        CE('p', {'class': 'videoviews'}, [elements[index].views + ' views']),
        CE('p', {'class': 'videodesc'}, [elements[index].description])
      ]);

    $videoBlock.appendChild($videoDetails);
  }
}


// Builds the filter selector area
function buildFilter($element) {
  var $exists = document.getElementById('filterblock');

  if ($exists) return;
  else {
    var $filterBlock = CE('div', {'id': 'filterblock'}, []);

    var $filter = CE('div', {'id': 'top-filter'}, [
      CE('button', {'class': 'filter-button'}, [
        CE('span', {'class': 'filter-text'}, ["Filters"]),
        CE('span', {'class': 'filter-icon'}, [
          CE('i', {'class': 'fa fa-caret-down filter', 'aria-hidden': 'true'}, [])
        ])
      ]),
      CE('span', {'class': 'filter-results'}, [])
    ]);

    var $filterOptions = CE('div', {'id': 'bottom-filter', 'class': 'hidden'}, [
      CE('div', {'class': 'option-block'}, [
        CE('span', {'class': 'option toggle', 'data-opt': 0}, ['Relevance']),
        CE('span', {'class': 'option', 'data-opt': 1}, ['Most Viewed']),
        CE('span', {'class': 'option', 'data-opt': 2}, ['Subscribed'])
      ])
    ]);

    $element.appendChild($filterBlock);
    $filterBlock.appendChild($filter);
    $filterBlock.appendChild($filterOptions);
  }
}


// Builds the video viewing area containing video related details
function buildViewingArea(embed) {
  var index = findVideo(embed);
  var $filter = document.getElementById('filter');

  hide($filter);
  buildVideoArea(embed);
  buildVideoDetails(index);
  addCommentsArea();
  userCommentsArea(index);
}


// Populate the Video Player area
function buildVideoArea(embed) {
  var $videos = document.getElementById('videos');
  var $viewingArea = CE('div', {'id': 'viewingarea'}, []);

  $videos.appendChild($viewingArea);

  var $embed =
    CE('div', {'id': 'embed'}, [
      CE('iframe', {'id': 'uservideo', 'height': '480px', 'width': '854px', 'src': embed, 'frameborder': 0, 'allowfullscreen': ''}, [])
    ]);

  $viewingArea.appendChild($embed);
}


// Populate the Video Details section
function buildVideoDetails(index) {
  var $videos = document.getElementById('videos');
  var subscribed = users[currentUser].subscribed.includes(videos[index].channel);

  var $channelbox =
      CE('div', {'id': 'channelbox'}, [
        CE('img', {'class': 'videoicon', 'src': videos[index].channelicon}, []),
        CE('div', {'class': 'channelwrap'}, [
          CE('p', {'class': 'channel'}, [videos[index].channel]),
          CE('button', {'id': 'subscribe', 'class': subscribed ? 'yes' : 'no'}, [subscribed ? '✓ Subscribed' : 'Subscribe'])
        ])
      ]);

  var $titlebox =
    CE('div', {'id': 'titlebox'}, [
      CE('h2', {'class': 'title'}, [videos[index].title])
    ]);

  var $videoinfo =
    CE('div', {'id': 'videoinfo'}, [
      $titlebox, $channelbox,
      CE('p', {'class': 'views'}, [videos[index].views + ' views']),
      CE('p', {'class': 'desc'}, [videos[index].description])
  ]);

  $videos.appendChild($videoinfo);
}


// Populate the Add Comments section
function addCommentsArea() {
  var $videos = document.getElementById('videos');

  var $author =
    CE('span', {'class': 'author'}, [
      CE('img', {'class': 'icon', 'src': users[currentUser].icon}, [])
    ]);

  var $commentWrap =
    CE('div', {'class': 'wrap'}, [
      CE('form', {'action': ''}, [
        CE('textarea', {'class': 'input', 'type': 'text', 'placeholder': 'Add a public comment...', 'name': 'comment'}, [])
      ]),
      CE('div', {'class': 'buttonwrap'}, [
        CE('button', {'class': 'submitcomment'}, ['Comment']),
        CE('button', {'class': 'cancelcomment'}, ['Cancel'])
      ])
    ]);

  var $addComments = CE('div', {'id': 'addcomments'}, [
    CE('h4', {'class': 'header'}, []),
    $author,
    $commentWrap
  ]);

  $videos.appendChild($addComments);
}


// Populate the User Comments section
function userCommentsArea(index) {
  var $videos = document.getElementById('videos');
  var $commentHeader = document.querySelector('#addcomments .header');
  var numComments = videos[index].comments.length;

  $commentHeader.textContent = 'COMMENTS • ' + numComments;

  if (numComments > 0) {
    var $exists = document.getElementById('usercomments');

    if ($exists) {
      deleteChild($exists);
      populate(index, $exists, numComments);
    }
    else {
      var $userComments = CE('div', {'id': 'usercomments'}, []);
      $videos.appendChild($userComments);
      populate(index, $userComments, numComments);
    }
  }
}


// Helper function that adds comments to user comment area
function populate(video, $element, numComments) {
  for (var index = 0; index < numComments; index++) {
    var $userComment = CE('div', {'class': 'block'}, [
      CE('span', {'class': 'author'}, [
        CE('img', {'class': 'icon', 'src': videos[video].comments[index].icon}, [])
      ]),
      CE('div', {'class': 'wrap'}, [
        CE('p', {'class': 'user'}, [videos[video].comments[index].user]),
        CE('p', {'class': 'comment'}, [videos[video].comments[index].comment])
      ])
    ]);

    $element.appendChild($userComment);
  }
}


// Adds a new comment to the current video
function addComment(video, user) {
  var $input = document.querySelector('#addcomments .input');
  var input = $input.value.trim();

  if (input) {
    var comment = new Comment(users[user].name, users[user].icon, 40, input);

    videos[video].comments.unshift(comment);
    $input.value = '';
    userCommentsArea(video);
  }
}


// Comment object constructor
function Comment(user, icon, age, comment) {
  this.user = user;
  this.icon = icon;
  this.age = age;
  this.comment = comment;
}


// Helper function that returns index of target video in video database
function findVideo(embed) {
  for (var index = 0; index < videos.length; index++) {
    if (videos[index].embed === embed) {
      return index;
    }
  }
}


document.addEventListener('submit', function(event) {

  event.preventDefault();

  query = document.getElementById('searchbar').value.trim();

  if (query) {
    var $videos = document.getElementById('videos');
    var $filter = document.getElementById('filter');
    var $featured = document.getElementById('featured');

    buildFilter($filter);
    show($filter);
    hide($featured);

    var $options = document.querySelector('#filterblock .option-block').getElementsByClassName('toggle')[0];

    deleteChild($videos);
    filterVideos($options.getAttribute('data-opt'));
  }
}, true);


document.addEventListener('click', function(event) {
  var $target = event.target;
  var embedURL, $videos, $featured, $filter;

  if ($target.id === 'logo') {
    $videos = document.getElementById('videos');
    $featured = document.getElementById('featured');
    $filter = document.getElementById('filter');

    show($featured);
    hide($filter);
    hide($videos);
    deleteChild($featured);
    buildFeatured();
  }
  if ($target.className === 'videoimg' || $target.className === 'videotitle') {
    event.preventDefault();

    $videos = document.getElementById('videos');
    $featured = document.getElementById('featured');
    embedURL = $target.getAttribute('data-embed');

    hide($featured);
    deleteChild($videos);
    buildViewingArea(embedURL);
  }
  if ($target.className === 'submitcomment') {
    embedURL = document.getElementById('uservideo').getAttribute('src');
    addComment(findVideo(embedURL), currentUser);
  }
  if ($target.className === 'cancelcomment') {
    document.querySelector('#addcomments .input').value = '';
  }
  if ($target.id === 'subscribe') {
    var channel = document.querySelector('#videoinfo .channelwrap .channel').textContent;

    if ($target.className === 'yes') {
      $target.setAttribute('class', 'no');
      $target.textContent = 'Subscribe';
      users[currentUser].subscribed.splice(users[currentUser].subscribed.indexOf(channel), 1);
    }
    else {
      $target.setAttribute('class', 'yes');
      $target.textContent = '✓ Subscribed';
      users[currentUser].subscribed.push(channel);
    }
  }
  if ($target.className.includes('filter')) {
    $filter = document.getElementById('filterblock').getElementsByClassName('hidden')[0];

    if ($filter) {
      show($filter);
    }
    else {
      $filter = document.getElementById('filterblock').getElementsByClassName('active')[0];
      hide($filter);
    }
  }
  if ($target.className.includes('option') && !$target.className.includes('toggle')) {
    var $options = $target.parentElement.getElementsByClassName('option');

    for (var index = 0; index < $options.length; index++) {
      if ($options.item(index).className.includes('toggle')) {
        $options.item(index).classList.remove('toggle');
      }
    }
    $target.classList.add('toggle');
    filterVideos($target.getAttribute('data-opt'));
  }
}, true);
