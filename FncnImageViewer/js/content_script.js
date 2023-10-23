$(function(){
	setInterval(function(){
		//タイムライン
		$('div.article div.detail div.content div.card-media.image:not(.processed)').each(function() {
			$(this).find('img').each(function(){
				//クリック可能にする
				$(this).css('pointer-events', 'auto');
				//画像へのリンクを張る
				$(this).parent().html('<a href="' + $(this).attr('src') + '" target="_blank">' + $(this).parent().html() + '</a>');
			});
			//処理済みとする
			$(this).addClass('processed');
		});
		//トーク
		$('div.talk-view div.content .message-image:not(.processed)').each(function() {
			$(this).find('img').each(function(){
				//クリック可能にする
				$(this).css('pointer-events', 'auto');
			});
			//処理済みとする
			$(this).addClass('processed');
		});
    },1000);
});