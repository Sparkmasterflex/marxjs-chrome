var popluate_selected_fields, populate_inputs;

window.Marx = function() {
  return {
    marx_json: {
      text: ["Love Happy", "A Night in Casablanca", "Room Service", "A Day at the Races", "Duck Soup", "Horse Feathers", "Monkey Business", "Animal Crackers", "The Cocoanuts", "Night at the Opera", "Sam", "Grunion", "Detective", "Faustino", "Harpo", "Marx", "Ronald", "Kornblow", "Rusty", "Stubel's valet", "Corbaccio", "Owner of the Yellow Camel company"],
      number: [1949, 1946, 1938, 1937, 1933, 1932, 1931, 1930, 1929, 1935],
      textarea: ["Friends, I'm gonna tell you of the great, mysterious, wonderful continent known as Africa. Africa is God's country, and He can have it. Well, sir, we left New York drunk and early on the morning of February 2nd. After fifteen days on the water and six on the boat, we finally arrived on the shores of Africa. We at once proceeded three hundred miles into the heart of the jungle, where I shot a polar bear. This bear was six foot seven in his stocking feet and had shoes on....", "Oh you did! Well, this bear was anemic and he couldn't stand the cold climate. He was a rich bear and he could afford to go away for the winter. You take care of your animals and I'll take care of mine! Frozen North, my eye! From the day of our arrival, we led an active life. The first morning saw us up at six, breakfasted, and back in bed at seven - this was our routine for the first three months. We finally got so we were back in bed at six thirty. One morning, I was sitting in front of the cabin, smoking some meat...Yes. There wasn't a cigar store in the neighborhood. As I say, I was sitting in front of the cabin when I bagged six tigers...Six of the biggest tigers...I bagged them. I...I bagged them to go away, but they hung around all afternoon. They were the most persistent tigers I've ever seen.", "The principal animals inhabiting the African jungle are moose, elks and Knights of Pythias. Of course, you all know what a moose is. That's big game. The first day, I shot two bucks. That was the biggest game we had. As I say, you all know what a moose is? A moose runs around on the floor, and eats cheese, and is chased by the cats. The elks, on the other hand live up in the hills, and in the spring they come down for their annual convention. It is very interesting to watch them come to the water hole. And you should see them run when they find it is only a water hole. What they're looking for is an 'elk-a-hole'.", "One morning, I shot an elephant in my pajamas. How he got in my pajamas, I don't know. Then we tried to remove the tusks. The tusks. That's not so easy to say, tusks. You try that some time...As I say, we tried to remove the tusks, but they were embedded in so firmly that we couldn't bust them. Of course, in Alabama, the Tusk-a-loosa. But, uh, that's entirely ir-elephant to what I was talking about. We took some pictures of the native girls, but they weren't developed. But we're going back again in a couple of weeks.", "Mrs Teasdale, you did a noble deed. I’d be unworthy of the high trust that’s been placed in me if I didn’t do everything within my power to keep our beloved Freedonia in peace with the world.", "I’d be only too happy to meet with Ambassador Trentino, and offer him on behalf of my country the right hand of good fellowship. And I feel sure he will accept this gesture in the spirit of which it is offered.", "But suppose he doesn’t. A fine thing that’ll be. I hold out my hand and he refuses to accept it. That’ll add a lot to my prestige, won’t it? Me, the head of a country, snubbed by a foreign ambassador. Who does he think he is, that he can come here, and make a sap out of me in front of all my people?", "Think of it – I hold out my hand and that hyena refuses to accept it. Why, the cheap ball-pushing swine, he’ll never get away with it I tell you, he’ll never get away with it!", "Well gentlemen, what I'm concerned about is the future of this hotel... Well we've got to speed things up. Ah... chef, if a guest orders a three minute egg give it to them in two minutes. If they order a two minute egg give it to them in one minute. If he orders a one minute egg, give him a chicken and let him work it out.", "The faculty can keep their seats. There'll be no diving for this cigar. Members of the faculty, faculty members, students of Huxley and Huxley students! I guess that covers everything.", "Well I thought my razor was dull until I heard his speech. And that reminds me of a story so dirty I'm ashamed to think of it myself. As I look out over your faces, I can readily understand why this college is flat on its back. The last college I presided over things were slightly different. I was flat on my back. Things kept going from bad to worse, but we all put our shoulders to the wheel and it wasn't long before I was flat on my back again.", "Any questions? Any answers? Any rags? Any bones? Any bottles today? And rags... Let's have some action around here. Who'll say 76? Who'll say 1776? That's the spirit! 1776! No doubt you'd like to know why I'm here. I came here to get my son out of it. I remember the day he left: A mere boy and a beardless youth. I kissed them both goodbye. By the way, where is my son? Young lady, would you mind getting up so I can see the son rise? So, doing your homework in school, eh?", "Groucho: Have you ever had any experience as a kidnapper? Chico: You bet. You know what I do when I kidnap somebody? First I call them up on the telephone and then I send them my chauffeur. Groucho: Oh, you got a chauffeur? Chico: Yeah. Groucho: What kind of a car do you got? Chico: Oh, I no gotta car, I just got a chauffeur. Groucho: Well maybe I'm crazy, but when you got a chauffeur, aren't you supposed to have a car? Chico: I had one, but you see it cost too much to keep a car and the chauffeur. So I sold the car. Groucho: Well that shows how little I know. I would have kept the car and sold the chauffeur.", "This is some football game and I wish you were here. In fact I wish you were here instead of me. Last week I told you that Mrs. Moskowitz was expecting a blessed event. Well last night Mrs. Moskowitz had twins. Ok, Mr. Moskowitz!"]
    },
    effected: {
      inputs: 0,
      texareas: 0,
      selects: 0,
      check_boxes: 0,
      radio_buttons: 0,
      hidden_fields: 0
    }
  };
};

