(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  var htmlToAppend = "";
  var questions = [
    { 
      "question": "How long did the transformation in your viral video take?",
      "answer": "The transformation in that video took 1 year."
    },
    { 
      "question": "What was your starting and ending weight in the viral video?", 
      "answer": "At my worst ever, I was 260lb. In the video though, I started at 245lb. My ending weight was 175lb."
    },
    { 
      "question": "What was your diet like during your transformation?", 
      "answer": "I mostly <a href='https://youtu.be/_ClkHfNrQ6o'>counted calories</a> (3 meals a day that totaled 1800-2000 calories). <a href='https://youtu.be/S1ufbGs6uuY'>I don't recommend that hardcore calorie counting approach anymore</a>. The best approach is to slowly change your dietary habits by eating the right foods. (in a nutshell)"
    },
        { 
      "question": "What was your workout routine like during your transformation?", 
      "answer": "I would walk for at least 20 minutes everyday and I did a 1 hour gym workout 3 days a week. <a href='https://youtu.be/fdy67B77X6A'>Back & biceps</a> for one day. <a href='https://youtu.be/pq8gV9-rcgw'>Chest & triceps</a> for another day and legs &amp; shoulders &amp; abs for the last day."
    },
    { 
      "question": "How tall are you?", 
      "answer": "5 feet 7 inches"
    },
    {
      "question": "What do you think about intermittent fasting?", 
      "answer": "There is nothing special about it but it can help you develop a better relationship with food while also helping you eat a little less. Give it a shot for a while and see if you like it."
    },
    {
      "question": "What do you think about the standard ketosis diet?", 
      "answer": "It's dumb. It's not good from a health standpoint and it doesn't even cause greater weight loss than any other method. All it takes is a proper caloric deficit."
    },
    {
      "question": "What do you think of pre-workouts?", 
      "answer": "Just drink coffee. Pre-workouts should be used rarely, like in cases when you are really tired."
    },
    {
      "question": "What do you think about <a href='https://www.youtube.com/watch?v=DvD5Nofmw5c'>protein powders</a>?", 
      "answer": "You should get most of your protein from food, but they aren't the worst thing for you. Don't rely on them heavily; have one after a workout if you must. Make sure to get a plant-based protein powder though as they are better for your health and the animals. You also don't need as much protein as you think you need."
    },
    {
      "question": "Where do you get your protein?", 
      "answer": "Literally everything you can reasonably eat has protein in it. Potatoes have protein, vegetables and fruits have protein, etc."
    }
   ];

   $.each(questions, function(i,e) {
     htmlToAppend = htmlToAppend + "<div class\"panel\"><div class=\"panel-heading\"><span class=\"fa-lg\"><i class=\"fa fa-question\"></i> </span>" + e.question;
     htmlToAppend = htmlToAppend + "</div><div class=\"panel-body\"><span class=\"angle-right\">&gt;</span> " + e.answer + "</div></div>";
   });

  // Load the FAQ questions
  $("#FAQQuestionContainer").append(htmlToAppend);

})(jQuery); // End of use strict
