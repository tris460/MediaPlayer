import MediaPlayer from "../MediaPlayer";

function PlayList(){
    PlayList.prototype.next=function(player:MediaPlayer){
        player.nextSong();
    }
}
export default PlayList;