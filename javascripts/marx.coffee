window.Marx = () ->
  @marx_json = {
    text: [ "Love Happy", "A Night in Casablanca", "Room Service", "A Day at the Races", "Duck Soup", "Horse Feathers", "Monkey Business", "Animal Crackers", "The Cocoanuts", "Night at the Opera", "Sam", "Grunion", "Detective", "Faustino", "Harpo", "Marx", "Ronald", "Kornblow", "Rusty", "Stubel's valet", "Corbaccio", "Owner of the Yellow Camel company" ],
    number: [ 1949,1946,1938,1937,1933,1932,1931,1930,1929,1935],
    textarea: [
      "Friends, I'm gonna tell you of the great, mysterious, wonderful continent known as Africa. Africa is God's country, and He can have it. Well, sir, we left New York drunk and early on the morning of February 2nd. After fifteen days on the water and six on the boat, we finally arrived on the shores of Africa. We at once proceeded three hundred miles into the heart of the jungle, where I shot a polar bear. This bear was six foot seven in his stocking feet and had shoes on....",
      "Oh you did! Well, this bear was anemic and he couldn't stand the cold climate. He was a rich bear and he could afford to go away for the winter. You take care of your animals and I'll take care of mine! Frozen North, my eye! From the day of our arrival, we led an active life. The first morning saw us up at six, breakfasted, and back in bed at seven - this was our routine for the first three months. We finally got so we were back in bed at six thirty. One morning, I was sitting in front of the cabin, smoking some meat...Yes. There wasn't a cigar store in the neighborhood. As I say, I was sitting in front of the cabin when I bagged six tigers...Six of the biggest tigers...I bagged them. I...I bagged them to go away, but they hung around all afternoon. They were the most persistent tigers I've ever seen.",
      "The principal animals inhabiting the African jungle are moose, elks and Knights of Pythias. Of course, you all know what a moose is. That's big game. The first day, I shot two bucks. That was the biggest game we had. As I say, you all know what a moose is? A moose runs around on the floor, and eats cheese, and is chased by the cats. The elks, on the other hand live up in the hills, and in the spring they come down for their annual convention. It is very interesting to watch them come to the water hole. And you should see them run when they find it is only a water hole. What they're looking for is an 'elk-a-hole'.",
      "One morning, I shot an elephant in my pajamas. How he got in my pajamas, I don't know. Then we tried to remove the tusks. The tusks. That's not so easy to say, tusks. You try that some time...As I say, we tried to remove the tusks, but they were embedded in so firmly that we couldn't bust them. Of course, in Alabama, the Tusk-a-loosa. But, uh, that's entirely ir-elephant to what I was talking about. We took some pictures of the native girls, but they weren't developed. But we're going back again in a couple of weeks.",
      "Mrs Teasdale, you did a noble deed. I’d be unworthy of the high trust that’s been placed in me if I didn’t do everything within my power to keep our beloved Freedonia in peace with the world.",
      "I’d be only too happy to meet with Ambassador Trentino, and offer him on behalf of my country the right hand of good fellowship. And I feel sure he will accept this gesture in the spirit of which it is offered.",
      "But suppose he doesn’t. A fine thing that’ll be. I hold out my hand and he refuses to accept it. That’ll add a lot to my prestige, won’t it? Me, the head of a country, snubbed by a foreign ambassador. Who does he think he is, that he can come here, and make a sap out of me in front of all my people?",
      "Think of it – I hold out my hand and that hyena refuses to accept it. Why, the cheap ball-pushing swine, he’ll never get away with it I tell you, he’ll never get away with it!",
      "Well gentlemen, what I'm concerned about is the future of this hotel... Well we've got to speed things up. Ah... chef, if a guest orders a three minute egg give it to them in two minutes. If they order a two minute egg give it to them in one minute. If he orders a one minute egg, give him a chicken and let him work it out.",
      "The faculty can keep their seats. There'll be no diving for this cigar. Members of the faculty, faculty members, students of Huxley and Huxley students! I guess that covers everything.",
      "Well I thought my razor was dull until I heard his speech. And that reminds me of a story so dirty I'm ashamed to think of it myself. As I look out over your faces, I can readily understand why this college is flat on its back. The last college I presided over things were slightly different. I was flat on my back. Things kept going from bad to worse, but we all put our shoulders to the wheel and it wasn't long before I was flat on my back again.",
      "Any questions? Any answers? Any rags? Any bones? Any bottles today? And rags... Let's have some action around here. Who'll say 76? Who'll say 1776? That's the spirit! 1776! No doubt you'd like to know why I'm here. I came here to get my son out of it. I remember the day he left: A mere boy and a beardless youth. I kissed them both goodbye. By the way, where is my son? Young lady, would you mind getting up so I can see the son rise? So, doing your homework in school, eh?",
      "Groucho: Have you ever had any experience as a kidnapper? Chico: You bet. You know what I do when I kidnap somebody? First I call them up on the telephone and then I send them my chauffeur. Groucho: Oh, you got a chauffeur? Chico: Yeah. Groucho: What kind of a car do you got? Chico: Oh, I no gotta car, I just got a chauffeur. Groucho: Well maybe I'm crazy, but when you got a chauffeur, aren't you supposed to have a car? Chico: I had one, but you see it cost too much to keep a car and the chauffeur. So I sold the car. Groucho: Well that shows how little I know. I would have kept the car and sold the chauffeur.",
      "This is some football game and I wish you were here. In fact I wish you were here instead of me. Last week I told you that Mrs. Moskowitz was expecting a blessed event. Well last night Mrs. Moskowitz had twins. Ok, Mr. Moskowitz!"
    ]
  }

  @initialize()


