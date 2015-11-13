window.Marx = function() {
  this.marx_json = {
    text: ["Love Happy", "A Night in Casablanca", "Room Service", "A Day at the Races", "Duck Soup", "Horse Feathers", "Monkey Business", "Animal Crackers", "The Cocoanuts", "Night at the Opera", "Sam", "Grunion", "Detective", "Faustino", "Harpo", "Marx", "Ronald", "Kornblow", "Rusty", "Stubel's valet", "Corbaccio", "Owner of the Yellow Camel company"],
    number: [1949, 1946, 1938, 1937, 1933, 1932, 1931, 1930, 1929, 1935],
    textarea: ["Friends, I'm gonna tell you of the great, mysterious, wonderful continent known as Africa. Africa is God's country, and He can have it. Well, sir, we left New York drunk and early on the morning of February 2nd. After fifteen days on the water and six on the boat, we finally arrived on the shores of Africa. We at once proceeded three hundred miles into the heart of the jungle, where I shot a polar bear. This bear was six foot seven in his stocking feet and had shoes on....", "Oh you did! Well, this bear was anemic and he couldn't stand the cold climate. He was a rich bear and he could afford to go away for the winter. You take care of your animals and I'll take care of mine! Frozen North, my eye! From the day of our arrival, we led an active life. The first morning saw us up at six, breakfasted, and back in bed at seven - this was our routine for the first three months. We finally got so we were back in bed at six thirty. One morning, I was sitting in front of the cabin, smoking some meat...Yes. There wasn't a cigar store in the neighborhood. As I say, I was sitting in front of the cabin when I bagged six tigers...Six of the biggest tigers...I bagged them. I...I bagged them to go away, but they hung around all afternoon. They were the most persistent tigers I've ever seen.", "The principal animals inhabiting the African jungle are moose, elks and Knights of Pythias. Of course, you all know what a moose is. That's big game. The first day, I shot two bucks. That was the biggest game we had. As I say, you all know what a moose is? A moose runs around on the floor, and eats cheese, and is chased by the cats. The elks, on the other hand live up in the hills, and in the spring they come down for their annual convention. It is very interesting to watch them come to the water hole. And you should see them run when they find it is only a water hole. What they're looking for is an 'elk-a-hole'.", "One morning, I shot an elephant in my pajamas. How he got in my pajamas, I don't know. Then we tried to remove the tusks. The tusks. That's not so easy to say, tusks. You try that some time...As I say, we tried to remove the tusks, but they were embedded in so firmly that we couldn't bust them. Of course, in Alabama, the Tusk-a-loosa. But, uh, that's entirely ir-elephant to what I was talking about. We took some pictures of the native girls, but they weren't developed. But we're going back again in a couple of weeks.", "Mrs Teasdale, you did a noble deed. I’d be unworthy of the high trust that’s been placed in me if I didn’t do everything within my power to keep our beloved Freedonia in peace with the world.", "I’d be only too happy to meet with Ambassador Trentino, and offer him on behalf of my country the right hand of good fellowship. And I feel sure he will accept this gesture in the spirit of which it is offered.", "But suppose he doesn’t. A fine thing that’ll be. I hold out my hand and he refuses to accept it. That’ll add a lot to my prestige, won’t it? Me, the head of a country, snubbed by a foreign ambassador. Who does he think he is, that he can come here, and make a sap out of me in front of all my people?", "Think of it – I hold out my hand and that hyena refuses to accept it. Why, the cheap ball-pushing swine, he’ll never get away with it I tell you, he’ll never get away with it!", "Well gentlemen, what I'm concerned about is the future of this hotel... Well we've got to speed things up. Ah... chef, if a guest orders a three minute egg give it to them in two minutes. If they order a two minute egg give it to them in one minute. If he orders a one minute egg, give him a chicken and let him work it out.", "The faculty can keep their seats. There'll be no diving for this cigar. Members of the faculty, faculty members, students of Huxley and Huxley students! I guess that covers everything.", "Well I thought my razor was dull until I heard his speech. And that reminds me of a story so dirty I'm ashamed to think of it myself. As I look out over your faces, I can readily understand why this college is flat on its back. The last college I presided over things were slightly different. I was flat on my back. Things kept going from bad to worse, but we all put our shoulders to the wheel and it wasn't long before I was flat on my back again.", "Any questions? Any answers? Any rags? Any bones? Any bottles today? And rags... Let's have some action around here. Who'll say 76? Who'll say 1776? That's the spirit! 1776! No doubt you'd like to know why I'm here. I came here to get my son out of it. I remember the day he left: A mere boy and a beardless youth. I kissed them both goodbye. By the way, where is my son? Young lady, would you mind getting up so I can see the son rise? So, doing your homework in school, eh?", "Groucho: Have you ever had any experience as a kidnapper? Chico: You bet. You know what I do when I kidnap somebody? First I call them up on the telephone and then I send them my chauffeur. Groucho: Oh, you got a chauffeur? Chico: Yeah. Groucho: What kind of a car do you got? Chico: Oh, I no gotta car, I just got a chauffeur. Groucho: Well maybe I'm crazy, but when you got a chauffeur, aren't you supposed to have a car? Chico: I had one, but you see it cost too much to keep a car and the chauffeur. So I sold the car. Groucho: Well that shows how little I know. I would have kept the car and sold the chauffeur.", "This is some football game and I wish you were here. In fact I wish you were here instead of me. Last week I told you that Mrs. Moskowitz was expecting a blessed event. Well last night Mrs. Moskowitz had twins. Ok, Mr. Moskowitz!"]
  };
  return this.initialize();
};

