// Autogenerated main.js file

require("jsb.js");

require("Bomb.js");
require("Coin.js");
require("Dragon.js");
require("EndCoin.js");
require("Explosion.js");
require("GameScene.js");
require("Level.js");
require("MainMenuScene.js");


function main()
{
	cc.FileUtils.getInstance().loadFilenameLookup("fileLookup.plist");
    //cc.Texture2D.setDefaultAlphaPixelFormat(6);
	var director = cc.Director.getInstance();
    var scene = cc.BuilderReader.loadAsScene("MainMenuScene");
    var runningScene = director.getRunningScene();
    if (runningScene === null) director.runWithScene(scene);
    else director.replaceScene(scene);
}
main();