popluate_selected_fields = function(e) {
  switch (e.target.getAttribute('class')) {
    case 'populate-textareas':
      return console.log('texareas');
    case 'populate-inputs':
      return populate_inputs();
    case 'populate-checkboxes':
      return console.log('check');
    case 'populate-radios':
      return console.log('radios');
    case 'populate-selects':
      return console.log('selects');
    default:
      return console.log('whole form');
  }
};

populate_inputs = function() {
  var i, js_code, query, types, _i, _ref;
  query = "";
  types = ['text', 'email', 'number', 'password', 'url', 'date'];
  for (i = _i = 0, _ref = types.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
    query += "input[type=" + types[i] + "], ";
  }
  js_code = "var i, text_arr, inputs, elm, _i, _ref;\n\ntext_arr = [\"" + (marx.marx_json["text"].join("\", \"")) + "\"];\nnum_arr = [\"" + (marx.marx_json["number"].join("\", \"")) + "\"];\ninputs = document.querySelectorAll('" + (query.replace(/,\s$/, '')) + "');\nfor(var i = 0; i < inputs.length; i++) {\n  elm = inputs[i];\n  var rand = Math.floor(Math.random() * text_arr.length);\n  switch(elm.getAttribute('type')) {\n    case 'text':\n    case 'password':\n      elm.value = text_arr[rand];\n      break;\n    case 'email':\n      var rand_2 = Math.floor(Math.random() * text_arr.length),\n          email = text_arr[rand].toLowerCase().replace(/\\s/g, '') + '@' + text_arr[rand_2].toLowerCase().replace(/\\s/g, '') + '.com';\n      elm.value = email;\n      break;\n    case 'number':\n      elm.value = num_arr[rand];\n      break;\n    case 'url':\n      elm.value = \"http://\" + text_arr[rand].toLowerCase().replace(/\\s/g, '') + \".com\";\n      break;\n    case 'date':\n      elm.value = num_arr[rand] + \"-01-01\";\n      break;\n  }\n}";
  chrome.tabs.executeScript(null, {
    code: js_code
  });
  return window.close();
};

document.addEventListener('DOMContentLoaded', function() {
  var i, standard_links, _i, _ref, _results;
  window.marx = new Marx();
  standard_links = document.querySelectorAll('.marx-standard-controls a');
  _results = [];
  for (i = _i = 0, _ref = standard_links.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
    _results.push(standard_links[i].addEventListener('click', popluate_selected_fields));
  }
  return _results;
});
