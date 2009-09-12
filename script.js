$(document).ready(function() {
  $(".tweets").tweet({
    username: "bbavardage",
    join_text: "",
    avatar_size: 32,
    count: 9,
    auto_join_text_default: "we said,",
    auto_join_text_ed: "we",
    auto_join_text_ing: "we were",
    auto_join_text_reply: "we replied to",
    auto_join_text_url: "we were checking out",
    loading_text: "loading tweets..."
  });
  url = "http://www.google.com/reader/public/javascript/feed/http://ardoris.wordpress.com/feed/?callback=?"
  $.getJSON(url,
	    function(data) {
	      for(var i = 0; i < data.items.length && i < 5; i += 1) {
		var item = data.items[i];
		var html = '';
		html += '<li class="';
		if(i % 2)
		  html += 'blog_even';
		else
		  html += 'blog_odd';
		if(i == 0)
		  html += ' blog_first';
		html += '">';
		html += '<a title="read full blog entry" href="';
		html += item.alternate.href;
		html += '">' + item.title + '</a>';
		html += '<small>' + item.content + '</small>';
		html += '</li>';
		$('#blog ul.blog_list').append(html);
	      }
	    }
	   );
});