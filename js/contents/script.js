jQuery(function ($) {
    // 最初のアコーディオンコンテンツを開く
    $('.js-type-accordion-question').first().next().show().end().addClass('is-open');

    // クリックイベントハンドラーを設定
    $('.js-type-accordion-question').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('is-open');
    });
});

new ScrollHint('.js-scrollable', {
    i18n: {
        scrollable: 'スクロールできます'
    }
});