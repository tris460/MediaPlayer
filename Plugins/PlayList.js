function PlayList(){
    PlayList.prototype.next=function(player){
        player.nextSong();
    }
}
export default PlayList;