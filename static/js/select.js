var current_3D_SceneList = ['ball_with_net', 'dominoes', 'man_man_with_box', 'man_with_headphone', 'man_with_microwave', 'men_hug', 'sealion_with_ball', 'tramp_with_block']
var current_3D_Scene = "ball_with_net";
var current_3D_SceneId = 0;

function Change_TOI_scene(idx) {

  var li_list = document.querySelector("#toi-buttons").children;

  // console.log(idx);
  console.log(li_list);
  for(i = 0; i < li_list.length; i++){
      // Remove is-primary from all buttons, keep other classes intact
      li_list[i].classList.remove('is-primary');
  }
  li_list[idx].classList.add('is-primary');

  current_3D_Scene = current_3D_SceneList[idx];
  current_3D_SceneId = idx;
  let video = document.getElementById("toi-video");
  var baseSrc = video.getAttribute("src") || video.getAttribute("data-src");
  if (!baseSrc) {
    return;
  }
  var new_scr = baseSrc.split('/');
  new_scr[new_scr.length-1] = current_3D_Scene + ".mp4";
  var new_video_dir = new_scr.join('/');
  video.setAttribute("src", new_video_dir);
  video.setAttribute("data-src", new_video_dir);
  video.load();
}

function Change_comp_scene(idx) {

    var li_list = document.querySelector("#comp-buttons").children;
  
    // console.log(idx);
    console.log(li_list);
    for(i = 0; i < li_list.length; i++){
        li_list[i].classList = ['button']
    }
    li_list[idx].classList.add('is-primary');
  
    current_3D_Scene = current_3D_SceneList[idx];
    current_3D_SceneId = idx;
    let videos = document.querySelectorAll(".comp-videos");
    for(let video of videos){
        old_src = video.src;
        new_scr = old_src.split('/');
        method = new_scr[new_scr.length-1].split('_')[1];
        new_scr[new_scr.length-1] = current_3D_Scene +'_' + method;
        new_video_dir = new_scr.join('/');
        video.src = new_video_dir;
        video.load()
    } 
  }