$.extend Marx.prototype,
  effected:
    inputs: 0
    texareas: 0
    selects: 0
    check_boxes: 0
    radio_buttons: 0
    hidden_fields: 0

  initialize: () ->
    this.$el = $('.marx-js-controls')
    console.log this.$('.marx-standard-controls a')
    this.$('.marx-standard-controls a').click (e) => @popluate_selected_fields(e)
    this.$('.marx-advanced-controls a').click (e) => @advanced_actions(e)


  $: (el) -> this.$el.find(el)


  ###=========================
      POPULATE FORM METHODS
  =========================###
  populate_whole_form: (e) ->
    this.populate_inputs()
    this.populate_textareas()
    this.populate_checkboxes()
    this.populate_radios()
    this.populate_selects()
    false

  populate_inputs: ->
    @effected.inputs = 0
    $.each $("input"), (i, input) =>
      unless $(input).val() isnt "" or $(input).hasClass 'no-populate'
        @effected.inputs += 1 if ['checkbox', 'radio', 'hidden'].indexOf $(input).attr('type') < 0
        obj = this.get_random()
        brother = JSON.parse(obj.brother)
        movie = JSON.parse(obj.movie)
        strings = [brother.name, movie.name, obj.first_name, obj.last_name, obj.description].filter () -> true
        value = switch $(input).attr('type')
          when 'number' then movie.year
          when 'email' then "#{brother.name.toLowerCase().replace(/\s/g, '')}@#{movie.name.toLowerCase().replace(/\s/g, '')}.com"
          when 'url' then "http://#{movie.name.toLowerCase().replace(/\s/g, '')}.com"
          when 'date' then "#{movie.year}-01-01"
          else
            strings[Math.floor(Math.random() * strings.length)]
        $(input).attr('data-marx-d', true).val value

  populate_textareas: ->
    this.effected.textareas = 0
    $.getJSON "http://marxjs.com/quotes", (data) =>
      $.each $("textarea"), (i, input) =>
        @effected.textareas += 1
        $(input).attr('data-marx-d', true).val data[Math.floor(Math.random() * data.length)].body


  populate_checkboxes: ->
    this.effected.check_boxes = 0
    names = []
    $.each $("input[type=checkbox]"), (i, input) ->
      names.push $(input).attr('name') unless names.indexOf($(input).attr('name')) >= 0
    $.each names, (i, name) =>
      checked = if Math.floor(Math.random() * 2) is 1 then true else false
      clean_name = name.replace(/\[/g, '\\[').replace(/\]/g, '\\]')
      $("input[name=#{clean_name}]").attr('data-marx-d', true).attr('checked', checked)
      @effected.check_boxes += 1 if checked



  populate_radios: ->
    this.effected.radio_buttons = 0
    names = []
    $("input[type=radio]").each (i, input) -> names.push $(input).attr('name') unless names.indexOf($(input).attr('name')) >= 0
    $.each names, (i, name) =>
      clean_name = name.replace(/\[/g, '\\[').replace(/\]/g, '\\]')
      total = $("input[name=#{clean_name}]").length
      $("input[name=#{name}]:eq(#{Math.floor(Math.random() * total)})").attr('data-marx-d', true).attr('checked', true)
      @effected.radio_buttons += 1


  populate_selects: ->
    this.effected.selects = 0
    $("select").each (i, select) =>
      @effected.selects += 1
      total = $(select).attr('data-marx-d', true).find('option').length
      rand = Math.floor(Math.random() * total)
      $opt = $(select).find("option:eq(#{rand})")
      if $opt.attr('value')? and $opt.attr('value') isnt ""
        $opt.attr('selected', true)
      else
        $opt.next('option').attr('selected', true)

  toggle_hidden_fields: ->
    this.effected.hidden_fields = 0
    $("input[data-marx-hidden=true]").each (i, input) =>
      type = if $(input).attr('type') is 'hidden' then 'text' else 'hidden'
      $(input).attr('type', type)
      @effected.hidden_fields += 1

    $("input[type=hidden]").each (i, hidden) =>
      unless $(hidden).data('marx-d')?
        @effected.hidden_fields += 1
        $(hidden)
          .attr('type', 'text')
          .attr('data-marx-d', true)
          .attr('data-marx-hidden', true)


  trigger_notifications: ->
    num = 0
    $.each this.effected, (key, val) =>
      unless val is 0
        el = key.replace(/_/, ' ')
        $note = $("<p class='marx-notification'>#{val} #{el} elements were altered</p>")
        @$el.append $note
        $note
          .css('top', "#{20 + (num*50)}px")
          .delay(5000 + (num*50))
          .slideUp 'fast', -> $note.remove()
        num += 1
        @effected[key] = 0

  toggle_description: ($link) ->
    $parent = $link.parent('.marx-js-group')
    $span = $parent.find('p span')
    to = $span.data('text')
    from = $span.text()
    $span
      .text(to)
      .data('text', from)

  generate_ipsum: () ->
    $('.marx-generated-ipsum').remove()
    num = this.$('.ipsum input').val()
    $ipsum = $("""
      <div class='marx-generated-ipsum #{this.settings.position}'>
        <h4>Marx Ipsum</h4>
        <a href='#close' class='marx-ipsum-close'>X</a>
        <div class='marx-container'></div>
      </div>
    """)
    $('body').append $ipsum
    $.getJSON "http://marxjs.com/monologues", (data) =>
      max = if num > data.length then data.length-1 else num
      monologues = data.sort () -> 0.5 - Math.random()
      for i in [1..max]
        $ipsum.find('.marx-container').append "<p>#{monologues[i].body}</p>"
      $('a.marx-ipsum-close').click (e) ->
        $('.marx-generated-ipsum').slideUp 'fast'
        false

  get_random: () -> @marx_json[Math.floor(Math.random() * @marx_json.length)]



  ###=====================
           EVENTS
  =====================###
  popluate_selected_fields: (e) ->
    switch $(e.target).attr('class')
      when 'populate-textareas'
        this.populate_textareas()
      when 'populate-inputs'
        this.populate_inputs()
      when 'populate-checkboxes'
        this.populate_checkboxes()
      when 'populate-radios'
        this.populate_radios()
      when 'populate-selects'
        this.populate_selects()
      else
        this.populate_whole_form()

    this.trigger_notifications()
    false

  advanced_actions: (e) ->
    switch $(e.target).attr('class')
      when 'clear-form'
        $('input[data-marx-d=true], textarea[data-marx-d=true]').val ""
        $('input[type=checkbox], input[type=radio]').each (i, cb) -> $(cb).removeAttr('checked') if $(cb).data('marx-d')? is $(cb).data('marx-d') and true
        $('select[data-marx-d=true] option:eq(0)').attr('selected', true)
      when 'populate-submit'
        $.when(this.populate_whole_form()).then ->
          $(e.target).replaceWith "<span class='spinner'>Loading</span>"
          setTimeout () ->
            $('form').submit()
          , 500
      when 'show-hidden'
        this.toggle_description $(e.target)
        $.when(this.toggle_hidden_fields()).then => @trigger_notifications()
      when 'expand-select'
        this.toggle_description $(e.target)
        $('select').each (i, select) =>
          if $(select).attr('size')?
            $(select).removeAttr('size')
          else
            $(select).attr('size', $(select).find('option').length)
      when 'random-image'
        window.location = "http://marxjs.com/get-image"
      when 'generate-ipsum' then this.generate_ipsum()

    false

$ ->
  new Marx()
