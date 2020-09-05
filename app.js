//instantiate github
const github = new GitHub;
//init UI
const ui = new UI;

//input
const searchUser = document.getElementById('searchUser')

//add eventlistener
searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;

    if(userText!=''){
        github.getUser(userText)
        .then((result) => {
            if(result.profile.message == 'Not Found'){
                //show alert not found
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // show profile
                ui.showProfile(result.profile);
                ui.showRepos(result.repos);
            }
        }).catch((err) => {
            console.log(err)
        });
    } else {
        //clear profile
        ui.clearProfile();
    }
})