$.extend(Marx.prototype, {
  effected: {
    inputs: 0,
    texareas: 0,
    selects: 0,
    check_boxes: 0,
    radio_buttons: 0,
    hidden_fields: 0
  },
  initialize: function() {
    var _this = this;
    this.$el = $('.marx-js-controls');
    console.log(this.$('.marx-standard-controls a'));
    this.$('.marx-standard-controls a').click(function(e) {
      return _this.popluate_selected_fields(e);
    });
    return this.$('.marx-advanced-controls a').click(function(e) {
      return _this.advanced_actions(e);
    });
  },
  $: function(el) {
    return this.$el.find(el);
  },
  /*=========================
      POPULATE FORM METHODS
  =========================
  */

  populate_whole_form: function(e) {
    this.populate_inputs();
    this.populate_textareas();
    this.populate_checkboxes();
    this.populate_radios();
    this.populate_selects();
    return false;
  },
  populate_inputs: function() {
    var _this = this;
    this.effected.inputs = 0;
    return $.each($("input"), function(i, input) {
      var brother, movie, obj, strings, value;
      if (!($(input).val() !== "" || $(input).hasClass('no-populate'))) {
        if (['checkbox', 'radio', 'hidden'].indexOf($(input).attr('type') < 0)) {
          _this.effected.inputs += 1;
        }
        obj = _this.get_random();
        brother = JSON.parse(obj.brother);
        movie = JSON.parse(obj.movie);
        strings = [brother.name, movie.name, obj.first_name, obj.last_name, obj.description].filter(function() {
          return true;
        });
        value = (function() {
          switch ($(input).attr('type')) {
            case 'number':
              return movie.year;
            case 'email':
              return "" + (brother.name.toLowerCase().replace(/\s/g, '')) + "@" + (movie.name.toLowerCase().replace(/\s/g, '')) + ".com";
            case 'url':
              return "http://" + (movie.name.toLowerCase().replace(/\s/g, '')) + ".com";
            case 'date':
              return "" + movie.year + "-01-01";
            default:
              return strings[Math.floor(Math.random() * strings.length)];
          }
        })();
        return $(input).attr('data-marx-d', true).val(value);
      }
    });
  },
  populate_textareas: function() {
    var _this = this;
    this.effected.textareas = 0;
    return $.getJSON("http://marxjs.com/quotes", function(data) {
      return $.each($("textarea"), function(i, input) {
        _this.effected.textareas += 1;
        return $(input).attr('data-marx-d', true).val(data[Math.floor(Math.random() * data.length)].body);
      });
    });
  },
  populate_checkboxes: function() {
    var names,
      _this = this;
    this.effected.check_boxes = 0;
    names = [];
    $.each($("input[type=checkbox]"), function(i, input) {
      if (!(names.indexOf($(input).attr('name')) >= 0)) {
        return names.push($(input).attr('name'));
      }
    });
    return $.each(names, function(i, name) {
      var checked, clean_name;
      checked = Math.floor(Math.random() * 2) === 1 ? true : false;
      clean_name = name.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
      $("input[name=" + clean_name + "]").attr('data-marx-d', true).attr('checked', checked);
      if (checked) {
        return _this.effected.check_boxes += 1;
      }
    });
  },
  populate_radios: function() {
    var names,
      _this = this;
    this.effected.radio_buttons = 0;
    names = [];
    $("input[type=radio]").each(function(i, input) {
      if (!(names.indexOf($(input).attr('name')) >= 0)) {
        return names.push($(input).attr('name'));
      }
    });
    return $.each(names, function(i, name) {
      var clean_name, total;
      clean_name = name.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
      total = $("input[name=" + clean_name + "]").length;
      $("input[name=" + name + "]:eq(" + (Math.floor(Math.random() * total)) + ")").attr('data-marx-d', true).attr('checked', true);
      return _this.effected.radio_buttons += 1;
    });
  },
  populate_selects: function() {
    var _this = this;
    this.effected.selects = 0;
    return $("select").each(function(i, select) {
      var $opt, rand, total;
      _this.effected.selects += 1;
      total = $(select).attr('data-marx-d', true).find('option').length;
      rand = Math.floor(Math.random() * total);
      $opt = $(select).find("option:eq(" + rand + ")");
      if (($opt.attr('value') != null) && $opt.attr('value') !== "") {
        return $opt.attr('selected', true);
      } else {
        return $opt.next('option').attr('selected', true);
      }
    });
  },
  toggle_hidden_fields: function() {
    var _this = this;
    this.effected.hidden_fields = 0;
    $("input[data-marx-hidden=true]").each(function(i, input) {
      var type;
      type = $(input).attr('type') === 'hidden' ? 'text' : 'hidden';
      $(input).attr('type', type);
      return _this.effected.hidden_fields += 1;
    });
    return $("input[type=hidden]").each(function(i, hidden) {
      if ($(hidden).data('marx-d') == null) {
        _this.effected.hidden_fields += 1;
        return $(hidden).attr('type', 'text').attr('data-marx-d', true).attr('data-marx-hidden', true);
      }
    });
  },
  trigger_notifications: function() {
    var num,
      _this = this;
    num = 0;
    return $.each(this.effected, function(key, val) {
      var $note, el;
      if (val !== 0) {
        el = key.replace(/_/, ' ');
        $note = $("<p class='marx-notification'>" + val + " " + el + " elements were altered</p>");
        _this.$el.append($note);
        $note.css('top', "" + (20 + (num * 50)) + "px").delay(5000 + (num * 50)).slideUp('fast', function() {
          return $note.remove();
        });
        num += 1;
        return _this.effected[key] = 0;
      }
    });
  },
  toggle_description: function($link) {
    var $parent, $span, from, to;
    $parent = $link.parent('.marx-js-group');
    $span = $parent.find('p span');
    to = $span.data('text');
    from = $span.text();
    return $span.text(to).data('text', from);
  },
  generate_ipsum: function() {
    var $ipsum, num,
      _this = this;
    $('.marx-generated-ipsum').remove();
    num = this.$('.ipsum input').val();
    $ipsum = $("<div class='marx-generated-ipsum " + this.settings.position + "'>\n  <h4>Marx Ipsum</h4>\n  <a href='#close' class='marx-ipsum-close'>X</a>\n  <div class='marx-container'></div>\n</div>");
    $('body').append($ipsum);
    return $.getJSON("http://marxjs.com/monologues", function(data) {
      var i, max, monologues, _i;
      max = num > data.length ? data.length - 1 : num;
      monologues = data.sort(function() {
        return 0.5 - Math.random();
      });
      for (i = _i = 1; 1 <= max ? _i <= max : _i >= max; i = 1 <= max ? ++_i : --_i) {
        $ipsum.find('.marx-container').append("<p>" + monologues[i].body + "</p>");
      }
      return $('a.marx-ipsum-close').click(function(e) {
        $('.marx-generated-ipsum').slideUp('fast');
        return false;
      });
    });
  },
  get_random: function() {
    return this.marx_json[Math.floor(Math.random() * this.marx_json.length)];
  },
  /*=====================
           EVENTS
  =====================
  */

  popluate_selected_fields: function(e) {
    switch ($(e.target).attr('class')) {
      case 'populate-textareas':
        this.populate_textareas();
        break;
      case 'populate-inputs':
        this.populate_inputs();
        break;
      case 'populate-checkboxes':
        this.populate_checkboxes();
        break;
      case 'populate-radios':
        this.populate_radios();
        break;
      case 'populate-selects':
        this.populate_selects();
        break;
      default:
        this.populate_whole_form();
    }
    this.trigger_notifications();
    return false;
  },
  advanced_actions: function(e) {
    var _this = this;
    switch ($(e.target).attr('class')) {
      case 'clear-form':
        $('input[data-marx-d=true], textarea[data-marx-d=true]').val("");
        $('input[type=checkbox], input[type=radio]').each(function(i, cb) {
          if (($(cb).data('marx-d') != null) === $(cb).data('marx-d') && true) {
            return $(cb).removeAttr('checked');
          }
        });
        $('select[data-marx-d=true] option:eq(0)').attr('selected', true);
        break;
      case 'populate-submit':
        $.when(this.populate_whole_form()).then(function() {
          $(e.target).replaceWith("<span class='spinner'>Loading</span>");
          return setTimeout(function() {
            return $('form').submit();
          }, 500);
        });
        break;
      case 'show-hidden':
        this.toggle_description($(e.target));
        $.when(this.toggle_hidden_fields()).then(function() {
          return _this.trigger_notifications();
        });
        break;
      case 'expand-select':
        this.toggle_description($(e.target));
        $('select').each(function(i, select) {
          if ($(select).attr('size') != null) {
            return $(select).removeAttr('size');
          } else {
            return $(select).attr('size', $(select).find('option').length);
          }
        });
        break;
      case 'random-image':
        window.location = "http://marxjs.com/get-image";
        break;
      case 'generate-ipsum':
        this.generate_ipsum();
    }
    return false;
  }
});

$(function() {
  return new Marx();
});
