// 外部サイトへのリンクだけを別タブで開く（サイト内リンクはそのまま）
document.querySelectorAll('a[href]').forEach(function (a) {
  var isWeb = a.protocol === 'http:' || a.protocol === 'https:';
  if (isWeb && a.hostname !== location.hostname) {
    a.target = '_blank';
    a.rel = 'noopener';
  }
});
