/**
 * @file 粘贴本地图片，Word图片，及第三方应用图片
 */
/*
var pasterMgr = new WordPasterManager();
$(function(){
        pasterMgr.Load();//加载控件
});*/
( function(){
  CKEDITOR.plugins.add( 'wordpaster',
  {
    init : function( editor )
    {
		pasterMgr.SetEditor(editor);
      //adding button
      editor.ui.addButton( 'wordpaster',
      {
        label: '粘贴本地图片，Word图片，第三方应用图片',
        command: 'wordpaster',
        icon: this.path + 'images/icon.png'
      });
      
      //opening imce window
      editor.addCommand( 'wordpaster', {
        exec : function () {
			pasterMgr.PasteManual();
        }
      });
    // Almost useless
    //editor.on( 'saveSnapshot', count );
    // Requires too much resources
    //editor.on( 'key', count );
    }
  });
})();
